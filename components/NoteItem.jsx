import { StyleSheet, Text, View } from "react-native";

const NoteItem = ({ note }) => {
  return (
    <View style={styles.noteItem}>
      <Text style={styles.noteText}>{note.content}</Text>
    </View>
  );
};

export default NoteItem;

const styles = StyleSheet.create({
  noteItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
    padding: 15,
    marginVertical: 5,
  },
  noteText: {
    fontSize: 18,
  },
});
