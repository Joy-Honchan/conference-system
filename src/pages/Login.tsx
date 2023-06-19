import { useTheme, Typography } from "@mui/material";

const Login =()=>{
    const theme = useTheme()
    return(
        <div>
            <Typography variant="h1" sx={{ color:theme.palette.danger.main}} >Login</Typography>
        </div>
    )
}

export default Login;