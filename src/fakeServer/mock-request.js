import { MOCK_DATA_MENU } from './mock-data.js';

export const getAllItems = async () => {
  const time = Math.random() * 3000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_DATA_MENU);
    }, time);
  });
};
