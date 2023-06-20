import { useTheme, Typography, Box, Paper, Button } from '@mui/material'
import { notifySuccess, notifyError } from 'utils/notify'
import useSWR from 'swr'

interface UserSWRType {
  id: string
  name: string
}
const Login = () => {
  const theme = useTheme()
  const { data, error } = useSWR<UserSWRType>('/user')
  return (
    <Box sx={{ backgroundColor: theme.palette.background.default }}>
      <Paper> Hello</Paper>
      <Typography variant="h1" sx={{ color: theme.palette.primary.main }}>
        Login
      </Typography>
      <Typography variant="h2" sx={{ color: theme.palette.primary.darker }}>
        Login
      </Typography>
      {data && (
        <Typography variant="h3" sx={{ color: theme.palette.primary.main }}>
          {data.name}
        </Typography>
      )}
      <Button onClick={() => notifySuccess('Success')}>Success</Button>
      <Button onClick={() => notifyError('Error')}>Error</Button>
    </Box>
  )
}

export default Login
