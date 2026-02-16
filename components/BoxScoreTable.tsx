import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Player, PlayerBoxScore } from '@/lib/types';

export const BoxScoreTable = ({ title, rows }: { title: string; rows: Array<{ player: Player; stat: PlayerBoxScore }> }) => (
  <View style={styles.wrap}>
    <Text style={styles.title}>{title}</Text>
    <ScrollView horizontal>
      <View>
        <View style={[styles.row, styles.head]}>
          <Text style={[styles.cell, styles.name]}>Player</Text><Text style={styles.cell}>MIN</Text><Text style={styles.cell}>PTS</Text><Text style={styles.cell}>REB</Text><Text style={styles.cell}>AST</Text><Text style={styles.cell}>FG</Text><Text style={styles.cell}>3PT</Text><Text style={styles.cell}>FT</Text>
        </View>
        {rows.map(({ player, stat }) => (
          <View key={player.id} style={styles.row}>
            <Text style={[styles.cell, styles.name]} numberOfLines={1}>{player.name}</Text><Text style={styles.cell}>{stat.minutes}</Text><Text style={styles.cell}>{stat.points}</Text><Text style={styles.cell}>{stat.rebounds}</Text><Text style={styles.cell}>{stat.assists}</Text><Text style={styles.cell}>{stat.fgMade}/{stat.fgAttempted}</Text><Text style={styles.cell}>{stat.threeMade}/{stat.threeAttempted}</Text><Text style={styles.cell}>{stat.ftMade}/{stat.ftAttempted}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  wrap: { gap: 6 },
  title: { fontWeight: '700' },
  row: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#e5e7eb', paddingVertical: 6 },
  head: { backgroundColor: '#f9fafb' },
  cell: { width: 60, fontSize: 12 },
  name: { width: 150, fontWeight: '600' },
});
