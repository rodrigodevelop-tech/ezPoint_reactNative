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

import api from '../services/api';

import {Header} from '../components/Header';
import { CategoryButton } from '../components/CategoryButton';
import { TaskCardPrimary } from '../components/TaskCardPrimary';

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

export function Dashboard(){
  const [categorys, setCategorys] = useState<CategoryProps[]>([]);
  const [tasks, setTasks] = useState<TasksProps[]>([]);
  
  useEffect(()=>{
    async function fetchCategory(){
      const { data } = await api.get('category')
      setCategorys(data);
    }

    fetchCategory();
  }),[];

  useEffect(()=>{
    async function fetchTasks(){
      const { data } = await api.get('tasks')
      setTasks(data);
    }

    fetchTasks();
  }),[];


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
                active
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryList}
          />
        </View>

        <View style={styles.tasks}>
          <FlatList
              data={tasks}
              renderItem={({item})=>(
                <TaskCardPrimary data={item}  />
              )}
              showsHorizontalScrollIndicator={false}
              numColumns={2}
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
      fontSize: 17,
      color: colors.heading,
      fontFamily: fonts.heading,
      lineHeight: 20,
      marginTop: 15,
   },
   subTitle:{

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
    paddingHorizontal:32,
    justifyContent: 'center'
   }
});