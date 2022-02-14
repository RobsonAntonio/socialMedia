import React, { useContext, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DarkmodeContext } from '../contexts/DarkmodeContext';
import { Container, ContainerButton, HeaderText, HeaderTextFollowers, TextButton } from './styles';
function Header() {
    const { theme, toggleTheme } = useContext(DarkmodeContext)
    const darkMode = theme === 'dark'

    console.log('header', toggleTheme)
    return (
        <View >
            <Container>
                <HeaderText>Social Media Dashboard</HeaderText>
                <HeaderTextFollowers>Total Followers: 23,004</HeaderTextFollowers>
            </Container>
            <ContainerButton>
                <TextButton>Dark Mode</TextButton>
                <TouchableOpacity style={{ ...styles.button, backgroundColor: darkMode ? '#e5e5e5' : '#7b8084' }}>

                    <Ionicons name={darkMode ? "sunny-outline" : "moon"} size={30}
                        color={darkMode ? "black" : "white"} onPress={toggleTheme} />
                </TouchableOpacity>
            </ContainerButton>
        </View>
    );
}

const styles = StyleSheet.create({

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#FFF'
    }
})

export default Header;


