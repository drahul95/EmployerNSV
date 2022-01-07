import React from "react";
import {
  Typography,
  Box,
  MenuItem,
  Button,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuList,
  Checkbox,
  Modal,
  Backdrop,
  Fade,
  Tooltip,
} from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import ProfileDP from "../../images/profiledp.png";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import NoCreditsModal from "../NoCredits/NoCredits";
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

function LockedCandidate(props) {
  const [open] = React.useState(false);
  const anchorRef = React.useRef(null);

  const [openInvite, setOpenInvite] = React.useState(false);

  const handleOpenInvite = (e) => {
    setOpenInvite(true);
    e.stopPropagation();
  };

  const handleCloseInvite = () => {
    setOpenInvite(false);
  };

  const [openInviteSuccess, setOpenInviteSuccess] = React.useState(false);

  const handleOpenInviteSuccess = (e) => {
    setOpenInviteSuccess(true);
    e.stopPropagation();
  };

  const handleCloseInviteSuccess = (e) => {
    setOpenInviteSuccess(false);
    e.stopPropagation();
  };

  const [openProfileModal, setOpenProfileModal] = React.useState(false);

  const handleOpenProfileModal = (e) => {
    setOpenProfileModal(true);
    e.stopPropagation();
  };

  const handleCloseProfileModal = (e) => {
    setOpenProfileModal(false);
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

  const [opendownload, setOpendownload] = React.useState(false);
  const anchorRefdownload = React.useRef(null);

  const handleToggledownload = (e) => {
    setOpendownload((prevOpen) => !prevOpen);
    e.stopPropagation();
  };

  const handleClosedownload = (event) => {
    if (
      anchorRefdownload.current &&
      anchorRefdownload.current.contains(event.target)
    ) {
      return;
    }

    setOpendownload(false);
  };

  function handleListKeyDowndownload(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpendownload(false);
    }
  }

  const [openmodalNoCredits, setOpenModalNoCredits] = React.useState(false);

  const handleNoCreditsOpen = (e) => {
    setOpenModalNoCredits(true);
    e.stopPropagation();
  };

  const handleNoCreditsClose = (e) => {
    setOpenModalNoCredits(false);
    e.stopPropagation();
  };

  const [openmodalUnlockChatOption, setOpenModalUnlockChatOption] =
    React.useState(false);

  const handleUnlockChatOptionOpen = (e) => {
    setOpenModalUnlockChatOption(true);
    e.stopPropagation();
  };

  const handleUnlockChatOptionClose = (e) => {
    setOpenModalUnlockChatOption(false);
    e.stopPropagation();
  };

  const [openmodalunlockmodal, setOpenModalunlockmodal] = React.useState(false);

  const handleunlockmodalOpen = (e) => {
    setOpenModalunlockmodal(true);
    e.stopPropagation();
  };

  const handleunlockmodalClose = (e) => {
    setOpenModalunlockmodal(false);
    e.stopPropagation();
  };

  const [openmodalUnlockedSuccess, setOpenModalUnlockedSuccess] =
    React.useState(false);

  const handleUnlockedSuccessOpen = (e) => {
    setOpenModalUnlockedSuccess(true);
    e.stopPropagation();
  };

  const handleUnlockedSuccessClose = (e) => {
    setOpenModalUnlockedSuccess(false);
    e.stopPropagation();
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <>
      <Box
        component="div"
        className="canddiv"
        variant="contained"
        color="primary"
        onClick={props.lockedcandidatepopper}
      >
        <Box component="div" className="topdiv">
          <Box component="div" className="cont">
            <Box component="div" className="dis_flex picandcontdiv">
              <Box component="div">
                <Checkbox
                  icon={<CircleUnchecked />}
                  checkedIcon={<CircleCheckedFilled />}
                />
              </Box>
              <Box component="div" className="imgarea">
                <img className="blurimage" src={BASE_URL + ProfileDP} alt="" />
                <Box component="div" className="grncircle"></Box>
              </Box>
              <Box component="div" className="canddet">
                <Typography variant="span" className="name">
                  Unlock To View Candidate Name <UnlockIcon />
                </Typography>
                <Typography variant="span" className="prof">
                  Chemistry Teacher - ABS School
                </Typography>
                <Typography variant="span" className="loc">
                  Kolkata, West Bengal
                </Typography>
                <Typography variant="span" className="grnactv">
                  Active now
                </Typography>
              </Box>
            </Box>
            <Box component="div" className="dis_flex notinterestedline">
              <NotInterest />
              <Typography
                variant="span"
                className="font12 fontweight700 italic mt-2 block blackcolortext"
              >
                May not be interested in this job anymore.
              </Typography>
            </Box>
            <Box component="div">
              <Box
                component="div"
                className="marginautoright dis_flex buttondiv align-items-center"
              >
                <Button
                  startIcon={<UnlockIcon />}
                  className="darkbluecolor whitecolortext border8"
                  onClick={handleunlockmodalOpen}
                >
                  Unlock
                </Button>
                <LightTooltip
                  className="infoarea mt-2"
                  arrow="true"
                  title="By Unlocking you shall be able to view the Full Name, Image, Contact Details and Resume of the Candidate. Also you may start a Chat with the candidate on the JIE portal itself. Those Unlocked will be saved by default."
                  placement="top-end"
                >
                  <Button
                    className="infodiv2 me-0 ms-0"
                    startIcon={<InfoIcon />}
                  ></Button>
                </LightTooltip>
                <Button
                  startIcon={<InviteIconCand />}
                  className="darkbluecolor whitecolortext border8"
                  onClick={handleOpenInvite}
                >
                  Invite
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
                        Are you sure you want to Invite the Candidate?
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
                            handleOpenInviteSuccess();
                          }}
                        >
                          Yes
                        </Button>
                      </Box>
                    </div>
                  </Fade>
                </Modal>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className="material-modal"
                  open={openInviteSuccess}
                  onClose={handleCloseInviteSuccess}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={openInviteSuccess}>
                    <Box component="div" className="modalcontmid2">
                      <Box component="div" className="dis_flex">
                        <Button
                          className="marginautoright btn-close"
                          onClick={(e) => {
                            handleCloseInviteSuccess();
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
                        Invitation has been sent successfully!
                      </Typography>
                    </Box>
                  </Fade>
                </Modal>
                <Button
                  className="redcolor whitecolortext border8 pe-4 ps-4"
                  startIcon={<RemoveIcon />}
                  onClick={handleOpenremovemodal}
                >
                  Remove
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
                        Are you sure you want to Remove the Candidate?
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
                <Button
                  className="darkbluecolor whitecolortext border8"
                  endIcon={<ArrowWhite />}
                  ref={anchorRefdownload}
                  aria-controls={opendownload ? "menu-list-grow" : undefined}
                  aria-haspopup="true"
                  onClick={handleToggledownload}
                >
                  <DownloadWhite />
                </Button>
                <Popper
                  open={opendownload}
                  anchorEl={anchorRefdownload.current}
                  role={undefined}
                  transition
                  disablePortal
                  className="downloadtoggle"
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom"
                            ? "center top"
                            : "center bottom",
                      }}
                      className="downloadmenu"
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClosedownload}>
                          <MenuList
                            autoFocusItem={opendownload}
                            id="menu-list-grow"
                            onKeyDown={handleListKeyDowndownload}
                          >
                            <MenuItem onClick={handleClosedownload}>
                              Download Resume
                            </MenuItem>

                            <MenuItem onClick={handleOpenProfileModal}>
                              Download JIE Profile
                            </MenuItem>
                            <Modal
                              aria-labelledby="transition-modal-title"
                              aria-describedby="transition-modal-description"
                              className="material-modal"
                              open={openProfileModal}
                              onClose={handleCloseProfileModal}
                              closeAfterTransition
                              BackdropComponent={Backdrop}
                              BackdropProps={{
                                timeout: 500,
                              }}
                            >
                              <Fade in={openProfileModal}>
                                <div className="modalcontsmall">
                                  <DownloadOrange />
                                  <Typography variant="h6">
                                    Are you sure you want to download the
                                    candidate?
                                  </Typography>
                                  <Box
                                    component="div"
                                    className="button_confirm_area"
                                  >
                                    <Button
                                      className="lightbluecolor border8"
                                      onClick={handleCloseProfileModal}
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
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </Box>
              <Box component="div" className="dis_flex width_full mt-2">
                <Box
                  component="div"
                  className="notinterestedline2 dis_flex marginautoright"
                >
                  <NotInterest />
                  <Typography
                    variant="span"
                    className="font12 fontweight700 italic mt-2 block blackcolortext"
                  >
                    May not be interested in this job anymore.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box component="div" className="middiv">
          <Box component="div" className="midcont">
            <RuppeeSymbol />
            <Typography variant="span" className="title ms-2 me-2">
              Min. Expected Salary
            </Typography>
            <Typography variant="span" className="text">
              6.5 LPA Min.
            </Typography>
          </Box>
          <Box component="div" className="midcont">
            <ExpSymbol />
            <Typography variant="span" className="title ms-2 me-2">
              Relevant Experience
            </Typography>
            <Typography variant="span" className="text">
              3 Years
            </Typography>
          </Box>
          <Box component="div" className="midcont">
            <NoticeSymbol />
            <Typography variant="span" className="title ms-2 me-2">
              Notice Period
            </Typography>
            <Typography variant="span" className="text">
              Join in 45 Days
            </Typography>
          </Box>
          <Box component="div" className="midcont">
            <EmploySymbol />
            <Typography variant="span" className="title ms-2 me-2">
              Employment Type
            </Typography>
            <Typography variant="span" className="text">
              Full Time / Permanent
            </Typography>
          </Box>
          <Box component="div" className="midcont">
            <EduSymbol />
            <Typography variant="span" className="title ms-2 me-2">
              Highest Education
            </Typography>
            <Typography variant="span" className="text">
              B.Sc Chemistry
            </Typography>
          </Box>
          <Box component="div" className="midcont">
            <LocSymbol />
            <Typography variant="span" className="title ms-2 me-2">
              Preferred Location
            </Typography>
            <Typography variant="span" className="text">
              Kolkata
            </Typography>
          </Box>
        </Box>
        <Box component="div" className="botdiv">
          <Box component="div" className="botbuttondiv">
            <Button
              className="sillslistdivarea buttonnohover"
              startIcon={<SkillListIcon />}
            >
              Collaboration
            </Button>
            <Button
              className="sillslistdivarea buttonnohover"
              startIcon={<SkillListIcon />}
            >
              Collaboration
            </Button>
            <Button
              className="sillslistdivarea buttonnohover"
              startIcon={<SkillListIcon />}
            >
              Collaboration
            </Button>
            <Button
              className="sillslistdivarea buttonnohover"
              startIcon={<SkillListIcon />}
            >
              Collaboration
            </Button>
            <Button className="lightbluecolor blackcolortext">More +2</Button>
          </Box>
          <Box component="div" className="optdiv">
            <Box component="div" className="chatdiv">
              <Button
                className="darkbluecolor whitecolortext border8"
                startIcon={<ChatIcon />}
                onClick={handleUnlockChatOptionOpen}
              >
                Chat
              </Button>
            </Box>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className="material-modal"
              open={openmodalUnlockChatOption}
              onClose={handleUnlockChatOptionClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={openmodalUnlockChatOption}>
                <div className="modalcontsmall">
                  <Box component="div" className="dis_flex">
                    <Button
                      className="marginautoright btn-close"
                      onClick={(e) => {
                        handleUnlockChatOptionClose();
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
                  <ChatUnlockIcon />
                  <Typography variant="h6">
                    Unlock the candidate to start Chatting with them
                  </Typography>
                </div>
              </Fade>
            </Modal>
            <Box
              component="div"
              className="dis_flex marginautoright align-items-center"
            >
              <Button className=" redmathcbutton">12% Match</Button>
              <Box component="div" className="dis_flex align-items-center ms-3">
                <EditColorIcon />
                <Typography variant="span" className="font12 ms-2">
                  Last Edited
                </Typography>
                <Typography
                  variant="span"
                  className="font12 fontweight700 ms-3"
                >
                  Just Now
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Dont have enough Credit Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="material-modal"
        open={openmodalNoCredits}
        onClose={handleNoCreditsClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalNoCredits}>
          <NoCreditsModal />
        </Fade>
      </Modal>

      {/* <UsingCreditsModalUnlock/> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="material-modal"
        open={openmodalunlockmodal}
        onClose={handleunlockmodalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalunlockmodal}>
          <Box component="div" className="modalcontsmall pt-4 text-center">
            <UnlockedIcon />
            <Typography
              variant="span"
              id="transition-modal-description"
              className="mb-2 mt-3 font16 text-center block"
            >
              Are you sure you want to Unlock the selected candidate(s)?
            </Typography>
            <Box component="div" className="maincontjobpost">
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
              <Box
                component="div"
                className="dis_flex buttonareadiv"
                justifyContent="space-between"
              >
                <Button
                  className="border8 me-3 lightbluecolor"
                  onClick={(e) => {
                    handleunlockmodalClose();
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
                  onClick={(event) => {
                    handleunlockmodalClose();
                    handleUnlockedSuccessOpen();
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
        open={openmodalUnlockedSuccess}
        onClose={handleUnlockedSuccessClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openmodalUnlockedSuccess}>
          <Box component="div" className="modalcontsmall px-20 text-center">
            <Box component="div" className="dis_flex">
              <Button
                className="marginautoright btn-close"
                onClick={(e) => {
                  handleUnlockedSuccessClose();
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
            <UnlockedIcon />
            <Box component="div" className="maincontjobpost">
              <Typography
                variant="span"
                className="font16 fontweight500 block text-center mt-3"
              >
                Unlocked
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
export default LockedCandidate;

const SkillListIcon = () => {
  return (
    <svg
      id="tick-inside-circle"
      xmlns="http://www.w3.org/2000/svg"
      width="16.869"
      height="16.869"
      viewBox="0 0 16.869 16.869"
    >
      <g id="check-circle-outline">
        <path
          id="Path_4434"
          data-name="Path 4434"
          d="M4.976,6.832,3.8,8.013l3.8,3.8,8.435-8.435L14.845,2.193,7.591,9.447Zm10.206,1.6A6.748,6.748,0,1,1,8.435,1.687a6.578,6.578,0,0,1,1.856.253L11.64.59A10.266,10.266,0,0,0,8.435,0a8.435,8.435,0,1,0,8.435,8.435Z"
          fill="#25bb0d"
        />
      </g>
    </svg>
  );
};

const ChatUnlockIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48.392"
      height="48.392"
      viewBox="0 0 48.392 48.392"
    >
      <g id="Group_694" data-name="Group 694" transform="translate(0.999)">
        <g
          id="Rectangle_454"
          data-name="Rectangle 454"
          transform="translate(0.197 0.197)"
          fill="#fff"
          stroke="#707070"
          stroke-width="1"
          opacity="0"
        >
          <rect width="44" height="44" stroke="none" />
          <rect x="0.5" y="0.5" width="43" height="43" fill="none" />
        </g>
        <g id="chat" transform="translate(-0.999)">
          <path
            id="Path_4024"
            data-name="Path 4024"
            d="M338.068,10.869V7.179a7.089,7.089,0,1,0-14.177-.09v3.781h-.473A1.418,1.418,0,0,0,322,12.287V24.1a1.418,1.418,0,0,0,1.418,1.418H338.54a1.418,1.418,0,0,0,1.418-1.418V12.287a1.418,1.418,0,0,0-1.418-1.418ZM332.4,17.721v2.363a1.418,1.418,0,0,1-2.836,0V17.721a1.418,1.418,0,0,1,0-2.835H332.4a1.418,1.418,0,0,1,0,2.835Zm2.835-6.852h-8.506V7.088a4.253,4.253,0,1,1,8.506,0Z"
            transform="translate(-291.566 0.001)"
            fill="#2a5798"
          />
          <g
            id="Group_7109"
            data-name="Group 7109"
            transform="translate(0 13.421)"
          >
            <path
              id="Path_4025"
              data-name="Path 4025"
              d="M31.19,158.068H7.561a1.418,1.418,0,1,1,0-2.835h20.89a4.231,4.231,0,0,1-.853-2.552v-1.229H7.561a1.418,1.418,0,0,1,0-2.835H27.6V142H1.418A1.418,1.418,0,0,0,0,143.418v32.135a1.418,1.418,0,0,0,2.42,1L7.676,171.3H37.334a1.418,1.418,0,0,0,1.418-1.418V156.934H32.58A1.418,1.418,0,0,1,31.19,158.068Zm0,6.616H7.561a1.418,1.418,0,0,1,0-2.835H31.19a1.418,1.418,0,0,1,0,2.835Z"
              transform="translate(0 -142)"
              fill="#f6b333"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

const NotInterest = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20.565"
      height="18.848"
      viewBox="0 0 20.565 18.848"
      className="me-3 top-1"
    >
      <g id="post-it" transform="translate(0 -21.38)">
        <path
          id="Path_4424"
          data-name="Path 4424"
          d="M15.934,99.785,10.683,86.506a.428.428,0,0,0-.348-.267L2.2,85.281a.422.422,0,0,0-.477.359l0,.016L0,99.363a.428.428,0,0,0,.369.48h.01l14.993,1.713h.049a.428.428,0,0,0,.428-.388l.111-1.188A.427.427,0,0,0,15.934,99.785Z"
          transform="translate(0 -61.33)"
          fill="#ffa000"
        />
        <path
          id="Path_4425"
          data-name="Path 4425"
          d="M100.793,85.674a.428.428,0,0,0-.475-.376h0l-3.684.434-10.88,1.28a.428.428,0,0,0-.378.469l1.285,13.708a.428.428,0,0,0,.428.388h.049l14.993-1.713a.428.428,0,0,0,.377-.474v-.005Z"
          transform="translate(-81.941 -61.349)"
          fill="#ffe082"
        />
        <path
          id="Path_4426"
          data-name="Path 4426"
          d="M299.167,98.909a.428.428,0,0,1-.3-.732l2.142-2.142a.428.428,0,1,1,.616.6l-.011.011-2.142,2.142A.428.428,0,0,1,299.167,98.909Z"
          transform="translate(-286.741 -71.532)"
          fill="#455a64"
        />
        <circle
          id="Ellipse_151"
          data-name="Ellipse 151"
          cx="2.142"
          cy="2.142"
          r="2.142"
          transform="translate(13.711 21.38)"
          fill="#f44336"
        />
      </g>
    </svg>
  );
};

const UnlockedIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="62.26"
      height="70.483"
      viewBox="0 0 62.26 70.483"
    >
      <g id="Group_694" data-name="Group 694" transform="translate(0.001 2.34)">
        <g
          id="Rectangle_454"
          data-name="Rectangle 454"
          transform="translate(0.13 1.598)"
          fill="#fff"
          stroke="#707070"
          stroke-width="1"
          opacity="0"
        >
          <rect width="62" height="62" stroke="none" />
          <rect x="0.5" y="0.5" width="61" height="61" fill="none" />
        </g>
        <g
          id="profile_1_"
          data-name="profile (1)"
          transform="translate(-0.001 -2.34)"
        >
          <g
            id="Group_7063"
            data-name="Group 7063"
            transform="translate(1.175 1.175)"
          >
            <path
              id="Path_4009"
              data-name="Path 4009"
              d="M89.087,9.882V70.967H39.749A2.357,2.357,0,0,1,37.4,68.618V9.882a2.357,2.357,0,0,1,2.349-2.349H86.738A2.357,2.357,0,0,1,89.087,9.882Z"
              transform="translate(-37.4 -7.533)"
              fill="#607d8b"
            />
            <path
              id="Path_4010"
              data-name="Path 4010"
              d="M85.563,9.882V70.967H39.749A2.357,2.357,0,0,1,37.4,68.618V9.882a2.357,2.357,0,0,1,2.349-2.349H83.214A2.356,2.356,0,0,1,85.563,9.882Z"
              transform="translate(-37.4 -7.533)"
              fill="#f6b333"
            />
            <path
              id="Path_4011"
              data-name="Path 4011"
              d="M144.943,65.471a15.271,15.271,0,0,1-15.271,15.271,14.5,14.5,0,0,1-1.762-.106,15.271,15.271,0,0,1,0-30.331,14.5,14.5,0,0,1,1.762-.106A15.271,15.271,0,0,1,144.943,65.471Z"
              transform="translate(-103.828 -44.326)"
              fill="#1566c0"
            />
            <path
              id="Path_4012"
              data-name="Path 4012"
              d="M141.2,66.132A15.282,15.282,0,0,1,127.731,81.3H127.7c-.2-.024-.4-.047-.6-.082-.329-.047-.658-.106-.975-.176l-.423-.106c-.329-.082-.658-.176-.975-.282s-.634-.223-.94-.341c-.27-.106-.529-.223-.787-.341-.117-.059-.235-.106-.341-.165-.294-.141-.564-.294-.846-.446-.341-.2-.67-.411-1-.634A15.271,15.271,0,0,1,127.7,50.966,15.272,15.272,0,0,1,141.2,66.132Z"
              transform="translate(-103.614 -44.987)"
              fill="#2296f3"
            />
            <path
              id="Path_4014"
              data-name="Path 4014"
              d="M324.826,350.042v12.922c0,3.893-3.617,7.048-8.08,7.048h-6.733c-4.462,0-8.08-3.156-8.08-7.048V350.042a1.269,1.269,0,0,1,1.347-1.175h20.2A1.269,1.269,0,0,1,324.826,350.042Z"
              transform="translate(-265.517 -301.878)"
              fill="#2a5798"
            />
            <path
              id="Path_4015"
              data-name="Path 4015"
              d="M222.915,242.11a15.171,15.171,0,0,1-8.6,2.655,13.887,13.887,0,0,1-1.727-.106,15.246,15.246,0,0,0,8.881-4.252A3.358,3.358,0,0,1,222.915,242.11Z"
              transform="translate(-188.472 -208.349)"
              fill="#fdd834"
            />
            <path
              id="Path_4016"
              data-name="Path 4016"
              d="M178.679,105.889v.975a1.9,1.9,0,0,1-1.339,1.844,6.336,6.336,0,0,1-3.3,4.217.559.559,0,0,0-.317.493v.493a1.1,1.1,0,0,0,.6.975l3.606,1.844c.071.035.141.071.2.106a15.247,15.247,0,0,1-8.881,4.252,5.854,5.854,0,0,1-.634-.082c-.329-.047-.658-.106-.975-.176l-.423-.106c-.329-.082-.658-.176-.975-.282s-.634-.223-.94-.341c-.27-.106-.529-.223-.787-.341-.117-.059-.235-.106-.341-.165-.294-.141-.564-.294-.846-.446-.341-.2-.67-.411-1-.634a3.172,3.172,0,0,1,1.5-1.809l3.771-1.856a1.12,1.12,0,0,0,.623-.987v-.446a.559.559,0,0,0-.317-.493,6.467,6.467,0,0,1-3.395-4.217,1.836,1.836,0,0,1-1.245-1.844v-.975a1.835,1.835,0,0,1,.916-1.715,9.983,9.983,0,0,1,.728-2.925,5.005,5.005,0,0,0,.4-2.949,8.481,8.481,0,0,1-.141-.975.191.191,0,0,1,.341-.141,5.485,5.485,0,0,0,1.116.975,5.915,5.915,0,0,0,3.783.881c.165-.012.341-.012.517-.012,3.888,0,6.32,1.48,6.743,5.145A1.9,1.9,0,0,1,178.679,105.889Z"
              transform="translate(-145.129 -84.78)"
              fill="#f6b333"
            />
            <circle
              id="Ellipse_147"
              data-name="Ellipse 147"
              cx="2.349"
              cy="2.349"
              r="2.349"
              transform="translate(45.814 52.862)"
              fill="#f6b333"
            />
          </g>
          <g id="Group_7064" data-name="Group 7064">
            <path
              id="Path_4017"
              data-name="Path 4017"
              d="M113.67,72.463a1.064,1.064,0,0,0,.125.093,16.366,16.366,0,0,0,18.712-.052h.008a16.446,16.446,0,1,0-18.845-.035Zm2.388-1.258a1.922,1.922,0,0,1,.434-.345l3.778-1.853a2.3,2.3,0,0,0,1.272-2.044v-.446a1.728,1.728,0,0,0-.971-1.547,5.271,5.271,0,0,1-2.782-3.47,1.175,1.175,0,0,0-.782-.814.712.712,0,0,1-.422-.724v-.975a.732.732,0,0,1,.291-.677,1.174,1.174,0,0,0,.619-.922,8.812,8.812,0,0,1,.633-2.566,6.526,6.526,0,0,0,.563-2.247,7.275,7.275,0,0,0,3.947.735c.137-.011.284-.011.431-.009,4.523,0,5.355,2.194,5.576,4.106a1.174,1.174,0,0,0,.617.9.724.724,0,0,1,.385.677v.975a.724.724,0,0,1-.511.722,1.175,1.175,0,0,0-.789.822,5.187,5.187,0,0,1-2.691,3.467,1.724,1.724,0,0,0-.966,1.544v.493a2.265,2.265,0,0,0,1.245,2.02l3.61,1.856a2.264,2.264,0,0,1,.532.383,13.979,13.979,0,0,1-14.019-.059v-.006Zm7.058-26.28a14.089,14.089,0,0,1,8.928,25,4.57,4.57,0,0,0-1.434-1.141l-3.57-1.774v-.117a7.39,7.39,0,0,0,3.416-4.242A3.091,3.091,0,0,0,132,59.962v-.975a3.068,3.068,0,0,0-1.1-2.393c-.47-2.692-2.261-5.639-7.831-5.639-.206,0-.411,0-.61.015a4.8,4.8,0,0,1-3.038-.686,4.364,4.364,0,0,1-.866-.751,1.365,1.365,0,0,0-1.6-.382,1.339,1.339,0,0,0-.822,1.368,9.657,9.657,0,0,0,.157,1.1,3.86,3.86,0,0,1-.325,2.272,10.929,10.929,0,0,0-.751,2.729,3.089,3.089,0,0,0-.988,2.372v.975a3.063,3.063,0,0,0,1.451,2.69A7.613,7.613,0,0,0,119.2,66.91l-3.8,1.862a4.367,4.367,0,0,0-1.292,1.083,14.088,14.088,0,0,1,9-24.93Z"
              transform="translate(-96.098 -36.703)"
              fill="#2a5798"
            />
            <path
              id="Path_4018"
              data-name="Path 4018"
              d="M89.777,46.988H88.6V43.464a9.4,9.4,0,0,0-4.7-8.127V3.524A3.524,3.524,0,0,0,80.38,0H33.391a3.524,3.524,0,0,0-3.524,3.524V62.26a3.524,3.524,0,0,0,3.524,3.524h33.7a8.223,8.223,0,0,0,7.418,4.7h9.4a8.232,8.232,0,0,0,8.223-8.223V49.338a2.35,2.35,0,0,0-2.349-2.349Zm-3.524-3.524v3.524h-14.1V43.464a7.048,7.048,0,1,1,14.1,0ZM33.391,63.434a1.175,1.175,0,0,1-1.175-1.175V3.524a1.175,1.175,0,0,1,1.175-1.175H80.379a1.175,1.175,0,0,1,1.175,1.175V34.376a9.361,9.361,0,0,0-11.747,9.089v3.524H68.632a2.349,2.349,0,0,0-2.349,2.349V62.26a8.246,8.246,0,0,0,.094,1.175H33.391Zm50.512,4.7h-9.4a5.884,5.884,0,0,1-5.756-4.7h2.232a1.175,1.175,0,1,0,0-2.349H68.632V58.736h2.349a1.175,1.175,0,1,0,0-2.349H68.632V54.037h2.349a1.175,1.175,0,1,0,0-2.349H68.632v-2.35H89.777v2.349H87.428a1.175,1.175,0,0,0,0,2.349h2.349v2.349H87.428a1.175,1.175,0,1,0,0,2.349h2.349v2.349H87.428a1.175,1.175,0,1,0,0,2.349H89.66A5.884,5.884,0,0,1,83.9,68.133Z"
              transform="translate(-29.867)"
              fill="#2a5798"
            />
            <path
              id="Path_4019"
              data-name="Path 4019"
              d="M366.2,384a3.516,3.516,0,0,0-1.175,6.832V393.4a1.175,1.175,0,1,0,2.349,0v-2.566A3.516,3.516,0,0,0,366.2,384Zm0,4.7a1.175,1.175,0,1,1,1.175-1.175A1.175,1.175,0,0,1,366.2,388.7Z"
              transform="translate(-316.861 -331.138)"
              fill="#fff"
            />
            <path
              id="Path_4020"
              data-name="Path 4020"
              d="M181.671,307.2h-14.1a1.175,1.175,0,0,0,0,2.349h14.1a1.175,1.175,0,0,0,0-2.349Z"
              transform="translate(-147.605 -264.91)"
              fill="#2a5798"
            />
            <path
              id="Path_4021"
              data-name="Path 4021"
              d="M180.5,392.533H167.575a1.175,1.175,0,1,0,0,2.349H180.5a1.175,1.175,0,0,0,0-2.349Z"
              transform="translate(-147.605 -338.496)"
              fill="#2a5798"
            />
            <path
              id="Path_4022"
              data-name="Path 4022"
              d="M114.269,349.867H90.775a1.175,1.175,0,1,0,0,2.349h23.494a1.175,1.175,0,1,0,0-2.349Z"
              transform="translate(-81.377 -301.704)"
              fill="#2a5798"
            />
            <rect
              id="Rectangle_1935"
              data-name="Rectangle 1935"
              width="7"
              height="8.223"
              transform="translate(54.13 38.766)"
              fill="#fff"
            />
          </g>
        </g>
      </g>
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

const UnlockIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13.847"
      height="18.463"
      viewBox="0 0 13.847 18.463"
    >
      <path
        id="Path_3801"
        data-name="Path 3801"
        d="M17.116,8.5V6.193a5.193,5.193,0,0,0-10.385,0V8.5A1.7,1.7,0,0,0,5,10.231v7.5a1.736,1.736,0,0,0,1.731,1.731H17.116a1.736,1.736,0,0,0,1.731-1.731v-7.5A1.7,1.7,0,0,0,17.116,8.5ZM7.885,6.193a4.039,4.039,0,0,1,8.077,0V8.5H7.885ZM12.5,14.732V16a.577.577,0,0,1-1.154,0V14.732a1.681,1.681,0,0,1-1.154-1.615,1.731,1.731,0,0,1,3.462,0A1.681,1.681,0,0,1,12.5,14.732Z"
        transform="translate(-5 -1)"
        fill="#f6b333"
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

const EditColorIcon = () => {
  return (
    <svg
      className="editcoloricon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs></defs>
      <g transform="translate(-183.823 -389.823)">
        <g class="a" transform="translate(183.823 389.823)">
          <rect class="c" width="24" height="24" />
          <rect class="d" x="0.5" y="0.5" width="23" height="23" />
        </g>
        <g transform="translate(186.823 392.823)">
          <g transform="translate(-213 -129)">
            <g transform="translate(213 129)">
              <path
                class="b"
                d="M0,14.2V18H3.8l11-11.1L11,3.1,0,14.2ZM17.7,4a.967.967,0,0,0,0-1.4L15.4.3A.967.967,0,0,0,14,.3L12.2,2.1,16,5.9,17.7,4Z"
              />
            </g>
          </g>
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

const RuppeeSymbol = () => {
  return (
    <svg
      className="rupee_symbol"
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
        class="a"
        d="M162.307,131.529H161.4a2.624,2.624,0,0,0-.49-.981h1.4a.49.49,0,1,0,0-.981h-4.757a.49.49,0,1,0,0,.981h1.373a1.717,1.717,0,0,1,1.471.981h-2.844a.49.49,0,1,0,0,.981h2.844a2.085,2.085,0,0,1-.392.687,1.643,1.643,0,0,1-1.079.539h-1.373a.46.46,0,0,0-.343.809l3.408,3.212a.588.588,0,0,0,.343.123.49.49,0,0,0,.343-.147.441.441,0,0,0,0-.662l-2.526-2.354h.147a2.6,2.6,0,0,0,1.79-.834,2.82,2.82,0,0,0,.687-1.373h.907a.49.49,0,0,0,0-.981Z"
        transform="translate(-149.928 -123.735)"
      />
    </svg>
  );
};

const ExpSymbol = () => {
  return (
    <svg
      className="exp_symbol"
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
        class="a"
        d="M2.769,1.816l-2-2h-1l1,2,1,1Z"
        transform="translate(9.231 9.184)"
      />
      <path
        class="a"
        d="M1.143.139l-1,1,4,4v-2Z"
        transform="translate(5.857 5.861)"
      />
      <path
        class="a"
        d="M3.753.153l-3,3-1,2h1l4-4Z"
        transform="translate(9.247 5.847)"
      />
      <path
        class="a"
        d="M-.35,1.816l1,1,1-1v-2Z"
        transform="translate(8.35 9.184)"
      />
      <path
        class="a"
        d="M1.386.482h-1v1h1Z"
        transform="translate(9.614 3.518)"
      />
      <path
        class="a"
        d="M-.417.482h1v1h-1Z"
        transform="translate(9.417 3.518)"
      />
      <path
        class="a"
        d="M1.386-.321h-1v1h1Z"
        transform="translate(9.614 15.321)"
      />
      <path
        class="a"
        d="M-.417-.321h1v1h-1Z"
        transform="translate(9.417 15.321)"
      />
      <path
        class="a"
        d="M0,0H1.161V1.161H0Z"
        transform="translate(3.518 10.58) rotate(-90)"
      />
      <path
        class="a"
        d="M0,0H1.161V1.161H0Z"
        transform="translate(15.321 10.58) rotate(-90)"
      />
    </svg>
  );
};

const NoticeSymbol = () => {
  return (
    <svg
      className="notice_symbol"
      xmlns="http://www.w3.org/2000/svg"
      width="17.069"
      height="18.369"
      viewBox="0 0 17.069 18.369"
    >
      <defs></defs>
      <path
        class="a"
        d="M408.629,492.36H396.61a1.738,1.738,0,0,1-1.236-.6,1.912,1.912,0,0,1-.542-1.329q0-4.287,0-8.574a.982.982,0,0,1,.014-.232c.054-.133.126-.047.18-.007.207.152.4.317.6.478,1.616,1.308,3.241,2.6,4.856,3.914a2.005,2.005,0,0,0,2.645,0q1.7-1.372,3.406-2.742c.75-.6,1.5-1.209,2.247-1.81.446-.374.9-.739,1.358-1.1.063-.05.139-.145.211,0a.894.894,0,0,1,.016.232q0,4.9,0,9.8a2.041,2.041,0,0,1-1.289,1.879C408.934,492.326,408.777,492.316,408.629,492.36Z"
        transform="translate(-393.302 -473.991)"
      />
      <path
        class="b"
        d="M364.507,467.87c-.127-.045-.255-.086-.381-.134a1.94,1.94,0,0,1-1.269-1.8c-.011-1.589,0-3.177-.005-4.766q0-2.616,0-5.232a.3.3,0,0,1,.128-.269c.466-.362.924-.735,1.385-1.1a.3.3,0,0,1,.057.233c0,.313,0,.625,0,.938,0,.446-.011.893.015,1.339,0,2.965,0,5.929,0,8.894a1.887,1.887,0,0,0,.928,1.6,2.958,2.958,0,0,0,.792.3Z"
        transform="translate(-362.85 -449.501)"
      />
      <path
        class="b"
        d="M498.8,349.79c.239-.2.479-.388.716-.586a2.58,2.58,0,0,1,.967-.454h.646a2.588,2.588,0,0,1,.954.444c.242.2.487.4.731.6a.3.3,0,0,1-.236.058q-1.771,0-3.542,0A.3.3,0,0,1,498.8,349.79Z"
        transform="translate(-492.301 -348.75)"
      />
      <path
        class="c"
        d="M394.545,480.324a.211.211,0,0,1-.072-.153c.006-.391.007-.782.01-1.173a1.049,1.049,0,0,1,.41.272c.9.725,1.8,1.444,2.694,2.169.79.639,1.585,1.27,2.37,1.915a2.476,2.476,0,0,0,1.227.628,1.9,1.9,0,0,0,1.47-.373c.618-.471,1.214-.969,1.82-1.455q1.083-.87,2.164-1.743.838-.674,1.678-1.346c.051-.041.122-.157.192-.008.033.342.01.684.013,1.025a.35.35,0,0,1-.051.168l-3.554,2.861c-.739.595-1.467,1.2-2.218,1.781a2.026,2.026,0,0,1-2.561-.07c-1.016-.831-2.044-1.647-3.066-2.47l-2.466-1.988A.651.651,0,0,0,394.545,480.324Z"
        transform="translate(-392.96 -472.753)"
      />
      <path
        class="b"
        d="M574.193,647.313c0,.234-.2.362-.39.236-.232-.154-.444-.337-.662-.511-.649-.519-1.3-1.041-1.946-1.559-.172-.137-.225-.266-.148-.407a.268.268,0,0,1,.422-.1c.566.452,1.128.909,1.693,1.363.277.223.559.442.834.667C574.094,647.089,574.219,647.16,574.193,647.313Z"
        transform="translate(-561.055 -630.744)"
      />
      <path
        class="b"
        d="M443.946,647.4c-.026-.13.065-.2.148-.264q1.094-.884,2.19-1.765c.111-.089.226-.174.335-.265.163-.137.329-.141.439,0s.074.312-.1.448c-.306.245-.609.492-.915.737q-.806.646-1.613,1.289c-.12.1-.249.173-.4.044A.222.222,0,0,1,443.946,647.4Z"
        transform="translate(-440.063 -630.825)"
      />
      <path
        class="b"
        d="M683.259,454.815q-.006-.626-.012-1.251c-.068-.1-.037-.206-.045-.31a1.986,1.986,0,0,0-.1-.809.227.227,0,0,1-.022-.172c.055-.009.088.029.125.058l1.512,1.212a.091.091,0,0,1,.044.09,5.025,5.025,0,0,0-.632.48C683.831,454.338,683.548,454.58,683.259,454.815Z"
        transform="translate(-667.75 -447.319)"
      />
      <path
        class="d"
        d="M408.463,375.28q0,.164,0,.329-1.015.815-2.03,1.63c-.708.571-1.412,1.147-2.12,1.718-.55.444-1.089.906-1.659,1.324a1.991,1.991,0,0,1-2.453-.079c-.567-.461-1.146-.908-1.717-1.365s-1.119-.9-1.679-1.356l-2.317-1.872q0-.592-.01-1.183,0-1.282,0-2.564a1.419,1.419,0,0,1,1.106-1.4,2.079,2.079,0,0,1,.476-.059q1.7,0,3.407,0h4.014a1.715,1.715,0,0,1,.54.036.108.108,0,0,1-.1.034c.023.008-.021,0-.005,0a.983.983,0,0,1,.651.941c.016.466,0,.932,0,1.4a1.4,1.4,0,0,0,1.481,1.486c.46,0,.92,0,1.381,0a1.087,1.087,0,0,1,.931.547A.9.9,0,0,1,408.463,375.28Z"
        transform="translate(-392.966 -369.363)"
      />
      <path
        class="c"
        d="M593.538,376.081a1.064,1.064,0,0,0-.518-.789.885.885,0,0,0-.473-.14c-.49,0-.98,0-1.47,0a1.439,1.439,0,0,1-1.476-1.482c0-.43-.013-.861,0-1.291a1.077,1.077,0,0,0-.752-1.129c.068,0,.1-.007.139-.008s.072,0,.107,0a1.385,1.385,0,0,1,.9.388c1.062,1.045,2.111,2.1,3.163,3.158a1.184,1.184,0,0,1,.208.332A1.769,1.769,0,0,1,593.538,376.081Z"
        transform="translate(-578.041 -370.165)"
      />
      <path
        class="e"
        d="M523.969,406.731c-.021.555.031,1.112-.026,1.666a.844.844,0,0,1-.87.76.86.86,0,0,1-.862-.752,4.531,4.531,0,0,1-.018-.626q0-1.255,0-2.51a.9.9,0,0,1,.662-.967.861.861,0,0,1,1.088.728C524,405.6,523.948,406.164,523.969,406.731Z"
        transform="translate(-514.568 -401.614)"
      />
      <path
        class="e"
        d="M523.206,524.095a.872.872,0,0,1,.885.865.881.881,0,1,1-1.762.008A.873.873,0,0,1,523.206,524.095Z"
        transform="translate(-514.7 -515.707)"
      />
    </svg>
  );
};

const EmploySymbol = () => {
  return (
    <svg
      className="emp_symbol"
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
          class="b"
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

const EduSymbol = () => {
  return (
    <svg
      className="edu_symbol"
      xmlns="http://www.w3.org/2000/svg"
      width="18.248"
      height="15.478"
      viewBox="0 0 18.248 15.478"
    >
      <defs></defs>
      <g transform="translate(-353.416 -382.255)">
        <path
          class="a"
          d="M356.876,387.695c-.082-.078-.2-.073-.291-.141.046-.076.127-.08.2-.093,1.629-.278,3.258-.561,4.889-.829.2,0,.388.044.583.062a3.563,3.563,0,0,0,1.472-.18,1.118,1.118,0,0,0,.429-.247.314.314,0,0,0,.012-.5,1.129,1.129,0,0,0-.541-.3,3.722,3.722,0,0,0-2.378.073,3.356,3.356,0,0,0-.461.3c-.871.179-1.749.317-2.624.476q-1.47.266-2.941.522a1.01,1.01,0,0,0-.289.084.288.288,0,0,1-.224-.016c-.294-.11-.588-.219-.88-.331a.563.563,0,0,1-.418-.415v-.321a1.149,1.149,0,0,1,.66-.436q4.087-1.541,8.17-3.091a.785.785,0,0,1,.586,0q4.2,1.592,8.4,3.176a.529.529,0,0,1,.244.918,1.048,1.048,0,0,1-.3.15l-2.8,1.058a.4.4,0,0,0-.174.083,1.382,1.382,0,0,1-.453.2c-1.636.623-3.275,1.238-4.912,1.861a.832.832,0,0,1-.622-.005q-2.563-.975-5.129-1.941A.56.56,0,0,1,356.876,387.695Z"
          transform="translate(0 0)"
        />
        <path
          class="b"
          d="M353.416,629.056a12.222,12.222,0,0,0,.247-1.21c.151-.76.291-1.522.436-2.283.1-.014.153.055.218.1a1.194,1.194,0,0,0,1.471-.021c.056-.042.107-.1.189-.082l.612,3.214c0,.012,0,.024,0,.035.066.367.066.363-.312.354a.171.171,0,0,1-.164-.1c-.1-.17-.2-.338-.3-.506-.005-.008-.02-.011-.037-.02-.095.163-.2.323-.283.491a.215.215,0,0,1-.235.14c-.2-.017-.437.069-.593-.032s-.212-.318-.313-.485l-.081-.138c-.1.17-.2.319-.276.48a.26.26,0,0,1-.3.175,2.1,2.1,0,0,0-.285,0Z"
          transform="translate(0 -231.452)"
        />
        <path
          class="c"
          d="M419.143,493.9c.394.108.768.274,1.149.417q1.538.577,3.073,1.162c.4.151.8.3,1.2.454a.67.67,0,0,0,.5,0l3.871-1.463,1.411-.535a1.157,1.157,0,0,1,.136-.034,13.92,13.92,0,0,1,.249,3.239,3.441,3.441,0,0,1-.125.7,1.487,1.487,0,0,1-.73.837,6.4,6.4,0,0,1-2.241.818,14.382,14.382,0,0,1-6.022-.082,5.782,5.782,0,0,1-2.023-.842,1.545,1.545,0,0,1-.658-1.147,9.706,9.706,0,0,1,.052-2.4C419.022,494.653,419.087,494.279,419.143,493.9Z"
          transform="translate(-62.267 -106.209)"
        />
        <path
          class="c"
          d="M377.388,461.356q.16-2.462.319-4.924c0-.065,0-.13,0-.2.094-.162.27-.121.408-.147.782-.149,1.566-.281,2.35-.419l2.734-.481.4-.07c0,.406.1.535.5.7a1.018,1.018,0,0,1,.386.165c-.451.081-.9.165-1.353.243-.737.127-1.476.25-2.213.377-.511.088-1.022.178-1.533.268-.129.02-.257.038-.386.061-.3.053-.3.054-.32.369q-.132,2.051-.268,4.1a.154.154,0,0,1-.152.006,1.3,1.3,0,0,0-.761-.03A.113.113,0,0,1,377.388,461.356Z"
          transform="translate(-22.804 -69.315)"
        />
        <path
          class="a"
          d="M361.536,581.707a1.481,1.481,0,0,1,1.028.044,1.415,1.415,0,0,1,.611.694,1.24,1.24,0,0,1-.192,1.241.757.757,0,0,0-.053.091,1.32,1.32,0,0,1-1.878,0,2.584,2.584,0,0,1-.253-.445,1.261,1.261,0,0,1,.614-1.558Z"
          transform="translate(-6.952 -189.666)"
        />
        <path
          class="b"
          d="M504.767,445.375a1.942,1.942,0,0,1-.741-.312.4.4,0,0,1-.145-.55,1.794,1.794,0,0,1,1.13-.495,3.9,3.9,0,0,1,1.568.069,1.592,1.592,0,0,1,.671.312.383.383,0,0,1-.013.655,1.724,1.724,0,0,1-.694.307A4,4,0,0,1,504.767,445.375Z"
          transform="translate(-143.082 -58.709)"
        />
      </g>
    </svg>
  );
};

const LocSymbol = () => {
  return (
    <svg
      className="loc_symbol"
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

const DownloadOrange = () => {
  return (
    <svg
      className="download-orange"
      xmlns="http://www.w3.org/2000/svg"
      width="28.141"
      height="38.067"
      viewBox="0 0 27.141 35.067"
    >
      <defs></defs>
      <path
        class="a"
        d="M346.943,284.5H361.97c.006.137.017.273.017.41,0,1.784,0,3.568,0,5.352a5.031,5.031,0,0,0,.093,1.022,3.859,3.859,0,0,0,3.841,3.093c1.715.012,3.431,0,5.146,0h.4v.475q0,10.48,0,20.961c0,.171,0,.343-.012.514a3.389,3.389,0,0,1-3.394,3.232q-10.154.011-20.309,0a3.4,3.4,0,0,1-3.422-3.419q-.008-14.151,0-28.3a3.164,3.164,0,0,1,1.263-2.62A9.1,9.1,0,0,1,346.943,284.5Zm11.808,22.548-.1-.06v-.408q0-4.872,0-9.743a2.749,2.749,0,0,0-.029-.443.724.724,0,0,0-.724-.641.74.74,0,0,0-.721.654,2.622,2.622,0,0,0-.013.376q0,4.94,0,9.88v.429c-.144-.148-.224-.228-.3-.31q-1.835-1.971-3.671-3.941a2.116,2.116,0,0,0-.328-.3.581.581,0,0,0-.734-.029,1.033,1.033,0,0,0-.369.634,1.09,1.09,0,0,0,.31.682c1.7,1.843,3.407,3.671,5.116,5.5.513.549.918.541,1.44-.019l4.328-4.642c.281-.3.565-.6.841-.9a.753.753,0,1,0-1.076-1.027c-.04.041-.078.083-.117.125q-1.823,1.958-3.646,3.917C358.879,306.867,358.818,306.962,358.751,307.051Zm-.858,7.586h7.37c.672,0,1.027-.255,1.029-.736s-.35-.744-1.02-.744q-7.37,0-14.74,0a2.142,2.142,0,0,0-.443.034.724.724,0,0,0-.444,1.106.857.857,0,0,0,.809.341Q354.173,314.633,357.893,314.636Z"
        transform="translate(-344.334 -284.503)"
      />
      <path
        class="b"
        d="M629.7,308.163c-1.663,0-3.241.037-4.816-.012a2.287,2.287,0,0,1-2.12-2.3c-.039-1.611-.011-3.223-.01-4.834,0-.018.018-.036.049-.093Z"
        transform="translate(-603.599 -299.797)"
      />
    </svg>
  );
};
const DownloadWhite = () => {
  return (
    <svg
      className="download-white"
      xmlns="http://www.w3.org/2000/svg"
      width="17.141"
      height="25.067"
      viewBox="0 0 27.141 35.067"
    >
      <defs></defs>
      <path
        class="a"
        d="M346.943,284.5H361.97c.006.137.017.273.017.41,0,1.784,0,3.568,0,5.352a5.031,5.031,0,0,0,.093,1.022,3.859,3.859,0,0,0,3.841,3.093c1.715.012,3.431,0,5.146,0h.4v.475q0,10.48,0,20.961c0,.171,0,.343-.012.514a3.389,3.389,0,0,1-3.394,3.232q-10.154.011-20.309,0a3.4,3.4,0,0,1-3.422-3.419q-.008-14.151,0-28.3a3.164,3.164,0,0,1,1.263-2.62A9.1,9.1,0,0,1,346.943,284.5Zm11.808,22.548-.1-.06v-.408q0-4.872,0-9.743a2.749,2.749,0,0,0-.029-.443.724.724,0,0,0-.724-.641.74.74,0,0,0-.721.654,2.622,2.622,0,0,0-.013.376q0,4.94,0,9.88v.429c-.144-.148-.224-.228-.3-.31q-1.835-1.971-3.671-3.941a2.116,2.116,0,0,0-.328-.3.581.581,0,0,0-.734-.029,1.033,1.033,0,0,0-.369.634,1.09,1.09,0,0,0,.31.682c1.7,1.843,3.407,3.671,5.116,5.5.513.549.918.541,1.44-.019l4.328-4.642c.281-.3.565-.6.841-.9a.753.753,0,1,0-1.076-1.027c-.04.041-.078.083-.117.125q-1.823,1.958-3.646,3.917C358.879,306.867,358.818,306.962,358.751,307.051Zm-.858,7.586h7.37c.672,0,1.027-.255,1.029-.736s-.35-.744-1.02-.744q-7.37,0-14.74,0a2.142,2.142,0,0,0-.443.034.724.724,0,0,0-.444,1.106.857.857,0,0,0,.809.341Q354.173,314.633,357.893,314.636Z"
        transform="translate(-344.334 -284.503)"
      />
      <path
        class="b"
        d="M629.7,308.163c-1.663,0-3.241.037-4.816-.012a2.287,2.287,0,0,1-2.12-2.3c-.039-1.611-.011-3.223-.01-4.834,0-.018.018-.036.049-.093Z"
        transform="translate(-603.599 -299.797)"
      />
    </svg>
  );
};
const ArrowWhite = () => {
  return (
    <svg
      className="arrow-white ms-1"
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="5"
      viewBox="0 0 16 9.796"
    >
      <defs></defs>
      <g transform="translate(16) rotate(90)">
        <path
          class="a"
          d="M14.656,0H1.346A1.419,1.419,0,0,0,.4,2.4L7.05,9.382a1.293,1.293,0,0,0,1.9,0L15.6,2.4A1.416,1.416,0,0,0,14.656,0Z"
          transform="matrix(0, -1, 1, 0, 0, 16)"
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
