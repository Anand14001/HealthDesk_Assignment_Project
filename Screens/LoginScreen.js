import LottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import icon set

const LoginScreen = ({ setIsLoggedIn }) => {
  const corporateName = 'Test';
  const username = 'Deepa';
  const password = 'Deepa123';

  const handleLogin = () => {
    if (username === 'Deepa' && password === 'Deepa123') {
      alert('Login Successful');
      setIsLoggedIn(true);
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/doc.json')} // Dynamic Lottie file
        autoPlay
        loop
        style={styles.lottie}
      />
      <Text style={styles.helpText}>Health Desk</Text>
      <Text style={styles.corporateText}>Corporate Login</Text>
      <Text style={styles.welcomeText}>Hi, Welcome back!</Text>

      {/* Corporate Name Field */}
      <View style={styles.inputContainer}>
        <Icon name="building" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Corporate Name"
          value={corporateName}
          editable={false} // Make the field non-editable
        />
      </View>

      {/* Username Field */}
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          editable={false} // Make the field non-editable
        />
      </View>

      {/* Password Field */}
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          editable={false} // Make the field non-editable
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingHorizontal: 20,
  },
  helpText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: -30,
    alignSelf: 'center',
  },
  corporateText: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
    alignSelf: 'center',
  },
  welcomeText: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
    alignSelf: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    elevation: 3,
    borderWidth: 1,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000', // Ensure text is visible
  },
  loginButton: {
    backgroundColor: '#1E3A8A',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  lottie: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
});
