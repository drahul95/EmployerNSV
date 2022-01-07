export const INSTITUTE_OPTIONS = [
  {
    name: "INSTITUTION_TYPE",
    level: 0,
    selected: true,
    title: "",
    selectedData: null,
    isOther: false,
  },
  {
    name: "INSTITUTION_SUB_TYPE",
    level: 1,
    selected: false,
    title: "",
    selectedData: null,
    isOther: false,
  },
  {
    name: "INSTITUTION_MINOR_TYPE",
    level: 2,
    selected: false,
    title: "",
    selectedData: null,
    isOther: false,
  },
];

export const DummyInstitute = {
  0: {
    name: "INSTITUTION_TYPE",
    level: 0,
    selected: false,
    title: "",
    selectedData: null,
    isOther: false,
  },
  1: {
    name: "INSTITUTION_SUB_TYPE",
    level: 1,
    selected: false,
    title: "",
    selectedData: null,
    isOther: false,
  },
  2: {
    name: "INSTITUTION_MINOR_TYPE",
    level: 2,
    selected: false,
    title: "",
    selectedData: null,
    isOther: false,
  },
};

export const INSTITUTE_OBJ = {
  institution_name: "",
  institution_cat: "",
  institution_subcat: "",
  institution_subcat_other: "",
  institution_subcat2: "",
  institution_subcat2_other: "",
};

export const INSTITUTE_LEVEL = {
  group_name: "",
  institutes: [
    {
      options: INSTITUTE_OPTIONS,
      institution_name: "",
      institution_cat: "",
      institution_subcat: "",
      institution_subcat_other: "",
      institution_subcat2: "",
      institution_subcat2_other: "",
    },
  ],
};
