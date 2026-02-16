import { memo } from 'react';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Player } from '@/lib/types';
import { RatingBadge } from './RatingBadge';

type Props = { player: Player; per: number; minutes?: number };

export const PlayerRow = memo(({ player, per, minutes }: Props) => (
  <Link href={`/player/${player.id}`} asChild>
    <Pressable style={styles.wrap}>
      <View style={styles.avatar}><Text style={styles.avatarText}>{player.initials}</Text></View>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{player.name}</Text>
        <Text style={styles.meta}>#{player.jerseyNumber} • {player.position} • {minutes ?? 0} min</Text>
      </View>
      <RatingBadge per={per} />
    </Pressable>
  </Link>
));

const styles = StyleSheet.create({
  wrap: { flexDirection: 'row', alignItems: 'center', gap: 10, minHeight: 48 },
  avatar: { width: 38, height: 38, borderRadius: 19, backgroundColor: '#d1d5db', alignItems: 'center', justifyContent: 'center' },
  avatarText: { fontWeight: '700' },
  name: { fontWeight: '600' },
  meta: { fontSize: 12, color: '#6b7280' },
});
