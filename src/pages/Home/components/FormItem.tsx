import { Box, Button, TextField } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";

import AddCircleIcon from "@mui/icons-material/AddCircle";

interface IFormItem {
  handleAddItem: (value: string) => void;
}

const FormItem: FC<IFormItem> = ({ handleAddItem }) => {
  const { register, handleSubmit, reset } = useForm();

  const onAdicionar = (data: any) => {
    handleAddItem(data.item as string);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onAdicionar)}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingBottom={3}
      >
        <TextField
          margin="dense"
          required
          fullWidth
          id="item"
          variant="outlined"
          autoComplete="off"
          label="Nome do Item"
          autoFocus
          {...register("item", { required: true })}
          style={{ marginRight: "16px" }}
        />
        <Button type="submit" variant="contained" color="primary" size="large">
          <AddCircleIcon />
        </Button>
      </Box>
    </form>
  );
};

export default FormItem;
