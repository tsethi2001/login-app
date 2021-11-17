import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../firebase'
import RegisterScreen from './RegisterScreen'
const HomeScreen = ({props}) => {
   
      const navigation = useNavigation()
    
      const handleSignOut = () => {
        auth
          .signOut()
          .then(() => {
            navigation.replace("Login")
          })
          .catch(error => alert(error.message))
      }
    
      return (
        <View style={styles.container}>
            <Text style={{fontWeight:"bold",fontSize:20}}>Welcome to the Home Screen</Text>
            <View style={{height:100}}/>
            
          <Text>Email: {auth.currentUser?.email}</Text>
          <TouchableOpacity
            onPress={handleSignOut}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Sign out</Text>
          </TouchableOpacity>
        </View>
      )
    }
    
    export default HomeScreen
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
       button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,
      },
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },
    })
    


