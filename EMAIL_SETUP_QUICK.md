# Quick Email Setup - Get Messages Directly to yogakumar221@gmail.com

## ✅ EASIEST OPTION: Web3Forms (5 Minutes Setup)

Web3Forms is **100% FREE** and requires NO email account connection!

### Step 1: Get Your Access Key
1. Go to: https://web3forms.com
2. Enter your email: **yogakumar221@gmail.com**
3. Click "Create Access Key"
4. Check your email and copy the access key

### Step 2: Update the Code
Open `/src/pages/Contact.tsx` and replace line 147:
```typescript
access_key: 'YOUR_WEB3FORMS_KEY',  // Replace with your actual key
```

### Step 3: Done!
That's it! Now when users submit the form, you'll receive emails at yogakumar221@gmail.com with:
- User's full name
- User's email address
- Subject
- Full message
- Timestamp

---

## Alternative: EmailJS (10 Minutes Setup)

### Step 1: Create Account
1. Go to: https://www.emailjs.com
2. Sign up with your Google account (yogakumar221@gmail.com)

### Step 2: Add Email Service
1. Click "Email Services" → "Add New Service"
2. Choose "Gmail"
3. Click "Connect Account" and authorize
4. Copy your **Service ID** (looks like: service_abc123)

### Step 3: Create Email Template
1. Click "Email Templates" → "Create New Template"
2. Name it: "TravelX Contact Form"
3. Use this template:

**Subject:**
```
{{subject}}
```

**Content:**
```
New message from TravelX Contact Form

From: {{from_name}}
Email: {{from_email}}
Reply to: {{reply_to}}

Subject: {{subject}}

Message:
{{message}}

---
Sent at: {{timestamp}}
```

4. Copy your **Template ID** (looks like: template_abc123)

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key** (looks like: abc123XYZ)

### Step 5: Update Code
Open `/src/pages/Contact.tsx` and update lines 89-91:
```typescript
const serviceId = 'service_abc123';     // Your Service ID
const templateId = 'template_abc123';   // Your Template ID  
const publicKey = 'abc123XYZ';          // Your Public Key
```

### Step 6: Test!
1. Go to Contact page
2. Fill out the form
3. Submit
4. Check yogakumar221@gmail.com inbox!

---

## What You'll Receive

Every form submission will send you an email with:

```
From: [User's Name]
Email: [User's Email]
Subject: [Their Subject or "New Contact Form Submission"]

Message:
[Their full message]

Timestamp: [Date and time in IST]
```

You can reply directly to these emails!

---

## Current Status

✅ Form validation working
✅ Email configured to: yogakumar221@gmail.com
✅ All user data captured (name, email, subject, message)
✅ Timestamp included
✅ Reply-to field set to user's email
✅ Fallback error handling

**Just add your Web3Forms or EmailJS key and you're live!**

---

## Recommendation

**Use Web3Forms** - It's simpler and doesn't require connecting your Gmail account. Just enter your email, get a key, and paste it in the code. Done in 5 minutes!
