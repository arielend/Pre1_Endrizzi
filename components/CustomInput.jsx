import { StyleSheet, TextInput, View, Pressable, Image } from "react-native";

const CustomInput = ({placeholder, onChangeTextHandler, onPressHandler, taskDescription}) => {
    return (
		<View style={styles.inputContainer}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#FFF"
                style={styles.textInput}
                onChangeText={onChangeTextHandler}
                value={taskDescription}
                cursorColor={"orange"}
                maxLength={25}
            />
            <Pressable onPress={()=>onPressHandler()}>
                <Image
                    style={styles.addIcon}
                    source={require("../assets/add.png")}
                />
            </Pressable>
        </View>
    );
};

export default CustomInput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
    },

    textInput: {
        borderRadius: 12,
        paddingLeft: 15,
        backgroundColor: "#006D7777",
        width: 260,
        color: "#FFF",
    },
    
	addIcon: {
        width: 45,
        height: 45,
    },
});
