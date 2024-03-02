export const validatePassword = val => {
  const reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{9,31}$/;
  return reg.test(val);
};

export const validateId = id => {
  const reg = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return reg.test(id);
};