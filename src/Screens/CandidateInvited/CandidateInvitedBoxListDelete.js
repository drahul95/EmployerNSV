import React from "react";
import "./CandidateInvited.scss";
import {
  Typography,
  Box,
  List,
  ListItem,
  Button,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StackImages from "../../images/stackimage.png";
require("dotenv").config();
const BASE_URL = process.env.REACT_APP_BASE_URL;

function CandidateInvitedBoxListDelete() {
  const [openmodaleditconfirm, setOpenModaleditconfirm] = React.useState(false);

  const handleeditconfirmOpen = () => {
    setOpenModaleditconfirm(true);
  };

  const handleeditconfirmClose = () => {
    setOpenModaleditconfirm(false);
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
        <Box component="div" className="editbtn marginautoright">
          <Button
            variant="button"
            startIcon={<DeleteIconButton />}
            onClick={handleeditconfirmOpen}
            className="transparentbtn buttonnohover"
          ></Button>
        </Box>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className="material-modal"
          open={openmodaleditconfirm}
          onClose={handleeditconfirmClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={openmodaleditconfirm}>
            <Box component="div" className="modalcontsmall text-center pt-4">
              <DeleteIconButton />
              <Typography
                variant="span"
                id="transition-modal-description"
                className="mb-2 mt-3 font16 text-center px-20 block"
              >
                Are you sure you want to delete this Private Job?
              </Typography>
              <Box component="div" className="">
                <Box
                  component="div"
                  className="dis_flex buttonareadiv maincontjobpost"
                  justifyContent="space-between"
                >
                  <Button
                    className="border8 me-3 lightbluecolor"
                    onClick={(e) => {
                      handleeditconfirmClose();
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
                      handleeditconfirmClose();
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
      <Box component="div" className="dis_flex align-items-center candsuggdiv">
        <Box component="div" className="imagestack me-2">
          <img src={BASE_URL + StackImages} alt="" />
        </Box>
        <Typography
          variant="span"
          className="candititle mt-2 mb-3 darkcolortext"
        >
          20 Candidates Invited
        </Typography>
      </Box>
      <Box component="div" className="dis_flex">
        <Box component="div" className="">
          <Typography
            variant="span"
            className="heading font14 fontweight700 blackcolortext text-center block mb-2"
          >
            Job Posted On
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
            className="heading font14 blackcolortext fontweight700 text-center block mb-2"
          >
            Visible Till
          </Typography>
          <Typography
            variant="span"
            className="subheading blackcolortext font14 block text-right"
          >
            25th, June 2021
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default CandidateInvitedBoxListDelete;
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
const DeleteIconButton = () => {
  return (
    <svg
      id="Page-1"
      xmlns="http://www.w3.org/2000/svg"
      width="19.408"
      height="24.953"
      viewBox="0 0 19.408 24.953"
    >
      <g id="Core">
        <g id="delete">
          <path
            id="Shape"
            d="M1.386,22.181a2.781,2.781,0,0,0,2.773,2.773h11.09a2.781,2.781,0,0,0,2.773-2.773V5.545H1.386V22.181ZM19.408,1.386H14.556L13.17,0H6.238L4.852,1.386H0V4.159H19.408V1.386Z"
            fill="#f44336"
            fill-rule="evenodd"
          />
        </g>
      </g>
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
