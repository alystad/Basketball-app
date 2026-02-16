import { StyleSheet, Text, View } from 'react-native';
import { getPERColor } from '@/lib/per';

export const RatingBadge = ({ per }: { per: number }) => (
  <View style={[styles.badge, { backgroundColor: getPERColor(per) }]}>
    <Text style={styles.text}>{per.toFixed(1)}</Text>
  </View>
);

const styles = StyleSheet.create({
  badge: { borderRadius: 999, paddingHorizontal: 6, paddingVertical: 2, minWidth: 34, alignItems: 'center' },
  text: { color: '#fff', fontSize: 11, fontWeight: '700' },
});
