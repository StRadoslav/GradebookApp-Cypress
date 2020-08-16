export const RandomEmail = () => {
  return Math.random().toString(36).substr(2, 7) + "@gmail.com";
};

export const RandomProff = () => {
  return Math.random().toString(36).substr(1,1);
};

export const RandomComments = () => {
  return Math.random().toString(36).substr(2, 7) ;
};

export const RandomValues = () => {
  return Math.random().toString(36).substr(1, 3);
};
