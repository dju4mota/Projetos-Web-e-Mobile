import Styles from '../estilos/Padrao'
import React from 'react'
import {Text, View} from 'react-native'

export default props =>
    <View style={Styles.display}>
        <Text style={Styles.displayValue}
            numberOfLines={1}>
                {props.value}
            </Text>
    </View>
