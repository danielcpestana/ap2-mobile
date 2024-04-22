import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1D1D1D',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 30
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        color: '#3985CD'
        
        
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#4877A2',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#C5C5C5'
    },
    button: {
        backgroundColor: '#3985CD',
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
    },
    errorMessage: {
        color: 'red',
        marginTop: 10,
    },
    studentItem: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: '#C5C5C5'
    },
});

export default styles;
