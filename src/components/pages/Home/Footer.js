import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        s
        py={{ xs: 3, sm: 10 }}
        bgcolor="text.Secondary"
        color="purple"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Contact</Box>
              <Box>
                <Link href="/" color="inherit">
                  Phone
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Email
                </Link>
              </Box>

              <Box>
                <Link href="/" color="inherit">
                  LinkedIn
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>About</Box>
              <Box>
                <Link href="/" color="inherit">
                  Privacy
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Cookies
                </Link>
              </Box>

              <Box>
                <Link href="/" color="inherit">
                  Terms of Business
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Profile</Box>
              <Box>
                <Link href="/" color="inherit">
                  Login
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Logout
                </Link>
              </Box>

              <Box>
                <Link href="/" color="inherit">
                  Register
                </Link>
              </Box>
            </Grid>
          </Grid>
          {/* <Box
            textAlign="center"
            pt={{ xs: 5, sm: 10 }}
            pb={{ xs: 5, sm: 0 }}
            Material
            UI
            Workshop reg {new Date().getFullYear()}
          ></Box> */}
        </Container>
      </Box>
    </footer>
  );
}
