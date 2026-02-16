import { calculatePER } from './per';
import { H2HResult, Match, NewsItem, Player, PlayerBoxScore, StandingRow, Team, TeamTotals } from './types';

export const teams: Team[] = [
  { id: 'fsu', name: 'Florida State Seminoles', abbreviation: 'FSU', primaryColor: '#782F40', secondaryColor: '#CEB888', record: '19-8', rank: 23, logoText: 'FS' },
  { id: 'bc', name: 'Boston College Eagles', abbreviation: 'BC', primaryColor: '#8C1515', secondaryColor: '#B9975B', record: '15-12', logoText: 'BC' },
];

const fsuPlayers: Player[] = [
  { id: 'fsu-1', teamId: 'fsu', name: 'Jaylen Rivers', jerseyNumber: 2, position: 'PG', classYear: 'JR', height: '6-2', weight: 185, isStarter: true, initials: 'JR' },
  { id: 'fsu-2', teamId: 'fsu', name: 'Micah Trent', jerseyNumber: 11, position: 'SG', classYear: 'SO', height: '6-4', weight: 196, isStarter: true, initials: 'MT' },
  { id: 'fsu-3', teamId: 'fsu', name: 'Darius Hall', jerseyNumber: 7, position: 'SF', classYear: 'SR', height: '6-7', weight: 218, isStarter: true, initials: 'DH' },
  { id: 'fsu-4', teamId: 'fsu', name: 'Elijah Boone', jerseyNumber: 24, position: 'PF', classYear: 'JR', height: '6-9', weight: 235, isStarter: true, initials: 'EB' },
  { id: 'fsu-5', teamId: 'fsu', name: 'Camden Price', jerseyNumber: 33, position: 'C', classYear: 'SR', height: '6-11', weight: 249, isStarter: true, initials: 'CP' },
  { id: 'fsu-6', teamId: 'fsu', name: 'Kobe Ellis', jerseyNumber: 4, position: 'PG', classYear: 'FR', height: '6-1', weight: 176, isStarter: false, initials: 'KE' },
  { id: 'fsu-7', teamId: 'fsu', name: 'Nolan Berry', jerseyNumber: 13, position: 'SG', classYear: 'SO', height: '6-5', weight: 201, isStarter: false, initials: 'NB' },
  { id: 'fsu-8', teamId: 'fsu', name: 'Tre Avery', jerseyNumber: 20, position: 'SF', classYear: 'JR', height: '6-6', weight: 212, isStarter: false, initials: 'TA' },
  { id: 'fsu-9', teamId: 'fsu', name: 'Roman Steele', jerseyNumber: 35, position: 'PF', classYear: 'SO', height: '6-8', weight: 228, isStarter: false, initials: 'RS' },
  { id: 'fsu-10', teamId: 'fsu', name: 'Brice Long', jerseyNumber: 44, position: 'C', classYear: 'JR', height: '6-10', weight: 244, isStarter: false, initials: 'BL' },
  { id: 'fsu-11', teamId: 'fsu', name: 'Malik Owens', jerseyNumber: 6, position: 'SG', classYear: 'FR', height: '6-3', weight: 191, isStarter: false, initials: 'MO' },
  { id: 'fsu-12', teamId: 'fsu', name: 'Ty Price', jerseyNumber: 15, position: 'SF', classYear: 'SO', height: '6-7', weight: 210, isStarter: false, initials: 'TP' },
];

const bcPlayers: Player[] = [
  { id: 'bc-1', teamId: 'bc', name: 'Andre Collins', jerseyNumber: 1, position: 'PG', classYear: 'SR', height: '6-1', weight: 180, isStarter: true, initials: 'AC' },
  { id: 'bc-2', teamId: 'bc', name: 'Liam Carter', jerseyNumber: 12, position: 'SG', classYear: 'JR', height: '6-4', weight: 198, isStarter: true, initials: 'LC' },
  { id: 'bc-3', teamId: 'bc', name: 'Xavier Dent', jerseyNumber: 3, position: 'SF', classYear: 'SO', height: '6-6', weight: 208, isStarter: true, initials: 'XD' },
  { id: 'bc-4', teamId: 'bc', name: 'Mason Clarke', jerseyNumber: 21, position: 'PF', classYear: 'JR', height: '6-8', weight: 227, isStarter: true, initials: 'MC' },
  { id: 'bc-5', teamId: 'bc', name: 'Noah Ford', jerseyNumber: 45, position: 'C', classYear: 'SR', height: '6-10', weight: 252, isStarter: true, initials: 'NF' },
  { id: 'bc-6', teamId: 'bc', name: 'Parker Hayes', jerseyNumber: 5, position: 'PG', classYear: 'FR', height: '6-0', weight: 172, isStarter: false, initials: 'PH' },
  { id: 'bc-7', teamId: 'bc', name: 'Jalen Ward', jerseyNumber: 14, position: 'SG', classYear: 'SO', height: '6-5', weight: 200, isStarter: false, initials: 'JW' },
  { id: 'bc-8', teamId: 'bc', name: 'Owen Briggs', jerseyNumber: 30, position: 'SF', classYear: 'JR', height: '6-7', weight: 214, isStarter: false, initials: 'OB' },
  { id: 'bc-9', teamId: 'bc', name: 'Quinton Marks', jerseyNumber: 32, position: 'PF', classYear: 'SO', height: '6-9', weight: 231, isStarter: false, initials: 'QM' },
  { id: 'bc-10', teamId: 'bc', name: 'Isaiah Reid', jerseyNumber: 52, position: 'C', classYear: 'JR', height: '6-11', weight: 257, isStarter: false, initials: 'IR' },
  { id: 'bc-11', teamId: 'bc', name: 'Caleb Young', jerseyNumber: 10, position: 'SG', classYear: 'FR', height: '6-3', weight: 188, isStarter: false, initials: 'CY' },
  { id: 'bc-12', teamId: 'bc', name: 'Terrance Knox', jerseyNumber: 22, position: 'SF', classYear: 'SO', height: '6-6', weight: 207, isStarter: false, initials: 'TK' },
];

export const players = [...fsuPlayers, ...bcPlayers];

const playerStatsSeed: Array<[string, number, number, number, number, number, number, number, number, number, number, number, number, number]> = [
  ['fsu-1', 33, 14, 4, 6, 2, 0, 3, 5, 11, 2, 5, 2, 3], ['fsu-2', 31, 17, 3, 2, 1, 1, 1, 6, 13, 3, 7, 2, 2], ['fsu-3', 34, 12, 8, 4, 1, 1, 2, 4, 9, 1, 3, 3, 4],
  ['fsu-4', 29, 10, 7, 2, 0, 2, 2, 4, 8, 0, 1, 2, 3], ['fsu-5', 28, 15, 11, 1, 0, 3, 3, 6, 10, 0, 0, 3, 4], ['fsu-6', 12, 4, 1, 2, 1, 0, 1, 1, 4, 0, 1, 2, 2],
  ['fsu-7', 10, 3, 2, 1, 0, 0, 0, 1, 3, 1, 2, 0, 0], ['fsu-8', 9, 2, 2, 1, 0, 0, 1, 1, 3, 0, 1, 0, 0], ['fsu-9', 7, 4, 3, 0, 0, 0, 1, 2, 3, 0, 0, 0, 0],
  ['fsu-10', 5, 2, 2, 0, 0, 1, 0, 1, 2, 0, 0, 0, 0], ['fsu-11', 4, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 2], ['fsu-12', 3, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
  ['bc-1', 34, 18, 3, 7, 1, 0, 3, 7, 14, 2, 5, 2, 2], ['bc-2', 30, 13, 4, 3, 2, 0, 2, 5, 12, 2, 6, 1, 2], ['bc-3', 32, 11, 6, 2, 1, 1, 2, 4, 9, 1, 3, 2, 3],
  ['bc-4', 27, 9, 8, 2, 0, 1, 2, 3, 8, 0, 1, 3, 4], ['bc-5', 29, 12, 10, 1, 0, 2, 2, 5, 9, 0, 0, 2, 3], ['bc-6', 11, 5, 1, 2, 1, 0, 1, 2, 4, 1, 2, 0, 0],
  ['bc-7', 10, 4, 2, 1, 0, 0, 1, 1, 3, 1, 2, 1, 2], ['bc-8', 8, 2, 1, 1, 0, 0, 0, 1, 2, 0, 1, 0, 0], ['bc-9', 6, 2, 3, 0, 0, 1, 0, 1, 2, 0, 0, 0, 0],
  ['bc-10', 5, 1, 2, 0, 0, 1, 0, 0, 1, 0, 0, 1, 2], ['bc-11', 4, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0], ['bc-12', 4, 2, 1, 0, 0, 0, 0, 1, 2, 0, 1, 0, 0],
];

export const boxScores: PlayerBoxScore[] = playerStatsSeed.map((row) => ({ playerId: row[0], minutes: row[1], points: row[2], rebounds: row[3], assists: row[4], steals: row[5], blocks: row[6], turnovers: row[7], fgMade: row[8], fgAttempted: row[9], threeMade: row[10], threeAttempted: row[11], ftMade: row[12], ftAttempted: row[13] }));

export const teamTotals: TeamTotals[] = [
  { teamId: 'fsu', points: 84, rebounds: 44, assists: 19, turnovers: 14, fgPct: 51.3, threePct: 37.5, ftPct: 72.2 },
  { teamId: 'bc', points: 79, rebounds: 41, assists: 18, turnovers: 15, fgPct: 47.8, threePct: 33.3, ftPct: 75.0 },
];

export const match: Match = {
  id: '2026-02-17-fsu-bc', dateISO: '2026-02-17T19:00:00.000Z', conference: 'ACC', status: 'Final', homeTeamId: 'bc', awayTeamId: 'fsu', homeScore: 79, awayScore: 84, period: '2nd', clock: '0:00', scoreByHalf: { home: [36, 43], away: [39, 45] },
  facts: { venue: 'Conte Forum, Chestnut Hill, MA', attendance: 7625, tipTime: '7:00 PM ET', officials: ['M. Higgins', 'T. Eades', 'D. Hall'] },
  keyEvents: [
    { id: '1', minute: '18:42 1H', description: 'Rivers steals and finishes in transition (FSU +4).' },
    { id: '2', minute: '02:15 1H', description: 'Collins hits step-back three to tie at 34.' },
    { id: '3', minute: '14:38 2H', description: 'Price offensive board and putback sparks 8-0 run.' },
    { id: '4', minute: '01:11 2H', description: 'Trent drains corner three, FSU leads 82-77.' },
  ],
};

export const standings: StandingRow[] = [
  { teamId: 'duke', conferenceRecord: '14-3', overallRecord: '24-4', streak: 'W4' },
  { teamId: 'unc', conferenceRecord: '13-4', overallRecord: '23-5', streak: 'W3' },
  { teamId: 'fsu', conferenceRecord: '11-6', overallRecord: '19-8', streak: 'W2' },
  { teamId: 'bc', conferenceRecord: '8-9', overallRecord: '15-12', streak: 'L1' },
  { teamId: 'miami', conferenceRecord: '7-10', overallRecord: '14-14', streak: 'L3' },
];

export const h2h: H2HResult[] = [
  { id: 'h1', date: 'Jan 11, 2026', winnerTeamId: 'fsu', loserTeamId: 'bc', score: '77-70' },
  { id: 'h2', date: 'Feb 24, 2025', winnerTeamId: 'bc', loserTeamId: 'fsu', score: '81-79' },
  { id: 'h3', date: 'Jan 09, 2025', winnerTeamId: 'fsu', loserTeamId: 'bc', score: '74-65' },
  { id: 'h4', date: 'Feb 06, 2024', winnerTeamId: 'fsu', loserTeamId: 'bc', score: '88-73' },
  { id: 'h5', date: 'Jan 20, 2024', winnerTeamId: 'bc', loserTeamId: 'fsu', score: '69-67' },
];

export const news: NewsItem[] = [
  { id: 'n1', title: 'Seminoles close strong in road ACC win', source: 'CourtSide Wire', published: '2h ago' },
  { id: 'n2', title: 'Eagles search for consistency before March', source: 'College Hoops Daily', published: '5h ago' },
  { id: 'n3', title: 'ACC bubble watch after Tuesday slate', source: 'Bracket Pulse', published: '8h ago' },
];

export const playerBoxById: Record<string, PlayerBoxScore> = boxScores.reduce((acc, cur) => {
  acc[cur.playerId] = cur;
  return acc;
}, {} as Record<string, PlayerBoxScore>);

export const playerPerById: Record<string, number> = boxScores.reduce((acc, cur) => {
  acc[cur.playerId] = calculatePER(cur);
  return acc;
}, {} as Record<string, number>);

export const getTeamById = (id: string) => teams.find((team) => team.id === id);
export const getPlayerById = (id: string) => players.find((player) => player.id === id);
