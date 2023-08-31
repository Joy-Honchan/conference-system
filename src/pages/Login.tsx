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
  Divider,
  keyframes,
  ButtonBase
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
          <Stack component="form" spacing={6} onSubmit={formik.handleSubmit}>
            <Box>
              <Typography variant="h5" className="app-title">
                Conference System
              </Typography>
              <Divider />
            </Box>
            <TextField id="username" label="Username" />
            <TextField id="password" label="Password" type="password" />
            <Box className="login-btn-container">
              <Button
                variant="contained"
                color="primary"
                className="login-btn"
                type="submit"
              >
                Login
              </Button>
            </Box>
          </Stack>
        </Paper>
      </Paper>
    </StyleWrapper>
  )
}

const StyleWrapper = styled('main')(({ theme }) => ({
  background: `linear-gradient(45deg, #6c63ff 0%, ${theme.palette.primary.lighter} 80%)`,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '.center-paper': {
    background: 'rgb(255,255,255)',
    flexGrow: 1,
    display: 'flex',
    margin: theme.spacing(8),
    maxWidth: 1300,
    height: 600,
    '.meetingPic-container': {
      display: 'flex',
      alignItems: 'center',
      flexGrow: 1,
      padding: theme.spacing(6),
      img: {
        width: '100%'
      }
    },
    '.input-section': {
      background: `linear-gradient(225deg, #6c63ff60 0%, ${theme.palette.primary.lighter}60 80%)`,
      flex: '0 0 250px',
      padding: `${theme.spacing(15)} ${theme.spacing(5)}`,
      '.app-title': {
        marginBottom: theme.spacing(1)
      },
      '.login-btn-container': {
        display: 'flex',
        justifyContent: 'center',
        '.login-btn': {
          color: theme.palette.text.contrast
        }
      }
    }
  },
  [theme.breakpoints.down('lg')]: {
    '.center-paper': {
      display: 'flex',
      maxWidth: `calc(250px + ${theme.spacing(10)})`,
      '.meetingPic-container': {
        display: 'none'
      }
    }
  }
}))

export default Login
