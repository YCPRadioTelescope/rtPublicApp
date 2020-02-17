import {StyleSheet} from 'react-native';

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
    backgroundColor: 'rgba(129,122,223,1)',
    paddingVertical: 11,
    paddingHorizontal: 17,
    borderRadius: 3,
    marginVertical: 10,
    width:'40%',
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: 'center',
  },
  contents:{
    position:'relative',
    left: '10%',
    justifyContent: 'center',
    width:'100%',
  },
  dropdown:{
    width:200,
  },
  private:{
    flexDirection:'row',
    alignItems: 'center',
  },
  privateText:{
    fontSize: 18,
  },
  submitButton:{
    backgroundColor: 'rgba(129,122,223,1)',
    paddingVertical: 11,
    paddingHorizontal: 17,
    borderRadius: 3,
    marginTop:'10%',
    width:'80%',
  }
});
