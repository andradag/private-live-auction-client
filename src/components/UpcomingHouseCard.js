import {useNavigate} from "react-router-dom";
import {useMutation} from "@apollo/client";

import {useAuth} from "../contexts/AppProvider";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import {SAVELISTING} from "../mutations";

export const UpcomingHouseCard = ({house}) => {
	const {user} = useAuth();
	const [executeSaveListing, {data}] = useMutation(SAVELISTING);

	const navigate = useNavigate();

	const viewAuction = (id) => {
		navigate(`/auction/${id}`);
	};

	const saveListing = async (id) => {
		await executeSaveListing({variables: {input: id}});
	};

	return (
		<Card
			className="card"
			sx={{
				boxShadow: 4,
			}}
		>
			<CardMedia
				component="img"
				image={house.images[0]}
				className="card-image"
			/>

			<CardContent className="card-content">
				<Typography
					gutterBottom
					variant="h3"
					component="div"
					textAlign="center"
				>
					{house.title}
				</Typography>
				{/* 
        <Typography sx={{ fontSize: "20px" }}>
          Description: {house.description}
        </Typography> */}
				<Typography sx={{fontSize: "20px"}}>
					Property Type: {house.propertyType}
				</Typography>
				<Typography sx={{fontSize: "20px"}}>
					Amount of Bedrooms: {house.bedrooms}
				</Typography>
				<Typography sx={{fontSize: "20px"}}>
					Amount of Bathrooms/WC: {house.bathrooms}
				</Typography>
				{/* <Typography sx={{ fontSize: "20px" }}>Status:</Typography> */}
				<Typography sx={{fontSize: "20px"}}>
					Starting Bid: {house.startingBid}
				</Typography>
				<Typography sx={{fontSize: "20px"}}>
					Created By: {house.createdBy.username}
				</Typography>

				<Typography variant="body2" color="text.secondary"></Typography>
			</CardContent>
			<CardActions className="card-actions">
				<Button
					onClick={() => viewAuction(house._id)}
					size="small"
					variant="outlined"
				>
					View
				</Button>
				{/* If user is admin will se "Create auction" button */}
				{user.isAdmin && (
					<Button id="12345" size="small" variant="contained">
						Edit
					</Button>
				)}
				{!user.isAdmin && (
					<Button
						onClick={() => saveListing(house._id)}
						id="12345"
						size="small"
						variant="contained"
					>
						Register
					</Button>
				)}
			</CardActions>
		</Card>
	);
};
