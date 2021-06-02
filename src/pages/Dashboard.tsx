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
import { Ionicons } from '@expo/vector-icons'; 

import api from '../services/api';

import {Header} from '../components/Header';
import { CategoryButton } from '../components/CategoryButton';
import { TaskCardPrimary } from '../components/TaskCardPrimary';
import { Load } from '../components/Load';

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

const dados1 = [
    {"id": "0", "title":"Todos"},
    {"id": "1", "title":"Normal"},
    {"id": "2", "title":"Urgente"},
    {"id": "3", "title":"Pendente"},
    {"id": "4", "title":"Sem pressa"},
    {"id": "5", "title":"Atrasada"}
]

const dados2 = [
  {
    "id":"1",
    "idCategory":"1", 
    "DateFinal":"05/06/2021", 
    "hoursFinal":"12:05:00", 
    "title":"Ajuste no sistema",  
    "description":"Realizar um ajuste na tela de saida no sistema de estoque."
  },
  {
    "id":"2",
    "idCategory":"2", 
    "DateFinal":"01/06/2021", 
    "hoursFinal":"08:00:00", 
    "title":"Relatórios Urgente", 
    "description":"Gerar relatórios assistênciais para a diretoria"
  },
  {
    "id":"3",
    "idCategory":"3", 
    "DateFinal":"29/05/2021", 
    "hoursFinal":"15:40:00", 
    "title":"Treinamento de Médicos",  
    "description":"Agendar um treinamento com a equipe médica."
  },
  {
    "id":"4",
    "idCategory":"4", 
    "DateFinal":"15/06/2021", 
    "hoursFinal":"18:19:00", 
    "title":"Adicionar campo",  
    "description":"Adicionar um campo de idade no cadastro de usuários"
  },
  {
    "id":"5",
    "idCategory":"5", 
    "DateFinal":"05/06/2021", 
    "hoursFinal":"18:19:00", 
    "title":"Manutenção o servidor",  
    "description":"Realizar uma manutenção no servidor do banco de dados"
  }
]

export function Dashboard(){
  const [categorys, setCategorys] = useState<CategoryProps[]>([]);
  const [tasks, setTasks] = useState<TasksProps[]>([]);
  const [filteredTasks,setFilteredTasks] = useState<TasksProps[]>([]);
  const [categorySelected, setCategorySelected] = useState("0");
  const [loading, setLoading] = useState(true);
  
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

  useEffect(()=>{
      async function fetchCategory(){
        setCategorys(dados1);
        setLoading(false);
      }
      fetchCategory();
  });

  
  useEffect(()=>{
    async function fetchTasks(){
      setTasks(dados2);
      setLoading(false);
    }

    fetchTasks();
  }),[];
  
  // useEffect(()=>{
  //   async function fetchCategory(){
  //     const { data } = await api.get('category')
  //     setCategorys(data);
  //   }

  //   fetchCategory();
  // }),[];

  // useEffect(()=>{
  //   async function fetchTasks(){
  //     const { data } = await api.get('tasks')
  //     setTasks(data);
  //   }

  //   fetchTasks();
  // }),[];

  if(loading)
    return <Load/>

    return(
      <View style={styles.container}>
        <View style={styles.header}>
         <Header/>
            <Text style={styles.title}>
              Bom dia Rodrigo,
            </Text>
            <Text style={styles.subTitle}>
              Vamos organizar suas tarefas?
            </Text>
         </View> 
        <View>
          <FlatList
            data={categorys}
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

        <View style={styles.tasks}>
          <FlatList
              data={filteredTasks}
              renderItem={({item})=>(
                <TaskCardPrimary data={item}  />
              )}
              showsVerticalScrollIndicator={false}
              // numColumns={2}
            />
        </View>
         
      </View>
    )
}

const styles = StyleSheet.create({
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
    marginTop:5,
    justifyContent: 'center'
   }
});