import React from 'react';
import { Tabs } from 'expo-router';
import { Image, ImageBackground, Platform, View } from 'react-native';
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
    return (
      <ImageBackground
        source={images.highlight}
        style={{
          height: 52,
          minWidth: 112,
          paddingHorizontal: 16,
          borderRadius: 999,
          marginTop: Platform.OS === "web" ? 3 : 14,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
        imageStyle={{
          resizeMode: "stretch",
          borderRadius: 999,
        }}
      >
        <Image
          source={icon}
          style={{
            width: 20,
            height: 20,
            tintColor: "#151312",
          }}
          resizeMode="contain"
        />
        <Text
          style={{
            color: "#151312",
            fontSize: 16,
            fontWeight: "600",
            marginLeft: 8,
          }}
        >
          {title}
        </Text>
      </ImageBackground>
    );
  }

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginTop: Platform.OS === "web" ? 0 : 16,
        height: 52,
      }}
    >
      <Image
        source={icon}
        style={{
          width: 20,
          height: 20,
          tintColor: "#a8b5db",
        }}
        resizeMode="contain"
      />
    </View>
  );
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
