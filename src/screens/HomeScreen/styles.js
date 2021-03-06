import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
      button: {
        borderBottomWidth:1,
        borderRightWidth:1,
        borderColor:'#3d3d3d',
        borderRadius: 15,
        justifyContent:'center',
        backgroundColor: '#303030',
        marginRight: 15,
        marginLeft: 15,
        height:150,
        width:'45%',
        overflow:'hidden',
      },
      gradient: {
        width: '100%',
        height: '100%',
      },
      container: {
        flex: 1,
        flexDirection:'column',
        alignItems: 'center',
        position:'absolute',
        top: Platform.OS === 'android' ? '20%' : '30%',
        width:'90%',
        marginLeft:'5%',
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
      logoutButton: {
        borderWidth: 1,
        borderColor: "#cbd7dd",
        borderRadius: 14,
        paddingVertical: 6,
        paddingHorizontal: 13,
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        marginRight: 25
      },
      notifButton: {
        borderColor: "#cbd7dd",
        borderRadius: 14,
        paddingVertical: 6,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      },
      feedbackButton: {
        borderWidth: 1,
        borderColor: "#cbd7dd",
        borderRadius: 14,
        paddingVertical: 6,
        paddingHorizontal: 13,
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        marginLeft: 25
    },
      scheduleButton: {
          borderBottomWidth:1,
          borderRightWidth:1,
          borderColor:'#3d3d3d',
          borderRadius: 14,
          paddingVertical: 6,
          paddingHorizontal: 13,
          paddingLeft:30,
          justifyContent: 'center',
          backgroundColor: '#303030',
          width:'100%',
          height:'20%',
          marginBottom:30,
      },
      row1:{
          flexDirection:'row',
          position:'relative',
          marginBottom:30,
      },
      row2:{
            flexDirection:'row',
            position:'relative',
      },
      iconImage:{
          marginLeft:30,
          width:100,
          height:100,
          opacity: 0.7,
      },
      iconImageNotif:{
          marginLeft: 10,
          marginRight: 10,
          width: 50,
          height: 50,
          opacity: 0.7,
          justifyContent: 'center',
      },
    futureIconImage:{
          marginBottom:10,
          marginLeft:30,
          width:105,
          height:105,
          opacity: 0.7,
    },
    buttonText:{
          textAlign:"center",
          color:"#d6d6d6",
          fontFamily:'Karu-Light',
          fontSize:15,
    },
    scheduleButtonText:{
          color:"#d6d6d6",
          fontFamily:'Karu-Light',
          fontSize:25,
    },
    futureButtonText:{
          textAlign:"center",
          position:'relative',
          bottom:10,
          color:"#d6d6d6",
          fontFamily:'Karu-Light',
          fontSize:15,
    }


});
