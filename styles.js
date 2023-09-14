import { StyleSheet } from 'react-native';

export const tyylit = StyleSheet.create({
  // Common styles for both light and dark modes
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  top: {
    alignSelf: 'flex-start',
  },
  otsikko: {
    marginTop: "10%",
    fontSize: 50,
    fontWeight: 'bold',
    // color: 'rgb(16, 12, 248)',
    color: 'black',
    borderBottomWidth: 2
  },
  toggleNappi: {
    flexDirection:'row',
    alignSelf:'flex-end',
    marginTop:'10%',
    marginRight:'2%',
    alignItems:'center'
  },
  nappi: {
    width: 100,
    borderWidth: 1,
    borderColor: 'rgb(44, 102, 109)',
    fontSize: 25,
    height:57,
    backgroundColor: "black",
    color: "rgb(44, 102, 109)",
    textAlign: "center",
    borderRadius: 25,
    padding: 10,
    paddingBottom: 20,
    marginTop: "7%",
  },
  sukupuoli: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width:'auto',
    margin: 10,
    padding: 10,
    borderRadius: 50
  },
  paino: {
    width:115,
    color: "rgb(44, 102, 109)",
    textAlign:"center", 
    borderRadius:50, 
    borderWidth:1,
    borderColor: 'rgb(44, 102, 109)'
  },
  nappienVari: "rgb(44, 102, 109)",
  togglenLabel: {
    fontWeight: "900", 
    alignSelf: 'center',
  }
});


export const lightModeStyles = StyleSheet.create({
  containerWhite: {
    ...tyylit.container,
    backgroundColor:'white',

  }
});

export const darkModeStyles = StyleSheet.create({
  containerDark: {
    ...tyylit.container,
    backgroundColor: 'black',
    color: 'white'
  },
  paino: {
    ...tyylit.paino,
  },
  otsikko: {
    ...tyylit.otsikko,
    color: tyylit.nappienVari,
    borderColor: tyylit.nappienVari
  },
  nappi: {
    ...tyylit.nappi,
    backgroundColor:'black',
    color:'white'
  },
  nappienVari: 'black'
});
  