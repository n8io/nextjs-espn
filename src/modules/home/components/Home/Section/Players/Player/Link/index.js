const Link = ({ children, playerId }) => (
  <a
    href={`http://www.espn.com/nfl/player/_/id/${playerId}`}
    rel="noopener noreferrer"
    target="player_card"
  >
    {children}
  </a>
);

export { Link };
