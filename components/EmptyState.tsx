import { StyleSheet, Text, View } from 'react-native';

export const EmptyState = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <View style={styles.wrap}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
  </View>
);

const styles = StyleSheet.create({
  wrap: { alignItems: 'center', justifyContent: 'center', paddingVertical: 28, gap: 6 },
  title: { fontWeight: '700' },
  subtitle: { color: '#6b7280', fontSize: 12 },
});
