import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Title from './src/components/Title';
import Form from './src/components/Form';
import StudentsList from './src/components/Form';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Form">
        <Stack.Screen
          name="Form"
          component={Form}
          options={{ title: 'Adicionar Aluno' }}
        />
        <Stack.Screen
          name="StudentsList"
          component={StudentsList}
          options={{ title: 'Alunos Registrados' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: 80,
  },
});
