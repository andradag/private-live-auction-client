import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

import {styled} from "@mui/material/styles";

import "./SecondaryDashboard.css";

import {LiveHouses} from "../../components/LiveHouses";

import {UpcomingHouses} from "../../components/UpcomingHouses";
import {Box} from "@mui/material";

const Item = styled(Paper)(({theme}) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: "2rem",
	textAlign: "center",
	width: "100%",
	color: theme.palette.text.secondary,
}));

export const SecondaryDashboardPage = () => {
	return (
		<>
			<Box>
				<div class="auction-image">
					<img
						src="https://sothebys-com.brightspotcdn.com/dims4/default/5479944/2147483647/strip/true/crop/2880x660+0+0/resize/1440x330!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F4a%2Fca%2F0058e35745d0877d192e869fa20c%2F22918200-de222x-karl-part-iii-webbanners-2880x660-02.jpg"
						height="100%"
						width="100%"
						alt=""
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

			<Container style={{padding: "unset", marginTop: "1rem"}}>
				<Box style={{width: "100%"}}>
					<Grid
						sx={{
							display: "flex",
							justifyContent: "space-around",
							boxShadow: 6,
							backgroundColor: "white",
							padding: "unset",
						}}
					>
						<Item>
							<LiveHouses />
							<UpcomingHouses />
						</Item>
					</Grid>
				</Box>
			</Container>
		</>
	);
};
