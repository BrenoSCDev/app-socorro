import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

const HomeScreen = ({ route }) => {
  useEffect(() => {
    if (route.params?.message) {
      Toast.show({
        type: 'success',
        text1: 'Successo',
        text2: route.params.message,
      });
    }
  }, [route.params?.message]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Screen</Text>
      <Toast />
    </View>
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
});

export default HomeScreen;
