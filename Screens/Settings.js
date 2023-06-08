import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';

const Settings = () => {
    return (
        <View style={styles.container}>
            <Text>Settings</Text>
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
export default Settings;