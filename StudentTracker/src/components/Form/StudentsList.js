import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useStudentContext } from './StudentContext';
import styles from './styles';

const StudentsList = ({ navigation }) => {
  const { students } = useStudentContext();

  return (
    <View style={styles.container}>
      
      <FlatList
        data={students}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.studentItem}>
            <Text>Matrícula: {item.registration}</Text>
            <Text>Nome: {item.name}</Text>
            <Text>Média: {item.average}</Text>
            <View style={styles.divider} />
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.navigationButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.navigationButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StudentsList;
