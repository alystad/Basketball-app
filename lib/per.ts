import { PlayerBoxScore } from './types';

/**
 * Simplified PER-like metric for demo:
 * ((PTS + REB*1.2 + AST*1.5 + STL*2 + BLK*2) - (FGA-FGM) - (FTA-FTM) - TOV*1.3) / (MIN/10)
 */
export const calculatePER = (stats: PlayerBoxScore): number => {
  const positive =
    stats.points +
    stats.rebounds * 1.2 +
    stats.assists * 1.5 +
    stats.steals * 2 +
    stats.blocks * 2;
  const negative =
    (stats.fgAttempted - stats.fgMade) +
    (stats.ftAttempted - stats.ftMade) +
    stats.turnovers * 1.3;
  const minuteFactor = Math.max(stats.minutes / 10, 1);
  return Number(((positive - negative) / minuteFactor).toFixed(1));
};

export const getPERColor = (per: number) => {
  if (per >= 20) return '#1F9D55';
  if (per >= 15) return '#68D391';
  if (per >= 10) return '#ED8936';
  return '#A0AEC0';
};
