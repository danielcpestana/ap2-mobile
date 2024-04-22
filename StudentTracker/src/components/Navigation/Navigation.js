
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StudentForm from '../Form/StudentForm.js';
import StudentDetails from './StudentDetails.js';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StudentForm">
        <Stack.Screen name="StudentForm" component={StudentForm} options={{ title: 'Registro de Alunos' }} />
        <Stack.Screen name="StudentDetails" component={StudentDetails} options={{ title: 'Detalhes do Aluno' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
