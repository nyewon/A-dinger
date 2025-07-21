import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ContentContainer, Button, Input } from '@components/common/index';
import { RoleSelector } from '@components/index';

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<'patient' | 'guardian'>('patient');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  const handleLogin = () => {
    if (!isFormValid) return;
    navigate('/call');
  };

  return (
    <Container>
      <ContentContainer>
        <AppTitle>A-dinger</AppTitle>
        <AppSubtitle>기억과 마음을 연결하는 돌봄 플랫폼</AppSubtitle>
        <RoleSelector role={role} onChange={setRole} />

        <Form>
          <Label>이메일</Label>
          <Input
            type="default"
            placeholder="이메일을 입력해주세요"
            value={email}
            inputType="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            style={{ marginBottom: '1rem' }}
          />
          <Label>비밀번호</Label>
          <Input
            type="default"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            inputType="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </Form>

        <Button
          type="main"
          buttonText="로그인"
          isDisabled={!isFormValid}
          bgColor={!email || !password ? '#d9d9d9' : '#6a1b9a'}
          onClick={handleLogin}
        />
        <SignUpLink onClick={() => navigate('/signup-terms')}>
          회원가입
        </SignUpLink>
      </ContentContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const AppTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #6a1b9a;
  text-align: center;
  margin: 5rem 0 0 0;
`;

const AppSubtitle = styled.p`
  font-size: 0.8rem;
  color: #a1a1a1;
  text-align: center;
  margin: 0 0 4rem 0;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 3rem;
`;

const Label = styled.p`
  font-size: 0.9rem;
  color: #343a40;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const SignUpLink = styled.div`
  margin-top: 3rem;
  font-size: 0.9rem;
  text-align: center;
  color: #a1a1a1;
  text-decoration: underline;
  cursor: pointer;
`;
