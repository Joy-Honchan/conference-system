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
import meetingPic from 'images/undraw_meeting_re_i53h.svg'
import { async } from 'q'
import { notifySuccess } from 'utils/notify'

function Login() {
  const correctData = { username: 'admin', password: 'aaaa' }
  const handleShow = () => {
    formik.setValues(correctData)
  }
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().required(),
      password: Yup.string().required()
    }),
    onSubmit: async (values) => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      if (values.username !== correctData.username) {
        formik.setFieldError('username', 'Wrong Username')
      }
      if (values.password !== correctData.password) {
        formik.setFieldError('password', 'Wrong Password')
      }
      if (
        values.username === correctData.username &&
        values.password === correctData.password
      ) {
        notifySuccess('Login Success')
      }
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
            <TextField
              id="username"
              label="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={!!formik.errors.username}
              helperText={formik.errors.username}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={!!formik.errors.password}
              helperText={formik.errors.password}
            />
            <Box className="login-btn-container">
              <Button
                variant="contained"
                color="primary"
                className="login-btn"
                type="submit"
              >
                Login
              </Button>
              <Button onClick={handleShow}>Show Data</Button>
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
        textAlign: 'center',
        '.login-btn': {
          color: theme.palette.text.contrast,
          marginRight: theme.spacing(1)
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
