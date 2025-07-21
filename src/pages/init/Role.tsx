import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BackHeader, ContentContainer, Button } from '@components/common/index';
import { RoleCard } from '@components/index';

const Role = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<
    'patient' | 'guardian' | null
  >(null);

  const handleNext = () => {
    if (!selectedRole) return;
    navigate('/signup', { state: { role: selectedRole } });
  };

  return (
    <Container>
      <BackHeader title="회원가입" />
      <ContentContainer>
        <Title>역할 선택</Title>

        <CardContainer>
          <RoleCard
            selected={selectedRole === 'patient'}
            color="pink"
            emoji="👵🏻"
            label="환자"
            onClick={() => setSelectedRole('patient')}
          />
          <RoleCard
            selected={selectedRole === 'guardian'}
            color="blue"
            emoji="👨🏻"
            label="보호자"
            onClick={() => setSelectedRole('guardian')}
          />
        </CardContainer>

        <Instruction>
          해당하는 버튼을 선택해주세요
          <br />
          터치하면 다음 화면으로 넘어갑니다
        </Instruction>

        <FixedBottom>
          <Button
            type="main"
            buttonText="다음"
            isDisabled={!selectedRole}
            bgColor={selectedRole ? '#6a1b9a' : '#d9d9d9'}
            onClick={handleNext}
          />
        </FixedBottom>
      </ContentContainer>
    </Container>
  );
};

export default Role;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #6a1b9a;
  text-align: center;
  margin: 2rem 0 4rem 0;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
  width: 100%;
`;

const Instruction = styled.p`
  font-size: 0.8rem;
  color: #a1a1a1;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.4;
`;

const FixedBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 5rem 2rem;
  box-sizing: border-box;
`;
