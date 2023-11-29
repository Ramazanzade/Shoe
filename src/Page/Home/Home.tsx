import { View, Text } from 'react-native'
import React from 'react'
import homecss from './homecss'
import Heart from '../../Component/Heart/Heart'
import Star from '../../Component/Star/Star'
import Model from '../3DModel/3DModel'
const Home = () => {
    return (
        <View style={homecss.view}>
            <View style={homecss.heartview}>
                <Heart></Heart>
            </View>
            <View style={homecss.textview}>
                <View style={homecss.textview1}>
                    <Text style={homecss.text}> NIKE AIR</Text>
                    <Text style={homecss.text1}>AIR JORDAN 2 MED SE GS</Text>
                </View>
                <View style={homecss.priceview}>
                    <Text style={homecss.price}> $127.45</Text>
                </View>
            </View>
            <View style={homecss.starview}>
                <Star></Star>
            </View>
            <View>
                <Model></Model>
            </View>
        </View>
    )
}

export default Home