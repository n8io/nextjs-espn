import { Player } from './Player';

const Container = ({ children }) => (
  <table>
    <tbody>{children}</tbody>
  </table>
);

const Players = ({ players }) => (
  <Container>
    {players.map(({ displayValue: value, athlete: player, team }, index) => (
      <Player
        key={player.id}
        player={player}
        rank={index + 1}
        team={team}
        value={value}
      />
    ))}
  </Container>
);

export { Players };
