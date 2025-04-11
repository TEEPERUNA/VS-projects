import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AppointmentsScreen({ navigation }) {
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
          <Text style={styles.noteText}>You have 1 hour to confirm before it automatically cancels.</Text>
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
    </ScrollView>
  );

  
}

function FeatureButton({ icon, title }) {
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
    backgroundColor: '#f7f6fb',
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
    width: '100%',
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  appointmentText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  appointmentDetails: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: '#4B0082',
    padding: 10,
    borderRadius: 10,
  },
  actionButtonText: {
    color: 'white',
    fontWeight: 'bold',
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
  confirmButton: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 10,
  },
  confirmButtonText: {
    marginLeft: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  noteText: {
    marginTop: 10,
    fontSize: 14,
    color: 'gray',
    fontStyle: 'italic',
  },
  confirmButton: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 10,
  },
  confirmButtonText: {
    marginLeft: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cancelButton: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 10,
  },
  cancelButtonText: {
    marginLeft: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  noteText: {
    marginTop: 10,
    fontSize: 14,
    color: 'gray',
    fontStyle: 'italic',
  },
  
});
