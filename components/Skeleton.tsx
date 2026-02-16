import { StyleSheet, View } from 'react-native';

export const Skeleton = ({ height = 16 }: { height?: number }) => <View style={[styles.sk, { height }]} />;

const styles = StyleSheet.create({
  sk: { backgroundColor: '#e5e7eb', borderRadius: 8, width: '100%' },
});
