import React from "react";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });  
  const mapbox = require('./MapboxCustomPins.html'); 

  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#e8ecf4'}}>
      <iframe src={mapbox }></iframe>
    </SafeAreaView>
    );
  }

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