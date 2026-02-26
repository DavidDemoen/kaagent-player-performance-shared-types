import { PlayerDto } from "./players.dto";
export type PlayersTeamsHistDto = {
    playerId: string;
    teamKey: string;
    isCurrent: boolean;
    isPrimaryTeam: boolean;
};
export type PlayersTeamsHistSelect = PlayersTeamsHistDto;
export type PlayersTeamsHistInsert = PlayersTeamsHistDto;
export type PlayersTeamsHistUpdate = Partial<PlayersTeamsHistInsert>;
export type PlayersTeamsHistWithPlayerDto = PlayersTeamsHistDto & {
    player: PlayerDto;
};
//# sourceMappingURL=players-teams-hist.dto.d.ts.map