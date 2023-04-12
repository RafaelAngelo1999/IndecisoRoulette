import { FC, useState } from "react";
// @mui
import { Box, CssBaseline } from "@mui/material";
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
        {switchListView && <FormItem handleAddItem={handleAddItem} />}

        {switchListView && (
          <ListItem
            listItem={listItem}
            handleRemoveItem={handleRemoveItem}
            handleAlterToRoulette={setSwitchListView}
          />
        )}
        {!switchListView && (
          <Roulette listItem={listItem} setSwitchListView={setSwitchListView} />
        )}
      </Box>
    </>
  );
};

export default Home;
