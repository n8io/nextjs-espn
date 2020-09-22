import { Headshot } from './Headshot';

const Players = ({ players }) => (
  <table>
    <tbody>
      {players.map(({ displayValue, athlete, team }, index) => (
        <tr key={athlete.id}>
          <td width={10}>{index + 1}</td>
          <td width={80}>
            <Headshot
              alt={athlete.headshot.alt}
              playerId={athlete.id}
              width={80}
            />
          </td>
          <td>
            <a href={`http://www.espn.com/nfl/player/_/id/${athlete.id}`}>
              {athlete.displayName}
            </a>
            &nbsp;
            {team.abbreviation}
          </td>
          <td>{displayValue}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export { Players };
