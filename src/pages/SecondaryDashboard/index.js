import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import CardMedia from "@mui/material/CardMedia";
import "./SecondaryDashboard.css";

import * as React from "react";
import Card from "@mui/material/Card";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";

import {styled} from "@mui/material/styles";

import Grid from "@mui/material/Grid";

import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";

import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Item = styled(Paper)(({theme}) => ({
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
			<Box sx={{margin: "15px"}}>
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
							sx={{backgroundColor: "#E08604"}}
							variant="extended"
							size="medium"
							aria-label="add"
							text="strong"
						>
							Register To Bid
						</Fab>
					</div>
				</div>
			</Box>

			<Box>
				<Grid container columnSpacing={{xs: 1, sm: 2, md: 3}}>
					<Grid
						item
						sx={{
							display: "flex",
							justifyContent: "space-around",
							border: "solid",
							marginLeft: "50px",
							backgroundColor: "white",
						}}
					>
						<Item>
							<Card
								sx={{
									display: "flex",
									flexDirection: "row",
									height: 500,
									marginBottom: "20px",
								}}
							>
								<CardMedia
									component="img"
									sx={{maxWidth: "700px", maxHeight: "1000px"}}
									image="https://loveincorporated.blob.core.windows.net/contentimages/gallery/39d5432f-42ac-4851-9003-0233243ecc15-Karl_L_Monaco5.jpg"
								/>

								<CardContent sx={{height: 80, marginBottom: 10}}>
									<Typography
										gutterBottom
										variant="h3"
										component="div"
										textAlign="center"
									>
										French Riviera Summer Home
									</Typography>

									<Typography sx={{fontSize: "20px"}}>Description:</Typography>
									<Typography sx={{fontSize: "20px"}}>
										Property Type:
									</Typography>
									<Typography sx={{fontSize: "20px"}}>
										Amount of Bedrooms:{" "}
									</Typography>
									<Typography sx={{fontSize: "20px"}}>
										Amount of Bathrooms/WC:
									</Typography>
									<Typography sx={{fontSize: "20px"}}>Status:</Typography>
									<Typography sx={{fontSize: "20px"}}>Starting Bid:</Typography>
									<Typography sx={{fontSize: "20px"}}>Created By:</Typography>

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

							<Card
								sx={{
									display: "flex",
									flexDirection: "row",
									height: 500,
									marginBottom: "20px",
								}}
							>
								<CardMedia
									component="img"
									sx={{maxWidth: "700px", maxHeight: "1000px"}}
									image="https://static2.mansionglobal.com/production/media/article-images/fd7410aea10cf82c1b5a8b774168fa3e/large_Villa-Acqualina.jpg"
								/>
								<CardContent sx={{height: 80, marginBottom: 10}}>
									<Typography
										gutterBottom
										variant="h3"
										component="div"
										textAlign="center"
									>
										Acqualina Estate, Sunny Isles Beach
									</Typography>

									<Typography sx={{fontSize: "20px"}}>Description:</Typography>
									<Typography sx={{fontSize: "20px"}}>
										Property Type:
									</Typography>
									<Typography sx={{fontSize: "20px"}}>
										Amount of Bedrooms:{" "}
									</Typography>
									<Typography sx={{fontSize: "20px"}}>
										Amount of Bathrooms/WC:
									</Typography>
									<Typography sx={{fontSize: "20px"}}>Status:</Typography>
									<Typography sx={{fontSize: "20px"}}>Starting Bid:</Typography>
									<Typography sx={{fontSize: "20px"}}>Created By:</Typography>

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

							<Card
								sx={{
									display: "flex",
									flexDirection: "row",
									height: 500,
									marginBottom: "20px",
								}}
							>
								<CardMedia
									component="img"
									sx={{maxWidth: "700px", maxHeight: "1000px"}}
									image="https://media.architecturaldigest.com/photos/5b3264390dcdbf2512f61c9e/3:2/w_3543,h_2362,c_limit/Villa%20Jako(c)%20Engel%20_%20Vo%CC%88lkers_Herbert%20Ohge%20(1).jpg"
								/>
								<CardContent sx={{height: 80, marginBottom: 10}}>
									<Typography
										gutterBottom
										variant="h3"
										component="div"
										textAlign="center"
									>
										Villa Jako, Elbe River
									</Typography>

									<Typography sx={{fontSize: "20px"}}>Description:</Typography>
									<Typography sx={{fontSize: "20px"}}>
										Property Type:
									</Typography>
									<Typography sx={{fontSize: "20px"}}>
										Amount of Bedrooms:{" "}
									</Typography>
									<Typography sx={{fontSize: "20px"}}>
										Amount of Bathrooms/WC:
									</Typography>
									<Typography sx={{fontSize: "20px"}}>Status:</Typography>
									<Typography sx={{fontSize: "20px"}}>Starting Bid:</Typography>
									<Typography sx={{fontSize: "20px"}}>Created By:</Typography>
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

							<Card
								sx={{
									display: "flex",
									flexDirection: "row",
									height: 500,
									marginBottom: "20px",
								}}
							>
								<CardMedia
									component="img"
									sx={{maxWidth: "700px", maxHeight: "1000px"}}
									image="https://www.theoneatelier.com/wp-content/uploads/2021/11/Karl-Lagerfeld-Sierra-Blanca-Estates_0.jpg"
								/>
								<CardContent sx={{height: 80, marginBottom: 10}}>
									<Typography
										gutterBottom
										variant="h3"
										component="div"
										textAlign="center"
									>
										KARL LAGERFELD Villas Marbella
									</Typography>

									<Typography sx={{fontSize: "20px"}}>Description:</Typography>
									<Typography sx={{fontSize: "20px"}}>
										Property Type:
									</Typography>
									<Typography sx={{fontSize: "20px"}}>
										Amount of Bedrooms:{" "}
									</Typography>
									<Typography sx={{fontSize: "20px"}}>
										Amount of Bathrooms/WC:
									</Typography>
									<Typography sx={{fontSize: "20px"}}>Status:</Typography>
									<Typography sx={{fontSize: "20px"}}>Starting Bid:</Typography>
									<Typography sx={{fontSize: "20px"}}>Created By:</Typography>
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

							<Card
								sx={{
									display: "flex",
									flexDirection: "row",
									height: 500,
									marginBottom: "20px",
								}}
							>
								<CardMedia
									component="img"
									sx={{maxWidth: "700px", maxHeight: "1000px"}}
									image="https://content.fortune.com/wp-content/uploads/2016/07/east-to-west-all-4-towers-east-to-west.jpg?resize=1500,1000"
								/>
								<CardContent sx={{height: 80, marginBottom: 10}}>
									<Typography
										gutterBottom
										variant="h3"
										component="div"
										textAlign="center"
									>
										Residential Real Estate, South Florida
									</Typography>

									<Typography sx={{fontSize: "20px"}}>Description:</Typography>
									<Typography sx={{fontSize: "20px"}}>
										Property Type:
									</Typography>
									<Typography sx={{fontSize: "20px"}}>
										Amount of Bedrooms:{" "}
									</Typography>
									<Typography sx={{fontSize: "20px"}}>
										Amount of Bathrooms/WC:
									</Typography>
									<Typography sx={{fontSize: "20px"}}>Status:</Typography>
									<Typography sx={{fontSize: "20px"}}>Starting Bid:</Typography>
									<Typography sx={{fontSize: "20px"}}>Created By:</Typography>

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

							<Card
								sx={{
									display: "flex",
									flexDirection: "row",
									height: 500,
									marginBottom: "20px",
								}}
							>
								<CardMedia
									component="img"
									sx={{maxWidth: "700px", maxHeight: "1000px"}}
									image="https://scontent-man2-1.xx.fbcdn.net/v/t1.6435-9/90197364_3182024548495558_1605461090232172544_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=105&ccb=1-5&_nc_sid=2d5d41&_nc_ohc=9A4P2Mx9K2kAX_lK4uc&_nc_oc=AQkIBWQ7Xisgpye7khc3F2KwBL4rTeCEwAHgGm7MTFEiVErXzvGoKYjSvQKnTrZUW3uIZPlQEp2_-mAkgLkoH1Nq&_nc_ht=scontent-man2-1.xx&oh=00_AT8DMaxCvZebs1TnLVPmshLnfwpTeKVZJD5gt77SdlHHhw&oe=62596A73"
								/>
								<CardContent sx={{height: 80, marginBottom: 10}}>
									<Typography
										gutterBottom
										variant="h3"
										component="div"
										textAlign="center"
									>
										21 rue St-Guillaume, Paris
									</Typography>

									<Typography sx={{fontSize: "20px"}}>Description:</Typography>
									<Typography sx={{fontSize: "20px"}}>
										Property Type:
									</Typography>
									<Typography sx={{fontSize: "20px"}}>
										Amount of Bedrooms:{" "}
									</Typography>
									<Typography sx={{fontSize: "20px"}}>
										Amount of Bathrooms/WC:
									</Typography>
									<Typography sx={{fontSize: "20px"}}>Status:</Typography>
									<Typography sx={{fontSize: "20px"}}>Starting Bid:</Typography>
									<Typography sx={{fontSize: "20px"}}>Created By:</Typography>

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

							<Card
								sx={{
									display: "flex",
									flexDirection: "row",
									height: 500,
									marginBottom: "20px",
								}}
							>
								<CardMedia
									component="img"
									sx={{maxWidth: "700px", maxHeight: "1000px"}}
									image="https://media.vogue.co.uk/photos/61a7a6fdcfac31880007b3ce/2:3/w_2240,c_limit/PF2176_07-2008%20KL%20VOLTAIRE-044Bleucouve_comp.jpg"
								/>
								<CardContent sx={{height: 80, marginBottom: 10}}>
									<Typography
										gutterBottom
										variant="h3"
										component="div"
										textAlign="center"
									>
										Quai Voltaire apartment
									</Typography>

									<Typography sx={{fontSize: "20px"}}>Description:</Typography>
									<Typography sx={{fontSize: "20px"}}>
										Property Type:
									</Typography>
									<Typography sx={{fontSize: "20px"}}>
										Amount of Bedrooms:{" "}
									</Typography>
									<Typography sx={{fontSize: "20px"}}>
										Amount of Bathrooms/WC:
									</Typography>
									<Typography sx={{fontSize: "20px"}}>Status:</Typography>
									<Typography sx={{fontSize: "20px"}}>Starting Bid:</Typography>
									<Typography sx={{fontSize: "20px"}}>Created By:</Typography>
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
				</Grid>
			</Box>
		</>
	);
};
