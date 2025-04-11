import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import MoodTrackerScreen from './screens/MoodTrackerScreen'; // 👈 Make sure this exists!

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Home Screen
function HomeScreen({ navigation }) {
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
          <FeatureButton icon={<FontAwesome5 name="calendar-plus" size={28} color="blue" />} title="Book Appointment" />
          <FeatureButton icon={<Ionicons name="chatbubble-ellipses-outline" size={28} color="blue" />} title="Start Chat" />
          <FeatureButton 
            icon={<FontAwesome5 name="smile" size={28} color="blue" />} 
            title="Mood Tracker" 
            onPress={() => navigation.navigate('MoodTracker')}
          />
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

// Other Screens
function AppointmentsScreen() {
  return <View style={styles.center}><Text>Appointments Page</Text></View>;
}

function MentalHealthScreen() {
  return <View style={styles.center}><Text>Mental Health Hub</Text></View>;
}

function GroupsScreen() {
  return <View style={styles.center}><Text>Groups Page</Text></View>;
}

function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.profileContainer}>
      <Text style={styles.profileTitle}>My Profile</Text>
      <ProfileButton icon={<Ionicons name="person-circle-outline" size={28} color="blue" />} title="My Information" />
      <ProfileButton icon={<FontAwesome5 name="pills" size={24} color="blue" />} title="Prescriptions" />
      <ProfileButton icon={<FontAwesome5 name="stethoscope" size={24} color="blue" />} title="Examinations" />
      <ProfileButton icon={<MaterialIcons name="assignment-turned-in" size={28} color="blue" />} title="Referrals" />
      <ProfileButton icon={<FontAwesome5 name="syringe" size={24} color="blue" />} title="Vaccinations" />
      <ProfileButton icon={<Ionicons name="document-text-outline" size={28} color="blue" />} title="Documents" />
    </ScrollView>
  );
}

// Button Components
function FeatureButton({ icon, title, onPress }) {
  return (
    <TouchableOpacity style={styles.featureButton} onPress={onPress}>
      {icon}
      <Text style={styles.featureText}>{title}</Text>
    </TouchableOpacity>
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

// Bottom Tabs
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Appointments') {
            iconName = 'calendar-outline';
          } else if (route.name === 'Mental Health') {
            iconName = 'heart-outline';
          } else if (route.name === 'Groups') {
            iconName = 'people-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Appointments" component={AppointmentsScreen} />
      <Tab.Screen name="Mental Health" component={MentalHealthScreen} />
      <Tab.Screen name="Groups" component={GroupsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// App
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main">
          {() => <MainTabs />}
        </Stack.Screen>
        <Stack.Screen name="MoodTracker" component={MoodTrackerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
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
    backgroundColor: '#f0f0f0',
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
    backgroundColor: 'blue',
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
