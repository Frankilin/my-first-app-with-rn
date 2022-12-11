import React, { useState } from "react";

import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";

import { styles } from "./styles";
import { Participant } from "../../components/participant";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");
  //   const participants = [
  //     "Frankilin",
  //     "Vitor Hugo",
  //     "Kleber",
  //     "Diego",
  //     "Kleyton",
  //     "Anderson",
  //     "Emerson",
  //     "Ezequiel",
  //     "Jorge",
  //     "Alberto",
  //     "Paulo",
  //     "Valter",
  //   ];

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Atenção!",
        "Já existe um participante na lista com esse nome."
      );
    }
    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
  }

  const handleParticipantRemove = (nome: string) => {
    return Alert.alert(
      "Remover",
      `Tem certeza que deseja remover ${nome} da lista?`,
      [
        {
          text: "Sim",
          onPress: () =>
            setParticipants((prevState) =>
              prevState.filter((participant) => participant !== nome)
            ),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sábado, 10 de Dezembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6B6B6B"}
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        keyExtractor={(item) => item}
        data={participants}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmpty}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
}
