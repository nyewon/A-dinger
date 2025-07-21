import styled from 'styled-components';
import { FaRegCircleCheck, FaCircleCheck } from 'react-icons/fa6';

interface CheckItemProps {
  label: string;
  checked: boolean;
  onClick: () => void;
}

const CheckItem = ({ label, checked, onClick }: CheckItemProps) => {
  return (
    <Item onClick={onClick}>
      {checked ? (
        <FaCircleCheck color="#BA68C8" size={26} />
      ) : (
        <FaRegCircleCheck color="#d9d9d9" size={26} />
      )}
      <span>{label}</span>
    </Item>
  );
};

export default CheckItem;

const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  cursor: pointer;
`;
