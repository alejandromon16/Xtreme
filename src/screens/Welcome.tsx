import React from 'react';
import { Text, Pressable,Image, View, StyleSheet, ImageBackground } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import {LinearGradient} from 'expo-linear-gradient';
import hero from "../../assets/frame.png";
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/global/button';



function WelcomeScreen<StackScreenProps>({ navigation }) {
  return (
    <View className="w-full h-full">
      <ImageBackground source={hero} resizeMode="cover" style={styles.image}>
        <SafeAreaView>
          <View className="flex flex-col space-y-20">
          <View className="w-full text-center flex flex-col mt-20 space-y-4">
            <Text className="text-white text-base text-center mx-4" >Bienvenido a</Text>
            <Text className="text-white text-5xl font-bold text-center mx-6" >Xtreme</Text>
          </View>
          <View className="">
            <Text className="text-white text-base text-center mx-10" >Entrena y registra tus movimientos, calorias atraves de nuestra AI.</Text>
          </View>
          </View>
      <View className="mx-4 mt-[60%] flex justify-center align-center space-y-6">
        <View >
          <Button 
            color="bg-[#fff]"
            children="Inicia session"
          />
          <Pressable className="bg-[rgba(30, 32, 41, 0.5)] border-2  rounded-3xl py-2 px-4 m-4" ><Text className="text-center text-[#000000] font-bold text-base" onPress={() => navigation.navigate('Sign Up')}>Sign Up</Text></Pressable>
        </View>
      </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );

}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});



export default WelcomeScreen;
