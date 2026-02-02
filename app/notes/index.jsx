import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import NoteList from "@/components/NoteList";
import AddNoteModal from "../../components/AddNoteModal";

const NoteScreen = () => {
  //Hard coded for now
  const [notes, setNotes] = useState([
    { id: 1, content: "First Note" },
    { id: 2, content: "Second Note" },
    { id: 3, content: "Third Note" },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newNotes, setNewNotes] = useState("");

  const addNote = () => {
    if (newNotes.trim() === "") return;
    setNotes((prevNotes) => [
      ...prevNotes,
      { id: Date.now().toString(), content: newNotes },
    ]);
    setNewNotes("");
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <NoteList notes={notes} />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+ Add Note</Text>
      </TouchableOpacity>
      {/* Modal */}
      <AddNoteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newNotes={newNotes}
        setNewNotes={setNewNotes}
        addNote={addNote}
      />
    </View>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    // justifyContent: "center",
    // alignItems: "center",
  },

  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    left: 20,
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
