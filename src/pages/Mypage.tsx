import styled from 'styled-components';

const Mypage = () => {
  return (
    <Container>
      <Text>Mypage</Text>
    </Container>
  );
};

export default Mypage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Text = styled.p`
  font-size: 24px;
  color: #333;
`;
