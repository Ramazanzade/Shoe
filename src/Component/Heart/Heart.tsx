import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import { faHeart } from '@fortawesome/free-regular-svg-icons';


const Heart = () => {
  const [isLiked, setLiked] = useState(false);

  const handle = () => {
    setLiked(!isLiked);
  };

  return (
    <TouchableOpacity onPress={handle}>
      <FontAwesomeIcon
        icon={faHeart}
        size={25}
        color={isLiked ? 'red' : '#FFFFFF'}
      />
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
});
export default Heart