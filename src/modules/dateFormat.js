const formatDate = () => {
  const d = new Date();
  const format = [d.getFullYear(), d.getMonth(), d.getDate()];
  const date = format.join('-');
  return date;
};

export default formatDate;
