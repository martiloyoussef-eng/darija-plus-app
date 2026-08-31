import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import { Colors } from '@utils/index';
import { Button } from '@components/common/Button';

const { width } = Dimensions.get('window');

interface HeroProps {
  onDownloadPress: () => void;
  onLearnMorePress: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onDownloadPress,
  onLearnMorePress,
}) => {
  return (
    <View
      style={styles.hero}
      accessible={true}
      accessibilityRole="header"
    >
      {/* Background gradient layers */}
      <View style={styles.bgGradient} />
      <View style={styles.zelligePattern} />

      <ScrollView
        scrollEnabled={false}
        contentContainerStyle={styles.heroContent}
      >
        {/* Badge */}
        <View
          style={styles.badge}
          accessible={true}
          accessibilityLabel="Number 1 Moroccan Language Learning App"
        >
          <Text style={styles.badgeText}>🇲🇦 #1 Moroccan Language Learning App</Text>
        </View>

        {/* Main Title */}
        <Text
          style={styles.title}
          accessible={true}
          accessibilityRole="header"
        >
          Learn{' '}
          <Text style={styles.titleGradient}>Moroccan</Text>
          {'\n'}
          Like a Local
        </Text>

        {/* Arabic Title */}
        <Text
          style={styles.arabicTitle}
          accessible={true}
          accessibilityLanguage="ar"
        >
          تعلم الدارجة والأمازيغية
        </Text>

        {/* Subtitle */}
        <Text
          style={styles.subtitle}
          accessible={true}
          accessibilityRole="text"
        >
          Master authentic Moroccan Arabic (Darija) and Amazigh with AI
          pronunciation grading, native video reels, and 1-on-1 tutor sessions.
        </Text>

        {/* Buttons */}
        <View style={styles.buttons}>
          <Button
            label="Download Free"
            icon="📱"
            onPress={onDownloadPress}
            accessibilityLabel="Download Darija Plus free app"
          />
          <Button
            label="See How It Works"
            variant="secondary"
            onPress={onLearnMorePress}
            accessibilityLabel="View features"
          />
        </View>

        {/* Stats */}
        <View style={styles.stats}>
          <Stat number="50K+" label="Learners" />
          <Stat number="200+" label="Native Tutors" />
          <Stat number="4.9★" label="App Rating" />
          <Stat number="30+" label="Countries" />
        </View>
      </ScrollView>
    </View>
  );
};

const Stat: React.FC<{ number: string; label: string }> = ({
  number,
  label,
}) => (
  <View style={styles.stat}>
    <Text style={styles.statNumber}>{number}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  hero: {
    minHeight: 700,
    backgroundColor: Colors.dark,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 60,
    position: 'relative',
    overflow: 'hidden',
  },
  bgGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.dark,
  },
  zelligePattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.04,
    backgroundColor: Colors.primary,
  },
  heroContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${Colors.primary}26`,
    borderWidth: 1,
    borderColor: `${Colors.primary}4D`,
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginBottom: 28,
  },
  badgeText: {
    fontSize: 13,
    color: Colors.primaryLight,
    fontWeight: '600',
  },
  title: {
    fontSize: 56,
    fontWeight: '900',
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 60,
  },
  titleGradient: {
    color: Colors.primaryLight,
  },
  arabicTitle: {
    fontSize: 40,
    fontWeight: '800',
    color: Colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: Colors.gray,
    textAlign: 'center',
    maxWidth: 520,
    lineHeight: 24,
    marginBottom: 40,
  },
  buttons: {
    gap: 12,
    marginBottom: 48,
    width: '100%',
    alignItems: 'center',
  },
  stats: {
    flexDirection: 'row',
    gap: 32,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: '900',
    color: Colors.white,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 11,
    color: Colors.gray,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
