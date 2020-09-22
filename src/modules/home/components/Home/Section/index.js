import styled from "styled-components";

const { Header } = require("./Header");
const { Players } = require("./Players");

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;

const Section = ({ title, players }) => (
  <Container>
    <Header title={title} />
    <Players players={players} />
  </Container>
);

export { Section };
