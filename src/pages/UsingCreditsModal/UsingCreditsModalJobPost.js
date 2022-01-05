import React from "react";
import {
  Typography,
  Box,
  Button,
  Backdrop,
  Link,
} from "@material-ui/core";
function UsingCreditsModal () {
    
  const [openmodalpostjob, setOpenModalpostjob] = React.useState(false);

  const handlepostjobOpen = () => {
    setOpenModalpostjob(true);
  };

  const handlepostjobClose = () => {
    setOpenModalpostjob(false);
  };
    return(
        
          <Box component="div" className="modalcontmid2 text-center">
            <PostJobIcon />
            <Typography
              variant="span"
              id="transition-modal-description"
              className="mb-2 mt-3 font22 fontweight700 text-center block"
            >
              Are you sure you want to post the job?
            </Typography>
            <Box component="div" className="maincontjobpost">
              <Typography
                variant="span"
                className="font14 block text-center mt-3 mb-3"
              >
                You will be using{" "}
                <Typography variant="span" className="fontweight700 font16">
                  5
                </Typography>{" "}
                credits for this job post
              </Typography>
              <Typography
                variant="span"
                className="font14 block text-center line-height-1-5"
              >
                Please note that some of the content entered might be subject to
                vetting!
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
                    handlepostjobClose();
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
                    handlepostjobClose();
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
    );
}
export default UsingCreditsModal;

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

