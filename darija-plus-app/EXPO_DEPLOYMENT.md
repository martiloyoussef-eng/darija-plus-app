# Darija+ Expo Deployment Guide

**Created by Youssef Elfahfouhi**

## Quick Start - Deploy to Expo in 3 Steps

### Step 1: Install Expo CLI Globally

```bash
npm install -g expo-cli eas-cli
```

### Step 2: Authenticate with Expo

```bash
# Login to your Expo account (or create one at https://expo.dev)
expo login

# Or use EAS CLI
eas login
```

### Step 3: Initialize EAS Project

```bash
cd darija-plus-app

# Link your project to Expo
eas init --id ea0f8dee-822f-48c3-b077-34248691a6e2

# Or interactively create a new project
eas init
```

---

## Deploy to Expo Go (Instant Testing)

Test your app immediately on your phone:

```bash
cd darija-plus-app
expo start
```

Then:
- **iOS**: Scan QR code with Camera app
- **Android**: Scan QR code with Expo Go app
- **Web**: Press `w` in terminal to open web version

---

## Build for Production

### Web Deployment (Vercel)

```bash
# Build web version
eas build --platform web

# Deploy to Vercel
vercel deploy --prod
```

### iOS App Store

```bash
# Build for iOS
eas build --platform ios --auto-submit

# This will:
# 1. Build app signed for App Store
# 2. Submit to TestFlight for review
# 3. Ready for production submission
```

**Timeline**: 2-4 hours for build + 1-3 days for App Store review

### Android Play Store

```bash
# Build for Android
eas build --platform android --auto-submit

# This will:
# 1. Build APK/AAB for Play Store
# 2. Submit to Google Play Console
# 3. Ready for production release
```

**Timeline**: 2-4 hours for build + 2-4 hours for Play Store review

---

## Full Deployment Commands

```bash
# Start locally
npm start

# Build and submit for production
eas build --platform ios --auto-submit
eas build --platform android --auto-submit
eas build --platform web
```

---

## Configuration Files Already Set Up

✅ **eas.json** - EAS Build configuration (ready to use)
✅ **app.json** - Expo app configuration (iOS bundle ID, Android package, icons)
✅ **package.json** - Dependencies and scripts

No additional setup needed!

---

## Environment Variables

Create `.env` file (copy from `.env.example`):

```bash
cp .env.example .env
```

Fill in your API keys:
```
EXPO_PUBLIC_API_URL=https://api.darijaplus.com
EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
EXPO_PUBLIC_SENTRY_DSN=https://...
```

---

## First-Time Setup Checklist

- [ ] Install Expo CLI: `npm install -g expo-cli eas-cli`
- [ ] Create Expo account: https://expo.dev/signup
- [ ] Login: `expo login`
- [ ] Initialize project: `eas init`
- [ ] Copy `.env.example` to `.env` and fill in keys
- [ ] Test locally: `npm start`
- [ ] Build: `eas build --platform ios|android|web`
- [ ] Submit: `eas submit --platform ios|android`

---

## Verification

After deployment, verify:

```bash
# Check build status
eas build:list

# Check submission status
eas submit:list

# View on Expo dashboard
https://expo.dev
```

---

## Cost

- **Expo** - Free tier includes:
  - Unlimited builds (with EAS)
  - Free builds per month
  - Analytics and error tracking
  
- **App Store** - $99/year developer account
- **Play Store** - $25 one-time developer account
- **Web Hosting** (Vercel) - Free tier available

---

## Support

- Expo Docs: https://docs.expo.dev
- EAS Build: https://docs.expo.dev/build/introduction/
- GitHub: https://github.com/martiloyoussef-eng/darija-plus-app

---

**Darija+ © 2026 — Ready to deploy!**
