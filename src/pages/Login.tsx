import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  styled,
  Typography,
  Divider
} from '@mui/material'
import meetingPic from 'assets/undraw_meeting_re_i53h.svg'

function Login() {
  const formik = useFormik({
    initialValues: {
      username: 'admin',
      password: 'aaaa'
    },
    validationSchema: Yup.object({
      username: Yup.string().required(),
      password: Yup.string().required()
    }),
    onSubmit: (values) => {
      console.log('value', values)
    }
  })
  return (
    <StyleWrapper>
      <Paper className="center-paper">
        <Box className="meetingPic-container">
          <img src={meetingPic} alt="meeting" />
        </Box>
        <Paper className="input-section">
          <Stack component="form" spacing={5} onSubmit={formik.handleSubmit}>
            <Box>
              <Typography variant="h5">Conference System</Typography>
              <Divider />
            </Box>
            <TextField id="username" label="Username" />
            <TextField id="password" label="Password" type="password" />
            <Button type="submit">Login</Button>
          </Stack>
        </Paper>
      </Paper>
    </StyleWrapper>
  )
}

const StyleWrapper = styled('main')(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '.center-paper': {
    flexGrow: 1,
    display: 'flex',
    margin: theme.spacing(8),
    maxWidth: 1300,
    '.meetingPic-container': {
      flexGrow: 1,
      padding: theme.spacing(8),
      img: {
        width: '100%'
      }
    },
    '.input-section': {
      flex: '0 0 250px',
      padding: theme.spacing(5)
    }
  },

  // '.input-section': {
  //   marginTop: theme.spacing(5),
  //   padding: theme.spacing(5)
  // }
  [theme.breakpoints.down('md')]: {
    '.center-paper': {
      display: 'block',
      '.meetingPic-container': {
        display: 'none'
      }
    }
  }
}))

export default Login
