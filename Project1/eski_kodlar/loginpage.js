import {
    StyleSheet, Text, View,
    TextInput, Pressable, Image
  } from 'react-native';
  
  import React, { useState } from 'react';
  
  import { Loading, CustomTextInput, CustomButton } from '../components/';
  
  
  import { useSelector, useDispatch } from 'react-redux'
  
  
  import { setEmail, setPassword, setIsLoading} from '../redux/userSlice';
  
  import { login } from '../redux/userSlice';
  
  const LoginPage = ({ navigation }) => {
  
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    /*
    const [result, setResult] = useState('')
    const [isLoading, setIsLoading] = useState(false)
   */
  
    //userSlice içindeki verilerin okunması
    const {isLoading} = useSelector((state)=>state.user)
    
    console.log("Email: ",email)
    console.log("Password: ",password)
    console.log("Loading: ",isLoading)
  
    //userSlice içindeki verileri kullanma veya veri gönderme
    const dispatch = useDispatch()
  
  
  
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome</Text>
  
        <Image
          source={require('../../assest/images/login.jpg')}
          style={styles.image} />
  
        <CustomTextInput title="Email"
          isSecureText={false}
          handleOnChangeText={(text)=>dispatch(setEmail(text))}
          handleValue={email}
          handlePlaceholder="Enter Your Email" />
        <CustomTextInput title="Password"
          isSecureText={false}
          handleOnChangeText={(password)=>dispatch(setPassword(password))}
          handleValue={password}
          handlePlaceholder="Enter Your Password" />
  
      <CustomButton
      buttonText="Login"
      setWidth="80%"
      handleOnPress={()=>dispatch(login({email,password}))}
      buttonColor="red"
      pressedButtonColor="gray"/>
  
    <CustomButton
      buttonText="Sign Up"
      setWidth="30%"
      handleOnPress={()=>navigation.navigate('Hesap Aç')}
      buttonColor="red"
      pressedButtonColor="gray"/>
  
  
        {isLoading ? <Loading
          name="ButtonName"
          changeIsLoading={() => dispatch(setIsLoading(false))} /> : null}
  
  
      </View>
    );
  }
  
  
  export default LoginPage;
  
  const styles = StyleSheet.create({
    inputBoxText: {
      color: 'black',
      fontWeight: 'bold', alignSelf: 'flex-start'
    },
    container: {
      flex: 1,
      backgroundColor: '#ffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputContainer: {
      width: '80%',
      borderWidth: 0,
    }
    ,
    textInputStyle: {
      borderWidth: 0,
      borderBottomWidth: 0.5,
      width: '100%',
      height: 50,
      borderRadius: 10,
      marginVertical: 10,
      textAlign: 'center',
      color: 'blue',
      fontWeight: 'bold'
    },
    button: {
      width: '80%',
      height: 50,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'lightblue',
      marginTop: 20,
    },
    buttonText: {
      fontWeight: 'bold',
      color: 'white'
    },
    image: {
      width: 150,
      height: 150,
      marginBottom: 20,
    },
    welcome: {
      fontWeight: 'bold',
      fontSize: 26,
      marginBottom: 30,
    },
    signInUpButton: {
      width: '30%',
      height: 50,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'lightblue',
      color: 'gray'
    },
  });
  
  
  //keyboardType='numeric' , klavye tipi
  //onPress={()=>setResult(name + " " + lastName)}
  
  /*
  npm install
  @react-native-async-storage/async-storage
  */