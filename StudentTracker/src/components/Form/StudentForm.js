import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
  StyleSheet
} from 'react-native';

import styles from './style';

const StudentForm = () => {
  const [registration, setRegistration] = useState('');
  const [name, setName] = useState('');
  const [average, setAverage] = useState('');
  const [studentsList, setStudentsList] = useState([]);

  const handleAddStudent = () => {
    if (!registration || !name || !average) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const newStudent = {
      id: Date.now(),
      registration,
      name,
      average: parseFloat(average),
    };

    setStudentsList([...studentsList, newStudent]);

    setRegistration('');
    setName('');
    setAverage('');
    Keyboard.dismiss(); // Fecha o teclado após o registro
  };

  return (
    <View style={styles.formContext}>
      <Text style={styles.formLabel}>Registro de Alunos</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Matrícula"
          value={registration}
          onChangeText={text => setRegistration(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={name}
          onChangeText={text => setName(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Média"
          keyboardType="numeric"
          value={average}
          onChangeText={text => setAverage(text)}
        />

        <TouchableOpacity
          style={styles.ButtonCalculator}
          onPress={handleAddStudent}
        >
          <Text style={styles.textbuttonCalculator}>Registrar Aluno</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.listImcs}
        data={studentsList}
        renderItem={({ item }) => (
          <View style={styles.resultImcItem}>
            <Text style={styles.textResultItemList}>Matrícula: {item.registration}</Text>
            <Text style={styles.textResultItemList}>Nome: {item.name}</Text>
            <Text style={styles.textResultItemList}>Média: {item.average}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};



export default StudentForm;
