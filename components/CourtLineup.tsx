import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { playerPerById, playerBoxById } from '@/lib/mockData';
import { Player, Position } from '@/lib/types';
import { Card } from './Card';
import { PlayerNode } from './PlayerNode';
import { PlayerRow } from './PlayerRow';

const coords: Record<Position, { x: string; y: string }> = {
  PG: { x: '50%', y: '16%' },
  SG: { x: '22%', y: '30%' },
  SF: { x: '78%', y: '30%' },
  PF: { x: '30%', y: '56%' },
  C: { x: '70%', y: '56%' },
};

type Props = { homeStarters: Player[]; awayStarters: Player[]; homeBench: Player[]; awayBench: Player[] };

export const CourtLineup = ({ homeStarters, awayStarters, homeBench, awayBench }: Props) => {
  const [side, setSide] = useState<'FSU' | 'BC'>('FSU');
  const starters = side === 'FSU' ? awayStarters : homeStarters;
  const bench = side === 'FSU' ? awayBench : homeBench;
  const markers = useMemo(() => ({ [starters[0]?.id ?? '']: 'sub', [starters[2]?.id ?? '']: 'foul' }), [starters]);

  return (
    <Card>
      <View style={styles.seg}>
        {(['FSU', 'BC'] as const).map((value) => (
          <Pressable key={value} onPress={() => setSide(value)} style={[styles.segBtn, side === value && styles.segActive]}>
            <Text style={[styles.segText, side === value && styles.segTextActive]}>{value}</Text>
          </Pressable>
        ))}
      </View>
      <View style={styles.court}>
        <View style={styles.arc} />
        {starters.map((player) => (
          <View key={player.id} style={[styles.node, { left: coords[player.position].x, top: coords[player.position].y }]}>
            <PlayerNode player={player} per={playerPerById[player.id]} marker={markers[player.id] as any} />
          </View>
        ))}
      </View>
      <Text style={styles.legend}>Legend: 🔁 Substitution • ⚠️ Foul • ⏱️ Timeout</Text>
      <Text style={styles.benchTitle}>Bench</Text>
      {bench.map((player) => (
        <PlayerRow key={player.id} player={player} per={playerPerById[player.id]} minutes={playerBoxById[player.id].minutes} />
      ))}
    </Card>
  );
};

const styles = StyleSheet.create({
  seg: { flexDirection: 'row', backgroundColor: '#f3f4f6', borderRadius: 999, padding: 2, alignSelf: 'flex-start' },
  segBtn: { minHeight: 44, minWidth: 70, borderRadius: 999, justifyContent: 'center', alignItems: 'center' },
  segActive: { backgroundColor: '#111827' },
  segText: { fontWeight: '600', color: '#4b5563' },
  segTextActive: { color: '#fff' },
  court: { height: 340, borderRadius: 14, backgroundColor: '#f8fafc', borderWidth: 1, borderColor: '#d1d5db', marginTop: 8, overflow: 'hidden' },
  arc: { position: 'absolute', top: 100, left: '25%', width: '50%', height: 130, borderWidth: 2, borderColor: '#cbd5e1', borderRadius: 100 },
  node: { position: 'absolute', transform: [{ translateX: -36 }, { translateY: -24 }] },
  legend: { fontSize: 12, color: '#6b7280' },
  benchTitle: { fontWeight: '700', marginTop: 4 },
});
