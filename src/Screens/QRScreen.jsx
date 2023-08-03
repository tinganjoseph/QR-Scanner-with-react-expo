import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, } from '@expo/vector-icons';

const QRScreen = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanData, setScanData] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanData(data);
    navigateToAnotherScreen(data);
  };

  const navigateToAnotherScreen = (data) => {
    navigation.navigate('AnotherScreen', { data });
  };

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <TouchableOpacity className="flex-row items-center bg-[#000000] mt-9 justify-center w-44 h-10 rounded-2xl mx-8 ">
          <Text className="text-[#ffffff] text-center font-bold text-[11px] ml-1">
            Grant camera permissions
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back-circle" size={20} color="#5c5c5c" />
        </TouchableOpacity>

        <View style={styles.scannerContainer}>
          <BarCodeScanner
            style={styles.scanner}
            onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
          />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
    elevation: 2,
  },
  scannerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanner: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default QRScreen;
