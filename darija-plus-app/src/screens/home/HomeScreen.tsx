import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Hero } from '@components/sections/Hero';
import { FeatureCard } from '@components/common/Card';
import { Button } from '@components/common/Button';
import { Colors } from '@utils/index';

const FEATURES = [
  {
    icon: '🎤',
    title: 'AI Pronunciation Grader',
    description:
      'Record yourself and get an instant score. Our AI analyzes every phoneme.',
  },
  {
    icon: '📱',
    title: 'TikTok-Style Video Reels',
    description: 'Learn real phrases in context from native Moroccan tutors.',
  },
  {
    icon: '👩‍🏫',
    title: 'Book a Native Tutor',
    description: 'Connect with verified Moroccan tutors starting at $15/hour.',
  },
  {
    icon: '⵿',
    title: 'Amazigh & Tifinagh',
    description:
      'Learn ancient Amazigh language and script — rarely taught anywhere.',
  },
  {
    icon: '🏆',
    title: 'Global Leaderboard',
    description: 'Compete with learners from 30+ countries. Weekly XP rankings.',
  },
  {
    icon: '🌍',
    title: 'Language Exchange',
    description: 'Free mutual sessions with Moroccans learning English/French.',
  },
];

export const HomeScreen: React.FC = () => {
  const handleDownload = () => {
    console.log('Download pressed');
    // Navigate to download/auth flow
  };

  const handleLearnMore = () => {
    console.log('Learn more pressed');
    // Scroll to features section
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      accessible={true}
      accessibilityRole="list"
    >
      {/* Hero Section */}
      <Hero
        onDownloadPress={handleDownload}
        onLearnMorePress={handleLearnMore}
      />

      {/* Features Section */}
      <View
        style={styles.section}
        accessible={true}
        accessibilityRole="region"
        accessibilityLabel="Features"
      >
        <View style={styles.sectionTag}>
          <Text style={styles.sectionTagText}>✦ Features</Text>
        </View>
        <Text style={styles.sectionTitle}>
          Everything you need to{'\n'}
          speak Darija confidently
        </Text>
        <Text style={styles.sectionSubtitle}>
          From zero to fluent — with tools designed for how Moroccans actually
          speak.
        </Text>

        <View style={styles.featureGrid}>
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </View>
      </View>

      {/* Languages Section */}
      <View
        style={styles.languagesSection}
        accessible={true}
        accessibilityRole="region"
        accessibilityLabel="Languages"
      >
        <View style={styles.sectionTag}>
          <Text style={styles.sectionTagText}>✦ Languages</Text>
        </View>
        <Text style={styles.sectionTitle}>
          Two languages.{'\n'}
          One ancient nation.
        </Text>

        <View style={styles.languageCards}>
          <LanguageCard
            flag="🇲🇦"
            name="Moroccan Darija"
            description="The everyday language of 37 million Moroccans"
            color={Colors.primary}
          />
          <LanguageCard
            flag="⵿"
            name="Amazigh"
            description="One of humanity's oldest living languages"
            color={Colors.amazigh}
          />
        </View>
      </View>

      {/* How It Works */}
      <View
        style={styles.section}
        accessible={true}
        accessibilityRole="region"
        accessibilityLabel="How It Works"
      >
        <View style={styles.sectionTag}>
          <Text style={styles.sectionTagText}>✦ How It Works</Text>
        </View>
        <Text style={styles.sectionTitle}>
          Start speaking in days,{'\n'}
          not years
        </Text>

        <View style={styles.steps}>
          <Step
            number="1"
            title="Set Your Goal"
            description="Tell us why you're learning"
          />
          <Step
            number="2"
            title="Watch & Listen"
            description="Learn from native tutors"
          />
          <Step
            number="3"
            title="Practice & Record"
            description="Get AI feedback on pronunciation"
          />
          <Step
            number="4"
            title="Book a Tutor"
            description="Take your skills to the next level"
          />
        </View>
      </View>

      {/* Download CTA */}
      <View
        style={styles.ctaSection}
        accessible={true}
        accessibilityRole="region"
        accessibilityLabel="Download"
      >
        <Text style={styles.ctaTitle}>
          Start speaking Darija{'\n'}
          <Text style={styles.ctaTitlePrimary}>today — for free</Text>
        </Text>
        <Text style={styles.ctaSubtitle}>
          Join 50,000+ learners. No credit card required.
        </Text>
        <Button
          label="Download Free"
          icon="📱"
          onPress={handleDownload}
          size="large"
        />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2026 Darija+ دارجة+. All rights reserved.
        </Text>
        <Text style={[styles.footerText, { color: Colors.primary }]}>
          مبني بحب للمغرب 🇲🇦
        </Text>
      </View>
    </ScrollView>
  );
};

const LanguageCard: React.FC<{
  flag: string;
  name: string;
  description: string;
  color: string;
}> = ({ flag, name, description, color }) => (
  <View style={[styles.langCard, { borderColor: color }]}>
    <Text style={styles.langFlag}>{flag}</Text>
    <Text style={[styles.langName, { color }]}>{name}</Text>
    <Text style={styles.langDesc}>{description}</Text>
  </View>
);

const Step: React.FC<{
  number: string;
  title: string;
  description: string;
}> = ({ number, title, description }) => (
  <View style={styles.step}>
    <View style={styles.stepNumber}>
      <Text style={styles.stepNumberText}>{number}</Text>
    </View>
    <Text style={styles.stepTitle}>{title}</Text>
    <Text style={styles.stepDesc}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
  },
  section: {
    padding: 40,
    paddingVertical: 60,
  },
  sectionTag: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  sectionTagText: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 40,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: Colors.gray,
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  featureGrid: {
    gap: 20,
  },
  languagesSection: {
    padding: 40,
    paddingVertical: 60,
    alignItems: 'center',
  },
  languageCards: {
    gap: 20,
    width: '100%',
  },
  langCard: {
    backgroundColor: Colors.card,
    borderRadius: 24,
    padding: 40,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  langFlag: {
    fontSize: 40,
    marginBottom: 16,
  },
  langName: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },
  langDesc: {
    fontSize: 14,
    color: Colors.gray,
    textAlign: 'center',
    lineHeight: 20,
  },
  steps: {
    gap: 20,
  },
  step: {
    alignItems: 'center',
  },
  stepNumber: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  stepNumberText: {
    fontSize: 24,
    fontWeight: '900',
    color: Colors.white,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.white,
    marginBottom: 8,
    textAlign: 'center',
  },
  stepDesc: {
    fontSize: 14,
    color: Colors.gray,
    textAlign: 'center',
    lineHeight: 20,
  },
  ctaSection: {
    padding: 40,
    paddingVertical: 60,
    alignItems: 'center',
    backgroundColor: `${Colors.dark}`,
  },
  ctaTitle: {
    fontSize: 40,
    fontWeight: '900',
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 48,
  },
  ctaTitlePrimary: {
    color: Colors.primary,
  },
  ctaSubtitle: {
    fontSize: 16,
    color: Colors.gray,
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  footer: {
    padding: 40,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    backgroundColor: '#0a0a0a',
    alignItems: 'center',
    gap: 8,
  },
  footerText: {
    fontSize: 13,
    color: Colors.gray,
    textAlign: 'center',
  },
});
