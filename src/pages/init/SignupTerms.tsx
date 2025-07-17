import styled from 'styled-components';

const SignupTerms = () => {
  return (
    <Container>
      <Text>SignupTerms</Text>
    </Container>
  );
};

export default SignupTerms;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Text = styled.p`
  font-size: 24px;
  color: #333;
`;
