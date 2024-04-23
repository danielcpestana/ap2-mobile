import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useStudentContext } from './StudentContext';
import styles from './styles';

const Form = ({ navigation }) => {
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
      alert('Aluno adicionado com sucesso!');
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
      />
      <TouchableOpacity style={styles.button} onPress={handleAddStudent}>
        <Text style={styles.buttonText}>Adicionar Aluno</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navigationButton}
        onPress={() => navigation.navigate('StudentsList')}
      >
        <Text style={styles.navigationButtonText}>Ver Alunos Registrados</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
