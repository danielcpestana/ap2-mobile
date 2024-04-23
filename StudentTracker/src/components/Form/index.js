import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useStudentContext } from './StudentContext';
import styles from './styles';

const Form = () => {
  const navigation = useNavigation();
  const { addStudent } = useStudentContext();
  const [registration, setRegistration] = useState('');
  const [name, setName] = useState('');
  const [average, setAverage] = useState('');

  const handleAddStudent = () => {
    if (registration && name && average) {
      const newStudent = {
        registration,
        name,
        average: parseFloat(average),
      };
      addStudent(newStudent);
      setRegistration('');
      setName('');
      setAverage('');
      
      // Navegar para a tela StudentsList após adicionar o aluno
      navigation.navigate('StudentsList');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Matrícula</Text>
      <TextInput
        style={styles.input}
        value={registration}
        onChangeText={setRegistration}
        placeholder="Informe a matrícula"
        keyboardType="numeric"
        maxLength={8}
      />
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Informe o nome"
      />
      <Text style={styles.label}>Média</Text>
      <TextInput
        style={styles.input}
        value={average}
        onChangeText={setAverage}
        placeholder="Informe a média"
        keyboardType="numeric"
        maxLength={3}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddStudent}>
        <Text style={styles.buttonText}>Adicionar Aluno</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
