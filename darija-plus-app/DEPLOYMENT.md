# Darija+ Deployment Guide

## 🚀 Production Deployment Checklist

### Phase 1: Pre-Deployment (Week 1)

- [ ] Complete all feature implementation
- [ ] Run full test suite
- [ ] Perform accessibility audit with axe DevTools
- [ ] Test on real devices (iPhone 12+, Android 10+)
- [ ] Set up error tracking (Sentry)
- [ ] Configure analytics (Amplitude)
- [ ] Create production environment variables

### Phase 2: Web Deployment to Vercel (Week 2)

#### Prerequisites
```bash
npm install -g vercel
vercel login
```

#### Deploy
```bash
cd darija-plus-app

# Build for production
npm run build:web

# Deploy to Vercel
vercel deploy --prod
```

#### Environment Variables (Vercel Dashboard)
```
EXPO_PUBLIC_API_URL=https://api.darijaplus.com
EXPO_PUBLIC_APP_ENV=production
EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxx
EXPO_PUBLIC_SENTRY_DSN=https://xxx@xxx.ingest.sentry.io/xxx
```

#### Custom Domain Setup
```bash
# Add custom domain in Vercel dashboard
# darijaplus.com → Vercel
# www.darijaplus.com → Vercel
```

### Phase 3: iOS Deployment (Week 3)

#### Prerequisites
```bash
npm install -g eas-cli
eas login
```

#### Setup Credentials
```bash
cd darija-plus-app
eas credentials configure --platform ios
```

#### Build
```bash
eas build --platform ios --auto-submit
```

#### Manual Submission (if needed)
```bash
# Download .ipa file
eas submit --platform ios --latest
```

#### App Store Configuration
1. Create app in App Store Connect
2. Set bundle identifier: `com.darijaplus.app`
3. Set version: `1.0.0`
4. Add app icon (1024x1024)
5. Add screenshots
6. Write app description & keywords
7. Set pricing tier
8. Submit for review

### Phase 4: Android Deployment (Week 4)

#### Prerequisites
```bash
# Create keystore
keytool -genkey -v -keystore darija-plus.keystore -keyalg RSA -keysize 2048 -validity 10000

# Upload to EAS
eas credentials configure --platform android
```

#### Build
```bash
eas build --platform android --auto-submit
```

#### Manual Submission
```bash
eas submit --platform android --latest
```

#### Google Play Configuration
1. Create app in Google Play Console
2. Set package name: `com.darijaplus.app`
3. Add app icon & screenshots
4. Fill out app description
5. Set content rating
6. Configure pricing
7. Submit for review

### Phase 5: Post-Deployment (Week 5)

- [ ] Monitor app performance in production
- [ ] Set up crash reporting alerts
- [ ] Configure automated release notes
- [ ] Create update protocol for bug fixes
- [ ] Set up customer support channels
- [ ] Launch social media campaign
- [ ] Send announcement to beta testers

## 📊 Production Monitoring

### Sentry Setup (Error Tracking)
```typescript
import * as Sentry from "sentry-expo";

Sentry.init({
  dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
  enableInExpoDevelopment: true,
  enableNativeStacktraces: true,
  tracesSampleRate: 1.0,
});

export default Sentry.wrap(App);
```

### Amplitude Setup (Analytics)
```typescript
import { Amplitude } from '@amplitude/analytics-react-native';

Amplitude.getInstance().init(process.env.EXPO_PUBLIC_AMPLITUDE_KEY);
Amplitude.getInstance().track('app_opened');
```

## 🔐 Security Checklist

- [ ] All API calls use HTTPS
- [ ] Environment variables not hardcoded
- [ ] Auth tokens stored securely
- [ ] Audio data encrypted in transit
- [ ] Database encrypted at rest
- [ ] Regular security audits scheduled
- [ ] Privacy policy published
- [ ] Terms of service reviewed
- [ ] GDPR compliance verified
- [ ] COPPA compliance verified (if under 13)

## 📱 App Store Optimization (ASO)

### Title
```
Darija+ | Learn Moroccan Arabic & Amazigh
```

### Subtitle
```
AI Pronunciation Grader + Native Tutors + Video Reels
```

### Keywords
```
moroccan arabic, learn darija, amazigh, tifinagh, 
language learning, darija app, moroccan language
```

### Description
```
🇲🇦 Learn Moroccan Arabic (Darija) and Amazigh from anywhere with Darija+

✨ What makes Darija+ different:
🎤 AI Pronunciation Grader — Real-time feedback
📱 TikTok-Style Video Reels — Learn from natives
👩‍🏫 Native Tutors — Book sessions from $15/hr
⵿ Amazigh & Tifinagh — Rare language learning
🏆 Global Leaderboard — Compete with 50K+ learners
🌍 Language Exchange — Free mutual sessions

Perfect for:
✈️ Travelers to Morocco
👨‍👩‍👧 Diaspora reconnecting with heritage
💼 Business professionals
🎓 Language enthusiasts

50,000+ learners. 200+ tutors. 30+ countries. Join today!
```

## 🐛 Rollback Procedure

If critical issues are found in production:

```bash
# Web rollback
vercel rollback

# iOS rollback (disable in App Store)
eas update --branch production --message "Hotfix rollback"

# Android rollback
eas update --branch production --message "Hotfix rollback"

# Create emergency hotfix branch
git checkout -b hotfix/critical-bug
# Make fixes
git commit -m "fix: Critical bug fix"
# Deploy again
npm run deploy
```

## 📞 Support & Maintenance

### SLA (Service Level Agreement)
- Critical bugs: 2-hour response
- High priority: 24-hour response
- Medium priority: 48-hour response
- Low priority: 1-week response

### Regular Tasks
- Daily: Monitor error logs
- Weekly: Review analytics & user feedback
- Monthly: Security audit & performance review
- Quarterly: Major feature releases

## 💰 Infrastructure Costs (Estimated)

- Vercel: $20-100/month (web hosting)
- AWS: $200-500/month (API backend)
- Firebase: $50-200/month (database)
- Sentry: $29/month (error tracking)
- Stripe: 2.9% + $0.30 per transaction
- Total: ~$400-1000/month

## 📈 Growth Strategy

### Phase 1: Launch (Month 1)
- Beta launch in 5 countries
- 1,000 beta testers
- Community Discord setup
- Social media campaign

### Phase 2: Scale (Months 2-3)
- Expand to 15+ countries
- 10,000 active users
- Press coverage campaign
- Influencer partnerships

### Phase 3: Growth (Months 4-6)
- Global availability
- 50,000+ users
- Premium tier launch
- Corporate partnerships

---

**Last Updated**: 2026-08-31  
**Next Review**: 2026-12-31  
**Maintained By**: Darija+ Team
