import { StyleSheet, Text, View } from 'react-native';

type Props = { label: string; left: number; right: number; leftColor: string; rightColor: string };

export const StatBarRow = ({ label, left, right, leftColor, rightColor }: Props) => {
  const total = Math.max(left + right, 1);
  const leftPct = (left / total) * 100;
  const rightPct = (right / total) * 100;

  return (
    <View style={styles.wrap}>
      <View style={styles.header}><Text style={styles.value}>{left}</Text><Text style={styles.label}>{label}</Text><Text style={styles.value}>{right}</Text></View>
      <View style={styles.bar}><View style={[styles.fill, { width: `${leftPct}%`, backgroundColor: leftColor }]} /><View style={[styles.fill, { width: `${rightPct}%`, backgroundColor: rightColor }]} /></View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: { gap: 4 },
  header: { flexDirection: 'row', justifyContent: 'space-between' },
  value: { width: 50, fontWeight: '700' },
  label: { color: '#6b7280', fontSize: 12 },
  bar: { flexDirection: 'row', height: 8, backgroundColor: '#f3f4f6', borderRadius: 999, overflow: 'hidden' },
  fill: { height: 8 },
});
