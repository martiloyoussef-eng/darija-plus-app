#!/bin/bash

# Darija+ Expo Deployment Script
# Deploy to Expo, App Store, and Play Store
# Email: martiloyoussef@gmail.com
# Created by: Youssef Elfahfouhi

echo "========================================"
echo "  Darija+ Expo Deployment Script"
echo "  Email: martiloyoussef@gmail.com"
echo "========================================"
echo ""

PROJECT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo "Project Directory: $PROJECT_DIR"

# Step 1: Install CLI Tools
echo ""
echo "Step 1: Installing Expo CLI and EAS CLI..."
npm install -g expo-cli eas-cli
if [ $? -ne 0 ]; then
    echo "Error installing CLI tools"
    exit 1
fi
echo "✅ CLI tools installed"

# Step 2: Login to Expo
echo ""
echo "Step 2: Logging in to Expo..."
echo "Email: martiloyoussef@gmail.com"
expo login
if [ $? -ne 0 ]; then
    echo "Error logging in to Expo"
    exit 1
fi
echo "✅ Logged in to Expo"

# Step 3: Navigate to project
echo ""
cd "$PROJECT_DIR"
if [ $? -ne 0 ]; then
    echo "Error navigating to project directory"
    exit 1
fi

# Step 4: Install dependencies
echo ""
echo "Step 3: Installing project dependencies..."
npm install --legacy-peer-deps
if [ $? -ne 0 ]; then
    echo "Error installing dependencies"
    exit 1
fi
echo "✅ Dependencies installed"

# Step 5: Test locally
echo ""
echo "Step 4: Testing locally..."
echo "Run 'npm start' to test with Expo Go"

# Step 6: Build for Web
echo ""
echo "Step 5: Building for Web..."
eas build --platform web
if [ $? -ne 0 ]; then
    echo "Warning: Web build had issues (optional)"
else
    echo "✅ Web build complete"
fi

# Step 7: Build for iOS
echo ""
echo "Step 6: Building for iOS App Store..."
echo "This will take 2-4 hours..."
eas build --platform ios --auto-submit
if [ $? -ne 0 ]; then
    echo "Error building iOS"
    exit 1
fi
echo "✅ iOS build submitted to App Store"

# Step 8: Build for Android
echo ""
echo "Step 7: Building for Android Play Store..."
echo "This will take 2-4 hours..."
eas build --platform android --auto-submit
if [ $? -ne 0 ]; then
    echo "Error building Android"
    exit 1
fi
echo "✅ Android build submitted to Play Store"

# Summary
echo ""
echo "========================================"
echo "  ✅ DEPLOYMENT COMPLETE!"
echo "========================================"
echo ""
echo "Next Steps:"
echo "1. Wait for app stores to review (24-48 hours)"
echo "2. Check status: eas build:list"
echo "3. View dashboard: https://expo.dev"
echo ""
echo "Downloads:"
echo "- Web: Available immediately"
echo "- iOS: https://apps.apple.com/ (after approval)"
echo "- Android: https://play.google.com/store (after approval)"
echo ""
echo "Support: https://github.com/martiloyoussef-eng/darija-plus-app"
