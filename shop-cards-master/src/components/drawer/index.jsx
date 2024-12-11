import React from "react";
import {
  Typography,
  Box,
  Divider,
  Drawer,
  List,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../../store/actions/shopAction.js";
import CardComponent from "../cards";

export default function DrawerComponent({ openDrawer, toggleDrawer }) {
  const shopList = useSelector((state) => state.shopList.item);
  const dispatch = useDispatch();

  const DrawerList = (
    <Box sx={{ width: 250, padding: 2 }} role="presentation">
      {shopList.length !== 0 ? (
        shopList.map((item) => (
          <Box key={item.id}>
            <Typography>shop list :</Typography>
            <List>
              <CardComponent info={item}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    -
                  </Button>
                  <Typography sx={{ padding: 1 }}>
                    count: {item.count}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => dispatch(addItem(item))}
                    disabled={item.count >= 30}
                  >
                    +
                  </Button>
                </Box>
                {item.count >= 30 && (
                  <Box sx={{ marginTop: 2 }}>
                    <Alert severity="error">
                      <AlertTitle>Error</AlertTitle>
                      You are allowed to order a maximum of 30 pieces of each
                      product.
                    </Alert>
                  </Box>
                )}
              </CardComponent>
            </List>
            <Divider />
          </Box>
        ))
      ) : (
        <Typography>empty basket!</Typography>
      )}
    </Box>
  );

  return (
    <Drawer open={openDrawer} onClose={toggleDrawer(false)} anchor="right">
      {DrawerList}
    </Drawer>
  );
}