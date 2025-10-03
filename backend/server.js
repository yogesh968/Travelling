import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:8081',
  credentials: true
}));
app.use(express.json());

// Create submissions directory if it doesn't exist
const submissionsDir = path.join(__dirname, 'submissions');
try {
  await fs.mkdir(submissionsDir, { recursive: true });
} catch (error) {
  console.error('Error creating submissions directory:', error);
}

// Configure email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify email configuration on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email configuration error:', error.message);
    console.log('⚠️  Server will still run, but emails won\'t be sent.');
    console.log('💡 Check your .env file and Gmail App Password');
  } else {
    console.log('✅ Email server is ready to send messages');
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'TravelX Backend API is running' });
});

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required'
      });
    }

    // Create submission data
    const submission = {
      id: Date.now().toString(),
      name,
      email,
      subject: subject || 'No subject',
      message,
      timestamp: new Date().toISOString(),
      timestampIST: new Date().toLocaleString('en-IN', { 
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'long'
      })
    };

    // Save to file
    const filename = `submission_${submission.id}.json`;
    const filepath = path.join(submissionsDir, filename);
    await fs.writeFile(filepath, JSON.stringify(submission, null, 2));
    console.log(`✅ Saved submission to: ${filename}`);

    // Also append to a master log file
    const logEntry = `\n${'='.repeat(80)}\n${JSON.stringify(submission, null, 2)}\n`;
    const logFile = path.join(submissionsDir, 'all_submissions.log');
    await fs.appendFile(logFile, logEntry);

    // Send email
    try {
      const mailOptions = {
        from: `"TravelX Contact Form" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO || 'yogakumar221@gmail.com',
        replyTo: email,
        subject: `TravelX Contact: ${subject || 'New Message'}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                        color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
              .value { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea; }
              .message-box { background: white; padding: 20px; border-radius: 5px; 
                            border-left: 4px solid #764ba2; white-space: pre-wrap; }
              .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
              .button { display: inline-block; padding: 12px 24px; background: #667eea; 
                       color: white; text-decoration: none; border-radius: 5px; margin-top: 10px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🌍 New Contact Form Submission</h1>
                <p>TravelX Website</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">👤 Name:</div>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="label">📧 Email:</div>
                  <div class="value">
                    <a href="mailto:${email}">${email}</a>
                  </div>
                </div>
                
                <div class="field">
                  <div class="label">📋 Subject:</div>
                  <div class="value">${subject || 'No subject provided'}</div>
                </div>
                
                <div class="field">
                  <div class="label">💬 Message:</div>
                  <div class="message-box">${message}</div>
                </div>
                
                <div class="field">
                  <div class="label">🕐 Received:</div>
                  <div class="value">${submission.timestampIST}</div>
                </div>
                
                <div style="text-align: center; margin-top: 30px;">
                  <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject || 'Your message')}" 
                     class="button">Reply to ${name}</a>
                </div>
              </div>
              <div class="footer">
                <p>This email was sent from the TravelX contact form</p>
                <p>Submission ID: ${submission.id}</p>
              </div>
            </div>
          </body>
          </html>
        `,
        text: `
New Contact Form Submission - TravelX

Name: ${name}
Email: ${email}
Subject: ${subject || 'No subject'}

Message:
${message}

Received: ${submission.timestampIST}
Submission ID: ${submission.id}

---
Reply to this email to respond to ${name}
        `
      };

      await transporter.sendMail(mailOptions);
      console.log(`✅ Email sent to: ${process.env.EMAIL_TO}`);

    } catch (emailError) {
      console.error('❌ Error sending email:', emailError.message);
      // Don't fail the request if email fails, data is still saved
    }

    // Send success response
    res.json({
      success: true,
      message: 'Your message has been received!',
      submissionId: submission.id
    });

  } catch (error) {
    console.error('❌ Error processing submission:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to process your message. Please try again.'
    });
  }
});

// Get all submissions (for admin purposes)
app.get('/api/submissions', async (req, res) => {
  try {
    const files = await fs.readdir(submissionsDir);
    const jsonFiles = files.filter(f => f.endsWith('.json'));
    
    const submissions = await Promise.all(
      jsonFiles.map(async (file) => {
        const content = await fs.readFile(path.join(submissionsDir, file), 'utf-8');
        return JSON.parse(content);
      })
    );

    // Sort by timestamp, newest first
    submissions.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    res.json({
      success: true,
      count: submissions.length,
      submissions
    });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch submissions'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log('\n' + '='.repeat(60));
  console.log('🚀 TravelX Backend API Server');
  console.log('='.repeat(60));
  console.log(`✅ Server running on: http://localhost:${PORT}`);
  console.log(`📧 Emails will be sent to: ${process.env.EMAIL_TO || 'yogakumar221@gmail.com'}`);
  console.log(`💾 Submissions saved to: ${submissionsDir}`);
  console.log('='.repeat(60) + '\n');
});
