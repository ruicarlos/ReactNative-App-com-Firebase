import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        color: "#F92E6A"
    },
    label:{
        width:"90%",
        marginTop:20,
        fontSize:16,
        marginLeft:20,
        color:"#F92E6A"
    },
    input:{
        width:"90%",
        marginTop:10,
        padding:10,
        height:50,
        borderBottomWidth: 1,
        borderBottomColor:"#F92E6A",
        marginLeft:"auto",
        marginRight:"auto"
    },

    buttonNewTask:{
        width: 60,
        height:60,
        position: "absolute",
        bottom:30,
        left:20,
        backgroundColor:"#47A90F",
        borderRadius: 55,
        justifyContent: "center",
        alignItems: "center"
    },

    iconButton:{
        color:"#ffffff",
        fontSize:14,
        fontWeight: "bold"
    }

})

export default styles