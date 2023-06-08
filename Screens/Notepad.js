import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';

const Notepad = () => {
    return (
        <View style={styles.container}>
            <Text>Notepad</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
});
export default Notepad;