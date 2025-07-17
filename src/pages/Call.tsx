import styled from 'styled-components';

const Call = () => {
  return (
    <Container>
      <Text>Call</Text>
    </Container>
  );
};

export default Call;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Text = styled.p`
  font-size: 24px;
  color: #333;
`;
