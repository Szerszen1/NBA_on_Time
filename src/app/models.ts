import { Rosterplayers } from './models';

// interfaces for Rosters:

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

export interface Roster {
  rosterplayers?: Rosterplayers
}

// interfaces for Division Team Standings:

export interface Details {
  category?: string;
  abbreviation?: string;
  text?: string;
}

export interface Stats {
  GamesPlayed: Details;
  Fg2PtAtt: Details;
  Fg2PtAttPerGame: Details;
  Fg2PtMade: Details;
  Fg2PtMadePerGame: Details;
  Fg2PtPct: Details;
  Fg3PtAtt: Details;
  Fg3PtAttPerGame: Details;
  Fg3PtMade: Details;
  Fg3PtMadePerGame: Details;
  Fg3PtPct: Details;
  FgAtt: Details;
  FgAttPerGame: Details;
  FgMade: Details;
  FgMadePerGame: Details;
  FgPct: Details;
  FtAtt: Details;
  FtAttPerGame: Details;
  FtMade: Details;
  FtMadePerGame: Details;
  FtPct: Details;
  OffReb: Details;
  OffRebPerGame: Details;
  DefReb: Details;
  DefRebPerGame: Details;
  Reb: Details;
  RebPerGame: Details;
  Ast: Details;
  AstPerGame: Details;
  Pts: Details;
  PtsPerGame: Details;
  Tov: Details;
  TovPerGame: Details;
  Stl: Details;
  StlPerGame: Details;
  Blk: Details;
  BlkPerGame: Details;
  BlkAgainst: Details;
  BlkAgainstPerGame: Details;
  PtsAgainst: Details;
  PtsAgainstPerGame: Details;
  Fouls: Details;
  FoulsPerGame: Details;
  FoulsDrawn: Details;
  FoulsDrawnPerGame: Details;
  FoulPers: Details;
  FoulPersPerGame: Details;
  FoulPersDrawn: Details;
  FoulPersDrawnPerGame: Details;
  FoulTech: Details;
  FoulTechPerGame: Details;
  FoulTechDrawn: Details;
  FoulTechDrawnPerGame: Details;
  FoulFlag1: Details;
  FoulFlag1PerGame: Details;
  FoulFlag1Drawn: Details;
  FoulFlag1DrawnPerGame: Details;
  FoulFlag2: Details;
  FoulFlag2PerGame: Details;
  FoulFlag2Drawn: Details;
  FoulFlag2DrawnPerGame: Details;
  Ejections: Details;
  PlusMinus: Details;
  PlusMinusPerGame: Details;
  Wins: Details;
  Losses: Details;
  WinPct: Details;
  GB: Details;
}

export interface Teamentry {
  rank: string;
  stats: Stats;
  team: Team;
}

export interface Division {
  name: string;
  teamentry: Teamentry[];
}

export interface DivisionTeamStandings {
  division: Division;
  lastUpdatedOn: string;
}

export interface TeamStending {
  divisionteamstandings: DivisionTeamStandings;
}

