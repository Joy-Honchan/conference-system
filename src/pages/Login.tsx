import { useTheme, Typography, Box, Paper } from "@mui/material";

const Login =()=>{
    const theme = useTheme()
    return(
        <Box sx={{backgroundColor:theme.palette.background.default}}>
            <Paper> Hello</Paper>
            <Typography variant="h1" sx={{ color:theme.palette.primary.main}} >Login</Typography>
            <Typography variant="h2" sx={{ color:theme.palette.primary.darker}} >Login</Typography>
        </Box>
    )
}

export default Login;