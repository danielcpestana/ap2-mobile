import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Form({ navigation }) {
    const [registration, setRegistration] = useState('');
    const [name, setName] = useState('');
    const [average, setAverage] = useState('');
    const [studentsList, setStudentsList] = useState([]);

    function handleAddStudent() {
        if (registration && name && average) {
            const newStudent = {
                registration,
                name,
                average: parseFloat(average),
            };
            setStudentsList([...studentsList, newStudent]);
            setRegistration('');
            setName('');
            setAverage('');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Matrícula</Text>
            <TextInput
                style={styles.input}
                onChangeText={setRegistration}
                value={registration}
                placeholder="Informe a matrícula"
                keyboardType="numeric"
            />
            <Text style={styles.label}>Nome</Text>
            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder="Informe o nome"
            />
            <Text style={styles.label}>Média</Text>
            <TextInput
                style={styles.input}
                onChangeText={setAverage}
                value={average}
                placeholder="Informe a média"
                keyboardType="numeric"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleAddStudent}
            >
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
}
