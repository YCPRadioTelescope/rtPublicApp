import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
    element:{
        marginBottom:120,
    },
    item: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        borderRadius: 3,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        backgroundColor: '#5f5f5f'
    },
    text:{
        flexDirection: 'column',
        flex:2,
        justifyContent: 'space-between',
        textAlign: 'left',
        width: '75%',
    },
    name: {
        fontFamily:'Barton',
        color:'#c8c9cb',
        fontSize:15,
    },
    type: {
        marginTop:'5%',
        marginLeft:'2%',
        color:'white',
        fontSize:14,
    },
    RightAscension: {
        color:'white',
        fontSize:14,
    },
    Declination: {
        color:'white',
        fontSize:14,
    },
    buttons:{
        position:'absolute',
        top:'0%',
        right:'0%',
        flexDirection: 'row',
        flex:2,
        marginTop:30,
        marginRight:10,
    },
    approveButton:{
        position:'absolute',
        right:'5%',
    },
});
