import { Image } from "src/shared/components";

const makeHeadshotUrl = ({ playerId, width }) =>
  `https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/${playerId}.png&h=${width}&w=${width}&scale=crop`;

const Headshot = ({ alt, playerId, width }) => (
  <Image alt={alt} src={makeHeadshotUrl({ playerId, width })} width={width} />
);

export { Headshot };
