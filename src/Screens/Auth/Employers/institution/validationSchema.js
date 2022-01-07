import * as yup from "yup";

export const InstituteValidationSchema = yup.object().shape({
  group_name: yup.string().when("institutes", (institute) => {
    if (institute.length > 1)
      return yup.string().required("This field is required");
  }),
  institutes: yup.array().of(
    yup.object().shape({
      institution_name: yup.string().required("This field is required"),
      institution_cat: yup.number().required("This field is required"),
      /*institution_subcat: yup.number().when(["type"], {
        is: (type) => {
          console.log("type23", yup.ref("type"), type);
          return true;
        },
        then: yup.string().required("Select right month"),
      }),*/
      //institution_subcat_other: "",
      //institution_subcat2: "",
      //institution_subcat2_other: "",
    })
  ),
});
