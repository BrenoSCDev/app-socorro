import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Pressable } from 'react-native';
import Toast from 'react-native-toast-message';

const HomeScreen = ({ route }) => {
  useEffect(() => {
    if (route.params?.message) {
      Toast.show({
        type: 'success',
        text1: route.params.message,
      });
    }
  }, [route.params?.message]);

  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
       <View style={styles.card}>
       <Image source={require('../../assets/policial.png')} style={styles.image} />
       <View style={{alignItems: "center"}}>
            <Text style={styles.emergTxt}>POLÍCIA</Text>
            <TouchableOpacity style={styles.button} onPress={handleOpenModal}>
              <Text style={styles.buttonText}>Enviar Ajuda</Text>
            </TouchableOpacity>
       </View>
        </View>
        <View style={styles.card}>
        <Image source={require('../../assets/medica.png')} style={styles.image} />
        <View style={{alignItems: "center"}}>
            <Text style={styles.emergTxt}>SAMU</Text>
            <TouchableOpacity style={styles.button} onPress={handleOpenModal}>
              <Text style={styles.buttonText}>Enviar Ajuda</Text>
            </TouchableOpacity>    
        </View>
        </View>
        <View style={styles.card}>
        <Image source={require('../../assets/mulherpoli.png')} style={styles.image} />
        <View style={{alignItems: "center"}}>
            <Text style={styles.emergTxt}>DEL. MULHER</Text>
            <TouchableOpacity style={styles.button} onPress={handleOpenModal}>
              <Text style={styles.buttonText}>Enviar Ajuda</Text>
            </TouchableOpacity>    
        </View>
        </View>
        <View style={styles.card}>
        <Image source={require('../../assets/bombeiro.png')} style={styles.image} />
        <View style={{alignItems: "center"}}>
            <Text style={styles.emergTxt}>BOMBEIROS</Text>
            <TouchableOpacity style={styles.button} onPress={handleOpenModal}>
              <Text style={styles.buttonText}>Enviar Ajuda</Text>
            </TouchableOpacity>    
        </View>
        </View>
      <Toast />
      <Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={handleCloseModal}
>
  <View style={styles.centeredView}>
    <View style={styles.modalView}>
      <Text style={styles.modalText}>Ajuda solicitada para sua localização!</Text>
      <Pressable
        style={[styles.button, styles.modalButton]}
        onPress={handleCloseModal}
      >
        <Text style={styles.buttonText}>Fechar</Text>
      </Pressable>
    </View>
  </View>
</Modal>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
  card: {
    height: 170,
    width: 370,
    backgroundColor: '#EDE1E1',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row'
  },
  image: {
    height: 150,
    width: 150
  },
  emergTxt: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FE34348F'
  },
  button: {
    backgroundColor: '#FE34348F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    width: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#ffff'
  },
  centeredView: {
    marginTop: '70%'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FE34348F'
  },
  modalButton: {
    backgroundColor: '#FE34348F',
    marginTop: 10,
  },
});

export default HomeScreen;
