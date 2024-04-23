import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function StudentsList({ navigation, studentsList }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Alunos Registrados</Text>
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
            <TouchableOpacity
                style={styles.navigationButton}
                onPress={() => navigation.navigate('Form')}
            >
                <Text style={styles.navigationButtonText}>Voltar para Adicionar Aluno</Text>
            </TouchableOpacity>
        </View>
    );
}
