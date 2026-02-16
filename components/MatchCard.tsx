import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { match, teams } from '@/lib/mockData';
import { Card } from './Card';

const away = teams.find((team) => team.id === match.awayTeamId)!;
const home = teams.find((team) => team.id === match.homeTeamId)!;

export const MatchCard = () => (
  <Link href={`/match/${match.id}`} asChild>
    <Pressable style={({ pressed }) => [pressed && { opacity: 0.8 }]}>
      <Card>
        <Text style={styles.meta}>Feb 17 • ACC</Text>
        <View style={styles.row}><Text>{away.abbreviation}</Text><Text style={styles.score}>{match.awayScore}</Text></View>
        <View style={styles.row}><Text>{home.abbreviation}</Text><Text style={styles.score}>{match.homeScore}</Text></View>
        <Text style={styles.status}>{match.status}</Text>
      </Card>
    </Pressable>
  </Link>
);

const styles = StyleSheet.create({
  meta: { color: '#6b7280', fontSize: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 4 },
  score: { fontWeight: '700' },
  status: { marginTop: 4, fontSize: 12, color: '#374151', fontWeight: '600' },
});
