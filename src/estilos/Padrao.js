import {StyleSheet,  Dimensions} from 'react-native'

export default Styles = StyleSheet.create({
    botao:{
        fontSize: 40,
        height: Dimensions.get('window').width /4 ,
        width: Dimensions.get('window').width /4 ,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      botoes:{
        flexDirection: 'row',
        flexWrap: 'wrap',
      }
  });
  