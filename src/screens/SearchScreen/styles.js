import {Platform, Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#454545',
    width: '100%',
    height: '100%',
  },
  navbar: {
    width: '100%',
    height: Platform.OS === 'android' ? '14%' : '16%',
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
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: 'center',
  },
  back:{
    position: 'absolute',
    left: '10%',
  },
  dropdown:{
    width:'80%',
    marginTop: '40%',
  },
  searchBar:{
    width:'100%',
    position: 'absolute',
    top: 5,
  },
  searchBarContainer:{
    alignItems: 'center',
  },
  searchButtonContainer:{
    alignItems: 'center',
    width: '100%',
    position: 'relative',
  },
  scroll: {
    position: 'relative',
    top: 75,
    alignItems: 'stretch',
    alignSelf: 'center',
    width: '100%',
    height: '100%',
  },
  allResults:{
    position: 'relative',
    top:5,
    width: Dimensions.get("window").width,
    marginLeft:20,
    marginRight:20,
    marginBottom:150,
  },
  result:{
    width:'100%',
    marginTop: 10,
    padding: 10,
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    backgroundColor: '#5f5f5f'
  },
  name: {
    fontFamily:'Barton',
    color:'#c8c9cb',
    fontSize:15,
    marginTop: 1,
  },
  type: {
    marginTop:'5%',
    marginLeft:'2%',
    marginBottom: '2%',
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
  infoText:{
    fontFamily:'Barton',
    color:'#c8c9cb',
    fontSize:15,
    position:'relative',
    marginTop:25,
  },
  checkBox:{
    backgroundColor: '#808080',
    paddingVertical: 11,
    paddingHorizontal: 17,
    position: 'relative',
    borderRadius: 3,
    marginTop: Platform.OS === 'android' ? '5%' : '4%',
    width: Platform.OS === 'android' ? '80%' : '100%',
  },
  item: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    width: '80%',
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    backgroundColor: '#5f5f5f'
  },
  submitButton:{
    backgroundColor: 'rgba(129,122,223,1)',
    paddingVertical: 11,
    paddingHorizontal: 17,
    borderRadius: 3,
    width:'100%',
  }

});
