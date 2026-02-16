import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import { MatchCard } from '@/components/MatchCard';
import { TopBar } from '@/components/TopBar';

export default function MatchesScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <TopBar />
        <Text style={styles.heading}>Feb 17 Games</Text>
        <MatchCard />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f3f4f6' },
  container: { flex: 1, padding: 14, gap: 10 },
  heading: { fontSize: 14, fontWeight: '700', color: '#374151' },
});
