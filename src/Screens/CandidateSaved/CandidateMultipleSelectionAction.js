import React from "react";
import {
  Box,
  Button,
  TextField,
  Modal,
  Fade,
  Backdrop,
  Typography,
  Checkbox,
  FormControlLabel,
  Tooltip,
  InputAdornment,
  Grid,
  Radio,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import UsingCreditsModalInvite from "../UsingCreditsModal/UsingCreditsModalInvite";
import UsingCreditsModalInviteInsufficient from "../UsingCreditsModal/UsingCreditsModalInviteinsuffiicent";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const LightTooltip = withStyles((theme) => ({
  arrow: {
    "&:before": {
      boxShadow: theme.shadows[2],
    },
    color: theme.palette.common.white,
  },
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

function CandidateMultipleSelectionAction() {
  const [openInvite, setOpenInvite] = React.useState(false);

  const handleOpenInvite = (e) => {
    setOpenInvite(true);
    e.stopPropagation();
  };

  const handleCloseInvite = (e) => {
    setOpenInvite(false);
    e.stopPropagation();
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

  const [openmodalpostjob, setOpenModalpostjob] = React.useState(false);

  const handlepostjobOpen = () => {
    setOpenModalpostjob(true);
  };

  const handlepostjobClose = () => {
    setOpenModalpostjob(false);
  };

  const [openmodalEditJobPost, setOpenModalEditJobPost] = React.useState(false);

  const handleEditJobPostOpen = () => {
    setOpenModalEditJobPost(true);
  };

  const handleEditJobPostClose = () => {
    setOpenModalEditJobPost(false);
  };
  const [selectedValueLooking1, setSelectedValueLooking1] = React.useState("a");

  const handleChangeLooking1 = (event) => {
    setSelectedValueLooking1(event.target.value);
  };
  const [openmodalposting, setOpenModalposting] = React.useState(false);

  const handlepostingOpen = () => {
    setOpenModalposting(true);
  };
  const [openmodalEditLocation, setOpenModalEditLocation] =
    React.useState(false);

  const handleEditLocationOpen = () => {
    setOpenModalEditLocation(true);
  };

  const [openmodalpostjobInsufficient, setOpenModalpostjobInsufficient] =
    React.useState(false);

  const handlepostjobOpenInsufficient = () => {
    setOpenModalpostjobInsufficient(true);
  };

  const handlepostjobCloseInsufficient = () => {
    setOpenModalpostjobInsufficient(false);
  };

  const openrepostmodal2 = () => {
    const RepostOne = document.getElementById("repostmodalone");
    const RepostTwo = document.getElementById("repostmodaltwo");
    const TickTwo = document.getElementById("tick2area");
    RepostOne.classList.add("none");
    RepostTwo.classList.remove("none");
    TickTwo.classList.remove("normaltick");
    TickTwo.classList.add("roundcircle");
  };

  const openPreviousModalTwo = () => {
    const RepostTwo = document.getElementById("repostmodaltwo");
    const RepostThree = document.getElementById("repostmodalthree");
    const TickThree = document.getElementById("tick3area");
    RepostThree.classList.add("none");
    RepostTwo.classList.remove("none");
    TickThree.classList.remove("roundcircle");
    TickThree.classList.add("normaltick");
  };
  const openRepostModalThree = () => {
    const RepostTwo = document.getElementById("repostmodaltwo");
    const RepostThree = document.getElementById("repostmodalthree");
    const TickThree = document.getElementById("tick3area");
    RepostTwo.classList.add("none");
    RepostThree.classList.remove("none");
    TickThree.classList.remove("normaltick");
    TickThree.classList.add("roundcircle");
  };

  const openPreviousModalThree = () => {
    const RepostThree = document.getElementById("repostmodalthree");
    const RepostFour = document.getElementById("repostmodalfour");
    const TickFour = document.getElementById("tick4area");
    RepostFour.classList.add("none");
    RepostThree.classList.remove("none");
    TickFour.classList.remove("roundcircle");
    TickFour.classList.add("normaltick");
  };
  const openRepostModalFour = () => {
    const RepostThree = document.getElementById("repostmodalthree");
    const RepostFour = document.getElementById("repostmodalfour");
    const TickFour = document.getElementById("tick4area");
    RepostThree.classList.add("none");
    RepostFour.classList.remove("none");
    TickFour.classList.remove("normaltick");
    TickFour.classList.add("roundcircle");
  };

  const openPreviousModalFour = () => {
    const RepostFive = document.getElementById("repostmodalfive");
    const RepostFour = document.getElementById("repostmodalfour");
    const TickFive = document.getElementById("tick5area");
    RepostFive.classList.add("none");
    RepostFour.classList.remove("none");
    TickFive.classList.remove("roundcircle");
    TickFive.classList.add("normaltick");
  };
  const openRepostModalFive = () => {
    const RepostFive = document.getElementById("repostmodalfive");
    const RepostFour = document.getElementById("repostmodalfour");
    const TickFive = document.getElementById("tick5area");
    RepostFour.classList.add("none");
    RepostFive.classList.remove("none");
    TickFive.classList.remove("normaltick");
    TickFive.classList.add("roundcircle");
  };
  const SkillsBtn = () => {
    const AddSkillsArea = (document.querySelector(
      ".addskillareadiv"
    ).style.display = "block");
    const SkillsBtn = (document.querySelector(".addskillsbtn").style.display =
      "none");
  };

  const OpenSkillsDiv = () => {
    const SelectOptions = document.querySelector(".selectdiv3");
    if (SelectOptions.style.display === "block") {
      SelectOptions.style.display = "none";
    } else {
      SelectOptions.style.display = "block";
    }
  };
  return (
    <>
      <Box component="div" className="dis_flex mt-3 multi-selection">
        <Box component="div" className="autocompdiv dis_flex">
          <Autocomplete
            id="combo-box-demo"
            className="WhiteSelectDropdown me-3"
            options={experience2}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => {
              params.inputProps.className = "noborderinput";
              params.InputProps.className = "noBeforeAfter";
              params.InputProps.placeholder = "Institution";
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
          <Button
            className="redcolor whitecolortext border8 pe-4 ps-4"
            endIcon={<ResetIcon />}
          >
            Reset
          </Button>
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
      <Box component="div" className="dis_flex mt-3 multi-selection">
        <Box component="div" className="dis_flex opacity_half width_full">
          <Box component="div" className="buttondiv dis_flex width_full">
            <Box component="div" className="">
              <Box component="div">
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<CircleUnchecked />}
                      checkedIcon={<CircleCheckedFilled />}
                    />
                  }
                  label="Select All"
                />
              </Box>
            </Box>
            <Button
              startIcon={<InviteIconCand />}
              className="darkbluecolor whitecolortext border8"
              onClick={handleEditJobPostOpen}
            >
              Invite Selected
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className="material-modal"
              open={openInvite}
              onClose={handleCloseInvite}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={openInvite}>
                <div className="modalcontsmall">
                  <InviteIcon />
                  <Typography variant="h6">
                    Are you sure you want to Invite the selected candidate?
                  </Typography>
                  <Box component="div" className="button_confirm_area">
                    <Button
                      className="lightbluecolor border8"
                      onClick={handleCloseInvite}
                    >
                      No
                    </Button>
                    <Button
                      className="darkbluecolor whitecolortext border8"
                      onClick={(e) => {
                        handleCloseInvite();
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
                    Are you sure you want to remove the selected candidate?
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
      </Box>
      {/* Confirmation for posting th job */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="material-modal"
        open={openmodalpostjobInsufficient}
        onClose={handlepostjobCloseInsufficient}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalpostjobInsufficient}>
          <UsingCreditsModalInviteInsufficient />
        </Fade>
      </Modal>

      {/* Specific Job Area Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="material-modal"
        open={openmodalEditJobPost}
        onClose={handleEditJobPostClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalEditJobPost}>
          <Box component="div" className="postjobmodal">
            <Box component="div" className="dis_flex">
              <Typography variant="span" className="fontweight700 font18">
                Specify Job Requirements
              </Typography>
              <Box component="div" className="marginautoright dis_flex">
                <Box component="div" className="ticksdivsaved">
                  <Box component="div" id="tick2">
                    <Box component="div" id="tick2area" className="roundcircle">
                      <WhiteTick />
                    </Box>
                  </Box>
                  <Box component="div" id="tick3">
                    <Box component="div" id="tick3area" className="normaltick">
                      <WhiteTick />
                    </Box>
                  </Box>
                  <Box component="div" id="tick4">
                    <Box component="div" id="tick4area" className="normaltick">
                      <WhiteTick />
                    </Box>
                  </Box>
                  <Box component="div" id="tick5">
                    <Box component="div" id="tick5area" className="normaltick">
                      <WhiteTick />
                    </Box>
                  </Box>
                </Box>
                <Button
                  className="btn-close ms-3"
                  onClick={(e) => {
                    handleEditJobPostClose();
                  }}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <ClosegreyBtn />
                </Button>
              </Box>
            </Box>
            <Box
              component="div"
              id="repostmodaltwo"
              className="postajobmodaldiv pb-1"
            >
              <Box component="div" className="jobcategory mt-3">
                <Typography variant="span" className="label mb-2 block font14">
                  Minimum Work Experience Required
                </Typography>
                <Autocomplete
                  id="combo-box-demo"
                  className="BlueSelectDropdown"
                  options={experience}
                  getOptionLabel={(option) => option.name}
                  classes={{
                    paper: "BlueAutoCompletePaper",
                  }}
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
              <Box component="div" className="mt-3">
                <Typography variant="span" className="label mb-2 block font14">
                  Maximum Salary To Be Offered
                </Typography>
                <Box component="div" className="dis_flex">
                  <TextField
                    fullWidth
                    classes={{ root: "textfieldnormal_w_icon" }}
                    id="standard-normal"
                    placeholder="&#8377;0"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment>
                          <Typography className="paicon fontweight500">
                            lakhs
                          </Typography>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    fullWidth
                    classes={{ root: "textfieldnormal_w_icon" }}
                    id="standard-normal"
                    placeholder="&#8377;0"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment>
                          <Typography className="paicon fontweight500">
                            thousands
                          </Typography>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Box component="div" className="align-center-flex">
                    <Typography className="paicon fontweight500">
                      P.A
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box component="div" className="candidateslooking mt-3">
                <Typography variant="span" className="label block mb-2 font14">
                  Employment Type
                </Typography>
                <Autocomplete
                  id="combo-box-demo"
                  className="BlueSelectDropdown"
                  options={emptype}
                  getOptionLabel={(option) => option.name}
                  classes={{
                    paper: "BlueAutoCompletePaper",
                  }}
                  renderInput={(params) => {
                    params.inputProps.className = "noborderinput";
                    params.InputProps.className = "noBeforeAfter";
                    params.InputProps.placeholder = "Select";
                    return (
                      <TextField
                        inputStyle={{ cursor: "none" }}
                        {...params}
                        onKeyPress={(e) => e.preventDefault()}
                      />
                    );
                  }}
                />
              </Box>
              <Box
                component="div"
                className="dis_flex mt-3"
                justifyContent="space-between"
              >
                <Button
                  className="fullwidth_100percent pt-3 pb-3 border16 darkbluecolor whitecolortext "
                  onClick={(e) => {
                    openRepostModalThree();
                  }}
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  Next
                </Button>
              </Box>
            </Box>
            <Box
              component="div"
              id="repostmodalthree"
              className="postajobmodaldiv pb-1 none"
            >
              <Box component="div" className="vacancies_div mb-4 pb-4">
                <Box
                  component="div"
                  className="candidateslooking opacity_half mt-3"
                >
                  <Typography
                    variant="span"
                    className="label block mb-2 font14"
                  >
                    Country
                  </Typography>
                  <Autocomplete
                    id="combo-box-demo"
                    className="BlueSelectDropdown"
                    options={emptype}
                    disabled
                    getOptionLabel={(option) => option.name}
                    classes={{
                      paper: "BlueAutoCompletePaper",
                    }}
                    renderInput={(params) => {
                      params.inputProps.className = "noborderinput";
                      params.InputProps.className = "noBeforeAfter";
                      params.InputProps.placeholder = "India";
                      return (
                        <TextField
                          inputStyle={{ cursor: "none" }}
                          disabled
                          {...params}
                          onKeyPress={(e) => e.preventDefault()}
                        />
                      );
                    }}
                  />
                </Box>
                <Box component="div" className="candidateslooking mt-3">
                  <Typography
                    variant="span"
                    className="label block mb-2 font14"
                  >
                    City
                  </Typography>
                  <Autocomplete
                    id="combo-box-demo"
                    className="BlueSelectDropdown"
                    options={emptype}
                    getOptionLabel={(option) => option.name}
                    classes={{
                      paper: "BlueAutoCompletePaper",
                    }}
                    renderInput={(params) => {
                      params.inputProps.className = "noborderinput";
                      params.InputProps.className = "noBeforeAfter";
                      params.InputProps.placeholder = "Select";
                      return (
                        <TextField
                          inputStyle={{ cursor: "none" }}
                          {...params}
                          onKeyPress={(e) => e.preventDefault()}
                        />
                      );
                    }}
                  />
                </Box>
              </Box>
              <Box
                component="div"
                className="dis_flex mt-3 prevnextbtndiv"
                justifyContent="space-between"
              >
                <Button
                  className="fullwidth_100percent pt-3 pb-3 border16 darkbluecolor me-3 whitecolortext "
                  onClick={(e) => {
                    openPreviousModalTwo();
                  }}
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  Previous
                </Button>
                <Button
                  className="fullwidth_100percent pt-3 pb-3 border16 darkbluecolor whitecolortext "
                  onClick={(e) => {
                    openRepostModalFour();
                  }}
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  Next
                </Button>
              </Box>
            </Box>
            <Box
              component="div"
              id="repostmodalfour"
              className="postajobmodaldiv pb-1 none"
            >
              <Box component="div" className="skillsrequired_div mb-4 pb-4">
                <Box
                  component="div"
                  className="skillsrequired_header dis_flex mb-2"
                >
                  <Typography variant="h6">Skills Required</Typography>
                </Box>
                <Box
                  component="div"
                  className="skillsrequired_bodyarea dis_flex mb-4"
                >
                  <Box component="div" className="selectedskills">
                    <Typography
                      variant="span"
                      className="me-2 font14 whitecolortext"
                    >
                      Reasoning
                    </Typography>
                    <Button className="close-btn">
                      <CloseBtn />
                    </Button>
                  </Box>
                  <Box component="div" className="selectedskills">
                    <Typography
                      variant="span"
                      className="me-2 font14 whitecolortext"
                    >
                      Aptitude
                    </Typography>
                    <Button className="close-btn">
                      <CloseBtn />
                    </Button>
                  </Box>
                  <Button
                    startIcon={<AddSign />}
                    className="addskillsbtn"
                    onClick={SkillsBtn}
                  >
                    Add Skills
                  </Button>

                  <Box
                    component="div"
                    className="pos-rel addskillareadiv none"
                    onClick={OpenSkillsDiv}
                  >
                    <input type="text" className="addskillsinputtext" />
                    <Box component="div" className="selectdiv3 font14">
                      <Box component="div" className="listcourses">
                        <ul>
                          <li>
                            <Tooltip
                              title="ReasoningReasoningReasoningReasoningReasoning"
                              placement="top-start"
                              className="tooltiplist"
                            >
                              <Button>
                                ReasoningReasoningReasoningReasoningReasoning
                              </Button>
                            </Tooltip>
                          </li>
                          <li>
                            <Button>Reasoning</Button>
                          </li>
                          <li>
                            <Button>Diploma</Button>
                          </li>
                          <li>
                            <Button>Others</Button>
                          </li>
                          <li className="newtemplatesaving">
                            <Button startIcon={<AddPlusIcon />}>
                              New Skills
                            </Button>
                          </li>
                        </ul>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                component="div"
                className="dis_flex mt-4 pt-4 prevnextbtndiv"
                justifyContent="space-between"
              >
                <Button
                  className="fullwidth_100percent pt-3 pb-3 border16 darkbluecolor me-3 whitecolortext "
                  onClick={(e) => {
                    openPreviousModalThree();
                  }}
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  Previous
                </Button>
                <Button
                  className="fullwidth_100percent pt-3 pb-3 border16 darkbluecolor whitecolortext "
                  onClick={(e) => {
                    openRepostModalFive();
                  }}
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  Next
                </Button>
              </Box>
            </Box>
            <Box
              component="div"
              id="repostmodalfive"
              className="postajobmodaldiv pb-1 none"
            >
              <Box
                component="div"
                className="jobdescp_div mb-3 pb-4 opacity_half"
              >
                <Box component="div" className="jobdescp_header dis_flex mb-2">
                  <Typography variant="h6">Job Description</Typography>
                </Box>
                <Box component="div" className="jobdescptextdiv mb-4 pb-4">
                  <Typography variant="span" className="font12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur bibendum malesuada odio. Donec dignissim, ante sed
                    pellentesque varius, est tellus gravida est, ut pretium
                    massa lacus eget libero. Etiam accumsan feugiat placerat.
                    Phasellus varius finibus magna, a iaculis lectus finibus et.
                    Donec rutrum dignissim dui consectetur porttitor. Nulla
                    tincidunt porta quam ut vestibulum. Suspendisse vitae nisl
                    id odio maximus maximus. Praesent id nulla suscipit,
                    condimentum orci fringilla, lacinia nisl. Donec sagittis
                    lorem a augue mattis euismod. Donec malesuada, magna quis
                    sagittis elementum, leo velit suscipit nibh, vel elementum
                    nibh leo eu urna. Donec rutrum orci vitae ante mollis
                    interdum. Donec in tortor quis mauris lobortis lacinia. Cras
                    luctus posuere augue ac tempus. Nulla auctor erat et
                    venenatis faucibus. Phasellus sit amet quam mi. Suspendisse
                    auctor accumsan vulputate. Sed semper malesuada justo quis
                    gravida. In hac habitasse platea dictumst. Nunc et nisl
                    mollis, laoreet tortor vel, hendrerit velit. Donec
                    fringilla, leo id accumsan sodales, nisi urna condimentum
                    libero, eget ultrices justo nunc id urna. Praesent nulla
                    tortor, porttitor vitae sem vel, facilisis ornare felis.
                    Proin viverra orci vel orci viverra fermentum. Etiam
                    vehicula euismod elit quis venenatis. Curabitur convallis,
                    tortor quis porta rutrum, magna erat tincidunt est, ut
                    ultrices nibh velit vel ligula. Cras aliquet vel tellus
                    feugiat lacinia. Nulla ac mollis justo, sed fringilla eros.
                  </Typography>
                </Box>
              </Box>
              <Box
                component="div"
                className="dis_flex prevnextbtn2div"
                justifyContent="space-between"
              >
                <Button
                  className="fullwidth_100percent pt-3 pb-3 border16 darkbluecolor me-3 whitecolortext "
                  onClick={(e) => {
                    openPreviousModalFour();
                  }}
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  Previous
                </Button>
                <Button
                  className="fullwidth_100percent pt-3 pb-3 border16 darkbluecolor whitecolortext "
                  onClick={(e) => {
                    handlepostjobOpenInsufficient();
                    handleEditJobPostClose();
                  }}
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  Send Invite
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default CandidateMultipleSelectionAction;

const experience2 = [
  { name: "Group", id: 1 },
  { name: "Institution", id: 2 },
  { name: "Group", id: 3 },
  { name: "Institution", id: 4 },
];

const experience = [
  { name: "No Experience", id: 1 },
  { name: "3 Years", id: 2 },
  { name: "4 Years", id: 3 },
  { name: "5 Years", id: 4 },
  { name: "6 Years", id: 5 },
  { name: "7 Years", id: 6 },
  { name: "8 Years", id: 7 },
  { name: "9 Years", id: 8 },
];

const emptype = [
  { name: "Full Time", id: 1 },
  { name: "Internship", id: 2 },
  { name: "Part Time", id: 3 },
  { name: "Temporary/Leave Vacancy", id: 4 },
  { name: "Contractual", id: 5 },
  { name: "Ad hoc", id: 6 },
  { name: "Visiting", id: 7 },
];

const AddSign = () => {
  return (
    <svg
      id="fluent:add-circle-20-regular"
      xmlns="http://www.w3.org/2000/svg"
      width="16.023"
      height="16.023"
      viewBox="0 0 16.023 16.023"
    >
      <g id="Group">
        <path
          id="Vector"
          d="M0,8.012a1,1,0,0,1,1-1H7.01V1a1,1,0,1,1,2,0V7.01h6.009a1,1,0,1,1,0,2H9.013v6.009a1,1,0,1,1-2,0V9.013H1a1,1,0,0,1-1-1Z"
          fill="#2a5798"
        />
      </g>
    </svg>
  );
};

const AddPlusIcon = () => {
  return (
    <svg
      id="Group_371"
      data-name="Group 371"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className="me-1"
    >
      <path
        id="Ellipse_67"
        data-name="Ellipse 67"
        d="M10,0A10,10,0,1,1,0,10,10,10,0,0,1,10,0Z"
        fill="#2a5798"
      />
      <g id="octicon:x-24" transform="translate(10 5.214) rotate(45)">
        <path
          id="Vector"
          d="M.114.124a.39.39,0,0,1,.551,0l2.714,2.71L6.093.124a.39.39,0,1,1,.551.55L3.93,3.384l2.714,2.71a.39.39,0,1,1-.551.55L3.379,3.934.665,6.644a.39.39,0,0,1-.551-.55l2.714-2.71L.114.674a.389.389,0,0,1,0-.55Z"
          fill="#fff"
        />
      </g>
    </svg>
  );
};

const CloseBtn = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      viewBox="0 0 10.974 10.974"
    >
      <path
        id="Path_82"
        data-name="Path 82"
        d="M20.974,11.109,19.865,10l-4.378,4.378L11.109,10,10,11.109l4.378,4.378L10,19.865l1.109,1.109L15.487,16.6l4.378,4.378,1.109-1.109L16.6,15.487Z"
        transform="translate(-10 -10)"
        fill="#2A5798"
      />
    </svg>
  );
};

const InfoIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
    >
      <path
        id="_293683_info_icon"
        data-name="293683_info_icon"
        d="M7,0A7,7,0,1,1,0,7,7,7,0,0,1,7,0M8.313,6.563H5.688v4.813H8.313ZM7,2.625A1.313,1.313,0,1,0,8.313,3.938,1.312,1.312,0,0,0,7,2.625"
        fill="#2a5798"
      />
    </svg>
  );
};

const ClosegreyBtn = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <g
        id="Group_371"
        data-name="Group 371"
        transform="translate(-331.639 -94.639)"
      >
        <g id="octicon:x-24" transform="translate(331.639 94.639)">
          <path
            id="Vector"
            d="M.27.293a.923.923,0,0,1,1.3,0L7.988,6.7,14.4.293a.921.921,0,1,1,1.3,1.3L9.291,8l6.416,6.406a.921.921,0,1,1-1.3,1.3L7.988,9.3,1.572,15.707a.921.921,0,0,1-1.3-1.3L6.685,8,.27,1.594a.919.919,0,0,1,0-1.3Z"
            transform="translate(0 0)"
            fill="#1c1b1b"
          />
        </g>
      </g>
    </svg>
  );
};

const EditIconSml = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 33 33"
    >
      <g
        id="Group_6725"
        data-name="Group 6725"
        transform="translate(-183 -389)"
      >
        <g
          id="Rectangle_480"
          data-name="Rectangle 480"
          transform="translate(183 389)"
          fill="#fff"
          stroke="#707070"
          stroke-width="1"
          opacity="0"
        >
          <rect width="33" height="33" stroke="none" />
          <rect x="0.5" y="0.5" width="32" height="32" fill="none" />
        </g>
        <g id="fluent:edit-20-regular" transform="translate(190.014 396.015)">
          <g id="Group" transform="translate(0 0)">
            <path
              id="Vector"
              d="M13.148.951A3.254,3.254,0,0,1,17.9,5.389l-.152.164L6.519,16.784a2.34,2.34,0,0,1-.845.54l-.193.062L.74,18.679A.585.585,0,0,1,0,18.053l.019-.094,1.293-4.74a2.317,2.317,0,0,1,.465-.889l.137-.15L13.148.951Zm-1.005,2.66-9.4,9.4a1.169,1.169,0,0,0-.251.375l-.049.144L1.418,17.281l3.755-1.023a1.169,1.169,0,0,0,.279-.117l.125-.084.115-.1,9.4-9.4L12.143,3.611Zm4.781-1.833a2.085,2.085,0,0,0-2.808-.129l-.14.129L12.969,2.783l2.946,2.949,1.008-1.005a2.085,2.085,0,0,0,.129-2.808l-.129-.14Z"
              transform="translate(0 0)"
              fill="#1c1b1b"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

const WhiteTick = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18.131"
      height="12.935"
      viewBox="0 0 18.131 12.935"
    >
      <path
        id="_2561355_check_icon"
        data-name="2561355_check_icon"
        d="M19.3,6,8.782,16.521,4,11.738"
        transform="translate(-2.586 -4.586)"
        fill="none"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
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

const ResetIcon = () => {
  return (
    <svg
      className="reset_icon"
      xmlns="http://www.w3.org/2000/svg"
      width="16.905"
      height="19.89"
      viewBox="0 0 16.905 19.89"
    >
      <defs></defs>
      <path
        class="a"
        d="M428.76,678.33c.6-.349,1.147-.672,1.7-.99a1.066,1.066,0,0,0,.538-.669,1.011,1.011,0,0,0-.361-1.109.991.991,0,0,0-1.174-.095c-.6.332-1.184.682-1.774,1.025q-1.2.7-2.4,1.395a.731.731,0,0,0-.308,1.131q1.208,2.11,2.421,4.217a1.055,1.055,0,0,0,1.943-.231,1.059,1.059,0,0,0-.124-.851c-.332-.573-.659-1.15-1-1.755a6.377,6.377,0,1,1-7.373,7.427,6.226,6.226,0,0,1,1.072-4.835,1.563,1.563,0,0,0,.364-.768,1.06,1.06,0,0,0-.675-1.083,1.034,1.034,0,0,0-1.219.356,8.16,8.16,0,0,0-1.232,2.237,8.46,8.46,0,1,0,10-5.289C429.038,678.412,428.926,678.378,428.76,678.33Z"
        transform="translate(-418.626 -675.319)"
      />
    </svg>
  );
};

const InviteIcon = () => {
  return (
    <svg
      className="inviteicon"
      xmlns="http://www.w3.org/2000/svg"
      width="31.398"
      height="31.355"
      viewBox="0 0 31.398 31.355"
    >
      <defs>
        <style></style>
      </defs>
      <g transform="translate(0 0)">
        <g transform="translate(0 0)">
          <path
            class="a"
            d="M13.556,20.584H.145C-.008,20.467.006,20.3,0,20.136,0,19.463,0,18.79,0,18.117V11.633a3.85,3.85,0,0,1,.024-.612.351.351,0,0,1,.19-.262A13.049,13.049,0,0,0,2.265,9.331c2.64-1.957,5.262-3.937,7.907-5.888.459-.328.9-.689,1.356-1.022C12.6,1.632,13.641.808,14.739.057A.357.357,0,0,1,14.846,0a1.232,1.232,0,0,1,.978.984V18.376a2.5,2.5,0,0,1-1.28,1.948A3.211,3.211,0,0,1,13.556,20.584Z"
            transform="translate(15.574 10.771)"
          />
          <path
            class="a"
            d="M15.72,10.863v9.677H2.247a3.389,3.389,0,0,1-1.088-.367,2.666,2.666,0,0,1-1.151-2.36c.011-4.487,0-8.974,0-13.463,0-1,.03-2-.01-3A1.325,1.325,0,0,1,.838,0a.733.733,0,0,1,.529.18c1.2.857,2.355,1.761,3.541,2.635a7.522,7.522,0,0,0,.778.578c2.47,1.85,4.949,3.687,7.418,5.539.652.489,1.308.973,1.96,1.461a3.646,3.646,0,0,0,.558.315.3.3,0,0,1,.1.151Z"
            transform="translate(0 10.814)"
          />
          <path
            class="b"
            d="M.162,0H9.285a.889.889,0,0,1,.977,1q.007,3.215.007,6.43a.971.971,0,0,1,.138.553v5.766a.97.97,0,0,1-.134.554L5.965,17.528Q3.5,19.373,1.037,21.211a2.178,2.178,0,0,1-.876.468l-.133-.054C0,19.453.017,17.281.02,15.11a.659.659,0,0,1,.041-.269c.047-.176.214-.207.348-.266a.768.768,0,0,0,.517-.723A.771.771,0,0,0,.4,13.1c-.125-.054-.279-.084-.332-.244a4.624,4.624,0,0,1,.039-1.785.739.739,0,0,1,.578-.13c1.538,0,3.076,0,4.614,0a2.526,2.526,0,0,0,.488-.023.76.76,0,0,0,.006-1.5A2.426,2.426,0,0,0,5.3,9.4H.691A.766.766,0,0,1,.11,9.269a.514.514,0,0,1-.087-.318A5.309,5.309,0,0,1,.1,7.414c.16-.173.374-.139.573-.139,1.531-.005,3.062,0,4.593,0a3.552,3.552,0,0,0,.459-.013.763.763,0,0,0,.01-1.521,3.306,3.306,0,0,0-.459-.015H.682A.735.735,0,0,1,.1,5.6a.772.772,0,0,1-.09-.442Q.006,2.822.014.489C.019.305,0,.123.162,0Z"
            transform="translate(15.559 0.002)"
          />
          <path
            class="c"
            d="M0,6.874V0L4.616,3.426.987,6.155C.658,6.4.328,6.635,0,6.874Z"
            transform="translate(25.832 7.428)"
          />
          <path
            class="b"
            d="M10.249,14.76v6.491c0,.135.048.3-.13.372a.759.759,0,0,1-.493-.217Q4.915,17.9.205,14.379a.689.689,0,0,1-.066-.064A.97.97,0,0,1,0,13.761V7.983a.978.978,0,0,1,.138-.555q0-3.139.007-6.277C.147.323.465,0,1.284,0h8.969V5.568l-.028.048a.745.745,0,0,1-.528.095c-1.539,0-3.077,0-4.616,0a2.313,2.313,0,0,0-.459.023.761.761,0,0,0,0,1.5,2.313,2.313,0,0,0,.459.023H9.7a.745.745,0,0,1,.528.095l.028.048V9.24l-.028.048a.745.745,0,0,1-.528.095c-1.539,0-3.077,0-4.616,0a2.313,2.313,0,0,0-.459.023.761.761,0,0,0,0,1.5,2.313,2.313,0,0,0,.459.023H9.7a.745.745,0,0,1,.528.095l.028.048v1.837l-.028.048a.75.75,0,0,1-.529.095c-1.531,0-3.062,0-4.593,0a2.417,2.417,0,0,0-.459.021.76.76,0,0,0,0,1.5A2.418,2.418,0,0,0,5.1,14.6H9.7a.747.747,0,0,1,.529.095Z"
            transform="translate(5.469 0)"
          />
          <path
            class="c"
            d="M4.637,0V6.89L.223,3.61,0,3.449,3.452.864C3.843.572,4.241.288,4.637,0Z"
            transform="translate(0.971 7.429)"
          />
          <path
            class="a"
            d="M.15,0H5.625a.886.886,0,0,1,.864.521.879.879,0,0,1-.115.979.953.953,0,0,1-.812.341q-2.707-.005-5.413,0v0a.355.355,0,0,1-.137-.292Q-.012.921.012.3A.355.355,0,0,1,.149.005Z"
            transform="translate(15.568 5.571)"
          />
          <path
            class="a"
            d="M.15,0H5.625a.886.886,0,0,1,.864.521.879.879,0,0,1-.115.979.953.953,0,0,1-.812.341q-2.707-.005-5.413,0v0a.355.355,0,0,1-.137-.292Q-.012.921.012.3A.355.355,0,0,1,.149.005Z"
            transform="translate(15.568 9.245)"
          />
          <path
            class="a"
            d="M.149,0a.909.909,0,0,1,.919.935.906.906,0,0,1-.919.9v0a.354.354,0,0,1-.137-.292Q-.012.92.012.3A.354.354,0,0,1,.149,0Z"
            transform="translate(15.57 12.92)"
          />
          <path
            class="a"
            d="M6.431,0V1.835H.988A.908.908,0,0,1,0,.9.908.908,0,0,1,.988,0Q3.709,0,6.431,0Z"
            transform="translate(9.29 5.572)"
          />
          <path
            class="a"
            d="M6.431,0V1.835H.988A.908.908,0,0,1,0,.9.908.908,0,0,1,.988,0Q3.709,0,6.431,0Z"
            transform="translate(9.29 9.246)"
          />
          <path
            class="a"
            d="M6.431,0v1.83H.991A.92.92,0,1,1,.991,0Q3.711,0,6.431,0Z"
            transform="translate(9.29 12.921)"
          />
        </g>
      </g>
    </svg>
  );
};

const InviteIconCand = () => {
  return (
    <svg
      className="inviteiconcand"
      xmlns="http://www.w3.org/2000/svg"
      width="19.747"
      height="20.767"
      viewBox="0 0 19.747 20.767"
    >
      <defs></defs>
      <g transform="translate(-389.188 -381.759)">
        <path
          class="a"
          d="M407.584,524.973H390.548a1.7,1.7,0,0,1-1.359-1.891c.026-3.353.01-6.706.01-10.059v-.263c.093.065.148.1.2.141q4,2.988,8.014,5.971a3.19,3.19,0,0,0,.966.489,2.544,2.544,0,0,0,2.347-.477q3.992-2.989,7.989-5.971c.061-.046.125-.089.217-.154v2.272q0,4.117,0,8.233a1.7,1.7,0,0,1-.423,1.21A1.822,1.822,0,0,1,407.584,524.973Z"
          transform="translate(0 -122.448)"
        />
        <path
          class="a"
          d="M434.106,412.057h13.83v.224q0,3.538,0,7.076a.364.364,0,0,1-.168.332q-2.824,2.1-5.641,4.2a1.634,1.634,0,0,1-2.173,0q-2.854-2.123-5.708-4.246a.313.313,0,0,1-.156-.278q.008-3.569,0-7.137C434.1,412.175,434.1,412.122,434.106,412.057Zm6.954,6.78c-1.06,0-2.121,0-3.181,0a.57.57,0,0,0-.469.192.469.469,0,0,0-.085.529.561.561,0,0,0,.557.33q3.161,0,6.322,0a.725.725,0,0,0,.293-.06.507.507,0,0,0,.292-.566.534.534,0,0,0-.548-.418Q442.65,418.835,441.06,418.837Zm-1.868-1.572c.459,0,.918,0,1.378,0a.52.52,0,1,0,.01-1.036q-1.368-.008-2.735,0a.52.52,0,1,0,.01,1.036C438.3,417.268,438.746,417.265,439.192,417.265Z"
          transform="translate(-41.973 -28.32)"
        />
        <path
          class="a"
          d="M662.278,478.118v-2.572l1.635,1.359Z"
          transform="translate(-255.259 -87.664)"
        />
        <path
          class="a"
          d="M519.319,382.677H516.07a2.231,2.231,0,0,1,1.6-.918C518.375,381.763,518.808,382.241,519.319,382.677Z"
          transform="translate(-118.597 0)"
        />
        <path
          class="a"
          d="M393.7,477.6l1.581-1.311v2.485Z"
          transform="translate(-4.218 -88.357)"
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
  { name: "Profile Relevance", id: 1 },
  { name: "Relevant Experience", id: 2 },
  { name: "Min. Expected Salary", id: 3 },
  { name: "Notice Period", id: 4 },
  { name: "Number of Skills Matched", id: 5 },
];
