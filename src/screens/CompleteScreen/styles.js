import {StyleSheet} from 'react-native';

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
  scroll: {
    position: 'relative',
    top: '15%',
    alignItems: 'stretch',
    alignSelf: 'center',
    width: '100%',
    height: '100%'
  }
});
