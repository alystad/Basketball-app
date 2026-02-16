export type Position = 'PG' | 'SG' | 'SF' | 'PF' | 'C';
export type MatchStatus = 'Upcoming' | 'Live' | 'Final';

export type Team = {
  id: string;
  name: string;
  abbreviation: string;
  primaryColor: string;
  secondaryColor: string;
  record: string;
  rank?: number;
  logoText: string;
};

export type Player = {
  id: string;
  teamId: string;
  name: string;
  jerseyNumber: number;
  position: Position;
  classYear: 'FR' | 'SO' | 'JR' | 'SR';
  height: string;
  weight: number;
  isStarter: boolean;
  initials: string;
};

export type PlayerBoxScore = {
  playerId: string;
  minutes: number;
  points: number;
  rebounds: number;
  assists: number;
  steals: number;
  blocks: number;
  turnovers: number;
  fgMade: number;
  fgAttempted: number;
  threeMade: number;
  threeAttempted: number;
  ftMade: number;
  ftAttempted: number;
};

export type TeamTotals = {
  teamId: string;
  points: number;
  rebounds: number;
  assists: number;
  turnovers: number;
  fgPct: number;
  threePct: number;
  ftPct: number;
};

export type MatchFact = {
  venue: string;
  attendance: number;
  tipTime: string;
  officials: string[];
};

export type KeyEvent = {
  id: string;
  minute: string;
  description: string;
};

export type Match = {
  id: string;
  dateISO: string;
  conference: string;
  status: MatchStatus;
  homeTeamId: string;
  awayTeamId: string;
  homeScore: number;
  awayScore: number;
  period: string;
  clock: string;
  scoreByHalf: {
    home: [number, number];
    away: [number, number];
  };
  facts: MatchFact;
  keyEvents: KeyEvent[];
};

export type StandingRow = {
  teamId: string;
  conferenceRecord: string;
  overallRecord: string;
  streak: string;
};

export type H2HResult = {
  id: string;
  date: string;
  winnerTeamId: string;
  loserTeamId: string;
  score: string;
};

export type NewsItem = {
  id: string;
  title: string;
  source: string;
  published: string;
};
