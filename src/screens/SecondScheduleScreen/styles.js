import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
    alignItems: 'center',
    justifyContent: 'center',
    width:'90%',
  },
  dropdown:{
    width:'93%',
  },
  numberInput:{
    width:'93%',
    marginTop: '2%',
    marginBottom: '2%',
    justifyContent: 'center',
    borderRadius: 6,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  private:{
    flexDirection:'row',
    alignItems: 'center',
    marginTop: 30,
  },
  privateText:{
    fontSize: 18,
    color: '#FFFFFF',
  },
  searchBar:{
    width:'100%',
    position: 'absolute',
    top: 5,
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
