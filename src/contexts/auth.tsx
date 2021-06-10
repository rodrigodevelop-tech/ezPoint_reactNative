import React,{ createContext, useState, useEffect, useContext } from 'react';
import api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

interface IUser{
  name: string;
  email: string;
}

interface IAuthContextData{
  signed: boolean;
  user: IUser | null;
  loading: boolean;
  pointInfo : boolean;
  pointStart : string;
  signIn(email: string,password:string): Promise<void>;
  signOut(): void;
  point():void;
  pointFinal(): void;
}

const AuthContext = createContext<IAuthContextData>( { } as IAuthContextData );

export const AuthProvider: React.FC = ({children}) => {
  const [user,setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [pointStart, setPointStart] =  useState<string>('');
  const [pointInfo, setPointInfo] =   useState(false);
  const [pointStartDate, setPointStartDate] = useState<string>();

  useEffect(()=>{
    async function loadStoragedData(){
      const storageUser = await AsyncStorage.getItem('@ezpoint:user');
      const storageToken = await AsyncStorage.getItem('@ezpoint:token'); 
 

      if(storageUser && storageToken) {
        api.defaults.headers['Authorization']= `Bearer ${storageToken}`; 
        setUser(JSON.parse(storageUser));
      }
      setLoading(false);

    }

    loadStoragedData();
  },[]);

  async function signIn(email: string,password:string){
    try{          
      const response = await api.post('/login',{
        email:email,
        password: password
      });
      
      setUser(response.data);

      const {token} = response.data;

      api.defaults.headers['Authorization']= `Bearer ${token}`;

      await AsyncStorage.setItem('@ezpoint:user',JSON.stringify(response.data));
      await AsyncStorage.setItem('@ezpoint:token',JSON.stringify(token));
      
    }catch(err){
      console.log('Erro API: '+err);
      Alert.alert('Senha ou email incorretos');
    }
      
  }

  function signOut(){
    AsyncStorage.clear().then(()=>{
      setUser(null);
    })

  }

  async function point(){
    try{  
      const data = new Date();
      let hora    = data.getHours();          
      let min     = data.getMinutes();    

      const str_hora = hora + ':' + min + ' h';

      if(!pointInfo){
        setPointInfo(true);
        setPointStart(str_hora);
      }
      else 
        return Alert.alert('Ponto já foi iniciado!');

      await AsyncStorage.setItem('@startJob:dateStart',pointStart);      

    }catch(err){
      throw new Error(err);
    }
  }

  function pointFinal(){
    AsyncStorage.removeItem('@startJob:dateStart').then(() =>{
      setPointInfo(false);
      setPointStart('');
    })
  }


  return(
    <AuthContext.Provider value={{signed:!!user,user,loading,pointInfo: !!pointStart,pointStart,signIn,signOut,point,pointFinal}}>
      {children} 
    </AuthContext.Provider>
  );
};

export function useAuth(){
  const context = useContext(AuthContext);

  return context;
} 