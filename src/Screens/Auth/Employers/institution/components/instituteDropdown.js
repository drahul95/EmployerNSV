import React, { useEffect, useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { useField } from "formik";
import {
  institutionMinorTypesApi,
  institutionSubTypesApi,
  institutionTypesApi,
} from "../../../../../apis/institutions";
import { DummyInstitute } from "../../../../../data/instituteLevel";
import { Tooltips } from "../../../../../Components/atoms/tooltips";
import { OtherField } from "./otherField";
import { Input } from "../../../../../Components/atoms";
import { FORM_COMPONENT_WIDTH } from "../../../../../data/common";

export const InstituteDropdown = ({
  label,
  isOther,
  instituteIndex,
  placeHolder,
  name,
  setFieldValue,
  type,
  values,
  tooltipText,
  otherFieldName,
  level,
}) => {
  const [field, meta, helpers] = useField(name);
  const { setValue, setError } = helpers;
  const [field2, , helpers2] = useField(otherFieldName);
  const [dataSource, setDataSource] = useState([]);
  const [nextField, setNextField] = useState([]);
  const [isOtherClicked, setIsOtherClicked] = useState(false);

  const error = meta.touched && meta.error;

  useEffect(() => {
    getData();
  }, [label]);

  const getData = async () => {
    switch (type) {
      case "INSTITUTION_SUB_TYPE":
        const res = await institutionSubTypesApi({
          jobCategoryID: 35,
          institutionTypeID: values.institutes[instituteIndex].institution_cat,
          groupID: 0,
        });
        setDataSource(res.data);
        setNextField(res.nextfield);
        return;

      case "INSTITUTION_MINOR_TYPE":
        const minorRes = await institutionMinorTypesApi({
          jobCategoryID: 35,
          institutionTypeID: values.institutes[instituteIndex].institution_cat,
          institutionSubTypeID:
            values.institutes[instituteIndex].institution_subcat,
        });
        setDataSource(minorRes.data);
        setNextField(minorRes.nextfield);
        return;

      default:
        try {
          const res = await institutionTypesApi({ omit: 0, jobCategoryID: 35 });
          setDataSource(res.data);
          setNextField(res.nextfield);
        } catch (e) {}
        return;
    }
  };

  const onSelect = (value) => {
    let selectLevel;
    const res = dataSource.filter((src) => src.name === value);
    if (res.length > 0)
      setValue(typeof res[0].id === "string" ? parseInt(res[0].id) : res[0].id);

    if (nextField && nextField.length > 0) {
      values.institutes[instituteIndex].options.filter((opt, i) => {
        if (opt.name === nextField[0]) selectLevel = opt.level;
      });
    }

    if (selectLevel === undefined) {
      selectLevel = values.institutes[instituteIndex].options.length;
    }

    const finalValue = values.institutes[instituteIndex].options.map(
      (opt, i) => {
        if (typeof selectLevel === "number") {
          if (opt.level === selectLevel - 1) {
            return Object.assign({}, opt, { selectedData: res[0] });
          } else if (opt.level > selectLevel) {
            return DummyInstitute[opt.level];
          } else if (selectLevel === opt.level) {
            return Object.assign({}, DummyInstitute[opt.level], {
              selected: !(res[0] && res[0].label === ""),
              title: res[0] ? res[0].label : "",
            });
          }
        }
        return opt;
      }
    );
    setFieldValue(`institutes[${instituteIndex}].options`, finalValue);
  };

  const onReset = () => {
    console.log("asdfasfse");
  };

  const onChange = (e) => {
    setIsOtherClicked(e.target.checked);
    if (e.target.checked) {
      setValue("");

      const finalValue = values.institutes[instituteIndex].options.map(
        (opt, i) => {
          if (typeof level === "number") {
            if (i <= level) {
              return opt;
            } else {
              return Object.assign({}, opt, {
                selected: false,
                title: "",
                selectedData: null,
              });
            }
          }
          return opt;
        }
      );
      setFieldValue(`institutes[${instituteIndex}].options`, finalValue);
    } else {
      helpers2.setValue("");
    }
  };

  const handleBlur = () => {
    console.log("asdf");
  };

  return (
    <>
      {dataSource.length > 0 && (
        <>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <label className="blcktxtclr bold_500 font12">{label}</label>
            {tooltipText && <Tooltips label={tooltipText} text={"i"} />}
          </div>
          <Autocomplete
            id="combo-box-demo"
            className="BlueSelectDropdown"
            options={dataSource}
            getOptionLabel={(option) => option.name}
            classes={{
              paper: "autocomplatepapar",
            }}
            onInputChange={(event, newInputValue, reason) => {
              if (reason === "clear") onReset();
              else onSelect(newInputValue);
            }}
            style={{ border: error ? "1px solid #f00" : null }}
            disabled={isOtherClicked}
            renderInput={(params) => {
              params.inputProps.className = "noborderinput font14 bold_500";
              params.InputProps.className = "noBeforeAfter";
              params.InputProps.placeholder = placeHolder;
              return (
                <TextField
                  disabled={isOtherClicked}
                  onKeyPress={(e) => e.preventDefault()}
                  {...params}
                />
              );
            }}
          />
        </>
      )}

      {isOther && dataSource.length > 0 && (
        <OtherField
          isClicked={isOtherClicked}
          title={"Others"}
          onChange={onChange}
        />
      )}
      {isOther && isOtherClicked && dataSource.length > 0 && (
        <Input
          value={field2.value}
          onBlur={handleBlur}
          onChange={(e) => helpers2.setValue(e.target.value)}
          error={error}
          errorMsg={meta.error}
          //style={{ width: FORM_COMPONENT_WIDTH - 8 }}
        />
      )}
    </>
  );
};
