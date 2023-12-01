// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import ModelView from 'react-native-3d-model-view';

// const Model = () => {
//   return (
//     <View style={styles.container}>
//     <ModelView
//       source={{
//         model: require('./q.obj'),
//       }}
//       style={styles.model}
//     />
//   </View>
//   )
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   model: {
//     width: '100%',
//     height: '100%',
//   },
// });
// export default Model






import { View, Text, Animated, Image } from 'react-native';
import React, { useEffect, useRef } from 'react';

const Model = () => {
  const translateXValue = useRef(new Animated.Value(0)).current;
  const translateYValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animation for moving left-right
    const translateXAnimation = Animated.timing(translateXValue, {
      toValue: 100, // Adjust this value to control the distance of movement
      duration: 1000,
      useNativeDriver: true,
    });

    const translateYAnimation = Animated.timing(translateYValue, {
      toValue: 100, // Adjust this value to control the distance of movement
      duration: 1000,
      useNativeDriver: true,
    });

    Animated.parallel([translateXAnimation, translateYAnimation]).start();
  }, [translateXValue, translateYValue]);

  const animatedStyle = {
    transform: [
      { translateX: translateXValue },
      { translateY: translateYValue },
    ],
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View style={[animatedStyle]}>
        {/* Replace the Image component with your 3D model component */}
        <Image
          source={require('../3DModel/1.png')}
          style={{ width: 40, height: 50 }}
        />
        <Text style={{ fontSize: 100 }}>Model</Text>
      </Animated.View>
    </View>
  );
};

export default Model;



