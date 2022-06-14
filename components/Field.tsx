import React from 'react'
import { StyleSheet, ImageBackground, View, Text } from "react-native";

import field from "../assets/images/field.jpg";
import FieldPlayer from "./FieldPlayer"

const players: { [key: string]: null[] } = {
  FWD: [null, null, null],
  MID: [null, null, null],
  DEF: [null, null, null, null],
  GKP: [null],
};
const Field = () => {
	return (
		<ImageBackground
        source={field}
        style={{
          width: "100%",
          aspectRatio: 2 / 3,
          justifyContent: "space-around",
          alignItems: "center",
        }}
        resizeMode="contain"
      >
        {Object.keys(players).map((position, index) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
            }}
            key={position + index}
          >
            {players[position].map((player, index) => (
              <FieldPlayer key={index} player={player} position={position}/>
            ))}
          </View>
        ))}
      </ImageBackground>
	)
}

export default Field