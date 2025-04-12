import React from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.profileContainer}>
      <Text style={styles.profileTitle}>My Profile</Text>

      {/* Personal Health Info */}
      <ProfileButton icon={<Ionicons name="person-circle-outline" size={28} color="blue" />} title="My Information" />
      <ProfileButton icon={<FontAwesome5 name="pills" size={24} color="blue" />} title="Prescriptions" />
      <ProfileButton icon={<FontAwesome5 name="stethoscope" size={24} color="blue" />} title="Examinations" />
      <ProfileButton icon={<MaterialIcons name="assignment-turned-in" size={28} color="blue" />} title="Referrals" />
      <ProfileButton icon={<FontAwesome5 name="syringe" size={24} color="blue" />} title="Vaccinations" />
      <ProfileButton icon={<Ionicons name="document-text-outline" size={28} color="blue" />} title="Documents" />

      {/* Account Settings */}
      <Text style={styles.sectionTitle}>Account & Settings</Text>
      <ProfileButton icon={<Ionicons name="key-outline" size={28} color="purple" />} title="Login Methods" />
      <ProfileButton icon={<Ionicons name="eye-off-outline" size={28} color="purple" />} title="Privacy Controls" />
      <ProfileButton icon={<Ionicons name="accessibility-outline" size={28} color="purple" />} title="Accessibility Settings" />
      <ProfileButton icon={<Ionicons name="notifications-outline" size={28} color="purple" />} title="Language & Notifications" />

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.replace('Login')}>
        <Ionicons name="log-out-outline" size={24} color="white" />
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
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

const styles = StyleSheet.create({
  profileContainer: {
    padding: 20,
    backgroundColor: '#f7f6fb',
    alignItems: 'center',
  },
  profileTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1e3a8a',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    alignSelf: 'flex-start',
    color: '#1e3a8a',
  },
  profileButton: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileButtonText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logoutButton: {
    marginTop: 20,
    flexDirection: 'row',
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 16,
  },
});
