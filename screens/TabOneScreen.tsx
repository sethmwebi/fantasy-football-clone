import { useRef } from "react";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

import Field from "../components/Field";
import TeamStats from "../components/TeamStats";
import PlayerListItem from "../components/PlayerListItem";
import Filters from "../components/Filters"

import { players } from "../assets/data/players";

export default function TabOneScreen() {
  const playersBottomSheet = useRef<BottomSheet>(null);
  const filtersBottomSheet = useRef<BottomSheet>(null);
  const viewPlayers = () => {
    playersBottomSheet.current?.expand();
  };

  const snapPoints = ["50%"];
  return (
    <SafeAreaView style={styles.container}>
      <TeamStats />
      <Field />
      <Pressable onPress={viewPlayers} style={styles.buttonContainer}>
        <Text>View players</Text>
      </Pressable>

      <BottomSheet
        ref={playersBottomSheet}
        snapPoints={snapPoints}
        enablePanDownToClose
        index={-1}
      >
        <Pressable
          onPress={() => filtersBottomSheet.current?.expand()}
          style={styles.buttonContainer}
        >
          <Text>Filters</Text>
        </Pressable>
        <BottomSheetFlatList
          data={players}
          renderItem={({ item }) => <PlayerListItem player={item} />}
        />
      </BottomSheet>
      <BottomSheet
        ref={filtersBottomSheet}
        snapPoints={snapPoints}
        enablePanDownToClose
        index={-1}
      >
        <Filters />
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#72CC5E",
  },
  buttonContainer: {
    backgroundColor: "orange",
    width: "90%",
    margin: 20,
    padding: 10,
    alignItems: "center",
    borderRadius: 50,
    marginTop: "auto",
  },
  contentContainer: {},
});
