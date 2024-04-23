import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    
  },
  label: {
    fontSize: 21,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#4D9CD9',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#929292'
  },
  button: {
    backgroundColor: '#4D9CD9',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  navigationButton: {
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
  },
  navigationButtonText: {
    color: '#007BFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  studentItem: {
    marginBottom: 10,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    marginTop: 10,
  },
});

export default styles;
