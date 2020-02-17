import {Dimensions, StyleSheet} from 'react-native';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    navbar: {
        width: '100%',
        height: '13%',
        backgroundColor: '#303030',
        position: 'absolute',
        top: 0,
        borderBottomWidth: 3,
        borderColor: '#041628',
        alignItems: 'center',
        justifyContent: 'center',
    },
    back:{
        position: 'absolute',
        left: '10%',
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
        height: 40 + deviceHeight * 0.2,
        fontSize: 18,
        fontFamily: 'Karu-Light',
        textAlignVertical: 'top',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderRadius: 5,
        marginBottom: '3%',
        paddingLeft: '3%',
    },

});
