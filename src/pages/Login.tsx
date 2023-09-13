import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  Box,
  Button,
  Paper,
  TextField,
  styled,
  Typography,
  Divider
} from '@mui/material'
import meetingPic from 'images/undraw_meeting_re_i53h.svg'
import { notifySuccess } from 'utils/notify'
import { useNavigate } from 'react-router'
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty'

function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
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
      setIsLoading(() => true)
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
        navigate('/')
      }
      setIsLoading(false)
    }
  })
  return (
    <StyleWrapper>
      <Paper className="center-paper">
        <Box className="meetingPic-container">
          <img src={meetingPic} alt="meeting" />
        </Box>
        <Paper
          component="form"
          className="input-section"
          onSubmit={formik.handleSubmit}
        >
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
              disabled={isLoading}
              variant="contained"
              color="primary"
              className="login-btn"
              type="submit"
              startIcon={isLoading ? <HourglassEmptyIcon /> : null}
            >
              Login
            </Button>
            <Button onClick={handleShow}>Show Data</Button>
          </Box>
        </Paper>
      </Paper>
    </StyleWrapper>
  )
}

const StyleWrapper = styled('main')(({ theme }) => ({
  background: `linear-gradient(45deg, #6c63ff 0%, ${theme.palette.primary.lighter} 80%)`,
  minHeight: '100vh',
  display: 'grid',
  placeItems: 'center',
  '.center-paper': {
    minHeight: 500,
    margin: theme.spacing(5),
    display: 'grid',
    gridTemplateColumns: '1fr minmax(300px,350px)',
    '.meetingPic-container': {
      display: 'grid',
      placeItems: 'center',
      padding: theme.spacing(5),
      img: {
        maxWidth: '100%',
        height: 'auto'
      }
    },
    '.input-section': {
      background: `linear-gradient(225deg, #6c63ff60 0%, ${theme.palette.primary.lighter}60 80%)`,
      padding: `${theme.spacing(5)} ${theme.spacing(5)}`,
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      div: {
        width: '100%'
      },
      '.login-btn-container': {
        display: 'flex',
        justifyContent: 'space-around',
        alignSelf: 'baseline'
      }
    }
  },

  [theme.breakpoints.down('md')]: {
    '.center-paper': {
      margin: theme.spacing(2),
      gridTemplateColumns: 'minmax(300px,350px)',
      '.meetingPic-container': {
        display: 'none'
      }
    }
  }
}))

export default Login
