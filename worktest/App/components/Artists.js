import React from 'react'
import { View, Text, FlatList } from 'react-native'

export default function Artists(props) {
    const {data} = props;

    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={( {item} ) => 
                    <Text>{item.name}</Text>
            }
            />
        </View>
    )
}
