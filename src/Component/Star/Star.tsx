import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Star = () => {
    const [isLiked, setLiked] = useState(false);
    const [conut, setcount] = useState(352)
    const handle = () => {
        setLiked(!isLiked);
        if (!isLiked) {
            setcount(conut + 1)
        } else {
            setcount(conut - 1)
        }
    };

    return (
        <View style={styles.view}>
            <TouchableOpacity onPress={handle}>
                <FontAwesomeIcon
                    icon={faStar}
                    size={25}
                    color={isLiked ? 'yellow' : '#FFFFFF'}
                />
            </TouchableOpacity>
            <Text style={styles.text}> 4.5  ({conut} Reviews)</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        marginHorizontal: '3%'
    },
    view: {
        display: 'flex',
        flexDirection: 'row'
    }
});
export default Star