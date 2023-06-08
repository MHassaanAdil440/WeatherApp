import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native';

const Search = () => {
    return (
        <View style={styles.container}>
            <Text>Search</Text>
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
export default Search;