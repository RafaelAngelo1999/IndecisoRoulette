import { FC } from "react";
// @mui
import List from "@mui/material/List";
import { Box, ListItem as ListItemMaterialUI, Typography } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
// @model
import { Item } from "../models/ItemModel";

interface IListItem {
  listItem: Item[];
  handleRemoveItem: (idItem: string) => void;
}

const ListItem: FC<IListItem> = ({ listItem, handleRemoveItem }) => {
  const onRemover = (idItem: string) => {
    handleRemoveItem(idItem);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        maxHeight: 175,
        overflow: "auto",
      }}
    >
      {listItem.length ? (
        listItem.map((item, indice) => {
          return (
            <ListItemMaterialUI
              key={item.id}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="comments"
                  onClick={() => onRemover(item.id)}
                >
                  <DeleteIcon color="error" />
                </IconButton>
              }
              disablePadding
            >
              {indice + 1}
              <ListItemButton dense>
                <ListItemText primary={item.value} />
              </ListItemButton>
            </ListItemMaterialUI>
          );
        })
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Lista Vazia 😢 </Typography>
        </Box>
      )}
    </List>
  );
};

export default ListItem;
