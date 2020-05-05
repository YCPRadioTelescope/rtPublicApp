import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
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
  back:{
    position: 'absolute',
    left: '10%',
  },
  title:{
    position: 'relative',
    fontFamily:'Barton',
    color:'#c8c9cb',
    fontSize:20,
  },
  subTitle:{
    position: 'relative',
    fontFamily:'Barton',
    color:'#c8c9cb',
    fontSize:16,
    marginBottom: 30,
    marginTop: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'rgba(129,122,223,1)',
    paddingVertical: 11,
    paddingHorizontal: 17,
    borderRadius: 3,
    marginVertical: 10,
    width:'40%',
  },
  subText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    textAlign: 'center',
    borderWidth: 1,
    borderColor: "#cbd7dd",
    borderRadius: 14,
    paddingVertical: 6,
    paddingHorizontal: 13,
  },
  contents:{
    position:'relative',
    top:'4%',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
  },
  selected:{
    position:'relative',
    bottom:20,
    fontSize:18,
    textAlign: 'center',
  },
  nextButton:{
    backgroundColor: 'rgba(129,122,223,1)',
    paddingVertical: 11,
    paddingHorizontal: 17,
    borderRadius: 3,
    marginVertical: 10,
    width:'80%',
  }
});
