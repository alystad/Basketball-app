import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="match/[matchId]" options={{ title: 'Match Details' }} />
        <Stack.Screen name="team/[teamId]" options={{ title: 'Team Profile' }} />
        <Stack.Screen name="player/[playerId]" options={{ title: 'Player Profile' }} />
      </Stack>
    </SafeAreaProvider>
  );
}
