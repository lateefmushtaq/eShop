import React from "react";
import Typography from "@mui/material/Typography";
function Headings({ value }) {
  return (
    <div>
      <Typography
        variant="h4"
        component="div"
        textAlign="center"
        fontWeight="bold"
        gutterBottom
      >
        {value}
      </Typography>
    </div>
  );
}

export default Headings;
