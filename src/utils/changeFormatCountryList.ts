export const changeFormatCountryList = (countryList: string[]) => {
  let result = '';
  const ETCLength = countryList.length - 1;

  if (ETCLength === 0) result = countryList[0];
  else result = `${countryList[0]} 외 ${ETCLength}개`;

  return result;
};
