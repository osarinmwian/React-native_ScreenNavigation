import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';


const Stack = createStackNavigator();
function ScreenA({navigation}){

  const onPressHandler =()=>{
     navigation.navigate("screenB")
  }
  return(
 <View style={styles.container}>
   <Text style={styles.text}>
     screen A
   </Text>
   <Pressable
   onPress={onPressHandler}
   style={({pressed}) =>({backgroundColor: pressed? "#dd" : "#0f0" })}>
      <Text style={styles.text}>
     Go to screen B
   </Text>
     
   </Pressable>
   
 </View>
  )
}
function ScreenB({navigation}){
  const onPressHandler =()=>{
    navigation.navigate("screenA")
    // navigation.goBack();

 }
  return(
 <View style={styles.container}>
   <Text style={styles.text}>
     screen B
   </Text>
   <Pressable
   onPress={onPressHandler}
   style={({pressed}) =>({backgroundColor: pressed? "#dd" : "#0f0" })}>
      <Text style={styles.text}>
     Go to screen A
   </Text>
     
   </Pressable>
 </View>
  )
}
 function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator
     //to hide header in all screens
    // screenOptions={{
    //   header:()=> null
    // }}
      >
       <Stack.Screen
       name="screenA"
       component={ScreenA}
       options={{
          //to hide header in a particular screen
        header:()=> null
      }}/>
        <Stack.Screen
       name="screenB"
       component={ScreenB}
      //  options={{
      //    header:()=> null
      //  }}
      />
        
     </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:40,
    fontWeight:"bold",
    margin:10
  }
});
export default App;
