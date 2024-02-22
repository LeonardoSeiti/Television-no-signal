import { View } from "react-native";

function App() {
  return (
    

  <View style={{ backgroundColor: "#000000",display:"flex", flexDirection:"column", flex:1}}>
        <View style={{flex:6, flexDirection:"row"}}>
          <View style={{ backgroundColor: "#ffffff", width:"14.2%",flex:2}}> </View>
          <View style={{ backgroundColor: "#fffb00", width:"14.2%",flex:2}}> </View>
          <View View style={{ backgroundColor: "#00ffea", width:"14.2%",flex:2}}> </View>
          <View style={{ backgroundColor: "#00ff00", width:"14.2%",flex:2}}> </View>
          <View style={{ backgroundColor: "#AF33FF", width:"14.2%",flex:2}}> </View>
          <View style={{ backgroundColor: "#FF0000", width:"14.2%",flex:2}}> </View>
          <View style={{ backgroundColor: "#0100FF", width:"14.2%",flex:2}}> </View>
        </View>



        <View style={{ display:'flex', flexDirection:'row',flex:1}}>
          <View style={{ backgroundColor: "#0b2d39", width:"18%"}}> </View>
          <View View style={{ backgroundColor: "#FFFFFF", width:"18%"}}> </View>
          <View style={{ backgroundColor: "#400474", width:"18%"}}> </View>
          <View style={{ backgroundColor: "#000000", width:"18%"}}> </View>
          <View style={{ backgroundColor: "#000000", width:"18%"}}> </View>
          <View style={{ backgroundColor: "#000000", width:"18%"}}> </View>
          <View style={{ backgroundColor: "#000000", width:"18%"}}> </View>
        </View>
  </View>
  );
}

export default App;
