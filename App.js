import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
} from "react-native";
import { useState } from "react";

import CustomModal from "./components/CustomModal";
import CustomFlatList from "./components/CustomFlatList";
import CustomInput from "./components/CustomInput";

export default function App() {
    const [taskDescription, setTaskdescription] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [itemSelectedToDelete, setItemSelectedToDelete] = useState({});
    const [modalVisibility, setModalVisibility] = useState(false);

    const onChangeTextHandler = (text) => {
        setTaskdescription(text);
    };

    const addTaskToList = () => {
        setTaskList((prev) => [
            ...prev,
            { id: Math.random().toString(), value: taskDescription },
        ]);
        setTaskdescription("");
    };

    const onSelectItemHandler = (id) => {
        setModalVisibility(!modalVisibility);
        setItemSelectedToDelete(taskList.find((item) => item.id === id));
    };

    const onDeleteItemHandler = () => {
        setTaskList(
            taskList.filter((task) => task.id !== itemSelectedToDelete.id)
        );
        setModalVisibility(!modalVisibility);
    };

    const renderTaskList = ({ item }) => {
        return (
            <View style={styles.task}>
                <Text>{item.value}</Text>
                <Pressable onPress={() => onSelectItemHandler(item.id)}>
                    <Image
                        style={styles.trashIcon}
                        source={require("./assets/trash.png")}
                    />
                </Pressable>
            </View>
        );
    };

    //Retorno de Componentes
    return (
        <>
            <View style={styles.container}>
                <View>
                    <Text style={styles.textTitle}>Mis tareas</Text>
                </View>

                <CustomInput
                    placeholder='Ingresar tarea'
                    onChangeTextHandler={onChangeTextHandler}
                    onPressHandler={addTaskToList}
                    taskDescription={taskDescription}
                
                />

                <CustomFlatList
                    taskList={taskList}
                    renderTaskList={renderTaskList}
                />

                <StatusBar style="inverted" />
            </View>

            <CustomModal
                modalVisibility={modalVisibility}
                modalTitle={"Atención"}
                modalMessage={""}
                setModalVisibility={setModalVisibility}
                itemSelectedToDelete={itemSelectedToDelete}
                confirmButtonTitle={"Eliminar tarea"}
                confirmButtonHandler={onDeleteItemHandler}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#83C5BE",
        padding: 30,
    },

    textTitle: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "#006D77",
        marginBottom: 15,
    },
    
    trashIcon: {
        width: 26,
        height: 34,
    },       
    
    task: {
        display: "flex",
        backgroundColor: "#FFDDD2",
        flexDirection: "row",
        borderColor: "#E29578",
        borderWidth: 1.5,
        padding: 5,
        margin: 5,
        borderRadius: 7,
        justifyContent: "space-between",
    },
});
