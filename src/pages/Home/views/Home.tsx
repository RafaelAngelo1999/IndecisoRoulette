import { FC, useState } from "react";
// @mui
import {
  Box,
  CssBaseline,
  FormControlLabel,
  FormGroup,
  Switch,
} from "@mui/material";
// @component
import Header from "../components/Header";
import FormItem from "../components/FormItem";
import ListItem from "../components/ListItem";
import { Item } from "../models/ItemModel";
import { v4 as uuidv4 } from "uuid";
import Roulette from "../components/Roulette";

const Home: FC = () => {
  const [listItem, setListItem] = useState<Item[]>([]);
  const [switchListView, setSwitchListView] = useState<boolean>(true);

  const handleAddItem = (newItem: string) => {
    setListItem([...listItem, { id: uuidv4(), value: newItem }]);
  };

  const handleRemoveItem = (itemId: string) => {
    setListItem(listItem.filter((item) => item.id !== itemId));
  };

  return (
    <>
      <Box
        sx={{
          marginTop: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CssBaseline />
        <Header />
        <FormItem handleAddItem={handleAddItem} />
        <Box>
          <FormControlLabel control={<></>} label="Roulette" />
          <FormControlLabel
            control={
              <Switch
                checked={switchListView}
                onChange={() => setSwitchListView(!switchListView)}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="List View"
          />
        </Box>
        {switchListView && (
          <ListItem listItem={listItem} handleRemoveItem={handleRemoveItem} />
        )}
        {!switchListView && <Roulette listItem={listItem} />}
      </Box>
    </>
  );
};

export default Home;
