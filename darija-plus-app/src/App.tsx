import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { HomeScreen } from '@screens/home/HomeScreen';
import { Colors } from '@utils/index';
import useAppStore from '@store/index';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: Colors.dark },
    }}
  >
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Darija+',
      }}
    />
  </Stack.Navigator>
);

const TutorsStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.dark,
        borderBottomColor: Colors.border,
        borderBottomWidth: 1,
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontWeight: '700',
        fontSize: 18,
      },
      cardStyle: { backgroundColor: Colors.dark },
    }}
  >
    <Stack.Screen
      name="TutorsList"
      component={TutorsPlaceholder}
      options={{
        title: 'Find Tutors',
        headerBackVisible: false,
      }}
    />
  </Stack.Navigator>
);

const LearningStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.dark,
        borderBottomColor: Colors.border,
        borderBottomWidth: 1,
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontWeight: '700',
        fontSize: 18,
      },
      cardStyle: { backgroundColor: Colors.dark },
    }}
  >
    <Stack.Screen
      name="Learning"
      component={LearningPlaceholder}
      options={{
        title: 'Learn',
        headerBackVisible: false,
      }}
    />
  </Stack.Navigator>
);

const AccountStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.dark,
        borderBottomColor: Colors.border,
        borderBottomWidth: 1,
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontWeight: '700',
        fontSize: 18,
      },
      cardStyle: { backgroundColor: Colors.dark },
    }}
  >
    <Stack.Screen
      name="Account"
      component={AccountPlaceholder}
      options={{
        title: 'Account',
        headerBackVisible: false,
      }}
    />
  </Stack.Navigator>
);

// Placeholder components for future screens
const TutorsPlaceholder = () => (
  <SafeAreaView
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
  >
    {/* Will be implemented */}
  </SafeAreaView>
);

const LearningPlaceholder = () => (
  <SafeAreaView
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
  >
    {/* Will be implemented */}
  </SafeAreaView>
);

const AccountPlaceholder = () => (
  <SafeAreaView
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
  >
    {/* Will be implemented */}
  </SafeAreaView>
);

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: Colors.card,
        borderTopColor: Colors.border,
        borderTopWidth: 1,
        paddingVertical: 8,
        paddingBottom: Platform.OS === 'ios' ? 24 : 8,
      },
      tabBarActiveTintColor: Colors.primary,
      tabBarInactiveTintColor: Colors.gray,
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: '600',
      },
    }}
  >
    <Tab.Screen
      name="HomeTab"
      component={HomeStack}
      options={{
        title: 'Home',
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => <TabIcon icon="🏠" color={color} />,
        tabBarTestID: 'home-tab',
      }}
    />
    <Tab.Screen
      name="TutorsTab"
      component={TutorsStack}
      options={{
        title: 'Tutors',
        tabBarLabel: 'Tutors',
        tabBarIcon: ({ color }) => <TabIcon icon="👩‍🏫" color={color} />,
        tabBarTestID: 'tutors-tab',
      }}
    />
    <Tab.Screen
      name="LearningTab"
      component={LearningStack}
      options={{
        title: 'Learn',
        tabBarLabel: 'Learn',
        tabBarIcon: ({ color }) => <TabIcon icon="📚" color={color} />,
        tabBarTestID: 'learning-tab',
      }}
    />
    <Tab.Screen
      name="AccountTab"
      component={AccountStack}
      options={{
        title: 'Account',
        tabBarLabel: 'Account',
        tabBarIcon: ({ color }) => <TabIcon icon="👤" color={color} />,
        tabBarTestID: 'account-tab',
      }}
    />
  </Tab.Navigator>
);

const TabIcon: React.FC<{ icon: string; color: string }> = ({
  icon,
  color,
}) => (
  <span style={{ fontSize: 20, opacity: color === Colors.primary ? 1 : 0.6 }}>
    {icon}
  </span>
);

export default function App() {
  const { setLoading, setError } = useAppStore();

  useEffect(() => {
    // Initialize app
    console.log('🚀 Darija+ App Initialized');

    // You can add any initialization logic here
    // - Load user preferences
    // - Check authentication
    // - Initialize analytics
    // - Fetch initial data
  }, []);

  return (
    <>
      <ExpoStatusBar barStyle="light-content" translucent />
      <NavigationContainer
        theme={{
          dark: true,
          colors: {
            primary: Colors.primary,
            background: Colors.dark,
            card: Colors.card,
            text: Colors.white,
            border: Colors.border,
            notification: Colors.primaryLight,
          },
        }}
      >
        <BottomTabNavigator />
      </NavigationContainer>
    </>
  );
}
