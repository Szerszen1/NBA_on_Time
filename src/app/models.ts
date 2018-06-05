import { Rosterplayers } from './models';
export interface Player {
  ID?: string;
  LastName?: string;
  FirstName?: string;
  JerseyNumber?: string;
  Position?: string;
  Height?: string;
  Weight?: string;
  BirthDate?: string;
  Age?: string;
  BirthCity?: string;
  BirthCountry?: string;
  IsRookie?: string;
}

export interface Team {
  ID?: string;
  City?: string;
  Name?: string;
  Abbreviation?: string;
}

export interface Playerentry {
  player?: Player;
  team?: Team;
}

export interface Rosterplayers {
  lastUpdatedOn?: string;
  playerentry?: Playerentry[];
}

export interface Data {
  rosterplayers?: Rosterplayers
}
