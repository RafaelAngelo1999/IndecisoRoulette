import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { FC } from "react";

interface IResult {
  open: boolean;
  value: string;
  handleClose: (boolean: boolean) => void;
}

const Result: FC<IResult> = ({ handleClose, open, value }) => {
  const handleClickClose = () => {
    handleClose(false);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClickClose}>
        <DialogTitle>{"Espero ter ajudado na sua indecisão 😁👍"}</DialogTitle>
        <DialogContent>
          <DialogContentText>Resultado: {value}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color={"success"} autoFocus onClick={handleClickClose}>
            Concluir
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Result;
