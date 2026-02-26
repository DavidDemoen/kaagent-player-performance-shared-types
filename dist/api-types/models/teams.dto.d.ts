import { PlayersTeamsHistWithPlayerDto } from "./players-teams-hist.dto";
export interface TeamDto {
    teamKey: string;
    opteamalKey: string;
    name: string;
}
export type TeamSelect = TeamDto;
export type TeamInsert = Omit<TeamDto, "teamKey">;
export type TeamUpdate = Partial<TeamInsert>;
export type TeamWithPlayerHistDto = TeamDto & {
    playersHist: PlayersTeamsHistWithPlayerDto[];
};
//# sourceMappingURL=teams.dto.d.ts.map