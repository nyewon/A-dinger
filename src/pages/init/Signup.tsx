import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import {
  BackHeader,
  ContentContainer,
  Button,
  Input,
} from '@components/common/index';
import { GenderButton } from '@components/index';

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const role = location.state?.role || 'patient';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState<'male' | 'female' | null>(null);
  const [patientCode, setPatientCode] = useState('');

  const isFormValid =
    name.trim() !== '' &&
    email.trim() !== '' &&
    password.trim() !== '' &&
    gender !== null &&
    (role === 'guardian' ? patientCode.trim() !== '' : true);

  const handleSignup = () => {
    if (!isFormValid) return;
    console.log({
      name,
      email,
      password,
      gender,
      role,
      patientCode,
    });
    navigate('/');
  };

  return (
    <Container>
      <BackHeader title="회원가입" />
      <ContentContainer navMargin={false}>
        <Title>반갑습니다!</Title>
        <Subtitle>간단한 정보만 입력해주세요</Subtitle>

        <Form>
          <Label>이름</Label>
          <Input
            type="default"
            placeholder="이름을 입력해주세요"
            value={name}
            inputType="text"
            onChange={e => setName(e.target.value)}
          />
          <Label>이메일</Label>
          <Input
            type="default"
            placeholder="이메일을 입력해주세요"
            value={email}
            inputType="text"
            onChange={e => setEmail(e.target.value)}
          />
          <Label>비밀번호</Label>
          <Input
            type="default"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            inputType="password"
            onChange={e => setPassword(e.target.value)}
          />
          <Label>성별</Label>
          <GenderContainer>
            <GenderButton
              selected={gender === 'male'}
              color="blue"
              label="남성"
              emoji="👨🏻"
              onClick={() => setGender('male')}
            />
            <GenderButton
              selected={gender === 'female'}
              color="pink"
              label="여성"
              emoji="👩🏻"
              onClick={() => setGender('female')}
            />
          </GenderContainer>

          {role === 'guardian' && (
            <div>
              <Label>환자 코드</Label>
              <Input
                type="default"
                placeholder="환자 코드를 입력해주세요"
                value={patientCode}
                inputType="text"
                onChange={e => setPatientCode(e.target.value)}
              />
            </div>
          )}
        </Form>
        <Button
          type="main"
          buttonText="회원가입"
          isDisabled={!isFormValid}
          bgColor={isFormValid ? '#6a1b9a' : '#d9d9d9'}
          onClick={handleSignup}
        />
      </ContentContainer>
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #6a1b9a;
  text-align: center;
  margin: 2rem 0 0 0;
`;

const Subtitle = styled.p`
  font-size: 0.9rem;
  color: #a1a1a1;
  text-align: center;
  margin: 0;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2rem 0;
`;

const Label = styled.p`
  font-size: 0.9rem;
  color: #343a40;
  font-weight: bold;
  margin: 1.5rem 0 0.5rem 0;
`;

const GenderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1.5rem;
`;
