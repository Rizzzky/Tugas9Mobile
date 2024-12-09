import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { tambah, kurang, kali, bagi } from './src/index';

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  const [angka1, setAngka1] = useState('');
  const [angka2, setAngka2] = useState('');
  const [hasil, setHasil] = useState(0);

  const tekanTambah = () => {
    const jumlah = tambah(parseInt(angka1), parseInt(angka2));
    setHasil(jumlah);
  };

  const tekanKurang = () => {
    const selisih = kurang(parseInt(angka1), parseInt(angka2));
    setHasil(selisih);
  };

  const tekanKali = () => {
    const hasilKali = kali(parseInt(angka1), parseInt(angka2));
    setHasil(hasilKali);
  };

  const tekanBagi = () => {
    const hasilBagi = bagi(parseInt(angka1), parseInt(angka2));
    setHasil(hasilBagi);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Count: ${count}`}</Text>
      <View style={styles.buttonRow}>
        <Button title="Increment" onPress={increment} color="#4CAF50" />
        <Button title="Decrement" onPress={decrement} color="#F44336" />
      </View>

      <TextInput
        keyboardType="numeric"
        placeholder="Input Angka 1"
        onChangeText={(text) => setAngka1(text)}
        value={angka1}
        style={styles.input}
      />

      <TextInput
        keyboardType="numeric"
        placeholder="Input Angka 2"
        onChangeText={(text) => setAngka2(text)}
        value={angka2}
        style={styles.input}
      />

      <View style={styles.buttonColumn}>
        <Button title="Tambah" onPress={tekanTambah} color="#2196F3" />
        <Button title="Kurang" onPress={tekanKurang} color="#FFC107" />
        <Button title="Kali" onPress={tekanKali} color="#9C27B0" />
        <Button title="Bagi" onPress={tekanBagi} color="#E91E63" />
      </View>

      <Text style={styles.resultText}>{`Hasil: ${hasil}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  buttonColumn: {
    marginVertical: 10,
  },
  resultText: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
});

export default App;



// import React from 'react';
// import { Image } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from './screens/HomeScreen'; 
// import HeartRateScreen from './screens/HeartRateScreen';
// import BloodPressureScreen from './screens/BloodPressureScreen';
// import BreathingScreen from './screens/BreathingScreen';
// import TemperatureScreen from './screens/TemperatureScreen';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused }) => {
//           let iconName;
//           let iconUrl;
//           if (route.name === 'Home') {
//             iconUrl = focused
//               ? 'https://i.pinimg.com/564x/1f/28/62/1f28626660ea33b1e1c3b8a80a5c6f64.jpg'
//               : 'https://i.pinimg.com/564x/28/86/02/2886023be2d04d1ba79f08e30c7f842f.jpg';
//           } else if (route.name === 'HeartRate') {
//             iconUrl = focused
//               ? 'https://i.pinimg.com/564x/6a/0d/2f/6a0d2f8e2205c99f1fc540f904095540.jpg'
//               : 'https://i.pinimg.com/564x/b1/03/b5/b103b5d5a2f169a14005d5bf9fecf3ba.jpg';
//           } else if (route.name === 'BloodPressure') {
//             iconUrl = focused
//               ? 'https://i.pinimg.com/564x/3b/cd/36/3bcd36af290d916f6b50b7db7e6e9f30.jpg'
//               : 'https://i.pinimg.com/564x/2c/87/3e/2c873e1b047df66d1e8e2847d6bd7086.jpg';
//           } else if (route.name === 'Breathing') {
//             iconUrl = focused
//               ? 'https://i.pinimg.com/564x/d8/d4/e4/d8d4e48ff4f98fa87c4db42f3998d368.jpg'
//               : 'https://i.pinimg.com/564x/1b/fb/f9/1bfbf94c5be2dff414effd72475950f3.jpg';
//           } else if (route.name === 'Temperature') {
//             iconUrl = focused
//               ? 'https://i.pinimg.com/564x/b5/69/1c/b5691c748900195f20e1eb25b4a97ab0.jpg'
//               : 'https://i.pinimg.com/564x/19/b1/f8/19b1f84ded09091d0f249c350eaf68e3.jpg';
//           }
//           return (
//             <Image
//               source={{ uri: iconUrl }}
//               style={{ width: 24, height: 24 }}
//               resizeMode="contain"
//             />
//           );
//         },
//         tabBarShowLabel: false, 
//       })}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="HeartRate" component={HeartRateScreen} />
//       <Tab.Screen name="BloodPressure" component={BloodPressureScreen} />
//       <Tab.Screen name="Breathing" component={BreathingScreen} />
//       <Tab.Screen name="Temperature" component={TemperatureScreen} />
//     </Tab.Navigator>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Main">
//         <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
//         {/* Tambahkan screen lain di bawah jika Anda ingin menggunakan Stack Navigation */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
