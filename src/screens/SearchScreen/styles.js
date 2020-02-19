import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
    top:'45%',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
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

});
