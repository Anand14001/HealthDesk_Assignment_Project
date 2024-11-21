import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen'; // Import HomeScreen
import RewardScreen from './Screens/RewardScreen'; // Import RewardScreen
import AppoinmentScreen from './Screens/AppoinmentScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LottieView from 'lottie-react-native';
import LoginScreen from './Screens/LoginScreen';


export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showIntro, setShowIntro] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 


  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    if (showSplash) {
      setTimeout(() => {
        setShowSplash(false); // After the splash, show the intro slider
      }, 3000); // Splash screen duration: 3 seconds
    }
  }, [showSplash]);

  // Data for intro slides
  const slides = [
    {
      key: '1',
      title: 'Schedule Doctor Appointments',
      text: 'Book appointments with your preferred doctors hassle-free. Choose from a list of experienced healthcare professionals.',
      backgroundColor: '#1E3A8A',
      lottieFile: require('./assets/online_appointment.json'),
    },
    {
      key: '2',
      title: 'Never Miss a Dose',
      text: 'Set up personalized medicine reminders to ensure you never miss a dose. Stay on top of your treatment plan with timely notifications.',
      backgroundColor: '#0E7490',
      lottieFile: require('./assets/dose.json'),
    },
    {
      key: '3',
      title: 'Smart Health Checkup',
      text: 'Experience the future of healthcare with our smart checkup feature. Get instant health insights and personalized recommendations.',
      backgroundColor: '#047857',
      lottieFile: require('./assets/checkup.json')
    },
  ];

  const renderSlide = ({ item }) => (
    <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
       <LottieView
      source={item.lottieFile} // Dynamic Lottie file
      autoPlay
      loop
      style={styles.lottie}
    />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <LottieView
      source={require('./assets/doctor.json')} // Dynamic Lottie file
      autoPlay
      loop
      style={styles.lottie}
    />
        <Text style={styles.splashText}>Health Desk</Text>
      </View>
    );
  }

  if (showIntro) {
    return (
      <AppIntroSlider
        renderItem={renderSlide}
        data={slides}
        onDone={() => setShowIntro(false)} // Move to main app when done
        showSkipButton
        onSkip={() => setShowIntro(false)} // Allow skipping the intro
      />
    );
  }


  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <Stack.Navigator>
         <Stack.Screen
  name="Login"
  options={{ headerShown: false }}
>
  {props => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
</Stack.Screen>
        </Stack.Navigator>
      ) : (
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => <Icon name="home-outline" size={size} color={color} />,
            }}
          />
          <Tab.Screen
            name="Rewards"
            component={RewardScreen}
            options={{
              tabBarIcon: ({ color, size }) => <Icon name="trophy-outline" size={size} color={color} />, tabBarButton: (props) => <View {...props} />
            }}
          />
          <Tab.Screen
            name="Device"
            component={RewardScreen}
            options={{
              tabBarIcon: ({ color, size }) => <Icon name="watch-outline" size={size} color={color} />,tabBarButton: (props) => <View {...props} />
            }}
          />
          <Tab.Screen
            name="Profile"
            component={RewardScreen}
            options={{
              tabBarIcon: ({ color, size }) => <Icon name="person-outline" size={size} color={color} />,tabBarButton: (props) => <View {...props} />
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}

// HomeStack Navigator that includes both HomeScreen and AppointmentScreen
function HomeStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="Appointment" component={AppoinmentScreen} options={{headerTitle:'Create Appoinment'}} />
      <Stack.Screen name='Login' component={LoginScreen}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E3A8A',
  },
  splashText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  lottie: {
    width: 250, // Adjust size as needed
    height: 250,
    marginBottom: 20, // Space between the Lottie animation and the title
  },
});