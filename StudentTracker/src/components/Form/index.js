import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import styles from "./style";

export default function StudentRegistrationForm() {
    const [registration, setRegistration] = useState(null);
    const [name, setName] = useState('');
    const [average, setAverage] = useState(null);
    const [studentsList, setStudentsList] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    function addStudent() {
        if (registration && name && average) {
            setStudentsList([...studentsList, { registration, name, average }]);
            setRegistration(null);
            setName('');
            setAverage(null);
            setErrorMessage('');
        } else {
            setErrorMessage('Por favor, preencha todos os campos.');
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
                onPress={addStudent}
            >
                <Text style={styles.buttonText}>Adicionar Aluno</Text>
            </TouchableOpacity>

            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

            <FlatList
                data={studentsList}
                renderItem={({ item }) => (
                    <View style={styles.studentItem}>
                        <Text>Matrícula: {item.registration}</Text>
                        <Text>Nome: {item.name}</Text>
                        <Text>Média: {item.average}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}
