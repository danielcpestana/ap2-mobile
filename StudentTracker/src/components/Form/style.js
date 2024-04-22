import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   formContext: {
     flex: 1,
     backgroundColor: '#1A2C3D',
     alignItems: 'center',
     borderTopLeftRadius: 30,
     borderTopRightRadius: 30,
     paddingTop: 30,
   },
   form: {
     width: '100%',
   },
   formLabel: {
     color: '#ffffff',
     fontSize: 18,
     paddingLeft: 20,
     marginBottom: 10,
   },
   input: {
     width: '90%',
     borderRadius: 50,
     height: 40,
     backgroundColor: '#3C454D',
     margin: 12,
     paddingLeft: 10,
     color: '#ffffff',
   },
   ButtonCalculator: {
     borderRadius: 50,
     alignItems: 'center',
     justifyContent: 'center',
     width: '90%',
     backgroundColor: '#3985CD',
     paddingVertical: 14,
     marginVertical: 30,
   },
   textbuttonCalculator: {
     fontSize: 24,
     color: '#ffffff',
   },
   resultImcItem: {
     backgroundColor: '#3C454D',
     padding: 10,
     borderRadius: 8,
     marginBottom: 10,
     width: '90%',
   },
   textResultItemList: {
     fontSize: 16,
     color: '#ffffff',
   },
   listImcs: {
     marginTop: 20,
     width: '100%',
   },
 });

export default styles