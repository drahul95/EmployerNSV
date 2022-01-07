import React, { useEffect, useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { useField } from "formik";
import { InstituteNameInput } from "./institueName";
import { Tooltips } from "../../../../../Components/atoms/tooltips";
import {
  DummyInstitute,
  INSTITUTE_OBJ,
} from "../../../../../data/instituteLevel";
import { OtherField } from "./otherField";
import { Input } from "../../../../../Components/atoms";

const LoopComponent = ({
  name,
  obj,
  dataSource,
  placeHolder,
  tooltipText,
  label,
  instituteIndex,
  setFieldValue,
  setFieldError,
}) => {
  const [field, meta, helpers] = useField(name);
  const [actualfield, actualMeta, actualHelpers] = useField(
    `institutes[${instituteIndex}].${name}`
  );
  const [field2, meta2, helpers2] = useField(
    `institutes[${instituteIndex}].${obj.child_other_key}`
  );

  const error = actualMeta.touched && actualMeta.error;
  const [selectedValue, setSelectedValue] = useState({});
  const [isOther, setIsOther] = useState(false);

  const onSelect = (value) => {
    const res = dataSource.filter((src) => src.name === value);

    if (res.length > 0) {
      setSelectedValue(res[0]);
    }

    setFieldValue(
      `institutes[${instituteIndex}].${name}`,
      res.length > 0 ? parseInt(res[0].id) : ""
    );
  };

  useEffect(() => {
    if (actualfield.value !== "") {
      const res = dataSource.filter((data, i) => {
        return actualfield.value === parseInt(data.id);
      });

      console.log('rerender', res)

      if (res.length > 0) setSelectedValue(res[0]);
    } else { setSelectedValue({}) }
  }, [actualfield.value]);

  useEffect(() => {
    return () => {
      //setFieldValue(`institutes[${instituteIndex}].${name}`, "");
      //helpers2.setValue("");
    };
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", marginBottom: 5 }}>
        <label className="blcktxtclr bold_500 font12">{label}</label>
        {name === "institution_cat" && (
          <Tooltips
            label={
              "You cannot change the type of institution later so please ensure the selection made is accurate"
            }
            text={"i"}
          />
        )}
        {tooltipText && <Tooltips label={tooltipText} text={"i"} />}
      </div>
      <div style={{ marginBottom: 15 }}>
        {/*TODO:// Rahul*/}
        <Autocomplete
          id="combo-box-demo"
          className="BlueSelectDropdown"
          options={dataSource}
          getOptionLabel={(option) => option.name}
          classes={{
            paper: "autocomplatepapar",
          }}
          onInputChange={(event, newInputValue, reason) => {
            if (reason === "clear") setSelectedValue({});
            else if (reason === "reset") onSelect(newInputValue);
            else if (reason === "input" && newInputValue === "")
              console.log("input");
          }}
          style={{ border: error ? "1px solid #f00" : null }}
          disabled={obj.child_other && isOther}
          renderInput={(params) => {
            params.inputProps.className =
              "noborderinputwithcursor font14 bold_500";
            params.InputProps.className = "noBeforeAfter";
            params.InputProps.placeholder = placeHolder;
            return (
              <TextField disabled={obj.child_other && isOther} {...params} />
            );
          }}
        />
        {!!actualMeta.error && actualMeta.touched && (
          <div
            style={{
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <span
              style={{
                display: "flex",
                color: "#df1e1f",
                fontSize: 12,
                alignItems: "end",
              }}
            >
              {actualMeta.error}
            </span>
          </div>
        )}
        {obj.child_other && (
          <OtherField
            isClicked={isOther}
            title={"Others"}
            onChange={(val) => {
              setIsOther(val.target.checked);
              if (val.target.checked) {
                setFieldValue(`institutes[${instituteIndex}].${name}`, "");
              }
              if (!val.target.checked) {
                setFieldValue(
                  `institutes[${instituteIndex}].${name}`,
                  parseInt(selectedValue.id)
                );
                setFieldValue(
                  `institutes[${instituteIndex}].${obj.child_other_key}`,
                  ""
                );
              }
            }}
          />
        )}
        {obj.child_other && isOther && (
          <div style={{ marginTop: 5 }}>
            <Input
              value={field2.value}
              onBlur={() => helpers2.setTouched(true)}
              onChange={(e) => helpers2.setValue(e.target.value)}
              error={!!meta2.error && meta2.touched}
              errorMsg={meta2.error}
              placeholder={`${label} is required`}
            />
          </div>
        )}
      </div>
      {selectedValue.child && !isOther && selectedValue.child.length > 0 && (
        <LoopComponent
          obj={selectedValue}
          name={selectedValue.child_key}
          dataSource={selectedValue.child}
          placeHolder={"Select"}
          label={selectedValue.label}
          instituteIndex={instituteIndex}
          setFieldValue={setFieldValue}
        />
      )}
    </>
  );
};

export const NewInstituteCard = ({
  values,
  setFieldValue,
  remove,
  setFieldError,
  errors,
  handleClick
}) => {
  return (
    <>
      {values.institutes.length > 0 &&
        values.institutes.map((d, instituteIndex) => (
          <>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button bold_500 py-4"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${instituteIndex}`}
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <div className="institute_name_area">
                    {d.institution_name ? d.institution_name : "Institute"}
                    <div
                      onClick={() => {
                        console.log("remove manish", instituteIndex);
                        remove(instituteIndex);
                      }}
                      style={{
                        alignSelf: "center",
                        backgroundColor: "yellow",
                      }}
                    >
                      {values.institutes.length > 1 && <div onClick={()=> handleClick()}><RemoveIcon /></div>}
                    </div>
                  </div>
                </button>
              </h2>
              <div
                id={`collapse${instituteIndex}`}
                className="accordion-collapse show collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#popupeducation"
              >
                <div className="accordion-body">
                  <div className="formdiv brdrds16">
                    <div className="accordion mt-3" id="popupeducation">
                      <div className="accordion mt-3" id="popupeducation">
                        <div style={{ marginBottom: 10 }}>
                          <InstituteNameInput
                            placeholder={"Enter institute name"}
                            label={"Institute Name"}
                            name={`institutes[${instituteIndex}].institution_name`}
                          />
                        </div>
                        <LoopComponent
                          obj={values}
                          name={"institution_cat"}
                          dataSource={values.type}
                          placeHolder={"Select"}
                          label={"Institution Type"}
                          instituteIndex={instituteIndex}
                          setFieldValue={setFieldValue}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
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

const RemoveIcon = () => {
  return (
    <svg
      className="remove_icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs></defs>
      <g transform="translate(-1634 -843)">
        <g class="a" transform="translate(1634 843)">
          <rect class="d" width="24" height="24" />
          <rect class="e" x="0.5" y="0.5" width="23" height="23" />
        </g>
        <g transform="translate(1350.75 559.751)">
          <path
            class="b"
            d="M285,295.89v-1.281c.048-.355.085-.713.145-1.066a10.276,10.276,0,0,1,8.338-8.385c.373-.066.75-.106,1.125-.157h1.281c.349.046.7.079,1.047.139a10.286,10.286,0,0,1,8.4,8.345c.066.373.106.75.157,1.125v1.281c-.031.25-.058.5-.094.751a10.288,10.288,0,0,1-8.371,8.7c-.379.069-.762.107-1.144.159h-1.281c-.25-.031-.5-.058-.75-.093a10.289,10.289,0,0,1-8.7-8.37C285.091,296.656,285.052,296.271,285,295.89Zm19.03-.643a8.782,8.782,0,1,0-8.779,8.783A8.784,8.784,0,0,0,304.03,295.247Z"
          />
          <path
            class="c"
            d="M435.648,434.633a1.981,1.981,0,0,1,.157-.214q1.477-1.481,2.957-2.959a.731.731,0,0,1,1.258.414.76.76,0,0,1-.263.66q-1.461,1.455-2.918,2.914a1.867,1.867,0,0,1-.186.143c.078.083.125.136.175.187q1.465,1.465,2.931,2.929a.756.756,0,0,1,.261.661.731.731,0,0,1-1.26.41L435.8,436.82c-.051-.051-.1-.1-.165-.158-.059.056-.113.1-.164.155q-1.465,1.465-2.93,2.93a.742.742,0,0,1-.721.245.726.726,0,0,1-.4-1.192c.043-.05.092-.1.14-.143l2.873-2.874c.051-.051.1-.1.155-.164-.058-.061-.106-.114-.157-.165q-1.472-1.472-2.945-2.944a.719.719,0,0,1-.209-.784.7.7,0,0,1,.6-.492.754.754,0,0,1,.661.259q1.441,1.447,2.886,2.889C435.492,434.445,435.545,434.514,435.648,434.633Z"
            transform="translate(-140.385 -140.371)"
          />
        </g>
      </g>
    </svg>
  );
};
