import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { Card } from '@/components/Card';
import { TopBar } from '@/components/TopBar';

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <TopBar />
        <Card>
          <View style={styles.row}>
            <View>
              <Text style={styles.title}>Dark mode</Text>
              <Text style={styles.subtitle}>Mock toggle for UI preference.</Text>
            </View>
            <Switch value={darkMode} onValueChange={setDarkMode} />
          </View>
        </Card>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f3f4f6' },
  container: { flex: 1, padding: 14 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { fontWeight: '700' },
  subtitle: { color: '#6b7280', fontSize: 12 },
});
