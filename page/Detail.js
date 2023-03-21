import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';

const createCheckbox = (text, value) => {
    return (
        <View style={ styles.checkbox_area } >
            <Checkbox style={ styles.checkbox } />
            <Text style={ styles.checkbox_text }>{ text }</Text>
        </View>
    );
}

export default function Detail({route}) {
    const params = route.params;
  return (
    <View> 
        <View>
            <View>
                <Text>{params[0]}</Text>
            </View>

            {params[1].map((item) => {
                return createCheckbox(item.text, item.value);
            })}


        </View>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    checkbox_area: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    checkbox: {
        marginRight: 10,
    },
    checkbox_text: {
        fontSize: 20,
    }
});