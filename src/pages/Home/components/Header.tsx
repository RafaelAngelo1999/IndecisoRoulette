import { Typography, Box } from "@mui/material";
import { FC } from "react";
import gatinhoDuvida from "../../../assets/gato-duvida.png";

const Header: FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Typography variant="h2" paddingBottom={1}>
        ❓Indeciso
      </Typography>
      <img height={200} width={200} src={gatinhoDuvida} alt="minhauuu" />
      <Typography variant="h5" textAlign={"center"} paddingBottom={2}>
        😁 Vamos acabar com essa dúvida, coloque as opções na listagem que eu
        escolho para voce 👍
      </Typography>
    </Box>
  );
};

export default Header;
