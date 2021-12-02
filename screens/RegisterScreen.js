import React from 'react'
import { StyleSheet, Text, View ,KeyboardAvoidingView,TouchableOpacity,TextInput,Image} from 'react-native'

import { useState } from 'react'

import { auth } from '../firebase'
import * as firebase from "firebase"



const RegisterScreen = () => {
   // const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
const[names,setName]=useState('')

//  const nameChangeHandler=(props)=>{
//      setName(props)
//  }

const handleSignUp=()=>{
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });

}
return(
<KeyboardAvoidingView
style={styles.container}
behavior="padding"
>
<Image
          source={{
            uri: "https://thumbs.dreamstime.com/thumblarge_803/8031433.jpg",
          }}
          style={{ width: 200, height: 200 }}
        />
<View style={styles.inputContainer}>

  <TextInput
    placeholder="Email"
    value={email}
    onChangeText={text => setEmail(text)}
    style={styles.input}
  />
  <TextInput
    placeholder="Password"
    value={password}
    onChangeText={text => setPassword(text)}
    style={styles.input}
    secureTextEntry
  />
</View>

<View style={styles.buttonContainer}>
  
  <TouchableOpacity
    onPress={handleSignUp}
    style={[styles.button, styles.buttonOutline]}
  >
    <Text style={styles.buttonOutlineText}>Register</Text>
  </TouchableOpacity>
  <View style={{height:100}}/>
  <Text style={styles.text}>Note-
      Please fill a genuine Email-id and password with 8 or more than 8 characters.
  </Text>
</View>
</KeyboardAvoidingView>
)
}


export default RegisterScreen

const styles = StyleSheet.create({ container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
text:{
    fontSize:15,
    textAlign:"left"
}
})
