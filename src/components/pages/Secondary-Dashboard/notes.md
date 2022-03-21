{/_ Right hand side component _/}

          <Grid
            item
            sx={{
              border: "solid",
              marginLeft: "50px",
              padding: "10px",
              backgroundColor: "white",
            }}
          >
            <Box
              sx={{
                height: 1300,
                border: "solid",
                padding: "10px",
                marginBottom: "20px",
              }}
            >
              <Grid
                container
                rowSpacing={8}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{ justifyContent: "center" }}
              >
                <Grid item xs={8} sx={{ justifyContent: "center" }}>
                  <Item>
                    <CardContent>
                      <h1>French Riviera Summer Home </h1>
                      <Typography
                        gutterBottom
                        variant="h5"
                        textAlign="justify"
                      ></Typography>
                    </CardContent>
                  </Item>
                </Grid>

                <Grid
                  item
                  xs={5}
                  sx={{
                    width: "170px",
                    height: "200px",
                    marginBottom: "100px",
                  }}
                >
                  <Item>
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
                  </Item>
                </Grid>

                <Grid
                  item
                  xs={5}
                  sx={{
                    width: "170px",
                    height: "200px",
                    marginBottom: "100px",
                  }}
                >
                  <Item>
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
                  </Item>
                </Grid>

                <Grid
                  item
                  xs={5}
                  sx={{
                    width: "170px",
                    height: "200px",
                    marginBottom: "100px",
                  }}
                >
                  <Item>
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
                  </Item>
                </Grid>

                <Grid
                  item
                  xs={5}
                  sx={{
                    width: "170px",
                    height: "200px",
                    marginBottom: "100px",
                  }}
                >
                  <Item>
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
                  </Item>
                </Grid>

                <Grid
                  item
                  xs={5}
                  sx={{
                    width: "170px",
                    height: "200px",
                    marginBottom: "100px",
                  }}
                >
                  <Item>
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
                  </Item>
                </Grid>

                <Grid
                  item
                  xs={5}
                  sx={{
                    width: "170px",
                    height: "200px",
                    marginBottom: "100px",
                  }}
                >
                  <Item>
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
                  </Item>
                </Grid>

                <Grid
                  item
                  xs={5}
                  sx={{
                    width: "170px",
                    height: "200px",
                    marginBottom: "100px",
                  }}
                >
                  <Item>
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
                  </Item>
                </Grid>
              </Grid>
            </Box>

            <Box
              sx={{
                width: 650,
                height: 920,
                border: "solid",
                marginBottom: "20px",
              }}
            >
              <Grid
                container
                rowSpacing={6}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{ margin: 5, justifyContent: "center" }}
              >
                <Grid>
                  <Item>
                    <CardContent>
                      <h1>French Riviera Summer Home </h1>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        textAlign="justify"
                      ></Typography>
                    </CardContent>
                  </Item>
                </Grid>

                <Grid item xs={6}>
                  <Item>
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
                  </Item>
                </Grid>

                <Grid item xs={6}>
                  <Item>
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
                  </Item>
                </Grid>

                <Grid item xs={6}>
                  <Item>
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
                  </Item>
                </Grid>

                <Grid item xs={6}>
                  <Item>
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
                  </Item>
                </Grid>

                <Grid item xs={6}>
                  <Item>
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
                  </Item>
                </Grid>

                <Grid item xs={6}>
                  <Item>
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
                  </Item>
                </Grid>

                <Grid item xs={6}>
                  <Item>
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
                  </Item>
                </Grid>
              </Grid>
            </Box>

            <Box
              sx={{
                width: 650,
                height: 920,
                border: "solid",
                marginBottom: "20px",
              }}
            >
              <Grid
                container
                rowSpacing={6}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{ margin: 5, justifyContent: "center" }}
              >
                <Grid>
                  <Item>
                    <CardContent>
                      <h1>French Riviera Summer Home </h1>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        textAlign="justify"
                      ></Typography>
                    </CardContent>
                  </Item>
                </Grid>

                <Grid item xs={6}>
                  <Item>
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
                  </Item>
                </Grid>

                <Grid item xs={6}>
                  <Item>
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
                  </Item>
                </Grid>

                <Grid item xs={6}>
                  <Item>
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
                  </Item>
                </Grid>

                <Grid item xs={6}>
                  <Item>
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
                  </Item>
                </Grid>

                <Grid item xs={6}>
                  <Item>
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
                  </Item>
                </Grid>

                <Grid item xs={6}>
                  <Item>
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
                  </Item>
                </Grid>

                <Grid item xs={6}>
                  <Item>
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
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </Grid>
