import { Text, View, TextInput } from "react-native";
import { useState } from "react";

const [user, onChangeUser] = useState('');

export default function Index() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput placeholder="username" onChangeText={onChangeUser} value={user}></TextInput>
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </View>
    );
  }