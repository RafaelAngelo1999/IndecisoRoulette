import { Typography, Box } from "@mui/material";
import { FC } from "react";

const Header: FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Typography variant="h2" paddingBottom={3}>
        ❓Indeciso
      </Typography>
      <Typography variant="h5" textAlign={"center"} paddingBottom={2}>
        😁 Vamos acabar com essa dúvida, coloque as opções na listagem que eu
        escolho para voce 👍
      </Typography>
    </Box>
  );
};

export default Header;
