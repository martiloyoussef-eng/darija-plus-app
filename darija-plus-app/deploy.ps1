#!/usr/bin/env pwsh

# Darija+ Expo Deployment Script
# Deploy to Expo, App Store, and Play Store
# Email: martiloyoussef@gmail.com
# Created by: Youssef Elfahfouhi

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Darija+ Expo Deployment Script" -ForegroundColor Cyan
Write-Host "  Email: martiloyoussef@gmail.com" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$ProjectDir = "$PSScriptRoot"
Write-Host "Project Directory: $ProjectDir" -ForegroundColor Green

# Step 1: Install CLI Tools
Write-Host ""
Write-Host "Step 1: Installing Expo CLI and EAS CLI..." -ForegroundColor Yellow
npm install -g expo-cli eas-cli
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error installing CLI tools" -ForegroundColor Red
    exit 1
}
Write-Host "✅ CLI tools installed" -ForegroundColor Green

# Step 2: Login to Expo
Write-Host ""
Write-Host "Step 2: Logging in to Expo..." -ForegroundColor Yellow
Write-Host "Email: martiloyoussef@gmail.com" -ForegroundColor Cyan
expo login
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error logging in to Expo" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Logged in to Expo" -ForegroundColor Green

# Step 3: Navigate to project
Write-Host ""
cd "$ProjectDir/darija-plus-app"
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error navigating to project directory" -ForegroundColor Red
    exit 1
}

# Step 4: Install dependencies
Write-Host ""
Write-Host "Step 3: Installing project dependencies..." -ForegroundColor Yellow
npm install --legacy-peer-deps
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error installing dependencies" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Dependencies installed" -ForegroundColor Green

# Step 5: Test locally
Write-Host ""
Write-Host "Step 4: Testing locally..." -ForegroundColor Yellow
Write-Host "Run 'npm start' to test with Expo Go" -ForegroundColor Cyan

# Step 6: Build for Web
Write-Host ""
Write-Host "Step 5: Building for Web..." -ForegroundColor Yellow
eas build --platform web
if ($LASTEXITCODE -ne 0) {
    Write-Host "Warning: Web build had issues (optional)" -ForegroundColor Yellow
} else {
    Write-Host "✅ Web build complete" -ForegroundColor Green
}

# Step 7: Build for iOS
Write-Host ""
Write-Host "Step 6: Building for iOS App Store..." -ForegroundColor Yellow
Write-Host "This will take 2-4 hours..." -ForegroundColor Cyan
eas build --platform ios --auto-submit
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error building iOS" -ForegroundColor Red
    exit 1
}
Write-Host "✅ iOS build submitted to App Store" -ForegroundColor Green

# Step 8: Build for Android
Write-Host ""
Write-Host "Step 7: Building for Android Play Store..." -ForegroundColor Yellow
Write-Host "This will take 2-4 hours..." -ForegroundColor Cyan
eas build --platform android --auto-submit
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error building Android" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Android build submitted to Play Store" -ForegroundColor Green

# Summary
Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  ✅ DEPLOYMENT COMPLETE!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "1. Wait for app stores to review (24-48 hours)" -ForegroundColor White
Write-Host "2. Check status: eas build:list" -ForegroundColor White
Write-Host "3. View dashboard: https://expo.dev" -ForegroundColor White
Write-Host ""
Write-Host "Downloads:" -ForegroundColor Yellow
Write-Host "- Web: Available immediately" -ForegroundColor White
Write-Host "- iOS: https://apps.apple.com/ (after approval)" -ForegroundColor White
Write-Host "- Android: https://play.google.com/store (after approval)" -ForegroundColor White
Write-Host ""
Write-Host "Support: https://github.com/martiloyoussef-eng/darija-plus-app" -ForegroundColor Cyan
