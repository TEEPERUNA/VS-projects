import React from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function GroupsScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Group Activities</Text>

      <Text style={styles.sectionTitle}>Browse Groups</Text>
      <FeatureButton title="Stress Support Groups" icon={<Ionicons name="happy-outline" size={28} color="green" />} />
      <FeatureButton title="Social Groups" icon={<Ionicons name="people-outline" size={28} color="green" />} />
      <FeatureButton title="Academic Support" icon={<Ionicons name="school-outline" size={28} color="green" />} />
      <FeatureButton title="Physical Health Activities" icon={<Ionicons name="fitness-outline" size={28} color="green" />} />

      <Text style={styles.sectionTitle}>Join Sessions</Text>
      <FeatureButton title="Join Virtual Session" icon={<Ionicons name="videocam-outline" size={28} color="purple" />} />
      <FeatureButton title="Join In-Person Session" icon={<Ionicons name="map-outline" size={28} color="purple" />} />

      <Text style={styles.sectionTitle}>Your Groups</Text>
      <FeatureButton title="My Workshops" icon={<Ionicons name="clipboard-outline" size={28} color="blue" />} />
      <FeatureButton title="My Wellness Badges" icon={<Ionicons name="ribbon-outline" size={28} color="blue" />} />
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
});
