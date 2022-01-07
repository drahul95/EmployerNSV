import React, { useEffect, useRef, useState } from "react";
import { Formik, Form, FieldArray } from "formik";
import {
  INSTITUTE_LEVEL,
  INSTITUTE_OBJ,
  INSTITUTE_OPTIONS,
} from "../../../../data/instituteLevel";
import { PrimaryButton } from "../../../../Components/atoms/Button";
import {
  addInstituteApi,
  checkGroupNameApi,
  checkInstituteNameApi,
  getInstituteHeirachyApi,
} from "../../../../apis/institutions";
import { NewInstituteCard } from "./components/newInstituteCard";
import { GroupNameComp } from "./components/groupNameComp";
import { InstituteValidationSchema } from "./validationSchema";
import Loader from './../../../../Components/Loader';
import { Visibility } from "@material-ui/icons";


export const InstitutionModal = () => {
  const [loading, setLoading] = useState(true);
  const [instituteValue, setInstituteValue] = useState({});
  const groupNameRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false)
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    fetchInstitute();
  }, []);

  const fetchInstitute = async () => {
    setLoading(true);
    setIsLoading(true)
    try {
      const res = await getInstituteHeirachyApi();
      const finalValue = Object.assign({}, res.data, {
        group_name: "",
        institutes: [
          {
            institution_name: "",
            institution_cat: "",
            institution_subcat: "",
            institution_subcat_other: "",
            institution_subcat2: "",
            institution_subcat2_other: "",
          },
        ],
      });
      setInstituteValue(finalValue);
    } catch (e) {
    } finally {
      setLoading(false);
      setIsLoading(false)
    }
  };

  const EditGroupName = (value) => {
    console.log("value0000000>", document.querySelector(".gourpeditable"));
    const GroupNameNonEdit = document.querySelector(".groupnamenoneditable");
    const GroupNameEdit = document.querySelector(".gourpeditable");
    if (GroupNameNonEdit.style.display == "block") {
      GroupNameNonEdit.style.display = "block";
      GroupNameEdit.style.display = "none";
    } else {
      GroupNameNonEdit.style.display = "none";
      GroupNameEdit.style.display = "block";
    }
  };

  const EditedGroupText = () => {
    const GroupNameNonEdit = document.querySelector(".groupnamenoneditable ");
    const GroupNameEdit = document.querySelector(".gourpeditable");
    if (GroupNameEdit.style.display === "none") {
      GroupNameNonEdit.style.display = "none";
      GroupNameEdit.style.display = "block";
    } else {
      GroupNameNonEdit.style.display = "block";
      GroupNameEdit.style.display = "none";
    }
  };

  const handleFormSubmit = async (values, formikHelpers) => {
    const { setFieldError } = formikHelpers;
    let Error = false;

    try {
      setIsLoading(true)
      const re = await checkGroupNameApi({ group_name: values.group_name });
      if (!re.success && re.error) {
        Error = true;
        setIsLoading(false)
        setFieldError(`group_name`, re.error.message);
      }
    } catch (e) { }

    values.institutes.map(async (institute, i) => {
      try {
        const res = await checkInstituteNameApi({
          institute_name: institute.institution_name.toString().trim(),
        });
        if (!res.success && res.error) {
          Error = true;
          setFieldError(`institutes[${i}].institution_name`, res.error.message);
        }
      } catch (e) { }
    });

    if (!Error) {
      setIsLoading(true)
      const res1 = await addInstituteApi(values);

      if (res1.success) {
        setIsLoading(false)
        alert("Successfully done");
      }
    }
  };

  const RemoveGroupName = () => {
    const GroupNameEdit = document.querySelector(".gourpeditable");
    const GroupNameNonEdit = document.querySelector(".groupnamenoneditable");
    GroupNameEdit.style.display = "none";
    GroupNameNonEdit.style.display = "block";
  }



  return (
    <>
      <div className="modal-header pt-4">
        <h4 className="bold blcktxtclr block font18 text-center">
          <Institution /> Institution Details
        </h4>
      </div>
      {!loading && (
        <Formik
          initialValues={instituteValue}
          validationSchema={InstituteValidationSchema}
          onSubmit={handleFormSubmit}
        >
          {({
            handleSubmit,
            values,
            setFieldValue,
            touched,
            setFieldError,
            errors,
          }) => (
            <>{console.log('error----->', values.institutes.length > 1)}
              <div className="modal-body">
                <div className="pb-3 mx-3">


                  <GroupNameComp ref={groupNameRef} />
                  <FieldArray
                    name="institutes"
                    render={({ insert, remove, push }) => (
                      <>
                        <NewInstituteCard
                          values={values}
                          setFieldValue={setFieldValue}
                          setFieldError={setFieldError}
                          remove={remove}
                          errors={errors}
                          handleClick={() => RemoveGroupName()}
                        />
                        <div className="col-12 pt-3">
                          <button
                            className="block px-3 py-3 width_full addbutton"
                            onClick={() => {
                              push(INSTITUTE_OBJ);
                              EditGroupName()
                              groupNameRef.current.focus()
                            }}
                          >
                            <svg
                              className="add_icon me-3"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                            >
                              <defs></defs>
                              <path
                                className="a"
                                d="M0,10A1.25,1.25,0,0,1,1.25,8.75h7.5V1.25a1.25,1.25,0,1,1,2.5,0v7.5h7.5a1.25,1.25,0,1,1,0,2.5h-7.5v7.5a1.25,1.25,0,1,1-2.5,0v-7.5H1.25A1.25,1.25,0,0,1,0,10Z"
                              />
                            </svg>
                            Add Institution
                          </button>
                        </div>
                        <div className="col-12 pt-3">
                          <PrimaryButton
                            onClick={handleSubmit}
                            label={"Submit"}
                            style={{
                              borderRadius: 5,
                              height: 50,
                            }}
                          />
                        </div>
                      </>
                    )}
                  />
                </div>
              </div>
            </>
          )}
        </Formik>
      )}
      <Loader isLoading={isLoading} />
    </>
  );
};

const Institution = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18.982"
      height="19.701"
      viewBox="0 0 18.982 19.701"
      className="me-2"
    >
      <g id="XMLID_8_" transform="translate(-80.5 -64.1)">
        <path
          id="XMLID_149_"
          d="M89.918,64.1,80.5,69.009v2.505H99.482V69.007ZM90,69.643A1.346,1.346,0,1,1,91.35,68.3,1.347,1.347,0,0,1,90,69.643Z"
          fill="#2a5798"
        />
        <path
          id="XMLID_137_"
          d="M113.822,481.312v1.32H95.5v-1.32h1.441V471.9h1.32v9.412h3.385V471.9h1.32v9.412h3.385V471.9h1.32v9.412h3.385V471.9h1.32v9.412Z"
          transform="translate(-14.67 -398.831)"
          fill="#2a5798"
        />
      </g>
    </svg>
  );
};
