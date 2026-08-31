# Darija+ Architecture & Technical Documentation

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    CLIENT LAYER                          │
│  (React Native + Web)                                    │
│  ┌──────────────────────────────────────────────────┐   │
│  │  Screens (Home, Tutors, Learning, Account)       │   │
│  │  Components (Buttons, Cards, Hero sections)      │   │
│  │  Navigation (React Navigation)                   │   │
│  └──────────────────────────────────────────────────┘   │
└──────────────────────┬──────────────────────────────────┘
                       │ HTTP/HTTPS
┌──────────────────────▼──────────────────────────────────┐
│              API GATEWAY LAYER                          │
│  (Axios + Request Interceptors)                        │
│  - Auth token injection                                │
│  - Error handling & retry logic                        │
│  - Request/response logging                            │
└──────────────────────┬──────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────┐
│           BACKEND API (REST/GraphQL)                   │
│  https://api.darijaplus.com                            │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Auth Service    → User management, JWT tokens  │  │
│  │  Tutors Service  → Tutor profiles, scheduling   │  │
│  │  Sessions Service → Booking, rescheduling       │  │
│  │  Pronunciation API → AI grading engine          │  │
│  │  Reels Service   → Video content management     │  │
│  │  Leaderboard API → XP tracking, rankings        │  │
│  └──────────────────────────────────────────────────┘  │
└──────────────────────┬──────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────┐
│           DATA LAYER (Databases)                       │
│  ┌──────────────┐  ┌──────────────┐  ┌────────────┐   │
│  │ PostgreSQL   │  │  MongoDB     │  │  Redis    │   │
│  │ (relational) │  │ (user data)  │  │ (cache)   │   │
│  └──────────────┘  └──────────────┘  └────────────┘   │
└──────────────────────────────────────────────────────┘
```

## 🔄 Data Flow

### User Authentication Flow
```
1. User enters email/password
2. Submit to POST /auth/login
3. Backend validates credentials
4. Returns JWT token + user object
5. App stores token in AsyncStorage (mobile) or localStorage (web)
6. Token injected in all subsequent requests via Authorization header
7. Token refresh via POST /auth/refresh before expiry
```

### Pronunciation Grading Flow
```
1. User records audio via expo-av
2. Audio converted to WAV/MP3
3. FormData sent to POST /pronunciation/grade
4. Backend processes with AI model
5. Returns PronunciationResult {score, feedback, phonemeAnalysis}
6. Result stored in user's pronunciation history
7. UI displays score and feedback
```

### Tutor Booking Flow
```
1. User selects tutor from GET /tutors
2. User selects date/time from tutor availability
3. Submit BookingRequest to POST /sessions/book
4. Backend creates Session record
5. System sends email confirmations to both parties
6. User redirected to payment (if not free)
7. Session added to user's calendar
8. Push notification sent at reminder time
```

## 📦 State Management (Zustand)

```typescript
useAppStore:
├── User State
│   ├── user: User | null
│   ├── isAuthenticated: boolean
│   └── Methods: setUser(), logout()
├── Tutors State
│   ├── tutors: Tutor[]
│   ├── selectedTutor: Tutor | null
│   └── Methods: setTutors(), setSelectedTutor()
├── Sessions State
│   ├── sessions: Session[]
│   └── Methods: addSession(), updateSession()
├── Notifications
│   ├── notifications: Notification[]
│   └── Methods: addNotification(), removeNotification()
└── UI State
    ├── isLoading: boolean
    ├── error: string | null
    └── Methods: setLoading(), setError()
```

## 🔌 API Endpoints

### Authentication
```
POST   /auth/signup                  → Register new user
POST   /auth/login                   → Login with credentials
POST   /auth/refresh                 → Refresh JWT token
POST   /auth/logout                  → Logout (invalidate token)
GET    /auth/profile                 → Get current user profile
PATCH  /auth/profile                 → Update user profile
POST   /auth/password/reset          → Reset password
```

### Tutors
```
GET    /tutors                       → List all tutors (paginated)
GET    /tutors/:id                   → Get tutor details
GET    /tutors/:id/reviews           → Get tutor reviews
POST   /tutors/:id/reviews           → Leave a review
GET    /tutors/search?q=term         → Search tutors
GET    /tutors/availability/:id      → Get tutor availability
```

### Sessions/Bookings
```
POST   /sessions/book                → Create booking request
GET    /sessions/my                  → Get user's sessions
GET    /sessions/:id                 → Get session details
PATCH  /sessions/:id/cancel          → Cancel session
PATCH  /sessions/:id/reschedule      → Reschedule session
POST   /sessions/:id/start           → Start session (video call)
PATCH  /sessions/:id/feedback        → Submit feedback after session
```

### Pronunciation
```
POST   /pronunciation/grade          → Grade user's pronunciation
GET    /pronunciation/history        → Get pronunciation history
GET    /pronunciation/analytics      → Get progress analytics
```

### Video Reels
```
GET    /reels/feed                   → Get feed of reels (paginated)
GET    /reels/:id                    → Get reel details
POST   /reels/:id/like               → Like a reel
DELETE /reels/:id/like               → Unlike a reel
POST   /reels/:id/comments           → Comment on reel
GET    /reels/:id/comments           → Get reel comments
POST   /reels/:id/share              → Share reel
```

### Leaderboard
```
GET    /leaderboard/global           → Get global leaderboard
GET    /leaderboard/me               → Get user's position
GET    /leaderboard/monthly          → Get monthly leaderboard
GET    /leaderboard/friends          → Get friends' leaderboard
```

### Languages
```
GET    /languages                    → Get all languages
GET    /languages/:id/dialects       → Get dialects for language
GET    /languages/phrases            → Get example phrases
```

### Miscellaneous
```
GET    /faq                          → Get FAQ items
GET    /testimonials                 → Get user testimonials
GET    /stats                        → Get app statistics
GET    /health                       → Health check
```

## 🔒 Security Measures

### Authentication & Authorization
- JWT (JSON Web Tokens) for stateless auth
- Refresh tokens with 7-day expiry
- Access tokens with 1-hour expiry
- HTTPS only (no HTTP)
- Secure cookies with HttpOnly flag

### Data Protection
- End-to-end encryption for sensitive data
- TLS 1.3+ for all communications
- Password hashing with bcrypt (salt rounds: 12)
- Audio recording encrypted at rest
- Regular security audits

### API Security
- Rate limiting (100 requests/minute per IP)
- CORS properly configured
- CSRF tokens for state-changing requests
- Input validation & sanitization
- SQL injection prevention (parameterized queries)

### Privacy
- GDPR compliance (data deletion, exports)
- CCPA compliance (privacy policies)
- No third-party data sharing
- User consent for analytics/tracking
- Clear data retention policies

## 📊 Performance Optimization

### Frontend
- Code splitting & lazy loading
- Image optimization (WebP, responsive sizes)
- CSS-in-JS minification
- JavaScript minification & compression
- Caching with service workers (web)

### Backend
- Database query optimization
- Redis caching for frequently accessed data
- CDN for media files
- API pagination & filtering
- Async job queues for heavy processing

### Monitoring
- Lighthouse CI for performance regression
- Real User Monitoring (RUM)
- Application Performance Monitoring (APM)
- Custom metrics via Amplitude

## 🧪 Testing Strategy

### Unit Tests
- Jest for JavaScript/TypeScript
- Test all utility functions
- Test Redux/Zustand reducers
- Test validation logic

### Integration Tests
- Test API interactions
- Test component integration
- Test navigation flow
- Test auth flow

### E2E Tests
- Detox for mobile E2E testing
- Playwright for web E2E testing
- Test critical user journeys

### Test Coverage Targets
- Statements: >80%
- Branches: >75%
- Functions: >80%
- Lines: >80%

## 📱 Mobile-Specific Considerations

### iOS
- Minimum deployment target: iOS 13.0
- Uses Xcode 15.0+
- CocoaPods for native dependencies
- App Clips for quick access
- HealthKit integration (optional)

### Android
- Minimum SDK version: 21 (Android 5.0)
- Target SDK version: 34 (Android 14)
- Gradle for build system
- Google Play Services
- Android Keystore for certificates

## 🎯 Key Performance Indicators

### User Metrics
- Daily Active Users (DAU)
- Monthly Active Users (MAU)
- User Retention Rate (Day 1, 7, 30)
- Churn Rate
- Session Duration
- Feature Usage

### Business Metrics
- Cost Per User Acquisition (CAC)
- Lifetime Value (LTV)
- Conversion Rate (Free → Paid)
- Average Revenue Per User (ARPU)
- Customer Satisfaction (NPS)

### Technical Metrics
- API Response Time (p50, p95, p99)
- Error Rate
- Uptime (target: 99.9%)
- Database Query Time
- Memory Usage
- CPU Usage

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow
```yaml
1. Code Push
2. Lint & Format Check
3. Type Checking
4. Unit Tests
5. Build Production Bundle
6. E2E Tests (optional)
7. Deploy to Staging
8. PR Review & Approval
9. Deploy to Production
```

### Release Process
```
1. Create release branch from main
2. Run full test suite
3. Update version in package.json & app.json
4. Generate changelog
5. Tag commit with version
6. Build native apps with EAS
7. Submit to app stores
8. Monitor for issues
9. Publish release notes
```

---

**Last Updated**: 2026-08-31  
**Maintainer**: Darija+ Engineering Team  
**Version**: 1.0.0
