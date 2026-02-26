import { PlayersPositionsHistDto } from "./players-positions-hist.dto";
export interface PlayerDto {
    id: string;
    opteamalId: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    gender: string;
    shirtNumber: number;
    nationality: string;
    secondNationality?: string | null;
    createdAt: Date;
    updatedAt: Date;
    positionsHist: PlayersPositionsHistDto[];
}
export type PlayerSelect = PlayerDto;
export type PlayerInsert = Omit<PlayerDto, "id" | "createdAt" | "updatedAt">;
export type PlayerUpdate = Partial<PlayerInsert>;
//# sourceMappingURL=players.dto.d.ts.map