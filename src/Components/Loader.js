import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1``;

const Loader = () => (
  <Container>
    <Title>Loading...</Title>
  </Container>
);

export default Loader;
