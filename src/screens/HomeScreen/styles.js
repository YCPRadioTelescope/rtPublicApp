import {StyleSheet} from 'react-native';

export default StyleSheet.create({
      button: {
          borderWidth: 1,
          borderColor: "#cbd7dd",
          borderRadius: 14,
          alignItems: 'center',
          justifyContent:'center',
          backgroundColor: '#b7b7b7',
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
        top: '20%',
        width:'90%',
        marginLeft:'5%',
      },
      navbar: {
        width: '100%',
        height: '13%',
        backgroundColor: '#303030',
        position: 'absolute',
        top: 0,
        borderBottomWidth: 3,
        borderColor: '#202020',
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
      scheduleButton: {
          borderWidth: 1,
          borderColor: "#cbd7dd",
          borderRadius: 14,
          paddingVertical: 6,
          paddingHorizontal: 13,
          paddingLeft:30,
          justifyContent: 'center',
          backgroundColor: '#b7b7b7',
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
          marginLeft:15,
          width:100,
          height:100,
      },


});
