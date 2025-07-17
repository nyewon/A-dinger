import styled from 'styled-components';

const Role = () => {
  return (
    <Container>
      <Text>Role</Text>
    </Container>
  );
};

export default Role;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Text = styled.p`
  font-size: 24px;
  color: #333;
`;
