import { View, Text,Image } from 'react-native'
import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../components/ImageSlider';


export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={['top']}>

        <StatusBar style="dark"></StatusBar>

        <View className="flex-row justify-between items-center mx-5 ">
            <View className="space-y-2">
                <Text
                    style={{fontSize: hp(4.5)}}
                    className="font-bold tracking-wider text-neutral-700"
                >
                    READY TO 
                </Text>

                <Text
                    style={{fontSize: hp(4.5)}}
                    className="font-bold tracking-wider text-rose-500"
                >
                    WORKOUT
                </Text>

                <View className="flex justify-center items-center space-y-2">
                    <Image source={require('../assets/images/avatar.png')}
                    style={{height: hp(6), width: hp(6)}}
                    className="rounded-full"
                    ></Image>

                    <View className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300 "
                    style={{height:hp(5.5) , width: hp(5.5)}}
                    >
                    <Ionicons name="notifications" size={hp(3)} color="#900" />
                    </View>

                </View>


            </View>


        </View>

        {/* image slider*/}
        <View>
            <ImageSlider />
        </View>
    </SafeAreaView>
  )
}