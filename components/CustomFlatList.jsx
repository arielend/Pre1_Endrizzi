import { StyleSheet, Text, View, FlatList } from 'react-native'

const CustomFlatList = ({taskList, renderTaskList}) => {
  return (
    <View>
        <FlatList
        data={taskList}
        renderItem={renderTaskList}
        keyExtractor={item => item.id}
        />
    </View>
  )
}

export default CustomFlatList

const styles = StyleSheet.create({})