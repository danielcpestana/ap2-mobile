import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StudentProvider } from './src/components/Form/StudentContext';
import Title from './src/components/Title'; // Importe o componente Title aqui
import Form from './src/components/Form';
import StudentsList from './src/components/Form/StudentsList';

const Stack = createStackNavigator();

const App = () => {
  return (
    <StudentProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Form">
          {/* Adicione a tela Title como parte da navegação */}
          <Stack.Screen
            name="Title"
            component={Title}
            options={{ headerShown: false }} // Esconda o cabeçalho para o título
          />
           <Stack.Screen
            name="Form"
            component={Form}
            options={{
              title: 'StudentTracker',
              headerTitleStyle: {
                fontSize: 45,
                fontWeight: 'bold',
                color: '#3985CD', // Cor do título
                alignItems:"center",
                justifyContent:"center",
                paddingLeft:60
              },
              headerStyle: {
                backgroundColor: 'black', // Cor de fundo do cabeçalho
              },
            }}
          />
          <Stack.Screen
            name="StudentsList"
            component={StudentsList}
            options={{ title: 'Alunos Registrados' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StudentProvider>
  );
};

export default App;
