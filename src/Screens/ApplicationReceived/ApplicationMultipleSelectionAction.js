import React from "react";
import {
  Box,
  Button,
  TextField,
  Modal,
  Fade,
  Backdrop,
  Typography,
  // Checkbox,
  // FormControlLabel,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
// import UsingCreditsModalInvite from "../UsingCreditsModal/UsingCreditsModalInvite";
// import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
// import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";

function ApplicationMultipleSelectionAction() {
  const [openShortlist, setOpenShortlist] = React.useState(false);

  const handleOpenShortlist = () => {
    setOpenShortlist(true);
  };

  const handleCloseShortlist = () => {
    setOpenShortlist(false);
  };

  const [openremovemodal, setOpenremovemodal] = React.useState(false);

  const handleOpenremovemodal = (e) => {
    setOpenremovemodal(true);
    e.stopPropagation();
  };

  const handleCloseremovemodal = (e) => {
    setOpenremovemodal(false);
    e.stopPropagation();
  };

  return (
    <>
      <Box component="div" className="dis_flex mt-3 multi-selection">
        <Box component="div" className="dis_flex ">
          <Box component="div" className="buttondiv dis_flex">
            <Box component="div" className="">
              <Box component="div" className="mt-1 me-4 mb-3">
                <input
                  type="checkbox"
                  className="customcheckbox top-1"
                  id="customjoobtitle"
                />
                <label for="customjoobtitle" className="font14 text-center">
                  Select All
                </label>
              </Box>
            </Box>
            <Button
              startIcon={<TickGreen />}
              className="greencolor whitecolortext border8"
              onClick={handleOpenShortlist}
            >
              Shortlist Selected
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className="material-modal"
              open={openShortlist}
              onClose={handleCloseShortlist}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={openShortlist}>
                <div className="modalcontsmall">
                  <TickWhite />
                  <Typography variant="h6">
                    Are you sure you want to Shortlist the Selected
                    Candidate'(s)?
                  </Typography>
                  <Box component="div" className="button_confirm_area">
                    <Button
                      className="lightbluecolor border8"
                      onClick={handleCloseShortlist}
                    >
                      No
                    </Button>
                    <Button
                      className="darkbluecolor whitecolortext border8"
                      onClick={(e) => {
                        handleCloseShortlist();
                      }}
                    >
                      Yes
                    </Button>
                  </Box>
                </div>
              </Fade>
            </Modal>
            <Button
              startIcon={<RemoveIcon />}
              className="redcolor whitecolortext border8"
              onClick={handleOpenremovemodal}
            >
              Remove Selected
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className="material-modal"
              open={openremovemodal}
              onClose={handleCloseremovemodal}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={openremovemodal}>
                <div className="modalcontsmall">
                  <RemoveBg />
                  <Typography variant="h6">
                    Are you sure you want to remove the selected candidate'(s)?
                  </Typography>
                  <Box component="div" className="button_confirm_area">
                    <Button
                      className="lightbluecolor border8"
                      onClick={handleCloseremovemodal}
                    >
                      No
                    </Button>
                    <Button className="darkbluecolor whitecolortext border8">
                      Yes
                    </Button>
                  </Box>
                </div>
              </Fade>
            </Modal>
          </Box>
        </Box>
        <Box component="div" className="dis_flex sortbydiv marginautoright">
          <Box component="div" className="ms-2 mt-2">
            <Button
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              startIcon={<SortIcon />}
              className="sortbybtn"
            >
              Sort By
            </Button>
          </Box>
          <Autocomplete
            id="combo-box-demo"
            className="WhiteSelectDropdown ms-2"
            options={sortby}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => {
              params.inputProps.className = "noborderinput";
              params.InputProps.className = "noBeforeAfter";
              params.InputProps.placeholder = "Select";
              return (
                <TextField
                  disabled
                  inputStyle={{ cursor: "none" }}
                  {...params}
                  onKeyPress={(e) => e.preventDefault()}
                />
              );
            }}
          />
        </Box>
      </Box>
    </>
  );
}
export default ApplicationMultipleSelectionAction;
const TickWhite = () => {
  return (
    <svg
      id="Group_694"
      data-name="Group 694"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
    >
      <g
        id="Rectangle_454"
        data-name="Rectangle 454"
        fill="#fff"
        stroke="#707070"
        stroke-width="1"
        opacity="0"
      >
        <rect width="40" height="40" stroke="none" />
        <rect x="0.5" y="0.5" width="39" height="39" fill="none" />
      </g>
      <g
        id="Group_4689"
        data-name="Group 4689"
        transform="translate(-1783 -728)"
      >
        <g
          id="Rectangle_193"
          data-name="Rectangle 193"
          transform="translate(1783 728)"
          fill="#fff"
          stroke="#707070"
          stroke-width="1"
          opacity="0"
        >
          <rect width="40" height="40" stroke="none" />
          <rect x="0.5" y="0.5" width="39" height="39" fill="none" />
        </g>
        <path
          id="Vector"
          d="M20,0A20,20,0,1,0,40,20,20.024,20.024,0,0,0,20,0Z"
          transform="translate(1783 728)"
          fill="#199b4d"
        />
        <path
          id="Vector-2"
          data-name="Vector"
          d="M19.294.441,8.232,10.323l-5.27-5.1A1.815,1.815,0,0,0,.529,5.165a1.553,1.553,0,0,0-.058,2.28L6.957,13.69a1.826,1.826,0,0,0,1.216.489,2.071,2.071,0,0,0,1.216-.434L21.726,2.776A1.508,1.508,0,0,0,21.784.5,1.891,1.891,0,0,0,19.294.441Z"
          transform="translate(1791.333 741.333)"
          fill="#fff"
        />
      </g>
    </svg>
  );
};

const TickGreen = () => {
  return (
    <svg
      id="Group_694"
      data-name="Group 694"
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 40 40"
    >
      <g
        id="Rectangle_454"
        data-name="Rectangle 454"
        fill="#fff"
        stroke="#707070"
        stroke-width="1"
        opacity="0"
      >
        <rect width="40" height="40" stroke="none" />
        <rect x="0.5" y="0.5" width="39" height="39" fill="none" />
      </g>
      <g
        id="Group_4689"
        data-name="Group 4689"
        transform="translate(-1783 -728)"
      >
        <g
          id="Rectangle_193"
          data-name="Rectangle 193"
          transform="translate(1783 728)"
          fill="#fff"
          stroke="#707070"
          stroke-width="1"
          opacity="0"
        >
          <rect width="40" height="40" stroke="none" />
          <rect x="0.5" y="0.5" width="39" height="39" fill="none" />
        </g>
        <path
          id="Vector"
          d="M20,0A20,20,0,1,0,40,20,20.024,20.024,0,0,0,20,0Z"
          transform="translate(1783 728)"
          fill="#fff"
        />
        <path
          id="Vector-2"
          data-name="Vector"
          d="M19.294.441,8.232,10.323l-5.27-5.1A1.815,1.815,0,0,0,.529,5.165a1.553,1.553,0,0,0-.058,2.28L6.957,13.69a1.826,1.826,0,0,0,1.216.489,2.071,2.071,0,0,0,1.216-.434L21.726,2.776A1.508,1.508,0,0,0,21.784.5,1.891,1.891,0,0,0,19.294.441Z"
          transform="translate(1791.333 741.333)"
          fill="#199b4d"
        />
      </g>
    </svg>
  );
};
const RemoveBg = () => {
  return (
    <svg
      className="remove_bg"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
    >
      <defs></defs>
      <path
        class="a"
        d="M20,0A20,20,0,1,0,40,20,20.022,20.022,0,0,0,20,0Zm0,0"
      />
      <path
        class="b"
        d="M170.8,168.428a1.679,1.679,0,1,1-2.374,2.374l-5.045-5.046-5.045,5.046a1.679,1.679,0,0,1-2.374-2.374l5.045-5.045-5.045-5.045a1.679,1.679,0,1,1,2.374-2.374l5.045,5.045,5.045-5.045a1.679,1.679,0,0,1,2.374,2.374l-5.045,5.045Zm0,0"
        transform="translate(-143.383 -143.383)"
      />
    </svg>
  );
};

const SortIcon = () => {
  return (
    <svg
      className="sort_icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs></defs>
      <g transform="translate(-1487 -417)">
        <rect
          class="a"
          width="24"
          height="24"
          transform="translate(1487 417)"
        />
        <g transform="translate(1485.397 413.888)">
          <g transform="translate(2.067 5.499)">
            <path
              class="b"
              d="M4.774,18.352a.919.919,0,0,1-.233.618.746.746,0,0,1-1.125,0,.919.919,0,0,1-.233-.618V2.985l-1.823,2a.8.8,0,0,1-.258.19.735.735,0,0,1-.3.067.762.762,0,0,1-.563-.256.937.937,0,0,1,0-1.237L3.415.258,3.427.246A.743.743,0,0,1,4.54.256l3.182,3.5a.884.884,0,0,1,.173.284.954.954,0,0,1,0,.669.885.885,0,0,1-.172.284.8.8,0,0,1-.258.19.73.73,0,0,1-.609,0A.8.8,0,0,1,6.6,4.989l-1.823-2Zm6.364-16.6a.761.761,0,0,1-.563-.256.919.919,0,0,1-.233-.618.919.919,0,0,1,.233-.618A.761.761,0,0,1,11.138,0h1.591a.761.761,0,0,1,.563.256.919.919,0,0,1,.233.618.919.919,0,0,1-.233.618.761.761,0,0,1-.563.256Zm0,5.243a.761.761,0,0,1-.563-.256.936.936,0,0,1,0-1.236.761.761,0,0,1,.563-.256h4.773a.761.761,0,0,1,.563.256.936.936,0,0,1,0,1.236.761.761,0,0,1-.563.256Zm0,5.243a.761.761,0,0,1-.563-.256.936.936,0,0,1,0-1.236.761.761,0,0,1,.563-.256h7.955a.761.761,0,0,1,.563.256.936.936,0,0,1,0,1.236.761.761,0,0,1-.563.256Zm-.8,4.369a.919.919,0,0,0,.233.618.761.761,0,0,0,.563.256H22.276a.761.761,0,0,0,.563-.256.936.936,0,0,0,0-1.236.761.761,0,0,0-.563-.256H11.138a.761.761,0,0,0-.563.256A.919.919,0,0,0,10.343,16.6Z"
              transform="translate(0 0)"
            />
          </g>
        </g>
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
      <path
        class="a"
        d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,0"
      />
      <path
        class="b"
        d="M164.6,163.188a1,1,0,1,1-1.414,1.414l-3-3.005-3,3.005a1,1,0,0,1-1.414-1.414l3.005-3-3.005-3a1,1,0,0,1,1.414-1.414l3,3.005,3-3.005a1,1,0,0,1,1.414,1.414l-3.005,3Zm0,0"
        transform="translate(-148.184 -148.183)"
      />
    </svg>
  );
};
const sortby = [
  { name: "Latest Application", id: 1 },
  { name: "Profile Relevance", id: 2 },
  { name: "Relevant Experience", id: 3 },
  { name: "Min. Expected Salary", id: 4 },
  { name: "Notice Period", id: 5 },
  { name: "Number of Skills Matched", id: 6 },
];
