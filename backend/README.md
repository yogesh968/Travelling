# TravelX Backend API

Backend server for handling contact form submissions with file storage and email notifications.

## Features

✅ **File Storage**: Saves all submissions as JSON files
✅ **Email Notifications**: Sends beautiful HTML emails to yogakumar221@gmail.com
✅ **Data Persistence**: Maintains a master log of all submissions
✅ **Email Reply**: Reply-to field set to sender's email
✅ **Beautiful Emails**: Professional HTML email template
✅ **Error Handling**: Robust error handling and logging

## Quick Setup (5 Minutes)

### Step 1: Install Dependencies

```bash
cd backend
npm install
```

### Step 2: Configure Email

1. **Get Gmail App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Sign in with yogakumar221@gmail.com
   - Select "Mail" and "Other (Custom name)"
   - Name it: "TravelX Backend"
   - Click "Generate"
   - Copy the 16-character password

2. **Create .env file**:
```bash
cp .env.example .env
```

3. **Edit .env file** and add your app password:
```env
EMAIL_USER=yogakumar221@gmail.com
EMAIL_PASS=your_16_char_app_password
PORT=3001
FRONTEND_URL=http://localhost:8081
EMAIL_TO=yogakumar221@gmail.com
```

### Step 3: Start the Server

```bash
npm start
```

You should see:
```
🚀 TravelX Backend API Server
✅ Server running on: http://localhost:3001
✅ Email server is ready to send messages
📧 Emails will be sent to: yogakumar221@gmail.com
💾 Submissions saved to: /path/to/backend/submissions
```

## What Happens When Someone Submits the Form

1. **Data is Saved** to `backend/submissions/`:
   - Individual file: `submission_[timestamp].json`
   - Master log: `all_submissions.log`

2. **Email is Sent** to yogakumar221@gmail.com with:
   - Beautiful HTML formatting
   - All form details (name, email, subject, message)
   - Timestamp in IST
   - Reply button (click to respond directly)

3. **User Gets Confirmation** on the website

## File Structure

```
backend/
├── server.js           # Main API server
├── package.json        # Dependencies
├── .env               # Your configuration (create this)
├── .env.example       # Example configuration
├── README.md          # This file
└── submissions/       # Auto-created, stores all submissions
    ├── submission_1234567890.json
    ├── submission_1234567891.json
    └── all_submissions.log
```

## API Endpoints

### POST /api/contact
Submit a contact form message

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Question about trips",
  "message": "I'm interested in planning a trip..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Your message has been received!",
  "submissionId": "1234567890"
}
```

### GET /api/submissions
Get all submissions (for admin use)

**Response:**
```json
{
  "success": true,
  "count": 5,
  "submissions": [...]
}
```

### GET /api/health
Check if server is running

## Email You'll Receive

Every submission sends you a beautiful HTML email with:

```
🌍 New Contact Form Submission
TravelX Website

👤 Name: John Doe
📧 Email: john@example.com
📋 Subject: Question about trips
💬 Message: I'm interested in planning...
🕐 Received: Monday, 30 September 2025 at 9:56:35 am India Standard Time

[Reply to John Doe] (button)
```

## Viewing Saved Submissions

All submissions are saved in `backend/submissions/`:

```bash
# View all submissions
cat backend/submissions/all_submissions.log

# View specific submission
cat backend/submissions/submission_1234567890.json
```

## Troubleshooting

**Email not sending?**
- Check your Gmail App Password in `.env`
- Make sure 2-Factor Authentication is enabled on your Google account
- Check server logs for error messages

**Server won't start?**
- Make sure port 3001 is not in use
- Run: `npm install` to install dependencies
- Check `.env` file exists and is configured

**CORS errors?**
- Make sure FRONTEND_URL in `.env` matches your frontend URL
- Default is http://localhost:8081

## Production Deployment

For production, deploy to:
- **Vercel** (serverless functions)
- **Railway** (easy deployment)
- **Heroku** (free tier available)
- **DigitalOcean** (VPS)

Update `FRONTEND_URL` in `.env` to your production domain.

## Security Notes

- Never commit `.env` file to git
- Keep your Gmail App Password secret
- Use environment variables in production
- Consider rate limiting for production use
