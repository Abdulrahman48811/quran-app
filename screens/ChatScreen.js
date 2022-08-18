import React, { Component, useLayoutEffect, useState } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Input, Button } from "react-native-elements";
import { db } from "../firebase";

 const ChatScreen = ({navigation}) => {

  const [input, setInput] = useState("")

    useLayoutEffect(() => {
      navigation.setOptions({
        title: "Chat With Me!",
      })
    }, [navigation])


    const createChat = async () => {
      await db.collection('chats').add({
        chatName: input
      }).then(()=> {
        navigation
      }).catch((error) => alert(error))
    }


  return (
    <View style={styles.container}>
      <Input 
      
        placeholder= "Enter a chat name" 
        value={input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={createChat}
      />
      <Button
                color= 'green'
             
               onPress={createChat} 
               title="Create a new Chat" />
    </View>
  )
 }

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 30,
    height: "100%",
  }
});