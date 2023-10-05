import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default function App() {
  return (
    <View style={styles.container}>
     <View style= {styles.box1}>
      <Text style={styles.boxtext}>hello world</Text>
    </View>

     <View style= {styles.box2}>
      <Text style={styles.boxtext}></Text>
    </View>
<View style= {styles.box2}>
      <Text style={styles.boxtext}></Text>
    </View>
<View style= {styles.box2}>
      <Text style={styles.boxtext}></Text>
    </View>

  
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "grid",
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#5B6161',
    padding: 8,
    flexDirection: "row",
  },
  box1:{
    flex:2,
    width: 360,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    borderWidth: 1, 

  },

  box2:{
    flex: 2,
    width: 360,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5A877E",
    borderWidth: 1,

  },

   
  boxtext:{
    fontSize: 30,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#fff",
  },
});
