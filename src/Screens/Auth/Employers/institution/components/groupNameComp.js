import React, { useCallback, useState } from "react";
import { store } from "../../../../../Redux/store";
import { SALT } from "../../../../../config/salt";
import { Input as TextField } from "antd";
import { useField } from "formik";
import { checkGroupNameApi } from "../../../../../apis/institutions";

export const GroupNameComp = React.forwardRef(({}, ref) => {
  const [isVisible, setVisible] = useState(true);
  const [field, meta, helpers] = useField("group_name");

  console.log("props===========>", ref);


  const error = meta.touched && meta.error;

  const handleBlur = useCallback(async () => {
    helpers.setTouched(true);
    try {
      const re = await checkGroupNameApi({
        group_name: field.value.toString().trim(),
      });
      if (!re.success && re.error) {
        helpers.setError(re.error.message);
      }
    } catch (e) {}
  }, [helpers]);


  console.log("store.getState().common.token----->", store.getState().common.token);
  // const { legalentity_name } = jwt.verify(store.getState().common.token, SALT);

  return (
    <div style={{ marginBottom: 10 }}>
      {console.log("val", isVisible)}
      <h4 className="bold blcktxtclr groupnamenoneditable pt-3 font14 text-center">
        {/* {legalentity_name} */}
        Legal entity name goes here
      </h4>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!isVisible && (
          <h4 className="bold blcktxtclr pt-3 font14 text-center">
            {field.value ? field.value : ""}
          </h4>
        )}
        {!isVisible && (
          <div
            style={{ marginLeft: 10 }}
            onClick={() => {
              setVisible(true);
            }}
          >
            {/*TODO:// Rahul*/}
            <h4 className="bold blcktxtclr pt-3 font14 text-center">click</h4>
          </div>
        )}
      </div>

      <div className="col-12 gourpeditable">
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            {isVisible &&  (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    backgroundColor: "white",
                    borderBottom: error
                      ? "1px solid #df1e1f"
                      : "1px solid #2a5798",
                  }}
                >
                  <TextField
                    ref={ref}
                    autoFocus={true}
                    className={"form-control bold_600 font14"}
                    placeholder={"Type Group name here"}
                    bordered={false}
                    onChange={(e) => helpers.setValue(e.target.value)}
                    onBlur={handleBlur}
                    value={field.value}
                    style={{ width: 200, backgroundColor: "white" }}
                  />
                </div>
                {error && (
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
                      {meta.error}
                    </span>
                  </div>
                )}
              </div>
            )}
            {isVisible && (
              <button
                type="button"
                className="transaparent_btn nobrder editbtn"
                onClick={() => {
                  if (field.value !== "") setVisible(false);
                }}
              >
                <Tick />
              </button>
            )}
            {isVisible && (
              <div className="tooltipdivtop">
                <span className="text">
                  i
                  <div className="tooltiphover">
                    <span>
                      Add your group name to continue adding more institution
                    </span>
                  </div>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

const Tick = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18.828"
      height="13.414"
      viewBox="0 0 18.828 13.414"
    >
      <path
        id="_3325079_check_icon"
        data-name="3325079_check_icon"
        d="M20,6,9,17,4,12"
        transform="translate(-2.586 -4.586)"
        fill="none"
        stroke="#2a5798"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </svg>
  );
};
