import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function BookingScreen() {
  const [step, setStep] = useState(1); // 1: choose service, 2: pick date, 3: pick doctor
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setStep(2);  // Go to date selection
  };

  const handleDateChange = (event, date) => {
    if (date) {
      setSelectedDate(date);
      setStep(3);  // After picking date, move to doctors
    }
  };

  return (
    <View style={styles.container}>
      {step === 1 && (
        <>
          <Text style={styles.title}>Choose Appointment Type</Text>
          <TouchableOpacity style={styles.button} onPress={() => handleServiceSelect('Medical')}>
            <Text style={styles.buttonText}>Medical</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleServiceSelect('Dental')}>
            <Text style={styles.buttonText}>Dental</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleServiceSelect('Mental Health')}>
            <Text style={styles.buttonText}>Mental Health</Text>
          </TouchableOpacity>
        </>
      )}

      {step === 2 && (
        <>
          <Text style={styles.title}>Select a Date</Text>
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        </>
      )}

      {step === 3 && (
        <>
          <Text style={styles.title}>Available Doctors on {selectedDate.toDateString()}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Dr. Smith (10:00 AM)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Dr. Johnson (11:30 AM)</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});
