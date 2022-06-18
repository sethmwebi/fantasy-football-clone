import {Suspense } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet"
import { useRecoilValue } from "recoil"
import { allPlayersState, filteredPlayers } from "../atoms/Players"
import PlayerListItem from "./PlayerListItem"

const PlayersList = () => {
	const players = useRecoilValue(filteredPlayers);
	return (
		<Suspense fallback={<Text>Loading...</Text>}>
		<BottomSheetFlatList
      data={players}
      renderItem={({ item }) => <PlayerListItem player={item} />}
    />
		</Suspense>
	);
};

export default PlayersList;
