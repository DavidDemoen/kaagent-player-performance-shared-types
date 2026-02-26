export type PlayersPositionsHistDto = {
  playerId: string;
  positionName: string;
  isCurrent: boolean;
  validFromDt: Date;
  validToDt?: Date | null;
}

export type PlayersPositionsHistSelect = PlayersPositionsHistDto;
export type PlayersPositionsHistInsert = PlayersPositionsHistDto;
export type PlayersPositionsHistUpdate = Partial<PlayersPositionsHistInsert>;
