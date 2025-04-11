import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default function MoodTrackerScreen({ navigation }) {
  const [selectedMood, setSelectedMood] = useState(null);
  const [energyLevel, setEnergyLevel] = useState(5);

  const moods = [
    { emoji: '😊', label: 'Happy' },
    { emoji: '😐', label: 'Okay' },
    { emoji: '😟', label: 'Anxious' },
    { emoji: '😢', label: 'Sad' },
    { emoji: '😡', label: 'Angry' },
    { emoji: '💤', label: 'Exhausted' },
    { emoji: '🥳', label: 'Excited' },
  ];

  const saveMood = () => {
    if (!selectedMood) {
      alert('Please select your mood!');
      return;
    }
    alert(`Mood: ${selectedMood}, Energy: ${energyLevel}/10 \n Saved successfully!`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Log Mood</Text>

      <Text style={styles.subtitle}>How is your mood today?</Text>
      <View style={styles.moodRow}>
        {moods.map((mood, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.moodButton, selectedMood === mood.label && styles.selectedMood]}
            onPress={() => setSelectedMood(mood.label)}
          >
            <Text style={styles.moodEmoji}>{mood.emoji}</Text>
            <Text style={styles.moodLabel}>{mood.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.subtitle}>How is your energy level today?</Text>
      <Slider
        style={{ width: '90%', height: 40 }}
        minimumValue={1}
        maximumValue={10}
        step={1}
        value={energyLevel}
        onValueChange={setEnergyLevel}
        minimumTrackTintColor="#34D399"
        maximumTrackTintColor="#000000"
      />
      <Text style={{ marginVertical: 10 }}>{energyLevel}/10</Text>

      <TouchableOpacity style={styles.saveButton} onPress={saveMood}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
  moodRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  moodButton: {
    alignItems: 'center',
    margin: 10,
    padding: 10,
  },
  selectedMood: {
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 10,
  },
  moodEmoji: {
    fontSize: 30,
  },
  moodLabel: {
    marginTop: 5,
    fontSize: 12,
  },
  saveButton: {
    marginTop: 30,
    backgroundColor: '#34D399',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
