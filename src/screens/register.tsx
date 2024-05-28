import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, Image, ScrollView, Platform, TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [add, setAdd] = useState('');
    const [cep, setCep] = useState('');
    const [password, setPassword] = useState('');

  const handleRegister = () => {
    navigation.navigate('Login', { message: 'Conta registrada com sucesso!' });
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Image source={require('../../assets/25471 1.png')} style={styles.image} />
          <View style={styles.card}>
          <Image source={require('../../assets/Group 4.png')} style={{marginBottom: 40}} />
            <TextInput
                style={styles.input}
                placeholder="Nome Completo"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="CPF"
                value={cpf}
                onChangeText={setCpf}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <View style={{display:'flex', flexDirection: 'row', gap: 10}}>
            <TextInput
              style={styles.inputPraca}
              placeholder="UF"
              value={uf}
              onChangeText={setUf}
            />
            <TextInput
              style={styles.inputPraca}
              placeholder="Cidade"
              value={cidade}
              onChangeText={setCidade}
            />
            </View>
            <TextInput
                style={styles.input}
                placeholder="Endereço Completo"
                value={add}
                onChangeText={setAdd}
            />
            <TextInput
                style={styles.input}
                placeholder="CEP"
                value={cep}
                onChangeText={setCep}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
  card: {
    flex: 1,
    backgroundColor: '#EDE1E1',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: 300,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    textAlign: 'center',
    fontSize: 18
  },
  inputPraca: {
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: 145,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    textAlign: 'center',
    fontSize: 18
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    width: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerText: {
    marginTop: 20,
    color: 'blue',
    textAlign: 'center',
  },
});
export default RegisterScreen;
