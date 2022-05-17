import React from 'react';
import {SafeAreaView,View,Text,TextInput,TouchableOpacity,Image} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import InputField from './InputField';
import CustomButton from './CustomButton';


const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View>
      <Text style={{
        fontWeight:'500',
        fontSize:44,
        fontStyle:'normal',
        color:'#7D3C98',
        alignSelf:'center',
      }}
      >ThinkUp</Text>
      </View>
      <View style={{alignItems: 'center'}}>
      <Image style={{marginBottom:20,height:300,width:300,}} source={require("./assets/images/loginpic1.png")} />
      <Text
          style={{
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Login
        </Text>
        </View>
      <View style={{paddingHorizontal: 25}}>

  

        <InputField
          label={'Username'}
          icon={
            <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          keyboardType="email-address"
        />

<InputField
          label={'Password'}
          icon={
            <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          inputType="password"
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => {}}
        />
        
        <CustomButton label={"Login"} onPress={() => navigation.navigate('MainScreen')} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;