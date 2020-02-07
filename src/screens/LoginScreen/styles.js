import {Dimensions, StyleSheet} from 'react-native';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
    container:{
        width: deviceWidth,
        position:'absolute',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:'25%',

    },
    title:{
        fontFamily:'Barton',
        color: 'white',
        fontSize: 32,
        marginBottom:'10%',
        width: deviceWidth * 0.8,
        textAlign: 'center',
        lineHeight:50,
    },
    button: {
      marginTop: 10,
      borderWidth: 0,
      borderColor: "#cbd7dd",
      borderRadius: 20,
      paddingVertical: 6,
      paddingHorizontal: 13,
      alignItems: 'center',
      backgroundColor: 'rgba(129,122,223,1)',
      width: deviceWidth * 0.5,
      shadowColor: '#000',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
    },
    buttonText:{
        color: 'white',
        fontFamily:'Karu-Light',
        fontSize:20,
    },
    textInput:{
        width: deviceWidth * 0.7,
        borderBottomWidth: 1,
        height: 40,
        fontSize: 18,
        fontFamily: 'Karu-Light',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderRadius: 5,
        marginBottom: '3%',
        paddingLeft: '3%',
    },
});
