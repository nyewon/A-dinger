import styled from 'styled-components';

interface RoleCardProps {
  selected: boolean;
  color: 'pink' | 'blue';
  emoji: string;
  label: string;
  onClick: () => void;
}

const RoleCard = ({
  selected,
  color,
  emoji,
  label,
  onClick,
}: RoleCardProps) => {
  return (
    <Card selected={selected} color={color} onClick={onClick}>
      <EmojiCircle selected={selected} color={color}>
        <ProfileImage>{emoji}</ProfileImage>
      </EmojiCircle>
      <Label selected={selected} color={color}>
        {label}
      </Label>
    </Card>
  );
};

export default RoleCard;

const Card = styled.div<{ selected: boolean; color: 'pink' | 'blue' }>`
  width: 100%;
  height: 220px;
  border-radius: 1rem;
  border: 1px solid
    ${({ selected, color }) =>
      selected ? (color === 'pink' ? '#D9529C' : '#0C59F2') : '#d9d9d9'};
  background-color: ${({ selected, color }) =>
    selected ? (color === 'pink' ? '#FDD8F4' : '#DBEAFE') : '#fff'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  cursor: pointer;
`;

const EmojiCircle = styled.div<{ selected: boolean; color: 'pink' | 'blue' }>`
  width: 92px;
  height: 92px;
  border-radius: 50%;
  border: 1px solid
    ${({ selected, color }) =>
      selected ? (color === 'pink' ? '#D9529C' : '#0C59F2') : '#d9d9d9'};
  background-color: ${({ selected, color }) =>
    selected ? (color === 'pink' ? '#FCF2F8' : '#F0F9FF') : '#fff'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;
`;

const ProfileImage = styled.span`
  font-size: 3rem;
`;

const Label = styled.div<{ selected: boolean; color: 'pink' | 'blue' }>`
  font-size: 1rem;
  color: ${({ selected, color }) =>
    selected ? (color === 'pink' ? '#D9529C' : '#0C59F2') : '#d9d9d9'};
  font-weight: 600;
  margin-top: 1rem;
`;
