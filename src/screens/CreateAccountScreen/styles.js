import {Dimensions, StyleSheet} from 'react-native';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
    container:{
        width: deviceWidth,
        position:'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:'15%',
    },
    title:{
        fontFamily:'Barton',
        color: 'white',
        fontSize: 28,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '10%',
    },
    keyboard:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
      marginTop: 10,
      borderWidth: 0,
      borderColor: "#670e96",
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
    navbar: {
        width: '100%',
        height: '13%',
        position: 'absolute',
        top: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    back:{
        position: 'absolute',
        left: '4%',
    }
});
