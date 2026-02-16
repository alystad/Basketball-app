import { ScrollView, Pressable, StyleSheet, Text } from 'react-native';

type Props = { tabs: string[]; active: string; onChange: (tab: string) => void };

export const TabBarHorizontal = ({ tabs, active, onChange }: Props) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.wrap}>
    {tabs.map((tab) => (
      <Pressable key={tab} onPress={() => onChange(tab)} style={[styles.tab, active === tab && styles.active]}>
        <Text style={[styles.text, active === tab && styles.activeText]}>{tab}</Text>
      </Pressable>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  wrap: { gap: 8, paddingVertical: 8 },
  tab: { borderWidth: 1, borderColor: '#d1d5db', borderRadius: 999, paddingHorizontal: 14, paddingVertical: 8 },
  active: { backgroundColor: '#111827', borderColor: '#111827' },
  text: { fontSize: 12, fontWeight: '600', color: '#374151' },
  activeText: { color: '#fff' },
});
