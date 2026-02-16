import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Player } from '@/lib/types';
import { RatingBadge } from './RatingBadge';

type Props = { player: Player; per: number; marker?: 'sub' | 'foul' | 'timeout' };

export const PlayerNode = ({ player, per, marker }: Props) => (
  <Link href={`/player/${player.id}`} asChild>
    <Pressable style={styles.wrap}>
      <View style={styles.avatar}><Text style={styles.initials}>{player.initials}</Text></View>
      <View style={styles.badge}><RatingBadge per={per} /></View>
      {!!marker && <Text style={styles.marker}>{marker === 'sub' ? '🔁' : marker === 'foul' ? '⚠️' : '⏱️'}</Text>}
      <Text style={styles.jersey}>#{player.jerseyNumber}</Text>
      <Text numberOfLines={1} style={styles.name}>{player.name.split(' ')[1] ?? player.name}</Text>
    </Pressable>
  </Link>
);

const styles = StyleSheet.create({
  wrap: { alignItems: 'center', width: 72 },
  avatar: { width: 46, height: 46, borderRadius: 23, backgroundColor: '#e5e7eb', alignItems: 'center', justifyContent: 'center' },
  initials: { fontWeight: '700' },
  badge: { position: 'absolute', top: -8, right: 2 },
  marker: { position: 'absolute', left: 0, top: 0, fontSize: 12 },
  jersey: { fontSize: 10, color: '#6b7280', marginTop: 2 },
  name: { fontSize: 11, fontWeight: '600', maxWidth: 72 },
});
