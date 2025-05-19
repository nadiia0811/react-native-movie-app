import React from 'react';
import { Tabs } from 'expo-router';
import { Image, ImageBackground, View } from 'react-native';
import { images } from '@/constants/images';
import { icons } from '@/constants/icons';
import { Text } from 'react-native';


interface TabIconProps {
  title: string;
  icon: string;
  focused: boolean;
}

const TabIcon = ({ title, icon, focused }: TabIconProps) => {
    if (focused) {
        return  <ImageBackground 
                  style={{height: 54, width: 112, alignItems: "center"}}
                  source={images.highlight}
                  className="flex flex-row w-full mt-4 justify-center rounded-full overflow-hidden" 
                >
                    <Image source={icon} 
                        tintColor="#151312"
                        className="size-5"
                    />
                    <Text className="text-secondary text-base font-semibold ml-2">{title}</Text>
                </ImageBackground>  
    }
    return (
        <View className="rounded-full justify-center items-center size-full flex">
          <Image source={icon}
                 tintColor="#a8b5db"
                 className="size-5 mt-4" />  
        </View>
    )
};
  
const _Layout = () => {
  
  return (
    <Tabs screenOptions={{
          tabBarShowLabel: false,
          tabBarItemStyle: {
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%"
          },
          tabBarStyle: {
            backgroundColor: "#0f0d23",
            borderRadius: 50,
            marginHorizontal: 20,
            marginBottom: 36,
            height: 52, 
            position: "absolute",
            overflow: "hidden",
            borderWidth: 1,
            borderColor: "#0f0d23"
          }
    }}>
        <Tabs.Screen 
            name="index"
            options={{ 
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                   <TabIcon focused={ focused } 
                            icon={icons.home} 
                            title="Home"/>
                )
            }}         
        />
        <Tabs.Screen 
            name="search"
            options={{ 
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon  focused={ focused }
                              icon={icons.search}
                              title="Search"
                    
                    />
                )
            }}         
        />
        <Tabs.Screen 
            name="saved"
            options={{ 
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon  focused={ focused }
                              icon={icons.save}
                              title="Saved"
                    
                    />
                )
            }}         
        />
        <Tabs.Screen 
            name="profile"
            options={{ 
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon  focused={ focused }
                              icon={icons.person}
                              title="Profile"
                    
                    />
                )
            }}         
        />
    </Tabs>
  )
}

export default _Layout;
