import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

export const FooterStyling = () => {
	return (
		<footer>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					position: "fixed",
					backgroundColor: "#E08604",
					color: "white",
					padding: "10px",
					height: "3rem",
					left: 0,
					bottom: 0,
					right: 0,
					zIndex: 1,
				}}
			>
				<Container>
					<Grid item>
						<Typography sx={{textAlign: "center", fontSize: "20px"}}>
							©Project name 2022
						</Typography>
					</Grid>
				</Container>
			</Box>
		</footer>
	);
};
