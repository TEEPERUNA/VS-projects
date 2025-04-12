import React from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';  // 👈 ADD THIS

export default function AppointmentsScreen() {
  const navigation = useNavigation(); // 👈 ADD THIS

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Appointments</Text>

      <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
      <View style={styles.card}>
        <Text style={styles.appointmentText}>Dental Checkup</Text>
        <Text style={styles.appointmentDetails}>Tuesday, 10:00 AM</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Reschedule</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.confirmButton}>
          <Ionicons name="call-outline" size={24} color="white" />
          <Text style={styles.confirmButtonText}>Confirm Phone Appointment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cancelButton}>
          <Ionicons name="close-circle-outline" size={24} color="white" />
          <Text style={styles.cancelButtonText}>Cancel Appointment</Text>
        </TouchableOpacity>

        <Text style={styles.noteText}>
          You have 1 hour to confirm before it automatically cancels.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>New Appointment</Text>
      <FeatureButton title="Book Medical Appointment" icon={<Ionicons name="medkit-outline" size={28} color="blue" />} />
      <FeatureButton title="Book Dental Appointment" icon={<Ionicons name="happy-outline" size={28} color="blue" />} />
      <FeatureButton title="Book Mental Health Appointment" icon={<Ionicons name="heart-outline" size={28} color="blue" />} />

      <Text style={styles.sectionTitle}>Chat History</Text>
      <FeatureButton title="View Past Chats" icon={<Ionicons name="chatbubbles-outline" size={28} color="purple" />} />
      <FeatureButton title="Start New Chat" icon={<Ionicons name="chatbox-ellipses-outline" size={28} color="purple" />} />

      <Text style={styles.sectionTitle}>Chat & Phone Communication</Text>
      <FeatureButton title="Book Chat Appointment" icon={<Ionicons name="chatbubble-ellipses-outline" size={28} color="green" />} />
      <FeatureButton title="Leave a Message (if busy)" icon={<Ionicons name="chatbox-ellipses-outline" size={28} color="green" />} />
      <FeatureButton title="Live Chat Queue: See Your Position" icon={<Ionicons name="time-outline" size={28} color="orange" />} />
      <FeatureButton title="Manage SMS/Email Reminders" icon={<Ionicons name="notifications-outline" size={28} color="purple" />} />

      {/* 🔥 Log Out Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.replace('Login')}>
        <Ionicons name="log-out-outline" size={24} color="white" />
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

function FeatureButton({ title, icon }) {
  return (
    <TouchableOpacity style={styles.featureButton}>
      {icon}
      <Text style={styles.featureButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1e3a8a',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'flex-start',
    color: '#1e3a8a',
  },
  card: {
    backgroundColor: '#f0f0f0',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  appointmentText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  appointmentDetails: {
    fontSize: 16,
    color: 'gray',
    marginVertical: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  actionButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 8,
    flex: 0.45,
    alignItems: 'center',
  },
  actionButtonText: {
    fontWeight: '600',
  },
  confirmButton: {
    marginTop: 10,
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmButtonText: {
    marginLeft: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  cancelButton: {
    marginTop: 10,
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    marginLeft: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  noteText: {
    marginTop: 10,
    color: 'gray',
    fontStyle: 'italic',
    fontSize: 14,
  },
  featureButton: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureButtonText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  logoutButton: {
    marginTop: 30,
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  logoutButtonText: {
    marginLeft: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
