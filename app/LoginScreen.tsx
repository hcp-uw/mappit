import React from "react";
import { View, TextInput, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from 'expo-router';


const LoginScreen = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });  

  const router = useRouter();


  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#e8ecf4'}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image 
            source={{ uri: 'https://withfra.me/android-chrome-512x512.png'}}
            style={styles.headerImg}
            alt="Logo"
            />
          <Text style={styles.title}>Mappit.</Text>
          <Text style={styles.subtitle}>Connect with friends</Text>
        </View>
        
        <View style={styles.form}>
          <View style={styles.input}> 
            <Text style={styles.inputLabel}>Username</Text>
            <TextInput 
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType="email-address"
              style={styles.inputControl} 
              placeholder="username"
              placeholderTextColor="#6b7280"
              onChangeText={email => setForm({...form, email})} 
              value={form.email}
            />
          </View>

          <View style={styles.input}> 
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput 
              secureTextEntry
              autoCorrect={false}
              autoCapitalize='none'
              style={styles.inputControl} 
              placeholder="**********"
              placeholderTextColor="#6b7280"
              onChangeText={password => setForm({...form, password})} 
              value={form.password}
            />
          </View>

          <View style={styles.formAction} >
            <TouchableOpacity 
              onPress={() => 
                router.replace('/HomeScreen')
              }>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
              onPress={() => {
                alert('Create Account');
              }}
              style={{marginTop: 'auto'}}>
              <Text style={styles.formFooter}>Don't have an account? <Text style={{textDecorationLine: 'underline'}}>Sign up</Text>
              </Text>
            </TouchableOpacity>
        </View>
        
      </View>
    </SafeAreaView>
    );
  }

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1
  },
  header: {
    marginVertical: 36,
  },
  headerImg: {
    width:80,
    height:80,
    alignSelf: 'center',
    marginBottom: 36,
  }, 
  title: {
    fontSize: 27,
    fontWeight: '600',
    color: '#1e1e1e',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center'
  },
  form: {
    marginBottom: 24,
    flex: 1,

  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  btn: {
    backgroundColor: '#075eec',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#075eec',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,

  },

})