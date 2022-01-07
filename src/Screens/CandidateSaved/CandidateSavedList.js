import React from "react";
import { Box, Popover } from "@material-ui/core";
import CandidateDetailsPopper from "../CandidateDetailsPopper/CandidateDeatilsPopper";
import LockedCandidateDetailsPopper from "../LockedCandidateDetailsPopper/LockedCandidateDeatilsPopper";
import CandidateMultipleSelectionAction from "./CandidateMultipleSelectionAction";
import CandidateExcelDivArea from "./CandidateExcelDivArea";
import CandidateSavedUnlocked from "./CandidateSavedUnlocked";
import CandidateSavedLocked from "./CandidateSavedLockedCard";

function CandidateSavedList() {
  const [open] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [iscandidat, setIscandidat] = React.useState(null);
  const [iscandidatlocked, setIscandidatlocked] = React.useState(null);

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Box component="div" className="sugcandidiv">
      <CandidateExcelDivArea />
      <CandidateMultipleSelectionAction />
      <Box component="div" className="sugscrolltabs">
        <CandidateSavedUnlocked
          unlockcandidatepopper={(e) => setIscandidat(e.target)}
        />
      </Box>
      <Box component="div" className="sugscrolltabs">
        <CandidateSavedLocked
          lockedcandidatepopper={(e) => setIscandidatlocked(e.target)}
        />
      </Box>
      <Popover
        id="userProfile"
        open={Boolean(iscandidat)}
        anchorEl={iscandidat}
        onClose={(e) => setIscandidat(null)}
        classes={{ paper: "personaldetailsparentdiv" }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
      >
        <CandidateDetailsPopper />
      </Popover>
      <Popover
        id="userProfile"
        open={Boolean(iscandidatlocked)}
        anchorEl={iscandidatlocked}
        onClose={(e) => setIscandidatlocked(null)}
        classes={{ paper: "personaldetailsparentdiv" }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
      >
        <LockedCandidateDetailsPopper />
      </Popover>
    </Box>
  );
}

export default CandidateSavedList;
