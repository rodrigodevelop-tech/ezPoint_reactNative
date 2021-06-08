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
import { MaterialIcons,Feather   } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { TextInput } from "react-native-gesture-handler";
import { CategoryButtonTask } from "../components/CategoryButtonTask";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from 'moment';

import { useRoute } from '@react-navigation/core';
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

interface Params {
  task: {
    id          :string;
    idCategory  :string;
    DateFinal   :string;
    hoursFinal  :string;
    title       :string;  
    description :string;
  }
}

export function TaskSelected() {
  const navigation = useNavigation();

  const route = useRoute();

  const {task} = route.params as Params;

  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const [activeButton, setActiveButton] = useState(0);
  const [date, setDate] = useState(new Date(1598051730000));
  const [hour, setHour] = useState(new Date(1598051730000));
  const [dateSelected, setDateSelected] = useState("Alterar Data");
  const [hourSelected, setHourSelected] = useState("Alterar horário");
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const onChangeDate = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    
    setShow(Platform.OS === "ios");

    const dateFormat = moment(currentDate).format('L');

    setDateSelected(dateFormat);
    setDate(currentDate);
   
  };

  const onChangeTime = (event: any, selectedHour: any) => {
    const currentDate = selectedHour || hour;
  
    setShow(Platform.OS === "ios");

    const hourFormat = moment(currentDate).format('LTS');
  
    setHourSelected(hourFormat);
    setHour(currentDate);

  };
  

  function alterar() {
    if (activeButton === 0) 
      return Alert.alert("Selecione uma categoria!");
    
    if (title === '') 
      return Alert.alert("Informe um titulo para a tarefa!");
    
    navigation.navigate("Dashboard");
  }

  const showMode = (currentMode: React.SetStateAction<string>) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showHourpicker = () => {
    showMode("time");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sua Tarefa</Text>
      <View style={styles.lineBotton}></View>
      <View>
        <Text style={styles.titleInput}>Título da tarefa </Text>
        <TextInput
          style={styles.input}
          placeholder="Título"
          value={title}
          onChangeText={(value) => setTitle(value)}
        />
      </View>
      <View>
        <Text style={styles.titleInput}>Descrição</Text>
        <TextInput
          style={styles.input}
          value={description}
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
        <View >   
          <Text style={styles.titleInput}>Entrega</Text>
            <View style={styles.date}>
              <TouchableOpacity
                  style={styles.newDate}
                  activeOpacity={0.70}
                  onPress={showDatepicker}
              >
                <MaterialIcons name="date-range" size={24} color="#32B768" />
                <Text style={styles.ButtonNewDate}>
                  {dateSelected}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                  style={styles.newDate}
                  activeOpacity={0.70}
                  onPress={showHourpicker}
              >
                <Feather  name="clock" size={24} color="#32B768" />
                <Text style={styles.ButtonNewDate}>
                  {hourSelected}
                </Text>
              </TouchableOpacity>
              {(mode=='date'&& show) && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode='date'
                  locale='pt-br'
                  // is24Hour={true}
                  display="default"
                  onChange={onChangeDate}
                />          
              )}
              {(mode=='time'&& show) && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={hour}
                  mode='time'
                  locale='pt-br'
                  // is24Hour={true}
                  display="default"
                  onChange={onChangeTime}
                />          
              )}
            </View>
            <View style={styles.containerSubmitButton}>
              <View style={styles.submitButton}>
                <Button color="#3483F5" title="Salvar" onPress={alterar} />
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
  date: {
    flexDirection: 'row',
  },
  newDate: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    marginTop: 15,
    marginBottom: 10,
  },
  ButtonNewDate:{
    fontSize: 15,
    marginLeft: 5,
    color: colors.green
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
