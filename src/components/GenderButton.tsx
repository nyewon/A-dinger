import styled from 'styled-components';

interface GenderButtonProps {
  selected: boolean;
  color: 'pink' | 'blue';
  label: string;
  emoji: string;
  onClick: () => void;
}

const GenderButton = ({
  selected,
  color,
  label,
  emoji,
  onClick,
}: GenderButtonProps) => {
  return (
    <StyledButton selected={selected} color={color} onClick={onClick}>
      <span style={{ fontSize: '1.4rem' }}>{emoji}</span> {label}
    </StyledButton>
  );
};

export default GenderButton;

const StyledButton = styled.button<{
  selected: boolean;
  color: 'pink' | 'blue';
}>`
  width: 100%;
  padding: 0.5rem 0;
  border-radius: 0.5rem;
  border: 1px solid
    ${({ selected, color }) =>
      selected ? (color === 'pink' ? '#D9529C' : '#0C59F2') : '#d9d9d9'};
  background-color: ${({ selected, color }) =>
    selected ? (color === 'pink' ? '#FDD8F4' : '#DBEAFE') : '#fff'};
  color: #000;
  font-weight: 600;
  font-size: 0.9rem;
  gap: 0.5rem;
  transition: all 0.2s ease;
  cursor: pointer;
`;
