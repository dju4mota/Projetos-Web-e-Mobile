import React from 'react'
import {TouchableHighlight,Text} from 'react-native'
import Styles from '../estilos/Padrao'

export default props => {
    return(
        <TouchableHighlight onPress={props.onClick} > 
            <Text style={Styles.botao}>{props.label}</Text>
        </TouchableHighlight>
    )
}

