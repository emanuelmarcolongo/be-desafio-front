const phoneNumberFormatter = (phoneNumber: string) => {
  const formattedNumber = phoneNumber.replace(
    /(\d{2})(\d{2})(\d{5})/,
    "+$1 ($2) $3-"
  );

  return formattedNumber;
};

export default phoneNumberFormatter;
