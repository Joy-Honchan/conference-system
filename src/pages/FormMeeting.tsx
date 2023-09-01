import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'

export default function FormMeeting() {
  return (
    <Grid
      container
      sx={{
        maxWidth: '1200px',
        '.MuiGrid-item': {
          // display: 'flex',
          // justifyContent: 'center',
          '.MuiBox-root': {
            maxWidth: '247px'
          }
        }
      }}
      spacing={3}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Grid item xs={12} md={6} lg={4}>
          <Box>
            <DatePicker label="Meeting Date" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box>
            <TimePicker label="Start Time" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box>
            <TimePicker label="End Time" />
          </Box>
        </Grid>
      </LocalizationProvider>
      <Grid item xs={12} md={6} lg={4}>
        <Box>
          <TextField fullWidth label="Title" />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Box>
          <TextField fullWidth label="Participants" />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Box>
          <TextField fullWidth label="Room No." />
        </Box>
      </Grid>
    </Grid>
  )
}
