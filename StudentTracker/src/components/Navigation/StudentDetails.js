
import React from 'react';
import { View, Text } from 'react-native';

const StudentDetails = ({ route }) => {
  const { student } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Detalhes do Aluno</Text>
      <Text>Matrícula: {student.registration}</Text>
      <Text>Nome: {student.name}</Text>
      <Text>Média: {student.average}</Text>
    </View>
  );
};

export default StudentDetails;
