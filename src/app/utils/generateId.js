import { nanoid } from 'nanoid';

const generateId = () => {
  const id = nanoid();
  return id;
};

export default generateId;
