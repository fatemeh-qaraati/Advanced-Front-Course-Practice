import CardComponent from "./components/cards";
import appleWatchImage from "./assets/images/appleWatch.jpg";
import iphoneImage from "./assets/images/iphone.png";
import airpodsImage from "./assets/images/airpods.jpg";
import { Button, CardActions, Container } from "@mui/material";
import HeaderComponent from "./components/header";
import Grid from "@mui/material/Grid2";
import DrawerComponent from "./components/drawer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./store/actions/shopAction";

const cardList = [
  {
    id: 1,
    title: "iphone",
    caption:
      " Lizards are a widespread group of squamate reptiles, with over 6 species, ranging across all continents except Antarctica",

    image: iphoneImage,
  },
  {
    id: 2,
    title: "apple watch",
    caption:
      " Lizards are a widespread group of squamate reptiles, with over 6 species, ranging across all continents except Antarctica",

    image: appleWatchImage,
  },
  {
    id: 3,
    title: "airpods",
    caption:
      " Lizards are a widespread group of squamate reptiles, with over 6 species, ranging across all continents except Antarctica",

    image: airpodsImage,
  },
];

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const dispatch = useDispatch();

  const handleShop = (e, cardInfo) => {
    dispatch(addItem(cardInfo));
  };

  const toggleDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <HeaderComponent toggleDrawer={toggleDrawer} />
      <DrawerComponent toggleDrawer={toggleDrawer} openDrawer={openDrawer} />
      <Grid container spacing={2}>
        {cardList.map((item) => (
          <CardComponent info={item} key={item.id}>
            <CardActions>
              <Button size="small" onClick={(e) => handleShop(e, item)}>
                shop
              </Button>
            </CardActions>
          </CardComponent>
        ))}
      </Grid>
    </Container>
  );
}

export default App;