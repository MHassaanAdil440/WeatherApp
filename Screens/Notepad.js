import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Notepad = () => {
    return(
        <View>
            <Text> Notepad.js </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#fff',
    }}
);
export default Notepad;
