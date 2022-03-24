import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import { SecondaryDashboardPage } from "../../../pages/SecondaryDashboard";

const images = [
  {
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-karl-lagerfeld-home-hamburg-germany-index2-1530037821.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*",
    title: "26th March",
    width: "30%",
  },

  {
    url: "https://www.photo12.com/lt/jmp07253_056.jpg",
    title: "Villa Jako, Germany",
    width: "40%",
  },
  {
    url: "https://cdn.prod.www.spiegel.de/images/b7d2c320-0001-0004-0000-000001306900_w1200_r1_fpx67.35_fpy50.96.jpg",
    title: "Prague",
    width: "30%",
  },

  {
    url: "https://www.monaco-tribune.com/wp-content/uploads/2021/01/karl-lagerfeld-villa-monaco-1024x569.jpg",
    title: "15th April",
    width: "30%",
  },
  {
    url: "https://www.monaco-tribune.com/wp-content/uploads/2021/01/667-8-1024x569.jpg",
    title: "Pearl White, Monaco",
    width: "40%",
  },

  {
    url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/12091b63-1bf5-4c08-aba4-26c842b663a4-Karl_L_Monaco3.jpg",
    title: "New York",
    width: "30%",
  },
  {
    url: "https://assets.vogue.com/photos/5c6de5109b39322d70794eb4/master/w_1600%2Cc_limit/22-karl-lagerfeld-interiors-in-vogue.jpg",
    title: "27th May",
    width: "30%",
  },
  {
    url: "https://media.admagazine.fr/photos/60c75d2fd9ccb5da855d6d9c/master/w_2240%2Cc_limit/07_2008_kl_voltaire_044bleucouve_jpg_5994_north_655x492_transparent_jpg_7630.jpg",
    title: "Quai Voltaire, Paris",
    width: "40%",
  },
  {
    url: "https://whitewallapi.wpenginepowered.com/wp-content/uploads/2018/05/Friedman-Benda-2-1366x976.jpg",
    title: "Dubai",
    width: "30%",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,

  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function ButtonBases() {
  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
    >
      {images.map((image) => (
        <ImageButton
          component={Link}
          to="/SecondaryDashboardPage"
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
