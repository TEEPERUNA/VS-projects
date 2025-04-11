import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Ionicons name="language-outline" size={24} color="black" />
        <View style={styles.languageButtons}>
          <TouchableOpacity><Text style={styles.languageText}>FI</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.languageText}>SV</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.languageText}>EN</Text></TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.mainContent}>
        <Text style={styles.title}>Welcome!</Text>
        <View style={styles.grid}>
          <FeatureButton icon={<FontAwesome5 name="calendar-plus" size={28} color="green" />} title="Book Appointment" />
          <FeatureButton icon={<Ionicons name="chatbubble-ellipses-outline" size={28} color="green" />} title="Start Chat" />
          <FeatureButton icon={<FontAwesome5 name="smile" size={28} color="green" />} title="Mood Tracker" />
        </View>

        <Text style={styles.subtitle}>Upcoming Appointment</Text>
        <View style={styles.card}>
          <Text>Dental Checkup</Text>
          <Text>Tuesday 10:00 AM</Text>
          <TouchableOpacity><Text style={styles.viewAll}>View All</Text></TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>Mental Health Tip</Text>
        <View style={styles.card}>
          <Text>"Take 5 minutes today to breathe deeply and relax."</Text>
        </View>
      </ScrollView>

      {/* Chat Bubble */}
      <TouchableOpacity style={styles.chatButton}>
        <Ionicons name="chatbubble-ellipses" size={28} color="white" />
      </TouchableOpacity>

      {/* Emergency Button */}
      <TouchableOpacity style={styles.emergencyButton}>
        <Text style={styles.emergencyText}>Need Immediate Help?</Text>
      </TouchableOpacity>
    </View>
  );
}

function AppointmentsScreen() {
  return (
    <View style={styles.center}><Text>Appointments Page</Text></View>
  );
}

function MentalHealthScreen() {
  return (
    <View style={styles.center}><Text>Mental Health Hub</Text></View>
  );
}

function GroupsScreen() {
  return (
    <View style={styles.center}><Text>Groups Page</Text></View>
  );
}

function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.profileContainer}>
      <Text style={styles.profileTitle}>My Profile</Text>

      <ProfileButton icon={<Ionicons name="person-circle-outline" size={28} color="green" />} title="My Information" />
      <ProfileButton icon={<FontAwesome5 name="pills" size={24} color="green" />} title="Prescriptions" />
      <ProfileButton icon={<FontAwesome5 name="stethoscope" size={24} color="green" />} title="Examinations" />
      <ProfileButton icon={<MaterialIcons name="assignment-turned-in" size={28} color="green" />} title="Referrals" />
      <ProfileButton icon={<FontAwesome5 name="syringe" size={24} color="green" />} title="Vaccinations" />
      <ProfileButton icon={<Ionicons name="document-text-outline" size={28} color="green" />} title="Documents" />
    </ScrollView>
  );
}

function ProfileButton({ icon, title }) {
  return (
    <TouchableOpacity style={styles.profileButton}>
      {icon}
      <Text style={styles.profileButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

function FeatureButton({ icon, title }) {
  return (
    <TouchableOpacity style={styles.featureButton}>
      {icon}
      <Text style={styles.featureText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ color }) => (<Ionicons name="home-outline" size={24} color={color} />) }} />
        <Tab.Screen name="Appointments" component={AppointmentsScreen} options={{ tabBarIcon: ({ color }) => (<FontAwesome5 name="calendar-check" size={22} color={color} />) }} />
        <Tab.Screen name="Mental Health" component={MentalHealthScreen} options={{ tabBarIcon: ({ color }) => (<Ionicons name="happy-outline" size={24} color={color} />) }} />
        <Tab.Screen name="Groups" component={GroupsScreen} options={{ tabBarIcon: ({ color }) => (<FontAwesome5 name="users" size={24} color={color} />) }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: ({ color }) => (<Ionicons name="person-outline" size={24} color={color} />) }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBar: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  languageButtons: {
    flexDirection: 'row',
  },
  languageText: {
    marginHorizontal: 5,
    fontWeight: '600',
  },
  mainContent: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureButton: {
    width: '47%',
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  featureText: {
    marginTop: 10,
    fontWeight: '600',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#e0f7e9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  viewAll: {
    marginTop: 10,
    color: 'blue',
  },
  chatButton: {
    position: 'absolute',
    bottom: 90,
    right: 20,
    backgroundColor: '#34D399',
    padding: 18,
    borderRadius: 50,
    elevation: 5,
  },
  emergencyButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  emergencyText: {
    color: 'white',
    fontWeight: 'bold',
  },
  profileContainer: {
    padding: 20,
    alignItems: 'center',
  },
  profileTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  profileButtonText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  
});
