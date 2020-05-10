import React from 'react'
import {TouchableHighlight,Text} from 'react-native'
import Styles from '../estilos/Padrao'

export default props => {
    const stylesButton = [Styles.botao] 
    if(props.double) stylesButton.push(Styles.buttonDouble)
    if(props.triple) stylesButton.push(Styles.buttonTriple)
    if(props.operation) stylesButton.push(Styles.opertionButton)    

    return(
        <TouchableHighlight onPress={() => props.onClick(props.label)} > 
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}

