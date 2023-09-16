import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { darkModeStyles, lightModeStyles, tyylit } from './styles'
import ToggleSwitch from 'toggle-switch-react-native'
import { useState } from 'react';
import NumericInput from 'react-native-numeric-input'
import { Checkbox } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';


export default function App() {

  const [tilanne, setTilanne] = useState(true);
  const [paino, setPaino] = useState(0);
  const [pullot, setPullot] = useState(0);
  const [tunnit, setTunnit] = useState(0);

  const [promillet, setPromillet] = useState(0);
  const [sukupuoli,setSukupuoli] = useState(false);

  function laskeAP() {
    if(paino == "" || paino==0) {
      alert("Syötä paino!")
    } else {
      let litrat = pullot * 0.33
      let grammat = litrat * 8 * 4.5
      let polttoAika = paino / 10
      let grammatJaljella = grammat - polttoAika * tunnit
      let tulos = sukupuoli ? grammatJaljella/(paino*0.6) : grammatJaljella/(paino*0.7) // mies / nainen
      setPromillet(tulos>0 ? tulos.toFixed(2) : 0)
    }
  }


  const sukupuolenValinta = () =>  {
    setSukupuoli(!sukupuoli)
  }


  const hoidaNapit = tilanne ? tyylit.nappienVari : darkModeStyles.nappienVari

  const TuloksenTulostus = ({i, koko}) => {
    return(
      <MaterialCommunityIcons style={{color: tilanne ? tyylit.nappienVari : 'black'}} name={i} size={koko} color="black" />
    )
  }

  const TekstiIconilla = ({t, ic, koko}) => {
    return(
      <Text style={{color: tilanne ? 'white' : 'black'}}>{t}<MaterialCommunityIcons style={{color: tilanne ? tyylit.nappienVari : 'black'}} name={ic} size={koko} color="black" /></Text>
    )
  }

  return (
      <View style={tilanne ? darkModeStyles.containerDark : lightModeStyles.containerWhite}>
      <ToggleSwitch style={tyylit.toggleNappi} isOn={tilanne} onColor={tyylit.nappienVari} offColor="black" label={<TuloksenTulostus i="theme-light-dark" koko={35}/>} Style={tyylit.togglenLabel} size="medium" onToggle={() => setTilanne(!tilanne) }/>
      <Text style={tilanne ? darkModeStyles.otsikko : tyylit.otsikko}>Alkometri</Text>
      <StatusBar style='auto'/>
      <View style={tyylit.sukupuoli}>
      <TekstiIconilla t="Mies" ic="human-male" koko={35}/>
      <Checkbox color={hoidaNapit} status={sukupuoli ? "unchecked" : "checked"} onPress={sukupuolenValinta}/>
      <TekstiIconilla t="Nainen" ic="human-female" koko={35}/>
      <Checkbox color={hoidaNapit} status={sukupuoli ? "checked" : "unchecked"} onPress={sukupuolenValinta}/>
      </View>

      <View style={tyylit.sukupuoli}>
      <TekstiIconilla t="Paino " ic="weight-kilogram" koko={37}/>
      <TextInput style={tyylit.paino} onChangeText={setPaino} minValue={} keyboardType='numeric'></TextInput>
      </View>

      <View style={tyylit.sukupuoli}>
      <TekstiIconilla t="Pullot" ic="bottle-soda" koko={45}/>
      <NumericInput borderColor={hoidaNapit} iconStyle={{color: 'white'}} textColor={tyylit.nappienVari} rounded rightButtonBackgroundColor={hoidaNapit} leftButtonBackgroundColor={hoidaNapit} value={pullot} minValue={0} onChange={setPullot}/>
      </View>

      <View style={tyylit.sukupuoli}>
      <TekstiIconilla t="Tunnit" ic="timer" koko={42}/>
      <NumericInput borderColor={hoidaNapit} iconStyle={{color: 'white'}} textColor={tyylit.nappienVari} rounded rightButtonBackgroundColor={hoidaNapit} leftButtonBackgroundColor={hoidaNapit} value={tunnit} minValue={0} onChange={setTunnit}/>
      </View>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <Text style={{color: tilanne ? 'white' : 'black'}}>Tulos: </Text>
      <Text style={{color:promillet < 0.5 ? tyylit.nappienVari : "red", fontWeight: 'bold',fontSize:45}}>{promillet}{promillet < 0.5 ? <TuloksenTulostus i="car-hatchback" koko={50}/> : <TuloksenTulostus i="bike-fast" koko={40}/>}</Text>
      </View>
      <TouchableOpacity onPress={laskeAP }>
      <Text style={tilanne ? tyylit.nappi : darkModeStyles.nappi}>Laske</Text>
      </TouchableOpacity>
    </View>
    
);
}