import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
        <Image style={styles.profil_img} source={require('../assets/yusuf_foto.png')}/>
        <Text style={ styles.profil_text }>Yusuf Hafidz</Text>
        <Text style={ styles.profil_text }>120140234</Text>
        <Text style={ styles.profil_text }>PAM RA</Text>

        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profil_img: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden",
        marginBottom: 20,
    },
    profil_text: {
        marginBottom: 10,
        fontSize: 20,
        fontWeight: "bold",
    }
});