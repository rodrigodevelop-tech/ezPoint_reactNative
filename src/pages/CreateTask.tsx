import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
  Platform,
} from "react-native";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { Ionicons } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { TextInput } from "react-native-gesture-handler";
import { CategoryButtonTask } from "../components/CategoryButtonTask";
import DateTimePicker from "@react-native-community/datetimepicker";

export function CreateTask() {
  const [show, setShow] = useState(false);
  const [activeButton, setActiveButton] = useState(0);
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  function cadastrar() {
    if (activeButton === 0) {
      console.log("selecione uma categoria");
      return;
    }
    console.log(date);
    console.log(activeButton);
    console.log(title);
    console.log(description);
  }

  const showMode = (currentMode: React.SetStateAction<string>) => {
    setShow(!show);
    // setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar nova tarefa</Text>
      <View style={styles.lineBotton}></View>
      <View>
        <Text style={styles.titleInput}>Título da tarefa </Text>
        <TextInput
          style={styles.input}
          placeholder="Título"
          onChangeText={(value) => setTitle(value)}
        />
      </View>
      <View>
        <Text style={styles.titleInput}>Descrição</Text>
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          onChangeText={(value) => setDescription(value)}
        />
      </View>
      <View>
        <Text style={styles.titleInput}>Categoria</Text>
        <View style={styles.categoryContainer}>
          <CategoryButtonTask
            title="Importante/Urgente"
            active={activeButton == 1}
            onPress={() => setActiveButton(1)}
          />
          <CategoryButtonTask
            title="Importante/Não Urgente"
            active={activeButton == 2}
            onPress={() => setActiveButton(2)}
          />
        </View>
        <View style={styles.categoryContainer}>
          <CategoryButtonTask
            title="Não Importante/Urgente"
            active={activeButton == 3}
            onPress={() => setActiveButton(3)}
          />
          <CategoryButtonTask
            title="Não Importante/Não Urgente"
            active={activeButton == 4}
            onPress={() => setActiveButton(4)}
          />
        </View>
        <View>
          <Text style={styles.titleInput}>Prazo para ser feito</Text>
          <View>
            <View style={styles.input}>
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                locale="pt-Br"
                // is24Hour={true}
                display="spinner"
                onChange={onChange}
              />
            </View>
            <View style={styles.containerSubmitButton}>
              <View style={styles.submitButton}>
                <Button color="#fff" title="Cadastrar" onPress={cadastrar} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: getStatusBarHeight() + 35,
    width: "100%",
    flexDirection: "row",
    textAlign: "center",
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
  },
  subTitle: {
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
    flexDirection: "row",
    marginHorizontal: 12,
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
  },
  lineBotton: {
    borderBottomColor: "#f1f2f3",
    borderBottomWidth: 1,
    marginTop: 12,
  },
  titleInput: {
    marginHorizontal: 12,
    marginTop: 10,
    marginBottom: 0,
    fontFamily: fonts.text,
    color: colors.heading,
    fontSize: 16,
  },
  input: {
    marginHorizontal: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#f1f2f3",
    padding: 15,
    color: "black",
    fontFamily: fonts.text,
  },
  categoryButton: {},

  categoryContainer: {
    display: "flex",
    flexDirection: "row",
    // padding: 1,
    marginBottom: 10,
    marginLeft: 10,
    width: 205,
  },
  submitButton: {
    backgroundColor: "#3483F5",
    color: "#fff",
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "center",
    borderRadius: 6,
    height: 50,
  },
  containerSubmitButton: {
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    paddingHorizontal: 20,
  },
});
