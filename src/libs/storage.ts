import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';


interface StoragePoint {
  point:{
    start : boolean;
    dateStart : string;
  }
 
}

export async function pointSave() {
  try{  
    const data = await AsyncStorage.getItem('@startJob:start');
    return data;
  }catch(err){
    throw new Error(err);
  }
}