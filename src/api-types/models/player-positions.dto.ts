export interface PlayerPositionDto {
  name: string;
}

export type PlayerPositionSelect = PlayerPositionDto;
export type PlayerPositionInsert = PlayerPositionDto;
export type PlayerPositionUpdate = Partial<PlayerPositionInsert>;
