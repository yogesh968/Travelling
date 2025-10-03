#!/bin/bash

echo "🚀 TravelX Backend Setup Script"
echo "================================"
echo ""

# Check if .env exists
if [ -f .env ]; then
    echo "✅ .env file already exists"
else
    echo "📝 Creating .env file..."
    cp .env.example .env
    echo "✅ .env file created from .env.example"
    echo ""
    echo "⚠️  IMPORTANT: Edit backend/.env and add your Gmail App Password!"
    echo ""
    echo "Steps to get Gmail App Password:"
    echo "1. Go to: https://myaccount.google.com/apppasswords"
    echo "2. Sign in with yogakumar221@gmail.com"
    echo "3. Select 'Mail' and 'Other (Custom name)'"
    echo "4. Name it: TravelX Backend"
    echo "5. Click Generate"
    echo "6. Copy the 16-character password"
    echo "7. Edit backend/.env and replace 'your_app_password_here' with it"
    echo ""
fi

# Create submissions directory
if [ -d submissions ]; then
    echo "✅ submissions/ directory already exists"
else
    mkdir -p submissions
    echo "✅ Created submissions/ directory"
fi

echo ""
echo "================================"
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit backend/.env with your Gmail App Password"
echo "2. Run: npm start"
echo "3. Test the contact form!"
echo "================================"
