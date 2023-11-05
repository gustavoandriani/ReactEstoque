import * as React from 'react';
import Button from '@mui/material/Button';
import PropTypes from "prop-types";

MuiButton.propTypes = {
  textButton: PropTypes.string,
  colorButton: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func
}

export default function MuiButton({ textButton, colorButton, type, variant, onClick }) {
  return (
    <Button
      style={{ margin: "0 .5rem"}}
      color={colorButton}
      variant={variant}
      type={type}
      onClick={onClick}
    >
          {textButton}
    </Button>
  );
}