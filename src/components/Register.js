import React, { useState } from 'react'
import Image from './Image'
import { Container, Grid, Paper, Typography, Button, Checkbox, TextField, Box, FormControlLabel } from '@material-ui/core'
import { useForm } from "react-hook-form";


const Register = () => {

    const [userData, setuserData] = useState({})

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        setuserData(Object.assign(userData, data))
        console.log(userData);
    };
    const handleRegister = () => {
        const allUsers = [];
        allUsers.push(userData);
        setuserData({})
        console.log(allUsers);
    };


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
                                <Typography variant="h4" align="center">Welcome here!</Typography>
                                <Typography variant="subtitle1" align="center">Please register yourself</Typography>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Box mt={2}>
                                        <Grid container justifyContent="space-between">
                                            <Grid item lg={6} md={6} sm={6}>
                                                <TextField
                                                    {...register('fullname')}
                                                    label="Full Name"
                                                    margin="normal"
                                                    type="text"
                                                    required={true}
                                                    name="fullname"
                                                />
                                            </Grid>
                                            <Grid item lg={6} md={6} sm={6}>
                                                <TextField
                                                    label="Phone"
                                                    required={true}
                                                    margin="normal"
                                                    name="phone"
                                                    type="text"
                                                    {...register('phone')}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Grid container justifyContent="space-between">
                                            <Grid item lg={6} md={6} sm={6}>
                                                <TextField
                                                    label="Email"
                                                    margin="normal"
                                                    name="email"
                                                    required={true}
                                                    type="email"
                                                    {...register('email')}
                                                />
                                            </Grid>
                                            <Grid item lg={6} md={6} sm={6}>
                                                <TextField
                                                    label="Password"
                                                    name="password"
                                                    margin="normal"
                                                    required={true}
                                                    type="password"
                                                    {...register('password')}
                                                />
                                            </Grid>
                                        </Grid>

                                        <Box mt={2}>
                                            <Grid container justifyContent="space-between">
                                                <Grid item lg={5} md={5} sm={5}>
                                                    <FormControlLabel label="Remember me" control={<Checkbox {...register('remember')} name="remember" defaultValue={false} />} />
                                                </Grid>
                                                <Grid item lg={4} md={4} sm={4}>
                                                    <Typography>Forget password</Typography>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Box>
                                    <Box mt={3} mb={5}>
                                        <Button fullWidth variant="contained" className="lg-btn" type="submit" onClick={handleRegister}>register</Button>
                                    </Box>
                                </form>
                                <Typography align="center" variant="subtitle2">Terms of use.Privacy policy</Typography>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Register