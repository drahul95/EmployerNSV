import React from "react";
import {
  Typography,
  Box,
  Button,
  List,
  ListItem,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";
import SchoolPlaceholder from "../../images/schl_logo_placeholder.svg";
require("dotenv").config();
const BASE_URL = process.env.REACT_APP_BASE_URL;

function PreviewJobPost() {
  const [openmodalposting, setOpenModalposting] = React.useState(false);

  const handlepostingOpen = () => {
    setOpenModalposting(true);
  };

  const handlepostingClose = () => {
    setOpenModalposting(false);
  };
  return (
    <Box component="div" className="modalcont">
      <Box component="div" className="topmodalcont">
        <Typography className="heading_title" variant="span">
          Preview Post
        </Typography>
        <Box component="div" className="marginautoright">
          <Box component="div">
            <Button
              className="btn-close"
              onClick={(e) => {
                handlepostingClose();
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
      </Box>
      <Box component="div" className="maindiv">
        <Box component="div" className="maincont">
          <Box component="div" className="imgarea">
            <Box component="div" className="placeholderarea">
              <Box component="div">
                <img src={BASE_URL + SchoolPlaceholder} alt="" />
              </Box>
            </Box>
            <JdBg />
          </Box>
          <Box component="div" className="title">
            <Typography variant="span" className="schoolname">
              DPS School, Darjeeling
            </Typography>
            <Typography variant="span" className="titleheading">
              Primary School Teacher
            </Typography>
          </Box>
          <Box component="div" className="iconreq2">
            <List>
              <ListItem>
                <YearsIcon />
                <Typography variant="span" className="iconspan">
                  3 Years Min.
                </Typography>
              </ListItem>
              <ListItem>
                <SalaryIcon />
                <Typography variant="span" className="iconspan fontweight700">
                  6.5 LPA Max.
                </Typography>
              </ListItem>
              <ListItem>
                <BagIcon />
                <Typography variant="span" className="iconspan">
                  Full Time / Permanent
                </Typography>
              </ListItem>
              <ListItem>
                <VacanciesIcon />
                <Typography variant="span" className="iconspan">
                  5 Vacancies
                </Typography>
              </ListItem>
              <ListItem>
                <SalaryIcon />
                <Typography variant="span" className="iconspan">
                  B.Sc/B.Ed
                </Typography>
              </ListItem>
              <ListItem>
                <LocationIcon />
                <Typography variant="span" className="iconspan">
                  Kolkata, West Bengal
                </Typography>
              </ListItem>
            </List>
          </Box>
          <Box component="div" className="details">
            <Box component="div" className="skillscont">
              <Typography variant="span" className="subhead">
                Skills Required
              </Typography>
              <List>
                <ListItem className="skilltag">Reasoning</ListItem>
                <ListItem className="skilltag">Apitutde</ListItem>
                <ListItem className="skilltag">Problem Solving</ListItem>
              </List>
            </Box>
            <Box component="div" className="details mt-4">
              <Typography variant="span" className="subhead">
                Job Description
              </Typography>
              <Typography variant="span" className="subsubtext">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </Typography>
              <Typography variant="span" className="subsubtext">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default PreviewJobPost;

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
const JdBg = () => {
  return (
    <svg
      className="jd_bgimg"
      xmlns="http://www.w3.org/2000/svg"
      width="237.828"
      height="164.436"
      viewBox="0 0 237.828 164.436"
    >
      <defs></defs>
      <path
        class="a"
        d="M0,0S33.659,52.81,24.231,100.853"
        transform="translate(203.071 46.058)"
      />
      <path
        class="b"
        d="M1.679,0,0,24.614l71.6,1.679L67.678,4.478Z"
        transform="translate(68.717 115.774)"
      />
      <path
        class="b"
        d="M0,0,3.294,21.738H56L52.05,0Z"
        transform="translate(80.692 139.026)"
      />
      <path
        class="c"
        d="M30.206,0s2.239,10.607-1.679,13.424C23.977,16.676,14.543,17.9,7.272,27.407A36.488,36.488,0,0,0,0,47.542l16.776,8.391v11.2l45.869-3.948v-11.2s7.831-7.272,11.2-12.3c0,0-1.52-13.2-20.035-19.287A5.663,5.663,0,0,1,50.1,16.511l.265-5.356Z"
        transform="translate(67.598 74.389)"
      />
      <path
        class="d"
        d="M46.142,39.545S33.455,48.266,31.7,43.452,44.7,34.937,44.7,34.937s-3.377-15.91-11.2-22.522c0,0-5.893,11.473-11.644,9.876S31.127,8.538,31.127,8.538s-9.464-9.546-19.3-8.45S-2.355,16.434,1.263,25.232c0,0,7.961-3.724,13.07-1.179s-11.108,5.7-11.108,5.7-.766,7.207,4.213,16.01c0,0,8.8-4.979,12.145-4.543s-9.14,10.2-9.14,10.2,7.778,14.749,23.748,20.053C34.191,71.472,46.7,56.269,46.142,39.545ZM22.53,57.365c-.265-1.367,1.426-2.121,1.426-2.121,1.632.389,1.3,1.585,1.137,2.186s-2.292,1.3-2.557-.065Z"
        transform="translate(191.668 31.922)"
      />
      <path
        class="e"
        d="M0,0S2.834,10.489,19.1,8.78a4.361,4.361,0,0,1-.813-2c0-.884.159-3.459.159-3.459Z"
        transform="translate(99.401 83.906)"
      />
      <path
        class="c"
        d="M6.819,17.959s-.56-3.353-3.353-3.353S-1.007,20.2.667,24.671,5.7,25.791,5.7,25.791s0,7.831,5.592,11.2,13.983,2.8,18.456-6.152,2.887-20.2-1.679-26.287C23.035-2.164,13.524.075,11.291,1.749S6.259,5.1,6.819,17.959Z"
        transform="translate(92.106 49.689)"
      />
      <path
        class="f"
        d="M3.93,2.325a2.44,2.44,0,0,0-.619-1.6A1.656,1.656,0,0,0,1,.3C-.318,1.176-.684,7.01,2.115,7.01s0-2.8,1.12-3.359a1.379,1.379,0,0,0,.7-1.326Z"
        transform="translate(94.015 66.79)"
      />
      <path
        class="b"
        d="M24.649,0S27.4,10.059,37.472,12.852s15.215-4.184,15.439-8.8c0,0,7.737,2.8,11.408,5.445s8.951,7.272,10.607,14.543c0,0-6.152,7.831-11.744,12.3v11.2L17.336,53.682V40.259L0,31.868s1.12-13.983,6.152-20.7C12.917,2.139,24.649,0,24.649,0Z"
        transform="translate(67.044 90.058)"
      />
      <path
        class="c"
        d="M0,1.457S0,24.391.56,29.983s3.913,11.2,8.951,12.3,21.8-3.353,25.168-4.473,15.663-5.592,15.663-5.592S48.1,25.511,43.63,23.272c0,0-3.913.56-12.3,1.679s-8.951.56-13.983,1.12l-1.12-17.9S10.065-4.135,0,1.457Z"
        transform="translate(68.164 115.437)"
      />
      <path
        class="b"
        d="M0,15.1s4.172,8.556,17.743,8.2l1.833-11.55L11.184,0,6.152.56l-4.4,4.249Z"
        transform="translate(67.044 106.835)"
      />
      <path
        class="c"
        d="M4.278,11.121a2.145,2.145,0,0,1,.23-.035l.118-.047C9.1,9.6,13.754,8.959,18.326,7.928c-.13-3.536-.684-6.977-2.1-7.543C13.424-.735,0,.945,0,.945l.56,11.2Z"
        transform="translate(111.229 137.757)"
      />
      <path
        class="g"
        d="M0,0S5.032,7.272,6.712,9.511a17.34,17.34,0,0,1,2.8,6.152c0,.56-3.353,0-5.592-3.353-2.357-3.536-2.8-2.8-2.8-2.8Z"
        transform="translate(128.004 138.708)"
      />
      <path
        class="h"
        d="M.046,43.435,12.856.719A1.014,1.014,0,0,1,13.829,0h59.4A1.014,1.014,0,0,1,74.2,1.308L61.948,41.785a1.014,1.014,0,0,1-.972.719L1.036,44.749a1.014,1.014,0,0,1-.99-1.314Z"
        transform="translate(120.527 110.182)"
      />
      <path
        class="i"
        d="M2.015,0h83V2.239H0V2A2,2,0,0,1,2.015,0Z"
        transform="translate(98.923 154.371)"
      />
      <path
        class="h"
        d="M2.015,0H23.506V2.239H0V2A2,2,0,0,1,2.015,0Z"
        transform="translate(98.923 154.371)"
      />
      <path
        class="h"
        d="M.53,0,2.169,1.632l-1.615.79L0,.742Z"
        transform="translate(194.008 110.559)"
      />
      <path
        class="d"
        d="M.046,41.19,12.291.719A1.014,1.014,0,0,1,13.263,0h59.4a1.014,1.014,0,0,1,.972,1.308L61.389,41.785a1.014,1.014,0,0,1-.972.719H1.012A1.014,1.014,0,0,1,.046,41.19Z"
        transform="translate(122.767 111.867)"
      />
      <path
        class="j"
        d="M6.706,3.076A3.223,3.223,0,0,1,3.353,6.152,3.223,3.223,0,0,1,0,3.076,3.223,3.223,0,0,1,3.353,0,3.223,3.223,0,0,1,6.706,3.076Z"
        transform="matrix(0.314, -0.949, 0.949, 0.314, 157.32, 136.458)"
      />
      <path
        class="k"
        d="M0,0S3.229,15.616,20.33,15.616c15.321,0,14.231-11.974,14.231-11.974"
        transform="translate(88.205 91.567)"
      />
      <path
        class="k"
        d="M0,0S7.767,3.671,7.177,17.224l-.589,15.91"
        transform="translate(78.376 97.023)"
      />
      <path
        class="k"
        d="M0,0A28.09,28.09,0,0,1,2.3,13.453"
        transform="translate(129.754 99.009)"
      />
      <path
        class="l"
        d="M4.125,0,0,5.3,4.125,3.536Z"
        transform="translate(81.133 138.119)"
      />
      <path
        class="d"
        d="M0,0H203.587V7.831H0Z"
        transform="translate(22.855 156.604)"
      />
      <path
        class="m"
        d="M0,0H29.086V40.271H0Z"
        transform="translate(140.873 27.967)"
      />
      <path
        class="d"
        d="M0,0H29.086V40.271H0Z"
        transform="translate(150.378 37.472)"
      />
      <path
        class="m"
        d="M0,0H29.086V40.271H0Z"
        transform="translate(159.889 46.982)"
      />
      <path
        class="n"
        d="M0,0H24.048V1.65H0Z"
        transform="translate(162.683 50.895)"
      />
      <path
        class="n"
        d="M0,0H24.048V1.65H0Z"
        transform="translate(162.683 54.743)"
      />
      <path
        class="n"
        d="M0,0H24.048V1.65H0Z"
        transform="translate(162.683 58.597)"
      />
      <path
        class="n"
        d="M0,0H24.048V1.65H0Z"
        transform="translate(162.683 62.445)"
      />
      <path
        class="n"
        d="M0,0H12.864V1.65H0Z"
        transform="translate(162.683 66.293)"
      />
      <path
        class="n"
        d="M0,0H24.048V1.65H0Z"
        transform="translate(162.683 70.141)"
      />
      <path
        class="n"
        d="M0,0H24.048V1.65H0Z"
        transform="translate(162.683 73.989)"
      />
      <path
        class="n"
        d="M0,0H24.048V1.65H0Z"
        transform="translate(162.683 77.836)"
      />
      <path
        class="n"
        d="M0,0H24.048V1.65H0Z"
        transform="translate(162.683 81.69)"
      />
      <path
        class="m"
        d="M3.754,0H29.817a3.748,3.748,0,0,1,3.748,3.748V22.369H3.754A3.748,3.748,0,0,1,0,18.609V3.748A3.748,3.748,0,0,1,3.754,0Z"
        transform="translate(55.853 12.304)"
      />
      <path
        class="j"
        d="M2.982,1.491A1.491,1.491,0,1,1,1.491,0,1.491,1.491,0,0,1,2.982,1.491Z"
        transform="translate(65.925 22.557)"
      />
      <path
        class="j"
        d="M2.982,1.491A1.491,1.491,0,1,1,1.491,0,1.491,1.491,0,0,1,2.982,1.491Z"
        transform="translate(71.146 22.557)"
      />
      <path
        class="j"
        d="M2.982,1.491A1.491,1.491,0,1,1,1.491,0,1.491,1.491,0,0,1,2.982,1.491Z"
        transform="translate(76.366 22.557)"
      />
      <path
        class="m"
        d="M12.2,0V11.349L0,6.317Z"
        transform="translate(77.215 28.362)"
      />
      <path
        class="d"
        d="M0,0H30.2V19.039H0Z"
        transform="translate(38.517 60.671)"
      />
      <path
        class="m"
        d="M0,0,14.443,8.539,30.2,0Z"
        transform="translate(38.517 60.671)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(190.089)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(201.281)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(212.465)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(223.649)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(234.839)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(190.089 7.271)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(201.281 7.271)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(212.465 7.271)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(223.649 7.271)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(234.839 7.271)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(190.089 14.543)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(201.281 14.543)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(212.465 14.543)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(223.649 14.543)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(234.839 14.543)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(190.089 21.815)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(201.281 21.815)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(212.465 21.815)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(223.649 21.815)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(234.839 21.815)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(190.089 29.086)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(201.281 29.086)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(212.465 29.086)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(223.649 29.086)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(234.839 29.086)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(0 121.491)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(11.184 121.491)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(22.37 121.491)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(33.559 121.491)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(44.744 121.491)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(0 128.763)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(11.184 128.763)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(22.37 128.763)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(33.559 128.763)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(44.744 128.763)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(0 136.034)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(11.184 136.034)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(22.37 136.034)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(33.559 136.034)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(44.744 136.034)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(0 143.306)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(11.184 143.306)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(22.37 143.306)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(33.559 143.306)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(44.744 143.306)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(0 150.577)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(11.184 150.577)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(22.37 150.577)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(33.559 150.577)"
      />
      <path
        class="b"
        d="M1.674.837A.837.837,0,1,1,.837,0,.837.837,0,0,1,1.674.837Z"
        transform="translate(44.744 150.577)"
      />
      <path
        class="o"
        d="M17.057,7.551a.5.5,0,0,0-.18.128.546.546,0,0,0-.114.2.575.575,0,0,0-.026.23.566.566,0,0,0,.067.22A14.571,14.571,0,0,1,18.423,12.5s1.125.853-3.035,1.693S1.653,16.41.2,20.1c-1.416,3.6,4.862,12.926,10.447,5.857a.507.507,0,0,1,.182-.146.473.473,0,0,1,.442.019.515.515,0,0,1,.17.161c.812,1.246,2.975,3.861,6.192,2.5a5.07,5.07,0,0,0,3.455-4.742.567.567,0,0,1,.051-.232.53.53,0,0,1,.14-.185.486.486,0,0,1,.2-.1.467.467,0,0,1,.222,0,5.6,5.6,0,0,0,6.888-3.048c1.517-3.173.7-5.053-.076-5.991a.55.55,0,0,1-.116-.243.572.572,0,0,1,.011-.273.542.542,0,0,1,.135-.232.491.491,0,0,1,.224-.13c1-.274,2.3-1.1,2.279-3.57-.028-3.411-3.591-3.289-4.609-3.184a.472.472,0,0,1-.24-.037.506.506,0,0,1-.2-.153C25.181,5.3,21.464.74,17.259.005a.474.474,0,0,0-.246.028.506.506,0,0,0-.2.149A.556.556,0,0,0,16.7.418a.579.579,0,0,0,0,.265l1.58,5.788a.573.573,0,0,1-.038.394.515.515,0,0,1-.279.26Z"
        transform="matrix(-0.883, -0.47, 0.47, -0.883, 115.42, 76.254)"
      />
    </svg>
  );
};
const VacanciesIcon = () => {
  return (
    <svg
      className="vac_orange me-2"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <defs></defs>
      <g transform="translate(-348.687 -348.667)">
        <path
          class="a"
          d="M368.684,358.667q0,4.918,0,9.837c0,.128-.018.163-.157.163q-9.838-.007-19.676,0c-.147,0-.167-.038-.167-.172q.006-9.827,0-19.655c0-.134.019-.173.167-.173q9.828.008,19.656,0c.152,0,.177.04.177.182Q368.68,353.758,368.684,358.667Z"
          transform="translate(0)"
        />
        <path
          class="b"
          d="M480.712,426.791l-1.781-.009c-.4,0-.565-.127-.645-.523q-.721-3.57-1.432-7.143a1.11,1.11,0,0,1,1.14-1.38q3.81-.005,7.62,0a1.109,1.109,0,0,1,1.14,1.38q-.7,3.559-1.425,7.115c-.087.433-.242.55-.681.552l-1.751.009a.352.352,0,0,1-.268.084q-.824.01-1.648,0A.352.352,0,0,1,480.712,426.791Z"
          transform="translate(-123.118 -68.599)"
        />
        <path
          class="b"
          d="M478.486,542.538a6.042,6.042,0,0,0,1.065.028c.559.009,1.12.028,1.677,0a1.243,1.243,0,0,1,1.375.864.444.444,0,0,1-.036.606,1.179,1.179,0,0,1-1.219.792c-.993-.011-1.986.009-2.979.016a1.064,1.064,0,0,1-.534.047,7.233,7.233,0,0,1-1.391-.047c-1.012-.007-2.025-.02-3.037-.019a1.126,1.126,0,0,1-.98-.459,2.813,2.813,0,0,1-.181-.331.446.446,0,0,1-.036-.606,1.257,1.257,0,0,1,1.375-.865c.809.033,1.62.009,2.429.007a.666.666,0,0,0,.313-.029,1.617,1.617,0,0,1,.651-.038A9.41,9.41,0,0,1,478.486,542.538Z"
          transform="translate(-118.72 -183.691)"
        />
        <path
          class="c"
          d="M485.409,609.331c1.208.31,2.414.628,3.625.925a.438.438,0,0,1,.393.5,1.87,1.87,0,0,0,.037.719.983.983,0,0,1-.626,0,2.688,2.688,0,0,0,.028-.52c.013-.134-.048-.188-.17-.219-1.172-.3-2.343-.594-3.513-.9-.153-.04-.18,0-.178.139,0,.484,0,.969,0,1.453a.426.426,0,0,1-.534,0c0-.484-.005-.969,0-1.454,0-.144-.031-.182-.183-.142-1.169.309-2.339.61-3.51.911-.12.031-.184.087-.171.221a1.926,1.926,0,0,0,.036.518,1.251,1.251,0,0,1-.661.007,1.452,1.452,0,0,0,.06-.765.406.406,0,0,1,.343-.456c1.228-.309,2.454-.626,3.681-.941A1.117,1.117,0,0,1,485.409,609.331Z"
          transform="translate(-126.025 -245.161)"
        />
        <path
          class="d"
          d="M529.223,638.949l.534,0c.566.291.8.692.682,1.174a.975.975,0,1,1-1.421-1.07C529.085,639.019,529.154,638.985,529.223,638.949Z"
          transform="translate(-170.779 -272.682)"
        />
        <path
          class="d"
          d="M585.906,639.005a.986.986,0,0,1,.626,0,.948.948,0,0,1,.652,1.039.973.973,0,0,1-1.923.03A.943.943,0,0,1,585.906,639.005Z"
          transform="translate(-223.116 -272.687)"
        />
        <path
          class="d"
          d="M472.389,639.02a1,1,0,0,1,.661-.007.943.943,0,0,1,.628,1.1.974.974,0,0,1-1.909-.015A.957.957,0,0,1,472.389,639.02Z"
          transform="translate(-118.412 -272.691)"
        />
        <path
          class="b"
          d="M443.105,512.66c-.7-.039-.712.128-.7-.759.006-.686,0-.686.682-.686.311,0,.622.007.932,0,.264-.007.371.119.366.371,0,.223,0,.447,0,.67,0,.327-.067.388-.393.4a.594.594,0,0,0-.286.034A.875.875,0,0,1,443.105,512.66Z"
          transform="translate(-91.326 -154.837)"
        />
        <path
          class="b"
          d="M614.322,512.689a1.508,1.508,0,0,0-.2-.033c-.46-.017-.481-.038-.481-.513,0-1.049-.079-.915.918-.922.252,0,.5,0,.757,0a.269.269,0,0,1,.3.306c0,.253-.01.505,0,.757.014.282-.117.389-.386.372-.106-.007-.213.006-.32.01A.874.874,0,0,1,614.322,512.689Z"
          transform="translate(-249.324 -154.843)"
        />
        <path
          class="e"
          d="M531.06,588.016a1.709,1.709,0,0,0-1.345,0c0-.562-.009-1.124.019-1.684.011-.221-.163-.165-.248-.24a.217.217,0,0,1,.152-.077,12.179,12.179,0,0,1,1.45,0,.217.217,0,0,1,.152.077c-.082.061-.2.061-.2.229C531.063,586.883,531.056,587.45,531.06,588.016Z"
          transform="translate(-171.676 -223.823)"
        />
        <path
          class="c"
          d="M530,573.453h-1.754c-.113-.047-.105-.148-.1-.242,0-.3.007-.592.011-.889a13.767,13.767,0,0,1,1.942,0c0,.3.009.593.011.889C530.1,573.306,530.109,573.406,530,573.453Z"
          transform="translate(-170.432 -211.18)"
        />
        <path
          class="c"
          d="M451.451,529.555a1.374,1.374,0,0,1,.6.023q0,.491,0,.983c0,.647.261.907.911.915.067,0,.135,0,.2.006a1.728,1.728,0,0,0,.037.606,3.443,3.443,0,0,1-.639-.03,1.326,1.326,0,0,1-1.105-1.309C451.448,530.352,451.452,529.953,451.451,529.555Z"
          transform="translate(-99.687 -171.742)"
        />
        <path
          class="c"
          d="M608.747,529.58a1.386,1.386,0,0,1,.6-.023q0,.539,0,1.078a1.359,1.359,0,0,1-1.455,1.457c-.1,0-.194,0-.291,0a1.7,1.7,0,0,0,.036-.606c.963-.032,1.114-.188,1.114-1.152C608.745,530.081,608.746,529.83,608.747,529.58Z"
          transform="translate(-243.733 -171.744)"
        />
        <path
          class="f"
          d="M528.9,534.768a13.038,13.038,0,0,1-2.178,0q0-.354,0-.708H528.9Q528.9,534.414,528.9,534.768Z"
          transform="translate(-169.122 -175.913)"
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
