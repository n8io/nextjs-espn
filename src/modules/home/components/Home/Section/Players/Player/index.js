import { Link } from './Link';

const { Headshot } = require('./Headshot');

const Player = ({ player, rank, team, value }) => (
  <tr key={player.id}>
    <td width={10}>{rank}</td>
    <td width={80}>
      <Link playerId={player.id}>
        <Headshot alt={player.headshot.alt} playerId={player.id} width={80} />
      </Link>
    </td>
    <td>
      <Link playerId={player.id}>{player.displayName}</Link>
      &nbsp;
      {team.abbreviation}
    </td>
    <td>{value}</td>
  </tr>
);

export { Player };
