import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';
import { EmptyState } from '@/components/EmptyState';
import { TopBar } from '@/components/TopBar';

export default function FavoritesScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <TopBar />
        <EmptyState title="No favorites yet" subtitle="Tap a team or player card to add favorites soon." />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ safe: { flex: 1, backgroundColor: '#f3f4f6' }, container: { flex: 1, padding: 14 } });
