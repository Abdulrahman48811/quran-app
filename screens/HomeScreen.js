import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";
import { ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };
  // let [isLoading, setIsLoading] = useState(true);
  // let [error, setError] = useState();
  // let [response, setResponse] = useState();
  // // let [text, setText] = useState();

  // useEffect(() => {
  //     fetch("https://api.alquran.cloud/v1/surah/1/ar.asad")
  //     .then(res => res.json)
  //     .then((result) => {
  //         setIsLoading(false);
  //         setResponse(result);
  //     },
  //     (error) => {
  //         setIsLoading(false);
  //         setError(error);
  //     }
  //     )
  // }, [])
  // const getContent = () => {
  //     if (isLoading) {

  //         return <ActivityIndicator size="large" />;
  //     }
  //     if (error) {
  //         return <Text>{error}</Text>
  //     }
  //     console.log(response);
  //     return <Text>Ayah Of The Day: {response}</Text>
  // }

  const [data, setData] = useState([]);
  const [ayahs, setAyahs] = useState([]);
  const [ayahSeven, setAyahSeven] = useState([]);
  
  const getData = async () => {
    try {
      const response = await fetch(
        "https://api.alquran.cloud/v1/surah/1/ar.asad"
      );
      const json = await response.json();
      setData(json.data.name);
      setAyahs(json.data.ayahs);
      setAyahSeven(json.data.ayahs[6])
    } catch (error) {
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let surah =
    ayahs[0].text +
    ayahs[0].number +
    "  " +
    ayahs[1].text +
    ayahs[1].number +
    " " +
    ayahs[2].text +
    ayahs[2].number +
    "" +
    ayahs[3].text +
    ayahs[3].number +
    " " +
    ayahs[4].text +
    ayahs[4].number +
    " " +
    ayahs[5].text +
    ayahs[5].number
    " " +
    ayahs[6].text +
    ayahs[6].number;
  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
      <Text>{data}</Text>
      <Text>{surah} + {ayahSeven.text} + {ayahSeven.number}</Text>
    </View>
  );
};

export default HomeScreen;

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
});
