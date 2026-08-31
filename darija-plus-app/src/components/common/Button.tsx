import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '@utils/index';

interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  accessibilityLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  icon,
  accessibilityLabel,
}) => {
  const styles = getStyles(variant, size);

  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled || loading}
      accessible={true}
      accessibilityLabel={accessibilityLabel || label}
      accessibilityRole="button"
    >
      {icon && <Text style={styles.icon}>{icon}</Text>}
      <Text style={styles.label}>
        {loading ? 'Loading...' : label}
      </Text>
    </TouchableOpacity>
  );
};

const getStyles = (variant: string, size: string) => {
  let backgroundColor = Colors.primary;
  let textColor = Colors.white;
  let padding = 16;
  let fontSize = 16;

  if (variant === 'secondary') {
    backgroundColor = 'transparent';
    textColor = Colors.white;
  } else if (variant === 'tertiary') {
    backgroundColor = Colors.card;
    textColor = Colors.primaryLight;
  }

  if (size === 'small') {
    padding = 8;
    fontSize = 13;
  } else if (size === 'large') {
    padding = 20;
    fontSize = 18;
  }

  return StyleSheet.create({
    button: {
      backgroundColor,
      paddingVertical: padding,
      paddingHorizontal: padding * 2,
      borderRadius: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
    },
    label: {
      color: textColor,
      fontSize,
      fontWeight: '700',
    },
    icon: {
      fontSize: fontSize + 2,
    },
    disabled: {
      opacity: 0.5,
    },
  });
};
