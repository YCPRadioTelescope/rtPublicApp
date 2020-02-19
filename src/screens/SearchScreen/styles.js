import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#454545',
  },
  navbar: {
    width: '100%',
    height: 75,
    backgroundColor: '#303030',
    position: 'absolute',
    top: 0,
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
  back:{
    position: 'absolute',
    left: '10%',
  },
  searchBar:{
    width:'100%',
    position: 'absolute',
    top:75,
  },
  allResults:{
    position: 'relative',
    top:150,
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

});
