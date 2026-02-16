import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '@/components/Card';
import { CourtLineup } from '@/components/CourtLineup';
import { BoxScoreTable } from '@/components/BoxScoreTable';
import { PlayerRow } from '@/components/PlayerRow';
import { StatBarRow } from '@/components/StatBarRow';
import { TabBarHorizontal } from '@/components/TabBarHorizontal';
import { TeamHeader } from '@/components/TeamHeader';
import { h2h, match, news, playerBoxById, playerPerById, players, standings, teamTotals, teams } from '@/lib/mockData';

const tabs = ['Summary', 'Facts', 'Lineup', 'Stats', 'Box Score', 'Player Ratings', 'H2H', 'Standings', 'News'];

export default function MatchDetailsScreen() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const away = teams.find((team) => team.id === match.awayTeamId)!;
  const home = teams.find((team) => team.id === match.homeTeamId)!;

  const awayPlayers = players.filter((player) => player.teamId === away.id);
  const homePlayers = players.filter((player) => player.teamId === home.id);
  const allSortedPer = useMemo(() => players.slice().sort((a, b) => playerPerById[b.id] - playerPerById[a.id]), []);

  const awayTotals = teamTotals.find((item) => item.teamId === away.id)!;
  const homeTotals = teamTotals.find((item) => item.teamId === home.id)!;

  const renderTab = () => {
    if (activeTab === 'Summary') {
      const topThree = allSortedPer.slice(0, 3);
      return (
        <>
          <Card>
            <Text style={styles.cardTitle}>Key Plays</Text>
            {match.keyEvents.map((event) => <Text key={event.id} style={styles.small}>{event.minute} • {event.description}</Text>)}
          </Card>
          <Card>
            <Text style={styles.cardTitle}>Top PER Leaders</Text>
            {topThree.map((player) => (
              <PlayerRow key={player.id} player={player} per={playerPerById[player.id]} minutes={playerBoxById[player.id].minutes} />
            ))}
          </Card>
        </>
      );
    }

    if (activeTab === 'Facts') {
      return (
        <>
          <Card>
            <Text style={styles.cardTitle}>Match Facts</Text>
            <View style={styles.factRow}><Text style={styles.factLabel}>Venue</Text><Text style={styles.factValue}>{match.facts.venue}</Text></View>
            <View style={styles.factRow}><Text style={styles.factLabel}>Attendance</Text><Text style={styles.factValue}>{match.facts.attendance.toLocaleString()}</Text></View>
            <View style={styles.factRow}><Text style={styles.factLabel}>Tip-off</Text><Text style={styles.factValue}>{match.facts.tipTime}</Text></View>
            <View style={styles.factRow}><Text style={styles.factLabel}>Officials</Text><Text style={styles.factValue}>{match.facts.officials.join(', ')}</Text></View>
            <View style={styles.factRow}><Text style={styles.factLabel}>Conference</Text><Text style={styles.factValue}>{match.conference}</Text></View>
          </Card>

          <Card>
            <Text style={styles.cardTitle}>Team Facts</Text>
            <View style={styles.factRow}><Text style={styles.factLabel}>Rebounds</Text><Text style={styles.factValue}>{away.abbreviation} {awayTotals.rebounds} - {homeTotals.rebounds} {home.abbreviation}</Text></View>
            <View style={styles.factRow}><Text style={styles.factLabel}>Assists</Text><Text style={styles.factValue}>{away.abbreviation} {awayTotals.assists} - {homeTotals.assists} {home.abbreviation}</Text></View>
            <View style={styles.factRow}><Text style={styles.factLabel}>Turnovers</Text><Text style={styles.factValue}>{away.abbreviation} {awayTotals.turnovers} - {homeTotals.turnovers} {home.abbreviation}</Text></View>
            <View style={styles.factRow}><Text style={styles.factLabel}>FG%</Text><Text style={styles.factValue}>{awayTotals.fgPct}% - {homeTotals.fgPct}%</Text></View>
            <View style={styles.factRow}><Text style={styles.factLabel}>3P%</Text><Text style={styles.factValue}>{awayTotals.threePct}% - {homeTotals.threePct}%</Text></View>
            <View style={styles.factRow}><Text style={styles.factLabel}>FT%</Text><Text style={styles.factValue}>{awayTotals.ftPct}% - {homeTotals.ftPct}%</Text></View>
          </Card>
        </>
      );
    }

    if (activeTab === 'Lineup') {
      return (
        <CourtLineup
          awayStarters={awayPlayers.filter((player) => player.isStarter)}
          homeStarters={homePlayers.filter((player) => player.isStarter)}
          awayBench={awayPlayers.filter((player) => !player.isStarter)}
          homeBench={homePlayers.filter((player) => !player.isStarter)}
        />
      );
    }

    if (activeTab === 'Stats') {
      return (
        <Card>
          <Text style={styles.cardTitle}>Team Comparison</Text>
          <StatBarRow label="FG%" left={awayTotals.fgPct} right={homeTotals.fgPct} leftColor={away.primaryColor} rightColor={home.primaryColor} />
          <StatBarRow label="3P%" left={awayTotals.threePct} right={homeTotals.threePct} leftColor={away.primaryColor} rightColor={home.primaryColor} />
          <StatBarRow label="FT%" left={awayTotals.ftPct} right={homeTotals.ftPct} leftColor={away.primaryColor} rightColor={home.primaryColor} />
          <StatBarRow label="REB" left={awayTotals.rebounds} right={homeTotals.rebounds} leftColor={away.primaryColor} rightColor={home.primaryColor} />
          <StatBarRow label="AST" left={awayTotals.assists} right={homeTotals.assists} leftColor={away.primaryColor} rightColor={home.primaryColor} />
          <StatBarRow label="TOV" left={awayTotals.turnovers} right={homeTotals.turnovers} leftColor={away.primaryColor} rightColor={home.primaryColor} />
        </Card>
      );
    }

    if (activeTab === 'Box Score') {
      return (
        <Card>
          <BoxScoreTable title="Florida State" rows={awayPlayers.map((player) => ({ player, stat: playerBoxById[player.id] }))} />
          <BoxScoreTable title="Boston College" rows={homePlayers.map((player) => ({ player, stat: playerBoxById[player.id] }))} />
        </Card>
      );
    }

    if (activeTab === 'Player Ratings') {
      return (
        <Card>
          <Text style={styles.cardTitle}>All Players by PER</Text>
          {allSortedPer.map((player) => <PlayerRow key={player.id} player={player} per={playerPerById[player.id]} minutes={playerBoxById[player.id].minutes} />)}
        </Card>
      );
    }

    if (activeTab === 'H2H') {
      return (
        <Card>
          <Text style={styles.cardTitle}>Last 5 Meetings</Text>
          {h2h.map((item) => <Text key={item.id} style={styles.small}>{item.date} • {item.score}</Text>)}
        </Card>
      );
    }

    if (activeTab === 'Standings') {
      return (
        <Card>
          <Text style={styles.cardTitle}>ACC Standings</Text>
          {standings.map((row) => (
            <View key={row.teamId} style={[styles.standRow, (row.teamId === away.id || row.teamId === home.id) && styles.highlight]}>
              <Text style={styles.small}>{row.teamId.toUpperCase()}</Text>
              <Text style={styles.small}>{row.conferenceRecord}</Text>
              <Text style={styles.small}>{row.overallRecord}</Text>
              <Text style={styles.small}>{row.streak}</Text>
            </View>
          ))}
        </Card>
      );
    }

    return (
      <Card>
        <Text style={styles.cardTitle}>News</Text>
        {news.map((item) => <Text key={item.id} style={styles.small}>{item.title} • {item.source} • {item.published}</Text>)}
      </Card>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <TeamHeader away={away} home={home} awayScore={match.awayScore} homeScore={match.homeScore} status={match.status} period={match.period} clock={match.clock} />
        <Card style={styles.factsCompact}>
          <Text style={styles.small}>Half scores: {away.abbreviation} {match.scoreByHalf.away.join('-')} • {home.abbreviation} {match.scoreByHalf.home.join('-')}</Text>
        </Card>
        <TabBarHorizontal tabs={tabs} active={activeTab} onChange={setActiveTab} />
        {renderTab()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f3f4f6' },
  container: { padding: 14, gap: 10, paddingBottom: 36 },
  factsCompact: { paddingVertical: 8 },
  cardTitle: { fontWeight: '700' },
  small: { fontSize: 12, color: '#374151' },
  standRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 4, borderBottomWidth: 1, borderBottomColor: '#f3f4f6' },
  highlight: { backgroundColor: '#fef3c7' },
  factRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8, borderBottomWidth: 1, borderBottomColor: '#f3f4f6', paddingVertical: 6 },
  factLabel: { fontSize: 12, color: '#6b7280', fontWeight: '600' },
  factValue: { flex: 1, textAlign: 'right', fontSize: 12, color: '#111827', fontWeight: '600' },
});
