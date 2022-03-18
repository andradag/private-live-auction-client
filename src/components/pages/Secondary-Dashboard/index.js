import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import CardMedia from "@mui/material/CardMedia";
import styles from "./Secondary-Dashboard.css";

import * as React from "react";
import Card from "@mui/material/Card";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";

import Grid from "@mui/material/Grid";

import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { fontSize } from "@mui/system";
import { flexbox } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const SecondaryDashboardPage = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <h1>Live Auction</h1>

      <Box sx={{ bgcolor: "#cfe8fc", height: "30vh", width: "auto" }}>
        <div class="auction-image">
          <img
            src="https://sothebys-com.brightspotcdn.com/dims4/default/5479944/2147483647/strip/true/crop/2880x660+0+0/resize/1440x330!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F4a%2Fca%2F0058e35745d0877d192e869fa20c%2F22918200-de222x-karl-part-iii-webbanners-2880x660-02.jpg"
            height="100%"
            width="100%"
          />

          <div class="auction-text">
            <h1>KARL LAGERFELD</h1>
            <h1>Live Auction House</h1>
            <p>26 March 2022</p>

            <Fab
              variant="extended"
              size="medium"
              color="primary"
              aria-label="add"
              text="strong"
            >
              Register To Bid
            </Fab>
          </div>
        </div>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>
              <Card sx={{ marginTop: 20, width: 345, height: 645 }}>
                <CardMedia
                  component="img"
                  height="50%"
                  image="https://loveincorporated.blob.core.windows.net/contentimages/gallery/39d5432f-42ac-4851-9003-0233243ecc15-Karl_L_Monaco5.jpg"
                />
                <CardContent sx={{ height: 80, marginBottom: 20 }}>
                  {/* Title */}
                  <h3>French Riviera Summer Home </h3>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign="justify"
                  ></Typography>
                  {/* Short Description */}
                  <h5>
                    Built in 1902, the Belle Epoque style of the property makes
                    for particularly impressive environs, with gorgeous wall
                    panelling, columns, and crown moulding throughout the
                    estate.
                  </h5>
                  <h5>
                    With six bedrooms, four bathrooms, two dressing rooms, and a
                    billiards room, there’s certainly plenty of space to go
                    around. Outside, a 2,500 square foot terrace offers a place
                    to soak up the sun and the views of the Mediterranean Sea.
                  </h5>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="outlined"
                    className="liveButton"
                    sx={{
                      border: "none",
                      cursor: "default",
                    }}
                  >
                    Live
                  </Button>
                  <Button size="small" variant="contained">
                    Join
                  </Button>
                </CardActions>
              </Card>

              <Card sx={{ marginTop: 10, width: 345, height: 645 }}>
                <CardMedia
                  component="img"
                  height="50%"
                  image="https://static2.mansionglobal.com/production/media/article-images/fd7410aea10cf82c1b5a8b774168fa3e/large_Villa-Acqualina.jpg"
                />
                <CardContent sx={{ height: 80, marginBottom: 20 }}>
                  {/* Title */}
                  <h3>Acqualina Estate, Sunny Isles Beach</h3>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                  ></Typography>
                  {/* Short Description */}
                  <h5>
                    Acqualina Estate consists of two 50-story towers with 265
                    residences, ranging from three- to seven-bedrooms. Prices
                    start at $3.9 million and top out at $40 million for the
                    penthouses.
                  </h5>
                  <h5>
                    The development boasts more than 45,000 square feet of
                    amenities, including a spa and fitness center, a restaurant,
                    an ice skating rink, a movie theater and a FlowRider for
                    surfers, among other perks.
                  </h5>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="outlined"
                    className="liveButton"
                    sx={{
                      border: "none",
                      cursor: "default",
                    }}
                  >
                    Live
                  </Button>
                  <Button size="small" variant="contained">
                    Join
                  </Button>
                </CardActions>
              </Card>

              <Card sx={{ marginTop: 10, width: 345, height: 645 }}>
                <CardMedia
                  component="img"
                  height="50%"
                  image="https://media.architecturaldigest.com/photos/5b3264390dcdbf2512f61c9e/3:2/w_3543,h_2362,c_limit/Villa%20Jako(c)%20Engel%20_%20Vo%CC%88lkers_Herbert%20Ohge%20(1).jpg"
                />
                <CardContent sx={{ height: 80, marginBottom: 20 }}>
                  {/* Title */}
                  <h3>Villa Jako, Elbe River</h3>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                  ></Typography>
                  {/* Short Description */}
                  <h5>
                    Engel & Völkers in Hamburg has listed the classical home,
                    which features a Roman water pool in the grant foyer, an
                    atrium and gold-leaf ornaments throughout the living spaces
                    on the first floor.
                  </h5>
                  <h5>
                    The second story, an after-thought appended to the house in
                    the 1930s, holds several bedrooms in a much more relaxed and
                    cozy ambiance.
                  </h5>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="outlined"
                    className="liveButton"
                    sx={{
                      border: "none",
                      cursor: "default",
                    }}
                  >
                    Live
                  </Button>
                  <Button size="small" variant="contained">
                    Join
                  </Button>
                </CardActions>
              </Card>

              <Card sx={{ marginTop: 10, width: 345, height: 645 }}>
                <CardMedia
                  component="img"
                  height="50%"
                  image="https://www.theoneatelier.com/wp-content/uploads/2021/11/Karl-Lagerfeld-Sierra-Blanca-Estates_0.jpg"
                />
                <CardContent sx={{ height: 80, marginBottom: 40 }}>
                  {/* Title */}
                  <h3>KARL LAGERFELD Villas Marbella</h3>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                  ></Typography>
                  {/* Short Description */}
                  <h5>
                    The general landscape that dominates the development acts as
                    a sort of “lung” to the masterplan while the construction of
                    the villas uses mixed structures made of wood and highly
                    insulating and innovative materials.
                  </h5>
                  <h5>
                    The residential units are orientated in such a way that
                    optimizes the best possible exposure with regard to the sun
                    and the landscape. Although each villa has its own unique
                    shape, they all follow a principle that imagines the living
                    areas located on the ground floor as transparent and light,
                    mainly protected from radiation.
                  </h5>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="outlined"
                    className="liveButton"
                    sx={{
                      border: "none",
                      cursor: "default",
                    }}
                  >
                    Live
                  </Button>
                  <Button size="small" variant="contained">
                    Join
                  </Button>
                </CardActions>
              </Card>
              <Card sx={{ marginTop: 10, width: 345, height: 645 }}>
                <CardMedia
                  component="img"
                  height="50%"
                  image="https://content.fortune.com/wp-content/uploads/2016/07/east-to-west-all-4-towers-east-to-west.jpg?resize=1500,1000"
                />
                <CardContent sx={{ height: 80, marginBottom: 20 }}>
                  {/* Title */}
                  <h3>Residential Real Estate, South Florida</h3>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                  ></Typography>
                  {/* Short Description */}
                  <h5>
                    The Miami-based Trump Group attached Karl Lagerfeld'
                    name—the head designer and creative director of Chanel and
                    Fendi— to their new luxury condominium project in Sunny
                    Isles Beach, Florida. The Estates at Acqualina will feature
                    lobbies designed by the fashion maestro himself.
                  </h5>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="outlined"
                    className="liveButton"
                    sx={{
                      border: "none",
                      cursor: "default",
                    }}
                  >
                    Live
                  </Button>
                  <Button size="small" variant="contained">
                    Join
                  </Button>
                </CardActions>
              </Card>
              <Card sx={{ marginTop: 10, width: 345, height: 645 }}>
                <CardMedia
                  component="img"
                  height="50%"
                  image="https://scontent-man2-1.xx.fbcdn.net/v/t1.6435-9/90197364_3182024548495558_1605461090232172544_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=105&ccb=1-5&_nc_sid=2d5d41&_nc_ohc=9A4P2Mx9K2kAX_lK4uc&_nc_oc=AQkIBWQ7Xisgpye7khc3F2KwBL4rTeCEwAHgGm7MTFEiVErXzvGoKYjSvQKnTrZUW3uIZPlQEp2_-mAkgLkoH1Nq&_nc_ht=scontent-man2-1.xx&oh=00_AT8DMaxCvZebs1TnLVPmshLnfwpTeKVZJD5gt77SdlHHhw&oe=62596A73"
                />
                <CardContent sx={{ height: 80, marginBottom: 20 }}>
                  {/* Title */}
                  <h3>21 rue St-Guillaume, Paris</h3>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                  ></Typography>
                  {/* Short Description */}
                  <h5>
                    The historic building is considered the heart and soul of
                    the brand; it housed Karl Lagerfeld’s office and studio,
                    where he created countless collections throughout his
                    illustrious career.
                  </h5>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="outlined"
                    className="liveButton"
                    sx={{
                      border: "none",
                      cursor: "default",
                    }}
                  >
                    Live
                  </Button>
                  <Button size="small" variant="contained">
                    Join
                  </Button>
                </CardActions>
              </Card>
              <Card sx={{ marginTop: 10, width: 345, height: 645 }}>
                <CardMedia
                  component="img"
                  height="50%"
                  image="https://media.vogue.co.uk/photos/61a7a6fdcfac31880007b3ce/2:3/w_2240,c_limit/PF2176_07-2008%20KL%20VOLTAIRE-044Bleucouve_comp.jpg"
                />
                <CardContent sx={{ height: 80, marginBottom: 20 }}>
                  {/* Title */}
                  <h3>Quai Voltaire apartment</h3>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                  ></Typography>
                  {/* Short Description */}
                  <h5>
                    The apartment, which Lagerfeld spent two and a half years
                    renovating before moving in in 2007, clusters of unopened
                    pink and white Coca-Cola Light bottles from a 2010
                    collaboration, emblazoned with Lagerfeld’s iconic
                    silhouette, claim several surfaces while in his bedroom,
                    half a dozen sixth generation iPod Nanos perch on a bedside
                    table (he famously owned upwards of 40).
                  </h5>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="outlined"
                    className="liveButton"
                    sx={{
                      border: "none",
                      cursor: "default",
                    }}
                  >
                    Live
                  </Button>
                  <Button size="small" variant="contained">
                    Join
                  </Button>
                </CardActions>
              </Card>
            </Item>
          </Grid>

          {/* cards with fields from house client form */}

          <Grid item xs={6}>
            <Item>
              <Card sx={{ marginTop: 20, width: 845, height: 1500 }}>
                <CardContent sx={{ height: 80, marginBottom: 120 }}>
                  {/* Title */}
                  <h1>French Riviera Summer Home </h1>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign="justify"
                  ></Typography>
                  {/* Client Form data here */}
                  <Box
                    sx={{
                      flexWrap: "nowrap",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                      <TableCell>
                        <IconButton
                          aria-label="expand row"
                          size="small"
                          onClick={() => setOpen(!open)}
                        >
                          {open ? (
                            <KeyboardArrowUpIcon />
                          ) : (
                            <KeyboardArrowDownIcon />
                          )}
                        </IconButton>
                      </TableCell>

                      <TableCell component="th" scope="row">
                        <h2>Location</h2>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        style={{ paddingBottom: 0, paddingTop: 0 }}
                        colSpan={6}
                      >
                        <Collapse in={open} timeout="auto" unmountOnExit>
                          <Box sx={{ margin: 3 }}>
                            <Table size="small" aria-label="purchases">
                              <TableHead>
                                <TableRow style={{ fondSize: 2 }}>
                                  <TableCell>Country</TableCell>
                                  <TableCell>City</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>France</TableCell>
                                  <TableCell>Nice</TableCell>
                                </TableRow>
                              </TableHead>
                            </Table>
                          </Box>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                    <TableContainer component={Paper}>
                      <Table aria-label="collapsible table"></Table>
                    </TableContainer>
                    <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                      <TableCell>
                        <IconButton
                          aria-label="expand row"
                          size="small"
                          onClick={() => setOpen(!open)}
                        >
                          {open ? (
                            <KeyboardArrowUpIcon />
                          ) : (
                            <KeyboardArrowDownIcon />
                          )}
                        </IconButton>
                      </TableCell>

                      <TableCell component="th" scope="row">
                        <h2>Price</h2>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        style={{ paddingBottom: 0, paddingTop: 0 }}
                        colSpan={6}
                      >
                        <Collapse in={open} timeout="auto" unmountOnExit>
                          <Box sx={{ margin: 3 }}>
                            <Table size="small" aria-label="purchases">
                              <TableRow style={{ fondSize: 2 }}>
                                <TableCell>$7,356,000</TableCell>
                              </TableRow>
                            </Table>
                          </Box>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                    <TableContainer component={Paper}>
                      <Table aria-label="collapsible table"></Table>
                    </TableContainer>

                    <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                      <TableCell>
                        <IconButton
                          aria-label="expand row"
                          size="small"
                          onClick={() => setOpen(!open)}
                        >
                          {open ? (
                            <KeyboardArrowUpIcon />
                          ) : (
                            <KeyboardArrowDownIcon />
                          )}
                        </IconButton>
                      </TableCell>

                      <TableCell component="th" scope="row">
                        <h2>Space</h2>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        style={{ paddingBottom: 0, paddingTop: 0 }}
                        colSpan={6}
                      >
                        <Collapse in={open} timeout="auto" unmountOnExit>
                          <Box sx={{ margin: 3 }}>
                            <Table size="small" aria-label="purchases">
                              <TableHead>
                                <TableRow style={{ fondSize: 2 }}>
                                  <TableCell>Bedrooms</TableCell>
                                  <TableCell>Bathrooms</TableCell>
                                  <TableCell>Garden Size</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell>10</TableCell>
                                  <TableCell>10</TableCell>
                                  <TableCell>100 m2</TableCell>
                                </TableRow>
                              </TableHead>
                            </Table>
                          </Box>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  </Box>
                  <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                    <TableCell>
                      <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                      >
                        {open ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </IconButton>
                    </TableCell>

                    <TableCell component="th" scope="row">
                      <h2>Utilities</h2>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      style={{ paddingBottom: 0, paddingTop: 0 }}
                      colSpan={6}
                    >
                      <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 3 }}>
                          <Table size="small" aria-label="purchases">
                            <TableHead>
                              <TableRow style={{ fondSize: 2 }}>
                                <TableCell>Energy Consumption</TableCell>
                                <TableCell>Heating Type</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>A*</TableCell>
                                <TableCell>Electricity and Gas</TableCell>
                              </TableRow>
                            </TableHead>
                          </Table>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>

                  <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                    <TableCell>
                      <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                      >
                        {open ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </IconButton>
                    </TableCell>

                    <TableCell component="th" scope="row">
                      <h2>Property Type</h2>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      style={{ paddingBottom: 0, paddingTop: 0 }}
                      colSpan={6}
                    >
                      <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 3 }}>
                          <Table size="small" aria-label="purchases">
                            <TableHead>
                              <TableRow style={{ fondSize: 2 }}>
                                <TableCell>Freehold</TableCell>
                              </TableRow>
                            </TableHead>
                          </Table>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>

                  <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                    <TableCell>
                      <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                      >
                        {open ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </IconButton>
                    </TableCell>

                    <TableCell component="th" scope="row">
                      <h2>Amenities</h2>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      style={{ paddingBottom: 0, paddingTop: 0 }}
                      colSpan={6}
                    >
                      <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 3 }}>
                          <Table size="small" aria-label="purchases">
                            <TableHead>
                              <TableRow style={{ fondSize: 2 }}>
                                <TableCell>Pool</TableCell>
                                <TableCell>Tennis Court</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell>20 m2</TableCell>
                                <TableCell>Green, 10 m2</TableCell>
                              </TableRow>
                            </TableHead>
                          </Table>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>

                  <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                    <TableCell>
                      <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                      >
                        {open ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </IconButton>
                    </TableCell>

                    <TableCell component="th" scope="row">
                      <h2>Description</h2>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      style={{ paddingBottom: 0, paddingTop: 0 }}
                      colSpan={6}
                    >
                      <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 3 }}>
                          <Table size="small" aria-label="purchases">
                            <TableHead>
                              <TableRow style={{ fondSize: 2 }}>
                                <TableCell>fafhbaekgbuahbgjabdsfbv</TableCell>
                              </TableRow>
                            </TableHead>
                          </Table>
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>

                  <TableContainer component={Paper}>
                    <Table aria-label="collapsible table"></Table>
                  </TableContainer>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="outlined"
                    className="liveButton"
                    sx={{
                      border: "none",
                      cursor: "default",
                    }}
                  >
                    Live
                  </Button>
                  <Button size="small" variant="contained">
                    Join
                  </Button>
                </CardActions>
              </Card>
            </Item>
          </Grid>
        </Grid>
      </Box>

      <br />

      <section>
        <Card sx={{ marginTop: 10, width: 845, height: 645 }}>
          <CardMedia
            component="img"
            height="50%"
            image="https://static2.mansionglobal.com/production/media/article-images/fd7410aea10cf82c1b5a8b774168fa3e/large_Villa-Acqualina.jpg"
          />
          <CardContent sx={{ height: 80, marginBottom: 20 }}>
            {/* Title */}
            <h3>Acqualina Estate, Sunny Isles Beach</h3>
            <Typography gutterBottom variant="h5" component="div"></Typography>
            {/* Short Description */}
            <h5>
              Acqualina Estate consists of two 50-story towers with 265
              residences, ranging from three- to seven-bedrooms. Prices start at
              $3.9 million and top out at $40 million for the penthouses.
            </h5>
            <h5>
              The development boasts more than 45,000 square feet of amenities,
              including a spa and fitness center, a restaurant, an ice skating
              rink, a movie theater and a FlowRider for surfers, among other
              perks.
            </h5>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="outlined"
              className="liveButton"
              sx={{
                border: "none",
                cursor: "default",
              }}
            >
              Live
            </Button>
            <Button size="small" variant="contained">
              Join
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ marginTop: 10, width: 845, height: 645 }}>
          <CardMedia
            component="img"
            height="50%"
            image="https://media.architecturaldigest.com/photos/5b3264390dcdbf2512f61c9e/3:2/w_3543,h_2362,c_limit/Villa%20Jako(c)%20Engel%20_%20Vo%CC%88lkers_Herbert%20Ohge%20(1).jpg"
          />
          <CardContent sx={{ height: 80, marginBottom: 20 }}>
            {/* Title */}
            <h3>Villa Jako, Elbe River</h3>
            <Typography gutterBottom variant="h5" component="div"></Typography>
            {/* Short Description */}
            <h5>
              Engel & Völkers in Hamburg has listed the classical home, which
              features a Roman water pool in the grant foyer, an atrium and
              gold-leaf ornaments throughout the living spaces on the first
              floor.
            </h5>
            <h5>
              The second story, an after-thought appended to the house in the
              1930s, holds several bedrooms in a much more relaxed and cozy
              ambiance.
            </h5>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="outlined"
              className="liveButton"
              sx={{
                border: "none",
                cursor: "default",
              }}
            >
              Live
            </Button>
            <Button size="small" variant="contained">
              Join
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ marginTop: 10, width: 845, height: 645 }}>
          <CardMedia
            component="img"
            height="50%"
            image="https://www.theoneatelier.com/wp-content/uploads/2021/11/Karl-Lagerfeld-Sierra-Blanca-Estates_0.jpg"
          />
          <CardContent sx={{ height: 80, marginBottom: 40 }}>
            {/* Title */}
            <h3>KARL LAGERFELD Villas Marbella</h3>
            <Typography gutterBottom variant="h5" component="div"></Typography>
            {/* Short Description */}
            <h5>
              The general landscape that dominates the development acts as a
              sort of “lung” to the masterplan while the construction of the
              villas uses mixed structures made of wood and highly insulating
              and innovative materials.
            </h5>
            <h5>
              The residential units are orientated in such a way that optimizes
              the best possible exposure with regard to the sun and the
              landscape. Although each villa has its own unique shape, they all
              follow a principle that imagines the living areas located on the
              ground floor as transparent and light, mainly protected from
              radiation.
            </h5>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="outlined"
              className="liveButton"
              sx={{
                border: "none",
                cursor: "default",
              }}
            >
              Live
            </Button>
            <Button size="small" variant="contained">
              Join
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ marginTop: 10, width: 845, height: 645 }}>
          <CardMedia
            component="img"
            height="50%"
            image="https://content.fortune.com/wp-content/uploads/2016/07/east-to-west-all-4-towers-east-to-west.jpg?resize=1500,1000"
          />
          <CardContent sx={{ height: 80, marginBottom: 20 }}>
            {/* Title */}
            <h3>Residential Real Estate, South Florida</h3>
            <Typography gutterBottom variant="h5" component="div"></Typography>
            {/* Short Description */}
            <h5>
              The Miami-based Trump Group attached Karl Lagerfeld' name—the head
              designer and creative director of Chanel and Fendi— to their new
              luxury condominium project in Sunny Isles Beach, Florida. The
              Estates at Acqualina will feature lobbies designed by the fashion
              maestro himself.
            </h5>

            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="outlined"
              className="liveButton"
              sx={{
                border: "none",
                cursor: "default",
              }}
            >
              Live
            </Button>
            <Button size="small" variant="contained">
              Join
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ marginTop: 10, width: 845, height: 645 }}>
          <CardMedia
            component="img"
            height="50%"
            image="https://scontent-man2-1.xx.fbcdn.net/v/t1.6435-9/90197364_3182024548495558_1605461090232172544_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=105&ccb=1-5&_nc_sid=2d5d41&_nc_ohc=9A4P2Mx9K2kAX_lK4uc&_nc_oc=AQkIBWQ7Xisgpye7khc3F2KwBL4rTeCEwAHgGm7MTFEiVErXzvGoKYjSvQKnTrZUW3uIZPlQEp2_-mAkgLkoH1Nq&_nc_ht=scontent-man2-1.xx&oh=00_AT8DMaxCvZebs1TnLVPmshLnfwpTeKVZJD5gt77SdlHHhw&oe=62596A73"
          />
          <CardContent sx={{ height: 80, marginBottom: 20 }}>
            {/* Title */}
            <h3>21 rue St-Guillaume, Paris</h3>
            <Typography gutterBottom variant="h5" component="div"></Typography>
            {/* Short Description */}
            <h5>
              The historic building is considered the heart and soul of the
              brand; it housed Karl Lagerfeld’s office and studio, where he
              created countless collections throughout his illustrious career.
            </h5>

            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="outlined"
              className="liveButton"
              sx={{
                border: "none",
                cursor: "default",
              }}
            >
              Live
            </Button>
            <Button size="small" variant="contained">
              Join
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ marginTop: 10, width: 845, height: 645 }}>
          <CardMedia
            component="img"
            height="50%"
            image="https://media.vogue.co.uk/photos/61a7a6fdcfac31880007b3ce/2:3/w_2240,c_limit/PF2176_07-2008%20KL%20VOLTAIRE-044Bleucouve_comp.jpg"
          />
          <CardContent sx={{ height: 80, marginBottom: 20 }}>
            {/* Title */}
            <h3>Quai Voltaire apartment</h3>
            <Typography gutterBottom variant="h5" component="div"></Typography>
            {/* Short Description */}
            <h5>
              The apartment, which Lagerfeld spent two and a half years
              renovating before moving in in 2007, clusters of unopened pink and
              white Coca-Cola Light bottles from a 2010 collaboration,
              emblazoned with Lagerfeld’s iconic silhouette, claim several
              surfaces while in his bedroom, half a dozen sixth generation iPod
              Nanos perch on a bedside table (he famously owned upwards of 40).
            </h5>

            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="outlined"
              className="liveButton"
              sx={{
                border: "none",
                cursor: "default",
              }}
            >
              Live
            </Button>
            <Button size="small" variant="contained">
              Join
            </Button>
          </CardActions>
        </Card>
      </section>
    </>
  );
};
