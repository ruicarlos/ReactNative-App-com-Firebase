import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff",
        paddingTop:20
    },
    title: {
        paddingLeft: 15,
        color:"#F92E6A",
        fontWeight: "bold"
    },
    Tasks:{
        width:"100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop:5
    },  
    deleteTask:{
        justifyContent:"center",
        paddingLeft:15  
    },
    descriptionTask:{
        width:"75%",
        alignContent:"flex-start",
        backgroundColor:"#CCCCCC",
        padding:12,
        paddingHorizontal:20,
        borderRadius:50,
        marginBottom:5,
        marginRight: 15,
        color:"#000000",
        fontSize:20, 
        fontWeight:"bold"
    },

    buttonNewTask: {
        width:60,
        height:60,
        position: "absolute",
        bottom:30,
        left:20,
        backgroundColor:"#47A90F",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },

    iconButton:{
        color:"#ffffff",
        fontSize:25,
        fontWeight: "bold",
    }
});


export default styles