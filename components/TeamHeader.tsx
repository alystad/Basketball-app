import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Team } from '@/lib/types';

type Props = { away: Team; home: Team; awayScore: number; homeScore: number; status: string; period: string; clock: string };

const TeamChip = ({ team }: { team: Team }) => (
  <Link href={`/team/${team.id}`} asChild>
    <Pressable style={styles.teamWrap}>
      <View style={[styles.logo, { backgroundColor: team.primaryColor }]}><Text style={styles.logoText}>{team.logoText}</Text></View>
      <Text style={styles.teamText}>{team.abbreviation}</Text>
    </Pressable>
  </Link>
);

export const TeamHeader = ({ away, home, awayScore, homeScore, status, period, clock }: Props) => (
  <View style={styles.wrap}>
    <TeamChip team={away} />
    <View style={styles.center}>
      <Text style={styles.score}>{awayScore} - {homeScore}</Text>
      <Text style={styles.meta}>{status} • {period} {clock}</Text>
    </View>
    <TeamChip team={home} />
  </View>
);

const styles = StyleSheet.create({
  wrap: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  center: { alignItems: 'center' },
  score: { fontSize: 28, fontWeight: '800' },
  meta: { fontSize: 12, color: '#6b7280' },
  teamWrap: { alignItems: 'center', minWidth: 66 },
  logo: { width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 4 },
  logoText: { color: '#fff', fontWeight: '800' },
  teamText: { fontWeight: '700' },
});
