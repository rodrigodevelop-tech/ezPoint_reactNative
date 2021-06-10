import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList
} 
from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { AntDesign } from '@expo/vector-icons';

import api from '../services/api';

import {Header} from '../components/Header';
import { CategoryButton } from '../components/CategoryButton';
import { TaskCardPrimary } from '../components/TaskCardPrimary';
import { Load } from '../components/Load';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { pointSave } from '../libs/storage';
import { useAuth } from '../contexts/auth';
import moment from 'moment';

interface CategoryProps {
  id: string;
  title: string;
}
interface TasksProps {
  id          :string;
  idCategory  :string;
  DateFinal   :string;
  hoursFinal  :string;
  title       :string;  
  description :string;
}

const categorias = [
    {"id": "0", "title":"Todos"},
    {"id": "1", "title":"Importante/Urgente"},
    {"id": "2", "title":"Importante/Não Urgente"},
    {"id": "3", "title":"Não Importante/Urgente"},
    {"id": "4", "title":"Não Importante/Não Urgente"},
]


export function Dashboard(){
  const [categorys, setCategorys] = useState<CategoryProps[]>([]);
  const [tasks, setTasks] = useState<TasksProps[]>([]);
  const [filteredTasks,setFilteredTasks] = useState<TasksProps[]>([]);
  const [categorySelected, setCategorySelected] = useState("0");
  const [loading, setLoading] = useState(true);
  const [start, setStart] = useState(false);

  const {user,pointInfo,pointStart} = useAuth();

  const navigation = useNavigation();

  useEffect(()=>{
  
    if(pointInfo)
     setStart(true)
    else
     setStart(false);

  },[pointInfo]);

  function handleDashboard() {
        navigation.navigate("CreateTask");
  }
  
  function handleCategorySelected(category: string){
    setCategorySelected(category);

    if(category === "0")
      return setFilteredTasks(tasks);

    const filtered = tasks.filter(task =>{
      if(task.idCategory === category )
        return category
    });

    setFilteredTasks(filtered);
  }
  function handleSelectTask(task:TasksProps){
    navigation.navigate('Taskselected',{task});
  }
  // setLoading(false);
  // useEffect(()=>{
  //     async function fetchCategory(){
  //       setCategorys(categorias);
  //       setLoading(false);
  //     }a
  //     fetchCategory();
  // });

  
  useEffect(()=>{
    
    async function fetchTasks(){
      const response = await api.get(`task/${categorySelected}`);

      console.log(response.data);

      // setTasks(dados2);
      // setLoading(false);
    }

    fetchTasks();
  }),[];
  

  // useEffect(()=>{
  //   async function fetchTasks(){
  //     const { data } = await api.get(`task/${categorys}`,{
        
  //     });
  //     setTasks(data);
  //     setLoading(false);
  //   }

  //   fetchTasks();
  // }),[];

  // if(loading)
    // return <Load/>

    return(
      <View style={styles.container}>
          
        <View style={styles.header}>

           {start ? <Header dateStart={pointStart}/> : <Header dateStart='Vamos começar?'/> } 

            <Text style={styles.title}>
              Bom dia {user?.name},
            </Text>
            <Text style={styles.subTitle}>
              Vamos organizar suas tarefas?
            </Text>

        </View> 
        <View >
          
          <TouchableOpacity
            style={styles.newTask}
            activeOpacity={0.70}
            onPress={handleDashboard}
          >
            <AntDesign name="pluscircleo" size={20} color="#32B768" />
            <Text style={styles.ButtonNewTask}>
              Nova Tarefa
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={categorias}
            keyExtractor={(item)=>String(item.id)}
            renderItem={({item})=>(
              <CategoryButton 
                title={item.title} 
                active={item.id === categorySelected}
                onPress={()=> handleCategorySelected(item.id)}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryList}
          />
        </View>

        {/* <View style={styles.tasks}>
          <FlatList
              data={filteredTasks}
              keyExtractor={(item)=>String(item.id)}
              renderItem={({item})=>(
                <TaskCardPrimary 
                  data={item}  
                  onPress={()=>handleSelectTask(item)}
                />
              )}
              showsVerticalScrollIndicator={false}
              // numColumns={2}
            />
        </View> */}
      </View>
      
    )
}

const styles = StyleSheet.create({
  linearGradientBackGround: {
    flex: 1,
},
   container:{
      flex:1,
      backgroundColor: colors.background,
   },
   header:{
      paddingHorizontal: 30,
   },
   title:{
      fontSize: 22,
      color: colors.heading,
      fontFamily: fonts.heading,
      lineHeight: 30,
      marginTop: 15,
      marginLeft: 0
   },
   subTitle:{
      fontSize: 18,
      color: colors.heading,
      fontFamily: fonts.text,
   },
   newTask: {
     flexDirection: 'row',
     paddingHorizontal: 31,
     marginTop: 15,
     marginBottom: 10,
   },
   ButtonNewTask:{
      fontSize: 15,
      marginLeft: 5,
      color: colors.green
   },
   categoryList:{
     height: 40,
     justifyContent: 'center',
     paddingBottom: 5,
     marginTop: 10,
     marginLeft: 32,
     marginHorizontal: 32
   },
   tasks: {
    flex: 1,
    paddingHorizontal:21,
    marginTop:10,
    justifyContent: 'center'
   }
});