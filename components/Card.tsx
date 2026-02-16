import { PropsWithChildren } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

type Props = PropsWithChildren<{ style?: ViewStyle | ViewStyle[] }>;

export const Card = ({ children, style }: Props) => <View style={[styles.card, style]}>{children}</View>;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    padding: 12,
    gap: 8,
  },
});
