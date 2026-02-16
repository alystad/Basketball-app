import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '@/components/Card';
import { getPlayerById, playerBoxById, playerPerById } from '@/lib/mockData';

export default function PlayerProfileScreen() {
  const { playerId } = useLocalSearchParams<{ playerId: string }>();
  const player = getPlayerById(playerId ?? '');

  if (!player) {
    return (
      <SafeAreaView style={styles.safe}><View style={styles.container}><Text>Player not found.</Text></View></SafeAreaView>
    );
  }

  const box = playerBoxById[player.id];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Card>
          <Text style={styles.title}>{player.name}</Text>
          <Text style={styles.small}>#{player.jerseyNumber} • {player.position} • {player.classYear}</Text>
          <Text style={styles.small}>{player.height} • {player.weight} lbs</Text>
          <Text style={styles.small}>PER: {playerPerById[player.id].toFixed(1)}</Text>
        </Card>
        <Card>
          <Text style={styles.title}>Game Log (Mock)</Text>
          <Text style={styles.small}>vs BC: {box.points}p / {box.rebounds}r / {box.assists}a</Text>
          <Text style={styles.small}>vs Duke: 11p / 5r / 4a</Text>
          <Text style={styles.small}>vs UNC: 16p / 4r / 6a</Text>
        </Card>
        <Card>
          <Text style={styles.title}>PER Trend (Mock)</Text>
          <Text style={styles.small}>17.2 → 18.6 → {playerPerById[player.id].toFixed(1)}</Text>
        </Card>
        <Card>
          <Text style={styles.title}>Highlights</Text>
          <Text style={styles.small}>• Clutch three with 1:11 left</Text>
          <Text style={styles.small}>• Transition steal and finish</Text>
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
