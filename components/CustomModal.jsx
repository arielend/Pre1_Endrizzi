import { StyleSheet, Text, View } from 'react-native'
import { Modal, Pressable } from 'react-native'

const CustomModal = ({modalVisibility, setModalVisibility, modalTitle, itemSelectedToDelete, confirmButtonTitle, confirmButtonHandler }) => {
  return (
    <View>

        <Modal animationType='fade' transparent={false} visible={modalVisibility}>
        <View style={styles.modal}>

          <View style={styles.modalMessageContainer}>
            <Text style={styles.modalTitle}>{modalTitle}</Text>
            <Text>Desea eliminar: </Text>
            <Text>{itemSelectedToDelete.value}</Text>
          </View>

          <View style={styles.modalButtonsContainer}>
            <Pressable style={styles.modalButton} onPress={() => setModalVisibility(!modalVisibility)}>
              <Text>Cancelar</Text>
            </Pressable>
            <Pressable style={styles.modalButton} onPress={()=>confirmButtonHandler()}>
              <Text>{confirmButtonTitle}</Text>
            </Pressable>
          </View>

        </View>
      </Modal>

    </View>
  )
}

export default CustomModal

const styles = StyleSheet.create({
    modal:{
        marginTop: 270,
        padding: 15,
        display: 'flex',
        rowGap: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFDDD2',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#E29578',
        width: '95%',
        marginHorizontal: '2.5%'
    },

    modalTitle:{
        fontSize: 16,
        fontWeight: 'bold',
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
})