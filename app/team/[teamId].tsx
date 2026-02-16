import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '@/components/Card';
import { PlayerRow } from '@/components/PlayerRow';
import { players, playerBoxById, playerPerById, standings, teams } from '@/lib/mockData';

export default function TeamProfileScreen() {
  const { teamId } = useLocalSearchParams<{ teamId: string }>();
  const team = teams.find((item) => item.id === teamId) ?? teams[0];
  const roster = players.filter((player) => player.teamId === team.id);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Card>
          <Text style={styles.title}>{team.name}</Text>
          <Text style={styles.small}>Record: {team.record}</Text>
          <Text style={styles.small}>Form (last 5): W-W-L-W-W</Text>
        </Card>
        <Card>
          <Text style={styles.title}>Roster</Text>
          {roster.map((player) => (
            <PlayerRow key={player.id} player={player} per={playerPerById[player.id]} minutes={playerBoxById[player.id].minutes} />
          ))}
        </Card>
        <Card>
          <Text style={styles.title}>Standings Snippet</Text>
          {standings.map((row) => (
            <Text key={row.teamId} style={styles.small}>{row.teamId.toUpperCase()} • {row.conferenceRecord} • {row.overallRecord}</Text>
          ))}
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f3f4f6' },
  container: { padding: 14, gap: 10, paddingBottom: 30 },
  title: { fontWeight: '700' },
  small: { fontSize: 12, color: '#374151' },
});
