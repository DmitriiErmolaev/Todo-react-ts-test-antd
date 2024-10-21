const pluralize = (number: number, singular:string, plural:string):string => {
  return number === 1 ? singular : plural;
};

export default pluralize;