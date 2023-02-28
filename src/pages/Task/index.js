import React, { useState, useEffect } from "react";
import { SafeareaView, View,Text, TouchableOpacity, FlatList} from "react-native";
import database from "../../config/firebaseconfig"
import { FontAwesome } from "@expo/vector-icons"
import styles from "./style"

export default function Task({ navigation }){
    const [task, setTask] = useState([])

    function deleteTask(id){
        database.collection("tasks").doc(id).delete()
    }

    useEffect(() =>{
        database.collection("tasks").onSnapshot((query)=>{
            const list =[]
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id})
            })
            setTask(list)     
        })

    }, [])

    return(
        <View style={styles.container}>   
        <Text style={styles.title}>Suas Tarefas</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={task}
                renderItem={( {item} )=>{
                    return(
                    <View style={styles.Tasks}>
                        <TouchableOpacity 
                            style={styles.deleteTask}
                            onPress={() =>{
                                deleteTask(item.id)
                            } }
                        >
                        <FontAwesome
                            name="trash"
                            size={23}
                            color="#EE4B2B"
                        >
                            
                        </FontAwesome>   

                        </TouchableOpacity>
                        <Text 
                            style={styles.descriptionTask}
                            onPress={()=>{
                                navigation.navigate("Details",{
                                    id: item.id,
                                    description: item.description
                                })
                            }}
                        >
                            {item.description}
                        </Text>
                    </View>
                    )
                }}
            
            />



            <TouchableOpacity 
                style={styles.buttonNewTask}
                onPress={() => navigation.navigate("New Task")}
            >

                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    );
}