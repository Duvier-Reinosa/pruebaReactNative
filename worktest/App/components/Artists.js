import React from 'react'
import { ImageBackground } from 'react-native';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';

export default function Artists(props) {
    const {data} = props;


    return (
        <View>
            <Text style={styles.title}>
                Top 50 artistas Last.fm
            </Text>
            <FlatList
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={( {item} ) => 
                                        <View style={styles.artistcontainer}>
                                            <Image
                                                style={styles.img}
                                                source={{uri: Object.values(item.image[2])[0]}}/>
                                            <View style={styles.datesContainer}>
                                                <Text style={styles.nameArtist}>
                                                    {item.name}
                                                </Text>
                                                <Text style={styles.text}>
                                                    <Text style={styles.subtitles}>Listeners: </Text> 
                                                        {item.listeners}
                                                    </Text>
                                                <Text style={styles.text}>
                                                    <Text style={styles.subtitles}>Mbid: </Text>
                                                    {item.mbid}
                                                </Text>
                                                <Text 
                                                    style={styles.text}
                                                    onPress={()=>Linking.openURL(item.url)}>
                                                        <Text style={styles.subtitles}>Url: </Text>
                                                            <Text style={styles.textUrl}>{item.url}</Text>
                                                </Text>
                                                <Text style={styles.text}>
                                                    <Text style={styles.subtitles}>Streamable: </Text> {item.streamable}</Text>
                                            </View>
                                            
                                            
                                        </View>
                   
            }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    artistcontainer:{
        margin: 10,
        height: 130,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#C5C5C5",
        borderRadius: 5
    },
    
    title:{
        marginTop: 30,
        fontWeight: "bold",
        fontSize: 30
    },
    img:{
        width : 110, 
        height: 110,
        marginLeft: 5
    },
    datesContainer:{
        marginLeft: 10,
        width: 190,
    },
    nameArtist:{
        fontWeight: "bold",
    },
    subtitles:{
        fontWeight: "bold", 
    },
    text:{
        fontSize: 12,
        color: "black"
    },
    textUrl:{
        fontSize: 12,
        color: "#FF784A"
    }

  });