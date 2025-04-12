import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';  // << Need this!

export default function BookingScreen() {
  const navigation = useNavigation(); // << We'll navigate back to Home
  const [step, setStep] = useState(1); // 1: choose service, 2: pick date, 3: pick doctor
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setStep(2); // Go to date selection
  };

  const handleDateChange = (event, date) => {
    if (date) {
      setSelectedDate(date);
      setStep(3); // After picking date, move to doctors
    }
  };

  // Pressing a doctor => Return to Home
  const handleDoctorPress = (doctorInfo) => {
    console.log('Booked appointment with:', doctorInfo);

    // Navigate back to Home screen inside Main tabs
    navigation.navigate('Main', {
      screen: 'Home',
    });
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

          {/* Pressing these => go back to Home */}
          <TouchableOpacity style={styles.button} onPress={() => handleDoctorPress('Dr. Smith (10:00 AM)')}>
            <Text style={styles.buttonText}>Dr. Smith (10:00 AM)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleDoctorPress('Dr. Johnson (11:30 AM)')}>
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
