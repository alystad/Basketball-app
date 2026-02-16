# CourtSide NCAA (Expo + React Native)

FotMob-inspired NCAA basketball match detail experience built with Expo Router and TypeScript.

## Run locally

```bash
npm install
npx expo start
```

## File structure

- `app/(tabs)/index.tsx` – Matches list with Feb 17 game card.
- `app/match/[matchId].tsx` – Match details with horizontal section tabs.
- `app/team/[teamId].tsx` – Team profile with roster and standings snippet.
- `app/player/[playerId].tsx` – Player profile with bio and mock trend data.
- `lib/types.ts` – Domain models.
- `lib/mockData.ts` – Teams, players, box scores, standings, H2H, news.
- `lib/per.ts` – Simplified PER helper and badge color logic.
- `components/` – Reusable card/list/table/lineup UI components.

## Updating mock data

1. Edit teams/players/match in `lib/mockData.ts`.
2. Update each player's box score row in `playerStatsSeed`.
3. PER values recalculate automatically through `calculatePER`.

## Simplified PER formula

Implemented in `lib/per.ts` as a demo-only PER-like value:

```text
((PTS + REB*1.2 + AST*1.5 + STL*2 + BLK*2)
 - (FGA-FGM) - (FTA-FTM) - TOV*1.3) / (MIN/10)
```

- Result is clamped via a minimum minute factor and rounded to 1 decimal.
- Badge color thresholds:
  - `>= 20`: green
  - `15–19.9`: light green
  - `10–14.9`: orange
  - `< 10`: gray
