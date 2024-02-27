const dateFormater = (date: string) => {
  const datePtBr = new Date(date).toLocaleDateString("pt-br");
  return datePtBr;
};

export default dateFormater;
