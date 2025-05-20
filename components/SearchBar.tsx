import { View, Image, TextInput } from 'react-native';
import React from 'react';
import { icons } from '@/constants/icons';

interface SearchBarProps {
    placeholder: string;
    onPress?: () => void;
}

const SearchBar = ({ onPress, placeholder }: SearchBarProps) => {
  return (
    <View 
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
            borderRadius: 999,
            backgroundColor: "#0f0d23"
            }}
    >
      <Image source={icons.search}
             style={{width: 20, height: 20, marginRight: 6}}
             resizeMode="contain"
             tintColor="#ab8bff"
      />
      <TextInput onPress={onPress}
                 placeholder={placeholder}
                 value=""
                 onChangeText={() => {}}
                 placeholderTextColor="#a8b5db"
                 style={{marginLeft: 8, color: "#fff"}}
      >

      </TextInput>
    </View>
  )
};

export default SearchBar;