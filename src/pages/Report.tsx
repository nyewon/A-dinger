import styled from 'styled-components';

const Report = () => {
  return (
    <Container>
      <Text>Report</Text>
    </Container>
  );
};

export default Report;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Text = styled.p`
  font-size: 24px;
  color: #333;
`;
