import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, FlatList, Modal, Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [taskDescription, setTaskdescription] = useState('')
  const [taskList, setTaskList] = useState([])
  const [itemSelectedToDelete, setItemSelectedToDelete] = useState({})
  const [modalVisibility, setModalVisibility] = useState(false)

  const onChangeTextHandler = (text) => {
    setTaskdescription(text);
  }

  const addTaskToList = () => {
    setTaskList(prev => [...prev, { id: Math.random().toString(), value: taskDescription }])
    setTaskdescription('')
  }

  const onSelectItemHandler = (id) => {
    setModalVisibility(!modalVisibility)
    setItemSelectedToDelete(taskList.find(item => item.id === id))
  }

  const onDeleteItemHandler = () => {
    setTaskList(taskList.filter(task => task.id !== itemSelectedToDelete.id))
    setModalVisibility(!modalVisibility)
  }

  const renderTaskList = ({ item }) => {
    return (
      <View style={styles.task}>
        <Text>{item.value}</Text>
        <Pressable onPress={() => onSelectItemHandler(item.id)}>
          <Image style={styles.trashIcon} source={require('./assets/trash.png')} />
        </Pressable>
      </View>
    )
  }

  //Retorno de Componentes
  return (
    <>    
      <View style={styles.container}>

        <View>
          <Text style={styles.textTitle}>Mis tareas</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Ingresar tarea"
            placeholderTextColor='#FFF'
            style={styles.textInput}
            onChangeText={onChangeTextHandler}
            value={taskDescription}
            
          />
          <Pressable onPress={addTaskToList}>
          <Image style={styles.addIcon} source={require('./assets/add.png')} />
          </Pressable>
        </View>

        <View>
          <FlatList
            data={taskList}
            renderItem={renderTaskList}
            keyExtractor={task => task.id}
          />
        </View>
        
        <StatusBar style="inverted" />

      </View>
      
      <Modal animationType='fade' transparent={true} visible={modalVisibility}>
        <View style={styles.modal}>

          <View style={styles.modalMessageContainer}>
            <Text>Desea eliminar: </Text>
            <Text>{itemSelectedToDelete.value}</Text>
          </View>

          <View style={styles.modalButtonsContainer}>
            <Pressable style={styles.modalButton} onPress={() => setModalVisibility(!modalVisibility)}>
              <Text>Cancelar</Text>
            </Pressable>
            <Pressable style={styles.modalButton} onPress={onDeleteItemHandler}>
              <Text>Eliminar tarea</Text>
            </Pressable>
          </View>

        </View>
      </Modal>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#83C5BE',
    padding: 30,
  },

  textTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#006D77',
    marginBottom: 15,
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  textInput: {
    borderRadius: 12,
    paddingLeft: 15,
    backgroundColor: '#006D7777',
    width: 260,
    color: '#FFF',
  },

  trashIcon:{
    width: 26,
    height: 34,
  },

  addIcon:{
    width: 45,
    height: 45,
  },

  addButton: {
    borderCurve: 'circular',
    backgroundColor: '#0CF',
  },

  task: {
    display: 'flex',
    backgroundColor: '#FFDDD2',
    flexDirection: 'row',
    borderColor: '#E29578',
    borderWidth: 1.5,
    padding: 5,
    margin: 6,
    borderRadius: 7,
    justifyContent: 'space-between',
  },

  modal:{
    marginTop: 270,
    padding: 15,
    display: 'flex',
    rowGap: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFDDD2',
    borderRadius: 10,
    width: '95%',
    marginHorizontal: '2.5%'
  },

  modalMessageContainer:{
    display: 'flex',
    alignItems: 'center',
  },

  modalButtonsContainer: {
    display: 'flex',
  },

  modalButton:{
    marginVertical: 5,
    width: 200,
    backgroundColor: '#EDF6F9',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#006D77',
    height: 40,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

});
