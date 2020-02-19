import {Dimensions, StyleSheet} from 'react-native';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#454545',
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
  scroll: {
    position: 'relative',
    top: '15%',
    alignItems: 'stretch',
    alignSelf: 'center',
    width: '100%',
    height: '100%',
  },
  title:{
    position: 'relative',
    fontFamily:'Barton',
    color:'#c8c9cb',
    fontSize:18,
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
    textAlign: 'center',
    width: '75%',
  },
  name: {
    fontFamily:'Barton',
    color:'#c8c9cb',
    fontSize:15,
    textAlign: 'center',
  },
  type: {
    marginTop:'5%',
    color:'white',
    fontSize:14,
    textAlign: 'center',
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
