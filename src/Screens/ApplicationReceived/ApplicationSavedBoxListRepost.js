import React from "react";
import "./ApplicationReceived.scss";
import {
  Typography,
  Box,
  Button,
  List,
  ListItem,
  Modal,
  Fade,
  Backdrop,
  Checkbox,
  TextField,
  Tooltip,
  Radio,
  InputAdornment,
  Grid,
  FormControlLabel,
  Link,
} from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Autocomplete from "@material-ui/lab/Autocomplete";
import RepostJobPost from "./RepostJobPost/RepostJobPost";
import StackImages from "../../images/stackimage.png";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import PreviewJobPost from "../PreviewJobPost/PreviewJobPost";
require("dotenv").config();
const BASE_URL = process.env.REACT_APP_BASE_URL;

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

function ApplicationSavedBoxListRepost() {
  const [selectedValueLooking1, setSelectedValueLooking1] = React.useState("a");

  const handleChangeLooking1 = (event) => {
    setSelectedValueLooking1(event.target.value);
  };

  const [openmodalRepostjobPost, setOpenModalRepostjobPost] =
    React.useState(false);

  const handleRepostjobPostOpen = () => {
    setOpenModalRepostjobPost(true);
  };

  const handleRepostjobPostClose = () => {
    setOpenModalRepostjobPost(false);
  };

  const [openmodalEditJobPost, setOpenModalEditJobPost] = React.useState(false);

  const handleEditJobPostOpen = () => {
    setOpenModalEditJobPost(true);
  };

  const handleEditJobPostClose = () => {
    setOpenModalEditJobPost(false);
  };

  const [openmodalAddLocation, setOpenModalAddLocation] = React.useState(false);

  const handleAddLocationOpen = () => {
    setOpenModalAddLocation(true);
  };

  const handleAddLocationClose = () => {
    setOpenModalAddLocation(false);
  };

  const [openmodalEditLocation, setOpenModalEditLocation] =
    React.useState(false);

  const handleEditLocationOpen = () => {
    setOpenModalEditLocation(true);
  };

  const handleEditLocationClose = () => {
    setOpenModalEditLocation(false);
  };

  const [openmodalJobDescp, setOpenModalJobDescp] = React.useState(false);

  const handleJobDescpOpen = () => {
    setOpenModalJobDescp(true);
  };

  const handleJobDescpClose = () => {
    setOpenModalJobDescp(false);
  };

  const [openmodalJobDescpEdit, setOpenModalJobDescpEdit] =
    React.useState(false);

  const handleJobDescpEditOpen = () => {
    setOpenModalJobDescpEdit(true);
  };

  const handleJobDescpEditClose = () => {
    setOpenModalJobDescpEdit(false);
  };

  const [openmodalposting, setOpenModalposting] = React.useState(false);

  const handlepostingOpen = () => {
    setOpenModalposting(true);
  };

  const handlepostingClose = () => {
    setOpenModalposting(false);
  };

  const [openmodalrepostjob, setOpenModalrepostjob] = React.useState(false);

  const handlerepostjobOpen = () => {
    setOpenModalrepostjob(true);
  };

  const handlerepostjobClose = () => {
    setOpenModalrepostjob(false);
  };

  const [openmodalTemplateSave, setOpenModalTemplateSave] =
    React.useState(false);

  const handleTemplateSaveOpen = () => {
    setOpenModalTemplateSave(true);
  };

  const handleTemplateSaveClose = () => {
    setOpenModalTemplateSave(false);
  };

  const [openmodalTemplateSave2, setOpenModalTemplateSave2] =
    React.useState(false);

  const handleTemplateSave2Open = () => {
    setOpenModalTemplateSave2(true);
  };

  const handleTemplateSave2Close = () => {
    setOpenModalTemplateSave2(false);
  };

  const [openmodalsuccess, setOpenModalsuccess] = React.useState(false);

  const handleSuccessOpen = () => {
    setOpenModalsuccess(true);
  };

  const handleSuccessClose = () => {
    setOpenModalsuccess(false);
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

  const OpenSelectDiv = () => {
    const SelectOptions = document.querySelector(".selectdiv2");
    const FakeInput = document.querySelector(".arrowinputarea");
    if (SelectOptions.style.display === "block") {
      SelectOptions.style.display = "none";
      FakeInput.style.transform = "translateY(-50%) rotate(-180deg)";
    } else {
      SelectOptions.style.display = "block";
      FakeInput.style.transform = "translateY(-50%) rotate(0deg)";
    }
  };
  const [openmodalOverwrite, setOpenModalOverwrite] = React.useState(false);

  const handleOverwriteOpen = () => {
    setOpenModalOverwrite(true);
  };

  const handleOverwriteClose = () => {
    setOpenModalOverwrite(false);
  };

  const OpenTemplateDiv = () => {
    const SelectOptions = document.querySelector(".templatesavingoptions");
    const FakeInputTemmplate = document.querySelector(".arrowinputarea");
    if (SelectOptions.style.display === "block") {
      SelectOptions.style.display = "none";
      FakeInputTemmplate.style.transform = "translateY(-50%) rotate(-180deg)";
    } else {
      SelectOptions.style.display = "block";
      FakeInputTemmplate.style.transform = "translateY(-50%) rotate(0deg)";
    }
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
    <Box
      component="div"
      className="listdiv whitebg_shadow_border16 pt-4 pb-4 pe-4 ps-4 mb-2"
    >
      <Box component="div" className="headtitle">
        <Typography variant="span" className="title font16 darkcolortext block">
          Primary and Upper Primary School Math and Chemistry Teacher
        </Typography>
      </Box>
      <Typography
        variant="span"
        className="subtitle font14 blackcolortext mt-2 block"
      >
        Santhidam Bedania Nursery School
      </Typography>
      <Typography
        variant="span"
        className="jdtitle font12 blackcolortext mt-2 block"
      >
        JID986742130
      </Typography>
      <List className="commonul">
        <ListItem>
          <ListItemIcon>
            <SalaryIcon />
          </ListItemIcon>
          <ListItemText className="bolddiv">6.5 LPA Max</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <YearsIcon />
          </ListItemIcon>
          <ListItemText>3 Years Min</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LocationIcon />
          </ListItemIcon>
          <ListItemText>Kolkata</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <BagIcon />
          </ListItemIcon>
          <ListItemText>Full Time / Permanent</ListItemText>
        </ListItem>
      </List>
      <Box component="div" className="dis_flex candsuggdiv">
        <Box component="div" className="imagestack me-2">
          <img src={BASE_URL + StackImages} alt="" />
        </Box>
        <Typography
          variant="span"
          className="candititle mt-2 mb-3 darkcolortext"
        >
          20 Applicants
        </Typography>
      </Box>
      <Box component="div" className="dis_flex bottomstatus">
        <Box component="div" className="dis_flex jobcontdiv">
          <Box component="div" className="">
            <Typography
              variant="span"
              className="heading font14 fontweight700 redcolortext block mb-2"
            >
              Job Expired On
            </Typography>
            <Typography
              variant="span"
              className="subheading font14 blackcolortext block"
            >
              25th, June 2021
            </Typography>
          </Box>
          <Box component="div" className="marginautoright">
            <Typography
              variant="span"
              className="heading font14 fontweight700 blackcolortext block mb-2"
            >
              Visible Till
            </Typography>
            <Typography
              variant="span"
              className="subheading blackcolortext font14 block text-center"
            >
              25th, June 2021
            </Typography>
          </Box>
        </Box>
        <Box component="div" className="marginautoright statusdiv dis_flex">
          <Box component="div" className="marginautoright">
            <Button
              component="div"
              className="repostbtn dis_flex"
              onClick={handleRepostjobPostOpen}
            >
              <Box component="div" className="statusbox">
                <Typography variant="span">Repost</Typography>
              </Box>
            </Button>
          </Box>
          <LightTooltip
            className="infoarea"
            arrow="true"
            title="Click on Repost to Post a Job with content similar to that of this Job Post"
            placement="top-end"
          >
            <Button className="infodiv2" startIcon={<InfoIcon />}></Button>
          </LightTooltip>
        </Box>
      </Box>
      {/* Repost the Job Post Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="material-modal"
        open={openmodalRepostjobPost}
        onClose={handleRepostjobPostClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalRepostjobPost}>
          <Box component="div" className="modalcontsmall px-20 text-center">
            <RepostIcon />
            <Box component="div" className="maincontjobpost">
              <Typography
                variant="span"
                className="font16 block text-center line-height-1-5 mt-3 mb-2"
              >
                Are you sure you want
                <br /> to Repost this Job Post?
              </Typography>
              <Box component="div" className="buttonareadiv dis_flex">
                <Button
                  className="border8 lightbluecolor blackcolortext me-3"
                  onClick={(e) => {
                    handleRepostjobPostClose();
                  }}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  No
                </Button>
                <Button
                  className="border8 darkbluecolor whitecolortext"
                  onClick={(e) => {
                    handleRepostjobPostClose();
                    handleEditJobPostOpen();
                  }}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  Yes
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Respot Job Ppost Modal */}
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
                Repost A Job
              </Typography>
              <Box component="div" className="marginautoright dis_flex">
                <Box component="div" className="ticksdiv">
                  <Box component="div" id="tick1">
                    <Box component="div" className="roundcircle">
                      <WhiteTick />
                    </Box>
                  </Box>
                  <Box component="div" id="tick2">
                    <Box component="div" id="tick2area" className="normaltick">
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
              id="repostmodalone"
              className="postajobmodaldiv pb-1"
            >
              <Box component="div" className="hiringfordiv">
                <Box component="div" className="dis_flex align-items-center">
                  <Typography
                    variant="span"
                    className="label mb-2 block font14"
                  >
                    Hiring for
                  </Typography>
                  <LightTooltip
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing."
                    placement="right-start"
                    className="infodiv2"
                  >
                    <Button>
                      <InfoIcon />
                    </Button>
                  </LightTooltip>
                </Box>
                <Autocomplete
                  id="combo-box-demo"
                  className="BlueSelectDropdown"
                  options={coaching}
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
              <Box component="div" className="radioinputarea">
                <Box component="div">
                  <Radio
                    checked={selectedValueLooking1 === "d"}
                    onChange={handleChangeLooking1}
                    value="d"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ "aria-label": "D" }}
                  />
                  <Typography variant="span" className="font14 mt-1 me-2">
                    Looking for People within my Domain
                  </Typography>
                </Box>
                <Box component="div">
                  <Radio
                    checked={selectedValueLooking1 === "e"}
                    onChange={handleChangeLooking1}
                    value="e"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ "aria-label": "E" }}
                  />
                  <Typography variant="span" className="font14 mt-1 me-2">
                    Looking at Entire Database
                  </Typography>
                </Box>
                <Box component="div" className="marginautoright infoicon">
                  <LightTooltip
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing."
                    placement="top-end"
                    className="infodiv"
                  >
                    <Button>
                      <InfoIcon />
                    </Button>
                  </LightTooltip>
                </Box>
              </Box>
              <Box component="div" className="jobcategory mt-3">
                <Typography variant="span" className="label mb-2 block font14">
                  Job Category
                </Typography>
                <Autocomplete
                  id="combo-box-demo"
                  className="BlueSelectDropdown"
                  options={JobCat}
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
              <Box component="div" className="candidateslooking mt-3">
                <Typography variant="span" className="label mb-2 block font14">
                  Candidates Looking to Work in
                </Typography>
                <Autocomplete
                  id="combo-box-demo"
                  className="BlueSelectDropdown"
                  options={coaching}
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
              <Box component="div" className="boarddiv mt-3">
                <Typography variant="span" className="label mb-2 block font14">
                  Board
                </Typography>
                <Autocomplete
                  id="combo-box-demo"
                  className="BlueSelectDropdown"
                  options={Board}
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
              <Box component="div" className="level mt-3">
                <Typography variant="span" className="label mb-2 block font14">
                  Level
                </Typography>
                <Autocomplete
                  id="combo-box-demo"
                  className="BlueSelectDropdown"
                  options={Level}
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
              <Box component="div" className="subject mt-3">
                <Typography variant="span" className="label mb-2 block font14">
                  Subject
                </Typography>
                <Autocomplete
                  id="combo-box-demo"
                  className="BlueSelectDropdown"
                  options={Subject}
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
              <Box component="div" className="role mt-3 none">
                <Typography variant="span" className="label mb-2 block font14">
                  Role
                </Typography>
                <Autocomplete
                  id="combo-box-demo"
                  className="BlueSelectDropdown"
                  options={coaching}
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
              <Box component="div" className="edtechdiv mt-3 none">
                <Typography variant="span" className="label mb-2 block font14">
                  Types of EdTech Company
                </Typography>
                <Autocomplete
                  id="combo-box-demo"
                  className="BlueSelectDropdown"
                  options={coaching}
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
              <Box component="div" className="edtechdiv mt-3 none">
                <Typography variant="span" className="label mb-2 block font14">
                  Type of coaching institute
                </Typography>
                <Autocomplete
                  id="combo-box-demo"
                  className="BlueSelectDropdown"
                  options={coaching}
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
              <Box component="div" className="checkboxarea mt-3">
                <Typography variant="span" className="label mb-2 block font14">
                  Suggested Job Title
                </Typography>
                <TextField
                  fullWidth
                  classes={{ root: "textfieldnormal_grey" }}
                  id="standard-normal"
                  value="Primary and Upper Primary School Math and Chemistry Teacher"
                  disabled
                />
                <input
                  type="checkbox"
                  className="customcheckbox top-1"
                  id="customjoobtitle"
                />
                <label for="customjoobtitle" className="font14 text-center">
                  I want a custom job title
                </label>
                <TextField
                  fullWidth
                  className="mt-3 none"
                  classes={{ root: "textfieldnormal" }}
                  id="standard-normal"
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
                    openrepostmodal2();
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
              id="repostmodaltwo"
              className="postajobmodaldiv pb-1 none"
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
                        disabled
                        inputStyle={{ cursor: "none" }}
                        {...params}
                        onKeyPress={(e) => e.preventDefault()}
                      />
                    );
                  }}
                />
              </Box>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                spacing={2}
              >
                <Grid item lg={12} md={12} xs={12}>
                  <Typography
                    variant="span"
                    className="label block mt-3 mb-2 font14"
                  >
                    Maximum Notice Period
                  </Typography>
                  <Autocomplete
                    id="combo-box-demo"
                    className="BlueSelectDropdown"
                    options={noticeperiod}
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
                </Grid>
                <Grid item lg={12} md={12} xs={12}>
                  <Typography
                    variant="span"
                    className="label block mb-2 font14"
                  >
                    Minimum Education Required
                  </Typography>
                  <Autocomplete
                    id="combo-box-demo"
                    className="BlueSelectDropdown"
                    options={education}
                    getOptionLabel={(option) => option.name}
                    classes={{
                      paper: "BlueAutoCompletePaper",
                      option: "BlueOptions",
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
                </Grid>
              </Grid>
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
                <Box component="div" className="vacancies_header dis_flex mb-2">
                  <Typography variant="h6" className="me-4">
                    Vacancies
                  </Typography>
                  <Box component="div" className="dis_flex align-items-center">
                    <HandSign />
                    <Typography variant="span" className="font14">
                      You will be using 1 credit for this job post
                    </Typography>
                  </Box>
                </Box>
                <Box
                  component="div"
                  className="vacancies_bodyarea dis_flex mb-4"
                >
                  <Box component="div" className="vacancieslist dis_flex">
                    <Box component="div" className="numdiv">
                      <Typography variant="span">1</Typography>
                    </Box>
                    <Box component="div" className="placediv">
                      <Typography variant="span">
                        Vacancy In
                        <br />
                        Kolkata, India
                      </Typography>
                    </Box>
                    <Box component="div" className="editarea marginautoright">
                      <Button
                        startIcon={<EditIconSml />}
                        onClick={(e) => {
                          handleEditLocationOpen();
                          handleEditJobPostClose();
                        }}
                      ></Button>
                      <Button startIcon={<RemoveRedIconSml />}></Button>
                    </Box>
                  </Box>
                  <Box component="div" className="addlocations dis_flex">
                    <Button
                      startIcon={<AddSign />}
                      onClick={(e) => {
                        handleAddLocationOpen();
                        handleEditJobPostClose();
                      }}
                    >
                      Add Locations
                    </Button>
                  </Box>
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
              <Box component="div" className="skillsrequired_div pb-4">
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
              <Box component="div" className="jobdescp_div mb-3">
                <Box component="div" className="jobdescp_header dis_flex mb-2">
                  <Typography variant="h6">Job Description</Typography>
                  <Button
                    className="marginautoright font12 editbtn"
                    onClick={handleJobDescpEditOpen}
                    startIcon={<EditBlue />}
                  >
                    Edit
                  </Button>
                </Box>
                <Box component="div" className="jobdesp_bodyarea dis_flex none">
                  <Button
                    className="adddescpbtn"
                    startIcon={<AddSign />}
                    onClick={handleJobDescpOpen}
                  >
                    Add Description
                  </Button>
                </Box>
                <Box component="div" className="jobdescptextdiv">
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
                <Box component="div" className="totalcredits mt-4 pt-4">
                  <Box component="div" className="dis_flex mt-4">
                    <Box
                      component="div"
                      className="marginautoright dis_flex align-items-center"
                    >
                      <HandSign />
                      <Typography variant="span" className="font14">
                        Total Credits Remaining: 5 | Total Credits that will be
                        used: 1
                      </Typography>
                    </Box>
                  </Box>
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
                  className="fullwidth_100percent pt-3 pb-3 border16 darkcolortext lightbluecolorbtn me-3"
                  onClick={(e) => {
                    handlepostingOpen();
                  }}
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  Preview Job Post
                </Button>
                <Button
                  className="fullwidth_100percent pt-3 pb-3 border16 darkbluecolor whitecolortext "
                  onClick={(e) => {
                    handlerepostjobOpen();
                    handleEditJobPostClose();
                  }}
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  Repost
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Preview Job Post */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal jobdescriptionmodal"
        open={openmodalposting}
        onClose={handlepostingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalposting}>
          <PreviewJobPost />
        </Fade>
      </Modal>
      {/* Using Credits Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="material-modal"
        open={openmodalrepostjob}
        onClose={handlerepostjobClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalrepostjob}>
          <Box component="div" className="modalcontmid2 text-center">
            <PostJobIcon />
            <Typography
              variant="span"
              id="transition-modal-description"
              className="mb-2 mt-3 font22 fontweight700 text-center block"
            >
              Are you sure you want to Repost the Job?
            </Typography>
            <Box component="div" className="maincontjobpost">
              <Typography
                variant="span"
                className="font14 block text-center mt-3 mb-3"
              >
                You will be using&nbsp;
                <Typography variant="span" className="fontweight700 font16">
                  80
                </Typography>{" "}
                credits for this job post
              </Typography>
              <Typography
                variant="span"
                className="font16 block mb-2 fontweight500"
              >
                Available Credits : 100.
              </Typography>
              <Typography
                variant="span"
                className="mb-2 font16 block fontweight500"
              >
                To Be Used :{" "}
                <Typography
                  variant="span"
                  className="fontweight700 me-1 ms-1 font16"
                >
                  80
                </Typography>
                .
              </Typography>
              <Typography variant="span" className="font14 italic block mb-3">
                (8 Candidates * 10 Credits each)
              </Typography>
              <Box component="div" className="termsdiv mb-3">
                <input
                  type="checkbox"
                  className="customcheckbox top-1"
                  id="termscondcheckbox"
                />
                <label for="termscondcheckbox" className="font14 text-center">
                  I agree to the <Link>Terms and Conditions</Link>
                </label>
              </Box>
              <Box
                component="div"
                className="dis_flex buttonareadiv"
                justifyContent="space-between"
              >
                <Button
                  className="border8 me-3 lightbluecolor"
                  onClick={(e) => {
                    handlerepostjobClose();
                  }}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  No
                </Button>
                <Button
                  className="border8 darkbluecolor whitecolortext"
                  onClick={(e) => {
                    handlerepostjobClose();
                    handleSuccessOpen();
                  }}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  Yes
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Add Location Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="material-modal"
        open={openmodalAddLocation}
        onClose={handleAddLocationClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalAddLocation}>
          <Box component="div" className="modalwithheadborder">
            <Box component="div" className="modal-head">
              <Box component="div" className="dis_flex align-items-center">
                <Button
                  className="buttonnohover"
                  onClick={(e) => {
                    handleEditJobPostOpen();
                    handleAddLocationClose();
                  }}
                  startIcon={<BackIcon />}
                ></Button>
                <Typography variant="span" className="font16">
                  Add Location
                </Typography>
                <Button
                  className="marginautoright btn-close"
                  onClick={(e) => {
                    handleAddLocationClose();
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
            <Box component="div" className="px-20 py-20 modal-body">
              <Box component="div" className="opacity_half">
                <label className="font12 mb-2 block">Country</label>
                <input
                  type="text"
                  placeholder="Enter Country"
                  defaultValue="India"
                  disabled
                  className="blueinputarea fullwidth_100percent"
                />
              </Box>
              <Box component="div" className="pos-rel">
                <label className="font12 mb-2 block">City</label>
                <Box
                  component="div"
                  className="fakeinputarea"
                  onClick={OpenSelectDiv}
                >
                  <FakeInputArrow />
                </Box>
                <Box component="div" className="selectdiv2 font14">
                  <Box component="div" className="inputselectsearch dis_flex">
                    <SrchIcon />
                    <input type="text" placeholder="Search" />
                  </Box>
                  <Box component="div" className="listcourses">
                    <ul>
                      <li>
                        <span>Kolkata</span>
                      </li>
                      <li>
                        <span>Mumbai</span>
                      </li>
                      <li>
                        <span>Delhi</span>
                      </li>
                      <li>
                        <span>Chennai</span>
                      </li>
                    </ul>
                  </Box>
                </Box>
              </Box>
              <Box component="div">
                <label className="font12 mb-2 mt-3 block">
                  No. Of Vacancies Available
                </label>
                <input
                  type="text"
                  placeholder="Enter No. Of Vacancies"
                  className="blueinputarea fullwidth_100percent"
                />
              </Box>
              <Box
                component="div"
                className="dis_flex"
                justifyContent="space-between"
              >
                <Button
                  className="fullwidth_100percent border16 darkbluecolor whitecolortext"
                  onClick={(e) => {
                    handleAddLocationClose();
                  }}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Edit Location Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="material-modal"
        open={openmodalEditLocation}
        onClose={handleEditLocationClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalEditLocation}>
          <Box component="div" className="modalwithheadborder">
            <Box component="div" className="modal-head">
              <Box component="div" className="dis_flex align-items-center">
                <Button
                  className="buttonnohover"
                  onClick={(e) => {
                    handleEditJobPostOpen();
                    handleEditLocationClose();
                  }}
                  startIcon={<BackIcon />}
                ></Button>
                <Typography variant="span" className="font16">
                  Edit Location
                </Typography>
                <Button
                  className="marginautoright btn-close"
                  onClick={(e) => {
                    handleEditLocationClose();
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
            <Box component="div" className="px-20 py-20 modal-body">
              <Box component="div" className="opacity_half">
                <label className="font12 mb-2 block">Country</label>
                <input
                  type="text"
                  placeholder="Enter Country"
                  defaultValue="India"
                  disabled
                  className="blueinputarea fullwidth_100percent"
                />
              </Box>
              <Box component="div" className="pos-rel">
                <label className="font12 mb-2 block">City</label>
                <Box
                  component="div"
                  className="fakeinputarea"
                  onClick={OpenSelectDiv}
                >
                  <Typography variant="span" className="font14">
                    Kolkata
                  </Typography>
                  <FakeInputArrow />
                </Box>
                <Box component="div" className="selectdiv2 font14">
                  <Box component="div" className="inputselectsearch dis_flex">
                    <SrchIcon />
                    <input type="text" placeholder="Search" />
                  </Box>
                  <Box component="div" className="listcourses">
                    <ul>
                      <li>
                        <span>Kolkata</span>
                      </li>
                      <li>
                        <span>Mumbai</span>
                      </li>
                      <li>
                        <span>Delhi</span>
                      </li>
                      <li>
                        <span>Chennai</span>
                      </li>
                    </ul>
                  </Box>
                </Box>
              </Box>
              <Box component="div">
                <label className="font12 mb-2 mt-3 block">
                  No. Of Vacancies Available
                </label>
                <input
                  type="text"
                  placeholder="Enter No. Of Vacancies"
                  className="blueinputarea fullwidth_100percent"
                />
              </Box>
              <Box
                component="div"
                className="dis_flex"
                justifyContent="space-between"
              >
                <Button
                  className="fullwidth_100percent border16 darkbluecolor whitecolortext"
                  onClick={(e) => {
                    handleEditLocationClose();
                  }}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Job Description Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="material-modal"
        open={openmodalJobDescp}
        onClose={handleJobDescpClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalJobDescp}>
          <Box component="div" className="modalwithheadbordermedium">
            <Box component="div" className="modal-head">
              <Box component="div" className="dis_flex">
                <Typography variant="span" className="font16">
                  Job Description
                </Typography>
                <Button
                  className="marginautoright btn-close"
                  onClick={(e) => {
                    handleJobDescpClose();
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
            <Box component="div" className="px-20 py-20 modal-body">
              <Box component="div" className="pos-rel">
                <Box component="div" className="fakeinputareatypeable">
                  <input
                    type="text"
                    id="TemplateDiv"
                    placeholder="Select Template"
                    onClick={OpenTemplateDiv}
                  />
                  <FakeInputArrow />
                </Box>
                <Box component="div" className="templatesavingoptions font14">
                  <Box component="div" className="listcourses">
                    <ul>
                      <li>
                        <span>XYZ</span>
                      </li>
                      <li>
                        <span>XYA</span>
                      </li>
                      <li>
                        <span>XYIBIB</span>
                      </li>
                      <li className="newtemplatesaving">
                        <Button startIcon={<AddPlusIcon />}>
                          Add New Template XYZ
                        </Button>
                      </li>
                    </ul>
                  </Box>
                </Box>
              </Box>
              <Box component="div" className="mt-3">
                <textarea
                  cols="30"
                  rows="10"
                  className="bluetextarea"
                  placeholder="Type your Job Description"
                ></textarea>
              </Box>
              <Box component="div" className="dis_flex mb-3">
                <Box component="div" className="marginautoright">
                  <Typography variant="span" className="font14">
                    0/3000 Characters remaining
                  </Typography>
                </Box>
              </Box>
              <Box
                component="div"
                className="dis_flex"
                justifyContent="space-between"
              >
                <Button
                  className="fullwidth_100percent border16 darkbluecolor whitecolortext"
                  onClick={(e) => {
                    handleJobDescpClose();
                    handleTemplateSaveOpen();
                  }}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  Save and Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Edit Job Description Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="material-modal"
        open={openmodalJobDescpEdit}
        onClose={handleJobDescpEditClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalJobDescpEdit}>
          <Box component="div" className="modalwithheadbordermedium">
            <Box component="div" className="modal-head">
              <Box component="div" className="dis_flex">
                <Typography variant="span" className="font16">
                  Job Description
                </Typography>
                <Button
                  className="marginautoright btn-close"
                  onClick={(e) => {
                    handleJobDescpEditClose();
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
            <Box component="div" className="px-20 py-20 modal-body">
              <Box component="div" className="pos-rel">
                <Box component="div" className="fakeinputareatypeable">
                  <input
                    type="text"
                    id="TemplateDiv"
                    placeholder="Select Template"
                    onClick={OpenTemplateDiv}
                  />
                  <FakeInputArrow />
                </Box>
                <Box component="div" className="templatesavingoptions font14">
                  <Box component="div" className="listcourses">
                    <ul>
                      <li>
                        <span>XYZ</span>
                      </li>
                      <li>
                        <span>XYA</span>
                      </li>
                      <li>
                        <span>XYIBIB</span>
                      </li>
                      <li className="newtemplatesaving">
                        <Button startIcon={<AddPlusIcon />}>
                          Add New Template XYZ
                        </Button>
                      </li>
                    </ul>
                  </Box>
                </Box>
              </Box>
              <Box component="div" className="mt-3">
                <textarea
                  cols="30"
                  rows="10"
                  className="bluetextarea"
                  placeholder="Type your Job Description"
                ></textarea>
              </Box>
              <Box component="div" className="dis_flex mb-3">
                <Box component="div" className="marginautoright">
                  <Typography variant="span" className="font14">
                    0/3000 Characters remaining
                  </Typography>
                </Box>
              </Box>
              <Box
                component="div"
                className="dis_flex"
                justifyContent="space-between"
              >
                <Button
                  className="fullwidth_100percent border16 darkbluecolor whitecolortext"
                  onClick={(e) => {
                    handleJobDescpEditClose();
                    handleOverwriteOpen();
                  }}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  Update
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Overwrite Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="material-modal"
        open={openmodalOverwrite}
        onClose={handleOverwriteClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalOverwrite}>
          <Box component="div" className="modalcontsmall2">
            <Box component="div" className="modal-body">
              <Box component="div" className="contentarea">
                <OverwriteIcon />
                <Typography
                  variant="span"
                  className="font16 block text-center mt-2"
                >
                  Do you want to overwrite the template "name goes here"
                </Typography>
              </Box>
            </Box>
            <Box component="div" className="px-20 pt-3 modal-body">
              <Box
                component="div"
                className="dis_flex buttonareadiv"
                justifyContent="space-between"
              >
                <Button
                  className="border8 me-3 lightbluecolor"
                  onClick={(e) => {
                    handleOverwriteClose();
                    handleJobDescpEditOpen();
                  }}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  No
                </Button>
                <Button
                  className="border8 darkbluecolor whitecolortext"
                  onClick={(e) => {
                    handleOverwriteClose();
                    handleJobDescpEditOpen();
                  }}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  Yes
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Template Save Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="material-modal"
        open={openmodalTemplateSave}
        onClose={handleTemplateSaveClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalTemplateSave}>
          <Box component="div" className="modalcontsmall2">
            <Box component="div" className="modal-body">
              <Box component="div" className="contentarea">
                <DocumentIcon />
                <Typography
                  variant="span"
                  className="font16 block mt-2 text-center"
                >
                  Do you want to save this template as XYZ?
                </Typography>
              </Box>
            </Box>
            <Box component="div" className="px-20 pt-3 modal-body">
              <Box
                component="div"
                className="dis_flex buttonareadiv"
                justifyContent="space-between"
              >
                <Button
                  className="border8 me-3 lightbluecolor"
                  onClick={(e) => {
                    handleTemplateSaveClose();
                  }}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  No
                </Button>
                <Button
                  className="border8 darkbluecolor whitecolortext"
                  onClick={(e) => {
                    handleTemplateSaveClose();
                  }}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  Yes
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* Template Save Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="material-modal"
        open={openmodalTemplateSave2}
        onClose={handleTemplateSave2Close}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalTemplateSave2}>
          <Box component="div" className="modalcontsmall">
            <Box component="div" className="modal-body">
              <Box component="div" className="contentarea">
                <Typography variant="span" className="font16">
                  Do you want to save this template?
                </Typography>
              </Box>
            </Box>
            <Box component="div" className="px-20 pt-3 modal-body">
              <Box
                component="div"
                className="dis_flex buttonareadiv"
                justifyContent="space-between"
              >
                <Button
                  className="border8 me-3 lightbluecolor"
                  onClick={(e) => {
                    handleTemplateSave2Close();
                  }}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  No
                </Button>
                <Button
                  className="border8 darkbluecolor whitecolortext"
                  onClick={(e) => {
                    handleTemplateSave2Close();
                  }}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  Yes
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="material-modal"
        open={openmodalsuccess}
        onClose={handleSuccessClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalsuccess}>
          <Box component="div" className="modalcontmid2">
            <Box component="div" className="dis_flex">
              <Button
                className="marginautoright btn-close"
                onClick={(e) => {
                  handleSuccessClose();
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
            <Box component="div" className="successimg">
              <SuccessIcon />
            </Box>
            <Typography
              id="transition-modal-description"
              className="mb-2 mt-3 text-center fontweight700 font20 block"
            >
              Job Reposted Successfully!
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
export default ApplicationSavedBoxListRepost;

const education = [
  { name: "Class 10", id: 1 },
  { name: "Class 12", id: 2 },
  { name: "Graduation/Diploma", id: 3 },
  { name: "5 Years", id: 4 },
  { name: "Masters", id: 5 },
  { name: "PhD", id: 6 },
  { name: "BSC", id: 7 },
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

const coaching = [
  { name: "DPS School, Darjeeling", id: 1 },
  { name: "DPS School, Siliguri", id: 2 },
  { name: "DPS School, Durgapur", id: 3 },
];

const JobCat = [
  { name: "Academic", id: 1 },
  { name: "Non-Academic", id: 2 },
];

const Board = [
  { name: "CBSE", id: 1 },
  { name: "ICSE", id: 2 },
];

const Subject = [
  { name: "Physics", id: 1 },
  { name: "Maths", id: 2 },
  { name: "Chemistry", id: 3 },
  { name: "Biology", id: 4 },
];

const Level = [
  { name: "Doctorate", id: 1 },
  { name: "Post Graduate", id: 2 },
  { name: "Graduate", id: 3 },
  { name: "12th", id: 4 },
  { name: "10th", id: 5 },
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

const noticeperiod = [
  { name: "Immediate", id: 1 },
  { name: "15 Days", id: 2 },
  { name: "30 Days", id: 3 },
  { name: "45 Days", id: 4 },
  { name: "60 Days", id: 5 },
  { name: "75 Days", id: 6 },
  { name: "90 Days", id: 7 },
];

const SuccessIcon = () => {
  return (
    <svg
      className="successicon"
      xmlns="http://www.w3.org/2000/svg"
      width="79"
      height="79"
      viewBox="0 0 99 99"
    >
      <defs></defs>
      <circle
        class="a"
        cx="49.5"
        cy="49.5"
        r="49.5"
        transform="translate(0 0)"
      />
      <path
        class="b"
        d="M188.8,194.161l25.453,25.453a49.467,49.467,0,0,0,36.7-47.782v-1.405L230.961,152Z"
        transform="translate(-151.948 -122.331)"
      />
      <g transform="translate(16.63 24.438)">
        <path
          class="c"
          d="M119.319,221.227a5.846,5.846,0,0,1,0,8.12l-4.528,4.528a5.846,5.846,0,0,1-8.12,0L86.84,213.888a5.846,5.846,0,0,1,0-8.12l4.528-4.528a5.846,5.846,0,0,1,8.12,0Z"
          transform="translate(-85.2 -185.078)"
        />
        <path
          class="c"
          d="M200.393,126.84a5.846,5.846,0,0,1,8.12,0l4.528,4.528a5.846,5.846,0,0,1,0,8.12l-34.353,34.2a5.846,5.846,0,0,1-8.12,0l-4.528-4.528a5.846,5.846,0,0,1,0-8.12Z"
          transform="translate(-148.941 -125.2)"
        />
      </g>
    </svg>
  );
};

const BackIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="23.593"
      viewBox="0 0 29 23.593"
    >
      <g id="back" transform="translate(-2.5 -8)">
        <g
          id="Group_6948"
          data-name="Group 6948"
          transform="translate(2.549 18.814)"
        >
          <g id="Group_6947" data-name="Group 6947" transform="translate(0)">
            <g id="Group_6946" data-name="Group 6946">
              <path
                id="Path_3799"
                data-name="Path 3799"
                d="M30.568,31.966H3.583a.983.983,0,0,1,0-1.966H30.568a.983.983,0,1,1,0,1.966Z"
                transform="translate(-2.6 -30)"
                fill="#2a5798"
              />
            </g>
          </g>
        </g>
        <g id="Group_6951" data-name="Group 6951" transform="translate(2.5 8)">
          <g id="Group_6950" data-name="Group 6950">
            <g id="Group_6949" data-name="Group 6949">
              <path
                id="Path_3800"
                data-name="Path 3800"
                d="M14.3,31.593a.97.97,0,0,1-.688-.295L2.795,20.485a.95.95,0,0,1,0-1.376L13.608,8.295a.973.973,0,0,1,1.376,1.376L4.908,19.8,15.034,29.922a.95.95,0,0,1,0,1.376,1,1,0,0,1-.737.295Z"
                transform="translate(-2.5 -8)"
                fill="#2a5798"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

const PostJobIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="75.96"
      height="76.935"
      viewBox="0 0 75.96 76.935"
    >
      <g id="resume-and-cv" transform="translate(-1.3 -0.7)">
        <path
          id="Path_3731"
          data-name="Path 3731"
          d="M70.3,31.2h7.23V48.829H70.3Z"
          transform="translate(-12.944 -5.722)"
          fill="#dd8c36"
        />
        <path
          id="Path_3732"
          data-name="Path 3732"
          d="M15.136,44.036,7.581,80.35a2.622,2.622,0,0,1-2.6,2.112A2.7,2.7,0,0,1,2.3,79.782V31.2H9.53Z"
          transform="translate(-0.188 -5.722)"
          fill="#dd8c36"
        />
        <path
          id="Path_3733"
          data-name="Path 3733"
          d="M11.2,1.7H59.213V62.549H11.2Z"
          transform="translate(-1.857 -0.188)"
          fill="#ccd1dc"
        />
        <path
          id="Path_3734"
          data-name="Path 3734"
          d="M14.1,1.7H59.757V62.549H14.1Z"
          transform="translate(-2.401 -0.188)"
          fill="#dee1e7"
        />
        <path
          id="Path_3735"
          data-name="Path 3735"
          d="M77.173,51.793l-6.5,31.034-.081.487a2.622,2.622,0,0,1-2.6,2.112H5.6A2.779,2.779,0,0,0,8.2,83.4L15.755,47h16A2.5,2.5,0,0,1,34.2,49.437a2.394,2.394,0,0,0,2.437,2.437Z"
          transform="translate(-0.807 -8.686)"
          fill="#e69c4b"
        />
        <path
          id="Path_3736"
          data-name="Path 3736"
          d="M78.124,54.793,72.843,80.14a6.428,6.428,0,0,1-5.606,3.331H23.043A8.061,8.061,0,0,1,15,75.428a11.01,11.01,0,0,1,.162-1.625L20.2,50H31.9a2.5,2.5,0,0,1,2.437,2.437,2.358,2.358,0,0,0,2.356,2.356H78.124Z"
          transform="translate(-2.57 -9.248)"
          fill="#edab63"
        />
        <path
          id="Path_3737"
          data-name="Path 3737"
          d="M87.905,52.9l-.487,2.437H78.4l.487-2.437Z"
          transform="translate(-14.464 -9.792)"
          fill="#edab63"
        />
        <path
          id="Path_3738"
          data-name="Path 3738"
          d="M84.829,55.9,79.954,79.46A6.419,6.419,0,0,1,73.7,84.578H64.6a6.353,6.353,0,0,0,6.256-5.118L75.73,55.9Z"
          transform="translate(-11.875 -10.355)"
          fill="#f6bc7a"
        />
        <path
          id="Path_3739"
          data-name="Path 3739"
          d="M43.137,4.7H59.954a2.444,2.444,0,0,1,2.437,2.437V38.252a2.444,2.444,0,0,1-2.437,2.437H43.137A2.444,2.444,0,0,1,40.7,38.252V7.056A2.428,2.428,0,0,1,43.137,4.7Z"
          transform="translate(-7.391 -0.75)"
          fill="#f3f4f5"
        />
        <circle
          id="Ellipse_123"
          data-name="Ellipse 123"
          cx="10.399"
          cy="10.399"
          r="10.399"
          transform="translate(22.91 5.574)"
          fill="#f6b756"
        />
        <ellipse
          id="Ellipse_124"
          data-name="Ellipse 124"
          cx="8.287"
          cy="8.368"
          rx="8.287"
          ry="8.368"
          transform="translate(25.022 7.605)"
          fill="#fac77d"
        />
        <path
          id="Path_3740"
          data-name="Path 3740"
          d="M43.387,14.412v1.381a3.493,3.493,0,0,1-6.987,0V14.087A3.375,3.375,0,0,1,39.812,11a3.452,3.452,0,0,1,3.493,3.087C43.387,14.006,43.387,14.25,43.387,14.412Z"
          transform="translate(-6.585 -1.932)"
          fill="#7190c4"
        />
        <path
          id="Path_3741"
          data-name="Path 3741"
          d="M43.405,13.987a3.578,3.578,0,0,1-3.818,3.087A3.46,3.46,0,0,1,36.5,13.987,3.375,3.375,0,0,1,39.912,10.9,3.518,3.518,0,0,1,43.405,13.987Z"
          transform="translate(-6.603 -1.913)"
          fill="#89a3ce"
        />
        <path
          id="Path_3742"
          data-name="Path 3742"
          d="M45.636,27.91a10.263,10.263,0,0,1-12.836,0l.406-1.787.081-.325a6.12,6.12,0,0,1,11.942,0l.081.325Z"
          transform="translate(-5.909 -3.812)"
          fill="#7190c4"
        />
        <path
          id="Path_3743"
          data-name="Path 3743"
          d="M45.324,26.222a10.243,10.243,0,0,1-12.024,0l.081-.325a6.12,6.12,0,0,1,11.942,0Z"
          transform="translate(-6.003 -3.831)"
          fill="#89a3ce"
        />
        <path
          id="Path_3744"
          data-name="Path 3744"
          d="M49.322,16.735a11.216,11.216,0,0,0-22.422-.65v.569a11.217,11.217,0,0,0,11.211,11.13C46.641,27.865,49.4,20.229,49.322,16.735Zm-20.8,0A9.627,9.627,0,1,1,45.1,23.4l-.244-.731a6.95,6.95,0,0,0-3.981-4.793,4.287,4.287,0,0,0,1.544-3.25V13.242a4.27,4.27,0,1,0-8.53-.406v1.787a4.287,4.287,0,0,0,1.544,3.25,6.95,6.95,0,0,0-3.981,4.793l-.162.731a9.2,9.2,0,0,1-2.762-6.662ZM35.43,14.7V13.323A2.686,2.686,0,1,1,40.792,13V14.7a2.71,2.71,0,0,1-2.843,2.518A2.777,2.777,0,0,1,35.43,14.7Zm-2.843,9.911.406-1.544a5.3,5.3,0,0,1,6.337-3.981,5.5,5.5,0,0,1,3.981,3.981l.325,1.544c-1.056,1.056-3.656,1.706-5.524,1.706C36.568,26.24,33.4,25.347,32.587,24.616Z"
          transform="translate(-4.802 -0.843)"
          fill="#39426a"
        />
        <path
          id="Path_3745"
          data-name="Path 3745"
          d="M4.812,86.049A3.433,3.433,0,0,1,1.4,82.637V46.81A.768.768,0,0,1,2.212,46a.768.768,0,0,1,.812.812V82.555a1.848,1.848,0,0,0,3.656.406l7.555-36.314a.79.79,0,1,1,1.544.325L8.143,83.286a3.39,3.39,0,0,1-3.331,2.762Z"
          transform="translate(-0.019 -8.495)"
          fill="#39426a"
        />
        <path
          id="Path_3746"
          data-name="Path 3746"
          d="M53.446,42.725H19.812a.812.812,0,1,1,0-1.625H53.446a.812.812,0,1,1,0,1.625Z"
          transform="translate(-3.32 -7.579)"
          fill="#878c9f"
        />
        <path
          id="Path_3747"
          data-name="Path 3747"
          d="M53.446,37.825H19.812a.812.812,0,1,1,0-1.625H53.446a.812.812,0,1,1,0,1.625Z"
          transform="translate(-3.32 -6.66)"
          fill="#878c9f"
        />
        <path
          id="Path_3748"
          data-name="Path 3748"
          d="M77.016,42.62a1,1,0,0,0-.65-.325H65.4V25.478a.768.768,0,0,0-.812-.812H58.168V1.512A.768.768,0,0,0,57.356.7H9.343a.768.768,0,0,0-.812.812V24.747H2.112a.768.768,0,0,0-.812.812V74.141a.768.768,0,0,0,.812.812.768.768,0,0,0,.812-.812V26.291H8.53V65.124l-1.95,9.424a.863.863,0,0,0,.65.975.882.882,0,0,0,.975-.569L15.6,39.208H30.953a1.63,1.63,0,0,1,1.625,1.625A3.172,3.172,0,0,0,35.746,44H75.391L69.055,74.548a1.9,1.9,0,0,1-1.787,1.462H4.55a.812.812,0,0,0,0,1.625H67.267a3.545,3.545,0,0,0,3.412-2.762l6.58-31.521C77.179,43.108,77.179,42.783,77.016,42.62ZM63.774,26.291v16H58.168v-16ZM34.121,40.752a3.243,3.243,0,0,0-3.168-3.25h-16a.791.791,0,0,0-.812.65L10.155,57.487V2.325H56.544V42.376h-20.8a1.747,1.747,0,0,1-1.625-1.625Z"
          fill="#39426a"
        />
      </g>
    </svg>
  );
};

const OverwriteIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="39.09"
      height="39.09"
      viewBox="0 0 39.09 39.09"
    >
      <g id="replace" transform="translate(0 0)">
        <path
          id="Path_3749"
          data-name="Path 3749"
          d="M175,9.822,167.63,2.491a1.144,1.144,0,0,0-.2-.156v7.688h7.729a1.137,1.137,0,0,0-.16-.2Zm0,0"
          transform="translate(-154.65 -2.157)"
          fill="#f6b333"
        />
        <path
          id="Path_3750"
          data-name="Path 3750"
          d="M20.69,26.4V10.164H11.638a1.145,1.145,0,0,1-1.145-1.145V.008H1.145A1.145,1.145,0,0,0,0,1.153V26.4A1.145,1.145,0,0,0,1.145,27.55h18.4A1.145,1.145,0,0,0,20.69,26.4Zm0,0"
          transform="translate(0 -0.007)"
          fill="#f6b333"
        />
        <path
          id="Path_3751"
          data-name="Path 3751"
          d="M416,161.061l-7.373-7.331a1.142,1.142,0,0,0-.2-.155v7.688h7.729a1.149,1.149,0,0,0-.16-.2Zm0,0"
          transform="translate(-377.25 -141.849)"
          fill="#2a5798"
        />
        <path
          id="Path_3752"
          data-name="Path 3752"
          d="M252.638,161.4a1.145,1.145,0,0,1-1.145-1.145v-9.011h-5.912V166.1a3.439,3.439,0,0,1-3.436,3.435H241v8.111a1.145,1.145,0,0,0,1.145,1.145h18.4a1.145,1.145,0,0,0,1.145-1.145V161.4Zm0,0"
          transform="translate(-222.601 -139.7)"
          fill="#2a5798"
        />
        <path
          id="Path_3753"
          data-name="Path 3753"
          d="M92.44,400.918a1.145,1.145,0,0,0-1.69,1.542H88.49a1.146,1.146,0,0,1-1.145-1.145v-2.252a1.145,1.145,0,0,0-2.29,0v2.252a3.439,3.439,0,0,0,3.436,3.435h2.26a1.145,1.145,0,0,0,1.69,1.542l1.877-1.878a1.145,1.145,0,0,0,0-1.619Zm0,0"
          transform="translate(-78.561 -367.538)"
          fill="#f6b333"
        />
        <path
          id="Path_3754"
          data-name="Path 3754"
          d="M254.694,5.71a1.145,1.145,0,0,0,1.69-1.542h2.26a1.146,1.146,0,0,1,1.145,1.145V7.565a1.145,1.145,0,0,0,2.29,0V5.313a3.439,3.439,0,0,0-3.436-3.435h-2.26a1.145,1.145,0,0,0-1.69-1.542l-1.877,1.877a1.145,1.145,0,0,0,0,1.619Zm0,0"
          transform="translate(-233.204 0)"
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

const EditBlue = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <g
        id="Group_6826"
        data-name="Group 6826"
        transform="translate(-184.62 -390.197)"
      >
        <g
          id="Rectangle_480"
          data-name="Rectangle 480"
          transform="translate(184.62 390.197)"
          fill="#2a5798"
          stroke="#707070"
          stroke-width="1"
          opacity="0"
        >
          <rect width="20" height="20" stroke="none" />
          <rect x="0.5" y="0.5" width="19" height="19" fill="none" />
        </g>
        <g id="fluent:edit-20-regular" transform="translate(186.944 393.072)">
          <g id="Group" transform="translate(0 0)">
            <path
              id="Vector"
              d="M10.64.77a2.633,2.633,0,0,1,3.847,3.591l-.123.132L5.275,13.582a1.893,1.893,0,0,1-.684.437l-.156.05L.6,15.115a.473.473,0,0,1-.6-.506l.015-.076L1.064,10.7a1.875,1.875,0,0,1,.377-.719l.111-.121L10.64.77ZM9.826,2.922l-7.606,7.6a.946.946,0,0,0-.2.3l-.04.116-.83,3.037,3.039-.828a.946.946,0,0,0,.226-.095l.1-.068.093-.08,7.6-7.607L9.826,2.922Zm3.869-1.483a1.687,1.687,0,0,0-2.273-.1l-.114.1-.814.814,2.384,2.386.816-.814a1.687,1.687,0,0,0,.1-2.273l-.1-.114Z"
              transform="translate(0 0)"
              fill="#2a5798"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

const SrchIcon = () => {
  return (
    <svg
      className="srchicon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs></defs>
      <path
        class="a"
        d="M9.665,0a9.666,9.666,0,0,1,7.507,15.758L23.7,22.291A1,1,0,0,1,22.4,23.8l-.112-.1-6.535-6.533A9.666,9.666,0,1,1,9.665,0Zm0,2a7.666,7.666,0,1,0,5.421,2.245A7.667,7.667,0,0,0,9.665,2Z"
        transform="translate(0)"
      />
    </svg>
  );
};

const FakeInputArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="9.796"
      viewBox="0 0 16 9.796"
      className="arrowinputarea"
    >
      <g id="akar-icons:arrow-down" transform="translate(16) rotate(90)">
        <path
          id="Vector"
          d="M14.656,0H1.346A1.419,1.419,0,0,0,.4,2.4L7.05,9.382a1.293,1.293,0,0,0,1.9,0L15.6,2.4A1.416,1.416,0,0,0,14.656,0Z"
          transform="matrix(0, -1, 1, 0, 0, 16)"
          fill="#1c1b1b"
        />
      </g>
    </svg>
  );
};

const RemoveRedIconSml = () => {
  return (
    <svg
      className="red_icon_red"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
    >
      <defs></defs>
      <g class="a">
        <rect class="d" width="24" height="24" />
        <rect class="e" x="0.5" y="0.5" width="23" height="23" />
      </g>
      <g transform="translate(1.752 1.751)">
        <path
          class="b"
          d="M285,295.89v-1.281c.048-.355.085-.713.145-1.066a10.276,10.276,0,0,1,8.338-8.385c.373-.066.75-.106,1.125-.157h1.281c.349.046.7.079,1.047.139a10.286,10.286,0,0,1,8.4,8.345c.066.373.106.75.157,1.125v1.281c-.031.25-.058.5-.094.751a10.288,10.288,0,0,1-8.371,8.7c-.379.069-.762.107-1.144.159h-1.281c-.25-.031-.5-.058-.75-.093a10.289,10.289,0,0,1-8.7-8.37C285.091,296.656,285.052,296.271,285,295.89Zm19.03-.643a8.782,8.782,0,1,0-8.779,8.783A8.784,8.784,0,0,0,304.03,295.247Z"
          transform="translate(-285 -285)"
        />
        <path
          class="c"
          d="M435.648,434.633a1.981,1.981,0,0,1,.157-.214q1.477-1.481,2.957-2.959a.731.731,0,0,1,1.258.414.76.76,0,0,1-.263.66q-1.461,1.455-2.918,2.914a1.867,1.867,0,0,1-.186.143c.078.083.125.136.175.187q1.465,1.465,2.931,2.929a.756.756,0,0,1,.261.661.731.731,0,0,1-1.26.41L435.8,436.82c-.051-.051-.1-.1-.165-.158-.059.056-.113.1-.164.155q-1.465,1.465-2.93,2.93a.742.742,0,0,1-.721.245.726.726,0,0,1-.4-1.192c.043-.05.092-.1.14-.143l2.873-2.874c.051-.051.1-.1.155-.164-.058-.061-.106-.114-.157-.165q-1.472-1.472-2.945-2.944a.719.719,0,0,1-.209-.784.7.7,0,0,1,.6-.492.754.754,0,0,1,.661.259q1.441,1.447,2.886,2.889C435.492,434.445,435.545,434.514,435.648,434.633Z"
          transform="translate(-425.385 -425.371)"
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

const DocumentIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33.65"
      height="44.176"
      viewBox="0 0 33.65 44.176"
    >
      <g id="google-docs" transform="translate(-61)">
        <path
          id="Path_3755"
          data-name="Path 3755"
          d="M64.883,44.176H90.767a3.887,3.887,0,0,0,3.883-3.883V12.942H85.59a3.887,3.887,0,0,1-3.883-3.883V0H64.883A3.887,3.887,0,0,0,61,3.883V40.293A3.887,3.887,0,0,0,64.883,44.176Zm5.177-25.971H85.59a1.294,1.294,0,0,1,0,2.588H70.059a1.294,1.294,0,0,1,0-2.588Zm0,5.177H85.59a1.294,1.294,0,0,1,0,2.588H70.059a1.294,1.294,0,0,1,0-2.588Zm0,5.177H85.59a1.294,1.294,0,1,1,0,2.588H70.059a1.294,1.294,0,1,1,0-2.588Zm0,5.177H80.413a1.294,1.294,0,0,1,0,2.588H70.059a1.294,1.294,0,0,1,0-2.588Z"
          fill="#f6b333"
        />
        <path
          id="Path_3756"
          data-name="Path 3756"
          d="M332.294,18.384h8.3l-9.6-9.6v8.3A1.3,1.3,0,0,0,332.294,18.384Z"
          transform="translate(-246.704 -8.031)"
          fill="#f6b333"
        />
      </g>
    </svg>
  );
};

const HandSign = () => {
  return (
    <svg
      className="me-2"
      xmlns="http://www.w3.org/2000/svg"
      width="35.738"
      height="32.926"
      viewBox="0 0 35.738 32.926"
    >
      <g id="profile" transform="translate(-2 -4.75)">
        <path
          id="Path_3788"
          data-name="Path 3788"
          d="M5.359,52.272H2.51a.51.51,0,0,1-.51-.51V39.27a.51.51,0,0,1,.51-.51H5.359a2.394,2.394,0,0,1,2.389,2.394v8.729a2.394,2.394,0,0,1-2.389,2.389Zm0-1.021Z"
          transform="translate(0 -16.649)"
          fill="#2a5798"
        />
        <path
          id="Path_3789"
          data-name="Path 3789"
          d="M28.484,49.886H19.545a.51.51,0,1,1,0-1.021h8.939a1.353,1.353,0,1,0,0-2.706H23.7a.51.51,0,0,1-.408-.2,6.065,6.065,0,0,0-4.819-2.394h-6.7a.51.51,0,1,1,0-1.021h6.7a7.1,7.1,0,0,1,5.472,2.6h4.538a2.374,2.374,0,1,1,0,4.747Z"
          transform="translate(-4.533 -18.499)"
          fill="#2a5798"
        />
        <path
          id="Path_3790"
          data-name="Path 3790"
          d="M24.244,59.176a12.249,12.249,0,0,1-4.434-.831l-8.17-3.181a.51.51,0,0,1,.368-.949l8.168,3.18a11.231,11.231,0,0,0,9.189-.51l11.562-5.927-.041-.036a4.4,4.4,0,0,0-4.513-.98L30.191,52.1a.51.51,0,0,1-.332-.965l6.182-2.159a5.426,5.426,0,0,1,5.554,1.2l.562.51a.51.51,0,0,1-.117.822l-12.2,6.3A12.216,12.216,0,0,1,24.244,59.176Z"
          transform="translate(-4.576 -21.5)"
          fill="#2a5798"
        />
        <path
          id="Path_3791"
          data-name="Path 3791"
          d="M45.794,22.362H31.97a.51.51,0,0,1-.51-.51V5.26a.51.51,0,0,1,.51-.51H45.794a.51.51,0,0,1,.51.51V21.851A.51.51,0,0,1,45.794,22.362Z"
          transform="translate(-14.421)"
          fill="#f6b333"
        />
        <path
          id="Path_3792"
          data-name="Path 3792"
          d="M45.613,21.139H40.62a.51.51,0,0,1-.51-.51v-.863A1.761,1.761,0,0,1,41.866,18h2.5a1.761,1.761,0,0,1,1.756,1.761v.863a.51.51,0,0,1-.51.516Z"
          transform="translate(-18.656 -6.486)"
          fill="#fff"
        />
        <path
          id="Path_3793"
          data-name="Path 3793"
          d="M44.292,13.183A1.782,1.782,0,1,1,46.073,11.4,1.782,1.782,0,0,1,44.292,13.183Z"
          transform="translate(-19.83 -2.384)"
          fill="#fff"
        />
        <path
          id="Path_3794"
          data-name="Path 3794"
          d="M45.707,28.021H36.12a.51.51,0,1,1,0-1.021h9.587a.51.51,0,0,1,0,1.021Z"
          transform="translate(-16.453 -10.892)"
          fill="#fff"
        />
        <path
          id="Path_3795"
          data-name="Path 3795"
          d="M45.707,32.791H36.12a.51.51,0,1,1,0-1.021h9.587a.51.51,0,0,1,0,1.021Z"
          transform="translate(-16.453 -13.227)"
          fill="#fff"
        />
      </g>
    </svg>
  );
};

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

const RepostIcon = () => {
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
        id="Group_7135"
        data-name="Group 7135"
        transform="translate(-1674 -814)"
      >
        <g id="progress-arrows" transform="translate(1677 817)">
          <path
            id="Path_4031"
            data-name="Path 4031"
            d="M7.455,30.2a.6.6,0,0,1-.42-.169L.171,23.151a.585.585,0,0,1,0-.825l6.864-6.891a.588.588,0,0,1,.64-.126.577.577,0,0,1,.361.542v4.261h18.81a.946.946,0,0,0,.945-.942v-4.8a.6.6,0,0,1,.168-.416l4.593-4.611a.588.588,0,0,1,1,.416V20.189c0,3.724-1.968,5.69-5.689,5.69H8.037V29.62a.575.575,0,0,1-.361.536A.594.594,0,0,1,7.455,30.2Z"
            transform="translate(0 3.112)"
            fill="#f6b333"
          />
          <path
            id="Path_4032"
            data-name="Path 4032"
            d="M1.342,21.5a.595.595,0,0,1-.588-.587V10.49C.754,6.765,2.718,4.8,6.443,4.8H26.281V1.051a.6.6,0,0,1,.361-.543.589.589,0,0,1,.642.13l6.861,6.877a.587.587,0,0,1,0,.829L27.284,15.23a.576.576,0,0,1-.64.128.585.585,0,0,1-.361-.544V10.562H7.46a.94.94,0,0,0-.937.944v4.8a.591.591,0,0,1-.175.418l-4.6,4.606A.567.567,0,0,1,1.342,21.5Z"
            transform="translate(0.309 -0.464)"
            fill="#f6b333"
          />
        </g>
      </g>
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

const YearsIcon = () => {
  return (
    <svg
      className="years_orange me-2"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <defs></defs>
      <path
        class="a"
        d="M5.047,0l-5,10,5,10a10,10,0,0,0,0-20Z"
        transform="translate(4.953)"
      />
      <path
        class="a"
        d="M0,10A10.033,10.033,0,0,0,10,20V0A10.033,10.033,0,0,0,0,10Z"
      />
      <path
        class="b"
        d="M3.7-.322l-4,8,4,8a8.276,8.276,0,0,0,8-8A8.276,8.276,0,0,0,3.7-.322Z"
        transform="translate(6.301 2.322)"
      />
      <path
        class="b"
        d="M-.322,7.678a8.276,8.276,0,0,0,8,8v-16A8.276,8.276,0,0,0-.322,7.678Z"
        transform="translate(2.322 2.322)"
      />
      <path
        class="c"
        d="M2.769,1.816l-2-2h-1l1,2,1,1Z"
        transform="translate(9.231 9.184)"
      />
      <path
        class="c"
        d="M1.143.139l-1,1,4,4v-2Z"
        transform="translate(5.857 5.861)"
      />
      <path
        class="c"
        d="M3.753.153l-3,3-1,2h1l4-4Z"
        transform="translate(9.247 5.847)"
      />
      <path
        class="c"
        d="M-.35,1.816l1,1,1-1v-2Z"
        transform="translate(8.35 9.184)"
      />
      <path
        class="c"
        d="M1.386.482h-1v1h1Z"
        transform="translate(9.614 3.518)"
      />
      <path
        class="c"
        d="M-.417.482h1v1h-1Z"
        transform="translate(9.417 3.518)"
      />
      <path
        class="c"
        d="M1.386-.321h-1v1h1Z"
        transform="translate(9.614 15.321)"
      />
      <path
        class="c"
        d="M-.417-.321h1v1h-1Z"
        transform="translate(9.417 15.321)"
      />
      <path
        class="c"
        d="M0,0H1.161V1.161H0Z"
        transform="translate(3.518 10.58) rotate(-90)"
      />
      <path
        class="c"
        d="M0,0H1.161V1.161H0Z"
        transform="translate(15.321 10.58) rotate(-90)"
      />
    </svg>
  );
};

const SalaryIcon = () => {
  return (
    <svg
      className="salary_orange me-2"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <defs></defs>
      <path
        class="a"
        d="M10,0A10,10,0,1,1,0,10,10,10,0,0,1,10,0Z"
        transform="translate(0)"
      />
      <circle
        class="b"
        cx="7.474"
        cy="7.474"
        r="7.474"
        transform="translate(2.526 2.526)"
      />
      <path
        class="c"
        d="M162.307,131.529H161.4a2.624,2.624,0,0,0-.49-.981h1.4a.49.49,0,1,0,0-.981h-4.757a.49.49,0,1,0,0,.981h1.373a1.717,1.717,0,0,1,1.471.981h-2.844a.49.49,0,1,0,0,.981h2.844a2.085,2.085,0,0,1-.392.687,1.643,1.643,0,0,1-1.079.539h-1.373a.46.46,0,0,0-.343.809l3.408,3.212a.588.588,0,0,0,.343.123.49.49,0,0,0,.343-.147.441.441,0,0,0,0-.662l-2.526-2.354h.147a2.6,2.6,0,0,0,1.79-.834,2.82,2.82,0,0,0,.687-1.373h.907a.49.49,0,0,0,0-.981Z"
        transform="translate(-149.928 -123.735)"
      />
    </svg>
  );
};

const BagIcon = () => {
  return (
    <svg
      className="bag_orange me-2"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="16"
      viewBox="0 0 20 16"
    >
      <defs></defs>
      <g transform="translate(0 7)">
        <path
          class="a"
          d="M17.9,9.177H1.988A2.349,2.349,0,0,1,0,7.177v-7l9.942,2,9.942-2v7a2.349,2.349,0,0,1-1.988,2Z"
          transform="translate(0 -0.177)"
        />
      </g>
      <g transform="translate(6.943 0)">
        <path
          class="a"
          d="M4.939,3.646h-4a1.543,1.543,0,0,1-1-1v-1c0-.7.3-2,1-2h4c.7,0,1,1.3,1,2v1A1.543,1.543,0,0,1,4.939,3.646Zm-4-1h4v-1c0-.05.05,0,0,0h-4c-.05,0,0-.05,0,0v1Z"
          transform="translate(0.061 0.354)"
        />
      </g>
      <g transform="translate(0 2.856)">
        <path
          class="b"
          d="M9.942,7.293c-.047,0,.046.012,0,0L0,4.293v-4c0-.324.673,0,.994,0h17.9c.322,0,.994-.324.994,0v4c0,.269.259-.065,0,0l-9.942,3c-.046.012.047,0,0,0Z"
          transform="translate(0 -0.149)"
        />
      </g>
      <path
        class="c"
        d="M4.939-.414h-4a1.543,1.543,0,0,0-1,1v2a1.543,1.543,0,0,0,1,1h4a1.543,1.543,0,0,0,1-1v-2A1.543,1.543,0,0,0,4.939-.414Z"
        transform="translate(7.003 7.414)"
      />
    </svg>
  );
};

const LocationIcon = () => {
  return (
    <svg
      className="location_orange me-2"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="20"
      viewBox="0 0 16 20"
    >
      <defs></defs>
      <path
        class="a"
        d="M7.718,0a8.212,8.212,0,0,0-8,7.987,7.823,7.823,0,0,0,1,3.994,23.462,23.462,0,0,0,3,3.994,34.531,34.531,0,0,0,4,3.994c.053.041-.063,0,0,0s-.053.041,0,0a34.524,34.524,0,0,0,4-3.994,23.467,23.467,0,0,0,3-3.994,7.823,7.823,0,0,0,1-3.994A8.212,8.212,0,0,0,7.718,0Zm0,4.992a3.271,3.271,0,0,1,3,3,3.517,3.517,0,0,1-3,3.239,3.517,3.517,0,0,1-3-3.239A3.271,3.271,0,0,1,7.718,4.992Z"
        transform="translate(0.282 0.014)"
      />
      <path
        class="b"
        d="M.857,0c-.29,0-.719-.031-1,0a8.173,8.173,0,0,1,7,7.987,7.823,7.823,0,0,1-1,3.994,23.462,23.462,0,0,1-3,3.994,25.433,25.433,0,0,1-3,3c.4.345.972.977,1,1,.053.041-.063,0,0,0s-.053.041,0,0a34.524,34.524,0,0,0,4-3.994,23.467,23.467,0,0,0,3-3.994,7.823,7.823,0,0,0,1-3.994A8.212,8.212,0,0,0,.857,0Z"
        transform="translate(7.143 0.014)"
      />
    </svg>
  );
};
