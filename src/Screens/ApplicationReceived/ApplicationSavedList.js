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
} from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import ProfileDP from "../../images/profiledp.png";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";

require("dotenv").config();
const BASE_URL = process.env.REACT_APP_BASE_URL;

function ApplicationSavedList(props) {
  const [open] = React.useState(false);
  const anchorRef = React.useRef(null);

  const [openProfileModal, setOpenProfileModal] = React.useState(false);

  const handleOpenProfileModal = () => {
    setOpenProfileModal(true);
  };

  const handleCloseProfileModal = () => {
    setOpenProfileModal(false);
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

  const [openshortlist, setOpenshortlist] = React.useState(false);

  const handleOpenshortlist = (e) => {
    setOpenshortlist(true);
    e.stopPropagation();
  };

  const handleCloseshortlist = (e) => {
    setOpenshortlist(false);
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

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Box
      component="div"
      className="canddiv"
      variant="contained"
      color="primary"
      onClick={props.unlockcandidatepopper}
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
              <img src={BASE_URL + ProfileDP} alt="" />
              <Box component="div" className="grncircle"></Box>
            </Box>
            <Box component="div" className="canddet">
              <Typography variant="span" className="name">
                Dinah Drake
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
              {/* <Button className="darkbluecolor whitecolortext border8">
                    Unlock
                </Button>
                <Button startIcon={<InfoIcon/>} className="infodiv2 me-0 ms-0"></Button> */}
              <Button
                startIcon={<TickGreen />}
                className="greencolor whitecolortext border8"
                onClick={handleOpenshortlist}
              >
                Shortlist
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className="material-modal"
                open={openshortlist}
                onClose={handleCloseshortlist}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={openshortlist}>
                  <div className="modalcontsmall">
                    <TickWhite />
                    <Typography variant="h6">
                      Are you sure you want to Shortlist the Candidate?
                    </Typography>
                    <Box component="div" className="button_confirm_area">
                      <Button
                        className="lightbluecolor border8"
                        onClick={handleCloseshortlist}
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
                      Are you sure you want to remove the candidate?
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
                        placement === "bottom" ? "center top" : "center bottom",
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
                            Download Profile
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
        <Box component="div" className="midcont">
          <LocSymbol />
          <Typography variant="span" className="title ms-2 me-2">
            Phone Number
          </Typography>
          <Typography variant="span" className="text">
            +91 9876543210
          </Typography>
        </Box>
        <Box component="div" className="midcont">
          <EmailIcon />
          <Typography variant="span" className="title ms-2">
            Email
          </Typography>
          <Typography variant="span" className="text">
            Dinah.drake@gmail.com
          </Typography>
        </Box>
        <Box component="div" className="midcont"></Box>
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
            >
              Chat
            </Button>
          </Box>
          <Box
            component="div"
            className="dis_flex marginautoright align-items-center"
          >
            <Box
              component="div"
              className="greencolor appliedbox whitecolortext me-3"
            >
              Applied 1 Day Ago
            </Box>
            <Button className=" redmathcbutton">12% Match</Button>
            <Box component="div" className="dis_flex align-items-center ms-3">
              <EditColorIcon />
              <Typography variant="span" className="font12 ms-2">
                Last Edited
              </Typography>
              <Typography variant="span" className="font12 fontweight700 ms-3">
                Just Now
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ApplicationSavedList;
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
const EmailIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className="bottom-1"
      viewBox="0 0 24 24"
    >
      <g id="Group_755" data-name="Group 755" transform="translate(-217 -410)">
        <g
          id="Rectangle_481"
          data-name="Rectangle 481"
          transform="translate(217 410)"
          fill="#fff"
          stroke="#707070"
          stroke-width="1"
          opacity="0"
        >
          <rect width="24" height="24" stroke="none" />
          <rect x="0.5" y="0.5" width="23" height="23" fill="none" />
        </g>
        <g
          id="email_1"
          data-name="email 1"
          transform="translate(216.616 409.744)"
        >
          <g
            id="Group_160"
            data-name="Group 160"
            transform="translate(2 5.333)"
          >
            <path
              id="Vector"
              d="M19.764,6.611A2.163,2.163,0,0,1,18.1,7.39H1.661A2.163,2.163,0,0,1,0,6.611L7.935,0l.822.562a1.981,1.981,0,0,0,2.25,0L11.829,0Z"
              transform="translate(0.502 6.455)"
              fill="#f8b432"
            />
            <path
              id="Vector-2"
              data-name="Vector"
              d="M20.007.943,11.95,6.455l-.822.562a1.981,1.981,0,0,1-2.25,0l-.822-.562L0,.935A2.173,2.173,0,0,1,1.783,0H18.224A2.135,2.135,0,0,1,20.007.943Z"
              transform="translate(0.381 0)"
              fill="#d48e07"
            />
            <g id="Group" transform="translate(0 0.935)">
              <path
                id="Vector-3"
                data-name="Vector"
                d="M8.437,5.521.5,12.132A2.154,2.154,0,0,1,0,10.747V1.229A2.132,2.132,0,0,1,.381,0Z"
                transform="translate(0)"
                fill="#f8b432"
              />
              <path
                id="Vector-4"
                data-name="Vector"
                d="M8.437,1.22v9.519a2.154,2.154,0,0,1-.5,1.385L0,5.512,8.056,0A2.125,2.125,0,0,1,8.437,1.22Z"
                transform="translate(12.331 0.009)"
                fill="#f8b432"
              />
            </g>
          </g>
        </g>
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
