import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from "../firebase";
import { useNavigation } from '@react-navigation/core';
import { ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';


const HomeScreen = () => {
    const navigation = useNavigation()
    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }
    let [isLoading, setIsLoading] = useState(true);
    let [error, setError] = useState();
    let [response, setResponse] = useState();

    useEffect(() => {
        fetch("https://api.quran.com/api/v4/verses/random?language=en&words=true")
        .then(res => res.json())
        .then((result) => {
            setIsLoading(false);
            setResponse(result);
        },
        (error) => {
            setIsLoading(false);
            setError(error);
        }
        )
    }, [])

    const getContent = () => {
        if (isLoading) {

            return <ActivityIndicator size="large" />;
        }
        if (error) {
            return <Text>{error}</Text>
        }
        // console.log(response);
        return <Text>Ayah Of The Day: {id}</Text>
    }


    return (
        <View style={styles.container}>
            {getContent()}
            <Text>Email: {auth.currentUser?.email}</Text>
            <TouchableOpacity
                onPress={handleSignOut}
                style={styles.button}>
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "right",
        alignItems: "flex-end",
    },
    button: {
        backgroundColor: "#da9100",
        width: "20%",
        padding: 4,
        borderRadius: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 16,
    },
})