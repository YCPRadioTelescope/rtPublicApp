import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#454545',
    },
    navbar: {
      width: '100%',
      height: Platform.OS === 'android' ? '13%' : '18%',
      backgroundColor: '#303030',
      position: 'absolute',
      top: Platform.OS === 'android' ? 5 : 0,
      borderBottomWidth: 3,
      borderColor: '#041628',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      position: 'relative',
      fontFamily:'Barton',
      color:'#c8c9cb',
      fontSize:18,
    },
    back: {
      position: 'absolute',
      left: '10%',
    },
    load: {
      position: 'absolute',
      left: 350,
    },
    scroll: {
      position: 'relative',
      top: '20%',
      alignItems: 'stretch',
      alignSelf: 'center',
      width: '100%',
      height: '100%'
    },
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
    infoText:{
      fontFamily:'Barton',
      color:'#c8c9cb',
      fontSize:15,
      position:'relative',
      top:300,
    }
});

