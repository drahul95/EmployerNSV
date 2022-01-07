export const INSTITUTE_RESPONSE = {
  success: true,
  error: null,
  data: [
    {
      id: "2",
      name: "Coaching Institute",
      label: "Type of Coaching Institute",
      slug: "coaching-institute",
    },
    {
      id: "6",
      name: "College/University",
      label: "Post",
      slug: "collegeuniversity",
    },
    {
      id: "4",
      name: "EdTech",
      label: "Type of Edtech Company",
      slug: "edtech",
    },
    {
      id: "5",
      name: "Pre-School",
      label: "",
      slug: "preschool",
    },
    {
      id: "1",
      name: "School",
      label: "Board",
      slug: "school",
    },
    {
      id: "7",
      name: "Other",
      label: "Type Of Institute",
      slug: "other",
    },
  ],
  nextfield: ["INSTITUTION_SUB_TYPE"],
};

export const SUB_INSTITUTE_RESPONSE = {
  data: [
    { id: 0, name: "primary", label: "Sunny" },
    { id: 1, name: "suraj", label: "Annu" },
    { id: 2, name: "himanshu", label: "Ro" },
  ],
  next: { nextAPI: "INSTITUTION_SUB_TYPE" },
};
