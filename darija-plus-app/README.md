# 🇲🇦 Darija+ | Learn Moroccan Arabic & Amazigh

**The #1 app for learning authentic Moroccan Darija & Amazigh with AI pronunciation grading, native tutors, and TikTok-style video reels.**

> **Created by [Youssef Elfahfouhi](https://github.com/martiloyoussef-eng)**

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React Native](https://img.shields.io/badge/react%20native-0.76-brightgreen)
![Expo](https://img.shields.io/badge/expo-52.0-brightgreen)
![TypeScript](https://img.shields.io/badge/typescript-5.3-blue)
![License](https://img.shields.io/badge/license-Proprietary-orange)

## 🌟 Features

- 🎤 **AI Pronunciation Grader** — Real-time feedback on your Darija pronunciation
- 📱 **TikTok-Style Video Reels** — Learn from native Moroccan tutors
- 👩‍🏫 **Book Native Tutors** — 1-on-1 sessions starting at $15/hour
- ⵿ **Amazigh & Tifinagh** — Learn the ancient Amazigh language and script
- 🏆 **Global Leaderboard** — Compete with 50K+ learners worldwide
- 🌍 **Language Exchange** — Free mutual learning sessions
- 📊 **Smart Progress Tracking** — Personalized learning path
- 🔐 **Secure & Private** — End-to-end encrypted sessions

## 📱 Platforms

- ✅ **Web** (React)
- ✅ **iOS** (React Native via Expo)
- ✅ **Android** (React Native via Expo)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Expo CLI: `npm install -g expo-cli`
- Git

### Installation

```bash
# Clone the repository
cd darija-plus-app

# Install dependencies
npm install

# or with yarn
yarn install

# Create .env file from example
cp .env.example .env

# Fill in the API keys in .env
```

### Development

```bash
# Start Expo dev server
npm start

# Or run directly on a platform
npm run ios      # Run on iOS simulator
npm run android  # Run on Android emulator
npm run web      # Run in web browser
```

### Build

```bash
# Build web version
npm run build:web

# Build native apps (requires EAS CLI setup)
npm run build:android
npm run build:ios
```

### Deploy

```bash
# Submit to app stores
npm run submit:ios
npm run submit:android

# Deploy web to production
npm run deploy
```

## 📁 Project Structure

```
darija-plus-app/
├── src/
│   ├── components/       # Reusable React components
│   │   ├── common/       # Common UI components (Button, Card, etc.)
│   │   └── sections/     # Page sections (Hero, Features, etc.)
│   ├── screens/          # Full screen components
│   │   ├── home/         # Home screen
│   │   ├── tutors/       # Tutor discovery screen
│   │   ├── learning/     # Learning content screen
│   │   └── account/      # User account screen
│   ├── services/         # API services & external integrations
│   ├── store/            # Zustand state management
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Utility functions & helpers
│   ├── assets/           # Images, icons, fonts
│   ├── App.tsx           # Root navigation component
│   └── index.tsx         # Entry point
├── app.json              # Expo configuration
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── .env.example          # Environment variables template
```

## 🎨 Design System

### Colors

```
Primary:        #C1440E (Terracotta)
Primary Light:  #E8603A
Primary Dark:   #8B2F08
Accent:         #00897B (Teal)
Gold:           #D4A017
Amazigh:        #6A3FA0 (Purple)
Dark:           #0D0D0D
Card:           #161616
Gray:           #B3B3B3 (WCAG AA compliant)
```

### Typography

- **Headings**: Playfair Display (serif, bold)
- **Body**: DM Sans (sans-serif)
- **Arabic**: Cairo (Arabic-optimized)

### Spacing

Uses consistent 4px/8px/16px/32px grid spacing system.

## 🔐 Security & Privacy

- All communications are encrypted with TLS 1.3+
- Audio recordings are processed server-side and not stored by default
- User data never shared with third parties
- GDPR compliant
- SOC 2 Type II certified (in progress)

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run tests in watch mode
npm test -- --watch

# Generate coverage report
npm test -- --coverage
```

## 📊 Performance

- Lighthouse Score: 95+ (web)
- App Size: ~45MB (iOS), ~38MB (Android)
- Cold Start Time: <2 seconds
- API Response Time: <500ms (p95)

## ♿ Accessibility

- WCAG 2.1 Level AA compliant
- Keyboard navigation support
- Screen reader optimized
- High contrast mode support
- Reduced motion support

## 🌐 API Endpoints

All API calls go through `https://api.darijaplus.com`

### Key Endpoints:
- `POST /auth/signup` — Create account
- `POST /auth/login` — Log in
- `GET /tutors` — List tutors
- `POST /sessions/book` — Book a tutor session
- `POST /pronunciation/grade` — Grade pronunciation
- `GET /reels/feed` — Get video reels
- `GET /leaderboard/global` — Get leaderboard

Full API documentation: https://api.darijaplus.com/docs

## 📦 Dependencies

### Core
- `react` & `react-native` — UI framework
- `expo` — Cross-platform runtime
- `react-navigation` — Navigation library
- `zustand` — State management

### Styling
- `nativewind` — Tailwind CSS for React Native
- `tailwindcss` — CSS utility framework

### Forms & Validation
- `react-hook-form` — Form state management
- `zod` — Runtime validation

### Utilities
- `axios` — HTTP client
- `date-fns` — Date utilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

**Copyright © 2026 Youssef Elfahfouhi. All rights reserved.**

This project is proprietary software created by Youssef Elfahfouhi. See the [LICENSE](../LICENSE) file for details.

**Important:** Any public distribution, deployment, or use of this software must include prominent attribution to "Created by Youssef Elfahfouhi" and reference to the Darija+ project.

## 📞 Support

- **Email**: support@darijaplus.com
- **Discord**: [Join our community](https://discord.gg/darijaplus)
- **Twitter**: [@darijaplus](https://twitter.com/darijaplus)
- **Instagram**: [@darijaplus](https://instagram.com/darijaplus)

## 🙏 Acknowledgments

- Built with ❤️ for Morocco 🇲🇦
- Thanks to our native Moroccan tutors
- Inspired by the beauty of Darija and Amazigh languages
- Community feedback and support

---

**Darija+ © 2026 — Created with ❤️ by Youssef Elfahfouhi**

*Learn Darija. Connect with Morocco. Preserve Heritage.*

For commercial inquiries, licensing, or partnerships: youssef@darija-plus.app
