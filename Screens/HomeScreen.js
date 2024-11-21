import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // For notification icon
import LottieView from 'lottie-react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Custom Header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>Hi Deepa!</Text>
          <TouchableOpacity>
            <MaterialIcons name="notifications" size={24} color="white" />
          </TouchableOpacity>
        </View>
        {/* Plan Section */}
        <View style={styles.planContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View>
              <Text style={styles.planTitle}>Individual Plan</Text>
              <Text>Book your health checkup</Text>
            </View>
            <LottieView
              source={require('../assets/doctor.json')} // Ensure the path is correct
              autoPlay
              loop
              style={styles.lottieAnimation}
            />
          </View>
          <TouchableOpacity>
          <Text style={{ fontWeight: 'bold', color: '#1E3A8A' }}>Know our benefits ></Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.scrollView}>
        

        {/* Our Services Section */}
        <Text style={styles.servicesTitle}>Our Services</Text>

        {/* Horizontal ScrollView for services */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.servicesContainer}
        >
          {/* Service Options */}
          <TouchableOpacity style={styles.serviceItem} onPress={() => navigation.navigate('Appointment')}>
            <Image source={require('../assets/find_doctor.png')} style={styles.serviceImage} />
            <Text style={styles.serviceText}>Find a Doctor</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.serviceItem}>
            <Image source={require('../assets/book_labtest.jpeg')} style={styles.serviceImage} />
            <Text style={styles.serviceText}>Book a Lab Test</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.serviceItem}>
            <Image source={require('../assets/health_tracker.jpeg')} style={styles.serviceImage} />
            <Text style={styles.serviceText}>Health Tracker</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.serviceItem}>
            <Image source={require('../assets/activity_tracker.jpeg')} style={styles.serviceImage} />
            <Text style={styles.serviceText}>Activity Tracker</Text>
          </TouchableOpacity>
        </ScrollView>

         {/* Annual Health Check Section */}
         <View style={styles.healthCheckContainer}>
          <View style={styles.healthCheckContent}>
            <Text style={styles.healthCheckTitle}>Annual Health Check</Text>

            {/* 2x2 Format Points */}
            <View style={styles.pointsContainer}>
              <View style={styles.pointItem}>
                <Text style={styles.pointText}>* Diabetes</Text>
              </View>
              <View style={styles.pointItem}>
                <Text style={styles.pointText}>* Thyroid</Text>
              </View>
              <View style={styles.pointItem}>
                <Text style={styles.pointText}>* Heart</Text>
              </View>
              <View style={styles.pointItem}>
                <Text style={styles.pointText}>* Kidney</Text>
              </View>
            </View>

            {/* Book Now Button */}
            <TouchableOpacity style={styles.bookNowButton}>
              <Text style={styles.buttonText}>Book Now</Text>
            </TouchableOpacity>
          </View>

          {/* Lottie Animation */}
          <LottieView
            source={require('../assets/checkup.json')} // Ensure the path is correct
            autoPlay
            loop
            style={styles.lottieAnimationCheckup}
          />
        </View>

         {/* Quick Access Section */}
         <Text style={styles.quickAccessTitle}>Quick Access</Text>
        <View style={styles.quickAccessContainer}>
          <TouchableOpacity style={styles.quickAccessItem}>
            <MaterialIcons name="person" size={30} color="#1E3A8A" />
            <Text style={styles.quickAccessText}>My Doctors</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickAccessItem}>
            <MaterialIcons name="calendar-today" size={30} color="#1E3A8A" />
            <Text style={styles.quickAccessText}>Create Appointment</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickAccessItem}>
            <MaterialIcons name="assignment" size={30} color="#1E3A8A" />
            <Text style={styles.quickAccessText}>My Reports</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  headerContainer: {
    backgroundColor: '#1E3A8A', // Dark Blue
    paddingTop: 40, // For status bar space
    paddingHorizontal: 20,
    paddingBottom: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 20,
    height: 180, // Adjust for fixed header height
    position: 'absolute', // Fix header at top
    top: 0, // Stay at the top of the screen
    width: '100%', // Full width of the screen
    zIndex: 1, // Ensure it stays above other elements
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:20
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollView: {
    marginTop: '80%', // Add space for the header
    paddingHorizontal: 20,
  },
  planContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
    justifyContent: 'space-between',
    elevation: 4,
    marginBottom: 20,
  },
  planTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  lottieAnimation: {
    width: 150,
    height: 150,
  },
  servicesTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E3A8A',
  },
  servicesContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  serviceItem: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#ffff',
    borderRadius: 10,
    elevation: 3,
  },
  serviceImage: {
    width: 70,
    height: 100,
    marginBottom: 10,
  },
  serviceText: {
    fontWeight: 'bold',
    color: '#1E3A8A',
  },
  healthCheckContainer: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    elevation: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:20
  },
  healthCheckContent: {
    flex: 1,
  },
  healthCheckTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 10,
  },
  pointsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  pointItem: {
    width: '48%', 
    marginBottom: 10,
  },
  pointText: {
    fontSize: 14,
    color: '#333',
  },
  bookNowButton: {
    backgroundColor: '#1E3A8A',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  lottieAnimationCheckup: {
    width: 100,
    height: 100,
  },
  quickAccessTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginTop: 30,
    marginBottom: 10,
  },
  quickAccessContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom:20
  },
  quickAccessItem: {
    width: 100,
    height: 100,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    elevation: 3,
  },
  quickAccessText: {
    marginTop: 10,
    fontWeight: 'bold',
    color: '#1E3A8A',
    textAlign: 'center',
  },
});
