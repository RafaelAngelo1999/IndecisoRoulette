import { Button } from "@mui/material";
import { FC } from "react";

interface IButtonEndIndecision {
  onClick: () => void;
  disabled?: boolean;
  text: string;
}

const ButtonEndIndecision: FC<IButtonEndIndecision> = ({
  onClick,
  disabled,
  text,
}) => {
  return (
    <Button
      sx={{ backgroundColor: "#8B8AAF", color: "#FFF" }}
      variant="contained"
      color="info"
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default ButtonEndIndecision;
