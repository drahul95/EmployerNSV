 export const PASSWORD_REGEX = [
  {
    name: "6-13 Characters",
    regEx: /^.{6,13}$/,
  },
  {
    name: "At least one special character (./@#$%)",
    regEx: /(?=.*[./@#$%])/,
  },
  {
    name: "At least one uppercase",
    regEx: /(?=.*[A-Z])/,
  },
  {
    name: "At least one lowercase",
    regEx: /(?=.*[a-z])/,
  },
  {
    name: "Must not begin with a number",
    regEx: /^(?![0-9])/,
  },
];
