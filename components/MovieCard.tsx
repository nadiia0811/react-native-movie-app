import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { icons } from '@/constants/icons';

const MovieCard = ({ id, poster_path, title, release_date, vote_average }: Movie) => {
    const router = useRouter();

    return (
        <TouchableOpacity
            style={{ width: "30%" }}
            onPress={() => router.push({
                pathname: "/movies/[id]",
                params: { id }
            })}
        >
            <Image
                source={{
                    uri: poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : `https://via.placeholder.co/600x400/1a1a1a/ffffff.png`
                }}
                style={{
                    width: "100%",
                    height: 208,
                    borderRadius: 10
                }}
                resizeMode="cover"
            />
            <Text style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#fff",
                marginTop: 8
            }}
            numberOfLines={1}
            >
                {title}
            </Text>
            <View className="flex-row items-center justify-start gap-x-1">
                <Image source = {icons.star} 
                       className="size-4"/>
                <Text style={{fontSize: 10, color: "#fff"}}
                      className="font-bold uppercase">
                  {Math.round(vote_average / 2)}
                </Text>       
            </View>
            <View className="flex-row items-center justify-between">
                <Text className="text-xs text-light-300 font-medium mt-1">
                    {release_date?.split("-")[0]}
                </Text>
                <Text className="text-xs text-light-300 font-medium uppercase">
                    Movie
                </Text>
            </View>

        </TouchableOpacity>
    )
}

export default MovieCard;
