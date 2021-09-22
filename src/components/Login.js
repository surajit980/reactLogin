import React from 'react'
import Image from './Image'
import { Container, Grid, Paper, Typography, Button, Checkbox, TextField, Box, FormControlLabel } from '@material-ui/core'
import "./styles/login.css"

const Login = () => {
    return (
        <div>
            <Container>
                <Grid container>
                    <Grid item lg={6} md={6}>
                        <Image />
                    </Grid>
                    <Grid item lg={6} md={6}>
                        <Paper>
                            <Box p={10}>
                                <Typography variant="h4" align="center">Welcome back!</Typography>
                                <Typography variant="subtitle1" align="center">Please login to your account</Typography>
                                <Box mt={2}>
                                    <TextField
                                        fullWidth
                                        label="Username"
                                        margin="normal"
                                    />
                                    <TextField
                                        fullWidth
                                        label="Password"
                                        margin="normal"
                                    />
                                    <Box mt={2}>
                                        <Grid container justifyContent="space-between">
                                            <Grid item lg={5} md={5} sm={5}>
                                                <FormControlLabel label="Remember me" control={<Checkbox />} />
                                            </Grid>
                                            <Grid item lg={4} md={4} sm={4}>
                                                <Typography>Forget password</Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                                <Box mt={3} mb={5}>
                                    <Button fullWidth variant="contained" className="lg-btn">login</Button>
                                </Box>
                                <Typography align="center" variant="subtitle2">Terms of use.Privacy policy</Typography>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Login
