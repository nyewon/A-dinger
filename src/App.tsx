import styled from 'styled-components';

const App = () => (
  <Container>
    <h1>Alzheimer-dinger_FE</h1>
    <p>test</p>
  </Container>
);

export default App;

const Container = styled.div`
  width: 100vw;
  max-width: 425px;
  min-width: 320px;
  justify-content: center;
  align-items: center;
  display: flex;

  // 텍스트 클릭 방지
  user-select: none;
  // 탭 하이라이트 제거
  -webkit-tap-highlight-color: transparent;
`;
