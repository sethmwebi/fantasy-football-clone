import { atom, selector } from "recoil"
import { Player, Positions } from "../types"

export const myFormationState = atom({
	key: "myFormation",
	defaut: {
		FWD: 3,
		MID: 3,
		DEF: 4,
		GCK: 1
	}
}); 

export const myPlayersState = atom({
	key: "myPlayersState",
	default: [] as Player[]
})

const positions = ["FWD", "MID", "DEF", "GCK"] as Positions[];
export const myPlayersByPosition = selector({
	key: "myPlayersByPosition",
	get: ({ get }) => {
		const players = get(myPlayersState)
		const formation = get(myFormationState)

		const groupedPlayers = {}

		positions.forEach(position => {
			groupedPlayers[position] = players.filter(p => p.position === position);
			for(let i = groupedPlayers[position].length; i < formation[position]; i++){
				groupedPlayers[position].push(null)
			}
		})

		return groupedPlayers;
	}
})