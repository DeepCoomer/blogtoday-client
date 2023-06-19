import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { makeStyles } from "@material-ui/styles";
import { useViewportSize } from "@mantine/hooks";

const ActivationEmail = () => {
  const useStyles = makeStyles({
    para: {
      display: "inline-block",
      position: "relative",
      top: "200px",
      left: "300px",
    },
    paramobile: {
      display: "inline-block",
      position: "relative",
      top: "200px",
      left: "3px",
    },
  });

  const classes = useStyles();

  const { width } = useViewportSize();;

  return (
    <>
      <Box>
        <Typography variant="h4" className={width>768? classes.para: classes.paramobile}>
          Please Check Your Email an activation link has been send!!!.
        </Typography>
      </Box>
    </>
  );
};

export default ActivationEmail;
