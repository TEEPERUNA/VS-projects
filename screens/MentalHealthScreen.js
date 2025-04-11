import React from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MentalHealthScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.mentalHealthContainer}>
      <Text style={styles.mentalHealthTitle}>Mental Health Hub</Text>

      <Text style={styles.sectionTitle}>Self-Care</Text>
      <FeatureButton title="Breathing Exercises" icon={<Ionicons name="cloud-outline" size={28} color="purple" />} />
      <FeatureButton title="Guided Meditation" icon={<Ionicons name="musical-notes-outline" size={28} color="purple" />} />
      <FeatureButton title="Read Articles" icon={<Ionicons name="book-outline" size={28} color="purple" />} />

      <Text style={styles.sectionTitle}>Crisis Help</Text>
      <FeatureButton title="Emergency Chat" icon={<Ionicons name="call-outline" size={28} color="red" />} />
      <FeatureButton title="Build Your Safety Plan" icon={<Ionicons name="shield-checkmark-outline" size={28} color="red" />} />

      <Text style={styles.sectionTitle}>Group Activities</Text>
      <FeatureButton title="Join Stress Workshops" icon={<Ionicons name="people-outline" size={28} color="green" />} />
      <FeatureButton title="Mindfulness Sessions" icon={<Ionicons name="leaf-outline" size={28} color="green" />} />

      <Text style={styles.sectionTitle}>Private Mood Journal</Text>
      <FeatureButton title="Write Today's Mood" icon={<Ionicons name="document-text-outline" size={28} color="gray" />} />

      <Text style={styles.sectionTitle}>Daily Mood Reminder</Text>
      <Text style={styles.moodReminderText}>"You look great today!"</Text>
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
  mentalHealthContainer: {
    padding: 20,
    backgroundColor: '#f7f6fb', // very soft purple background
    alignItems: 'center',
  },
  mentalHealthTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4B0082', // dark purple text
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'flex-start',
    color: '#4B0082',
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
  moodReminderText: {
    marginTop: 10,
    fontSize: 16,
    fontStyle: 'italic',
    color: 'gray',
  },
});
