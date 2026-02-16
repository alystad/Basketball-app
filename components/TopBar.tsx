import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

export const TopBar = () => (
  <View style={styles.wrap}>
    <Text style={styles.brand}>CourtSide NCAA</Text>
    <View style={styles.icons}>
      <Ionicons name="search" size={20} color="#111" />
      <Ionicons name="person-circle-outline" size={24} color="#111" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  wrap: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  brand: { fontSize: 20, fontWeight: '800' },
  icons: { flexDirection: 'row', gap: 12, alignItems: 'center' },
});
