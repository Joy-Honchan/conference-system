// import Box from '@mui/material/Box'
// import Grid from '@mui/material/Grid'
// import TextField from '@mui/material/TextField'
// import { DatePicker } from '@mui/x-date-pickers'
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
// import TimePicker from 'components/TimePicker'
// import Autocomplete from '@mui/material/Autocomplete'
// import participants from 'data/participantsData.json'
// import Chip from '@mui/material/Chip'

export default function FormMeeting() {
  return (
    <div>Under Construction</div>
    // <Grid
    //   container
    //   sx={{
    //     // maxWidth: '1200px',
    //     '.MuiGrid-item': {
    //       marginTop: 5,
    //       '&:not(:last-of-type) .MuiBox-root': {
    //         maxWidth: '247px'
    //       }
    //     }
    //   }}
    //   spacing={3}
    // >
    //   <LocalizationProvider dateAdapter={AdapterDayjs}>
    //     <Grid item xs={12} md={6} lg={3}>
    //       <Box>
    //         <DatePicker label="Meeting Date" disablePast />
    //       </Box>
    //     </Grid>
    //     <Grid item xs={12} md={6} lg={3}>
    //       <Box>
    //         <TimePicker label="Start Time" />
    //       </Box>
    //     </Grid>
    //     <Grid item xs={12} md={6} lg={6}>
    //       <Box>
    //         <TimePicker label="End Time" />
    //       </Box>
    //     </Grid>
    //   </LocalizationProvider>
    //   <Grid item xs={12} md={6} lg={3}>
    //     <Box>
    //       <TextField fullWidth label="Title" />
    //     </Box>
    //   </Grid>
    //   <Grid item xs={12} md={6} lg={3}>
    //     <Box>
    //       <TextField fullWidth label="Room No." />
    //     </Box>
    //   </Grid>
    //   <Grid item xs={12} md={6} lg={6}>
    //     <Box sx={{ minWidth: '247px', maxWidth: 'max-content' }}>
    //       <Autocomplete
    //         multiple
    //         id="tags-outlined"
    //         options={participants}
    //         getOptionLabel={(option) => option.name}
    //         renderTags={(value, getTagProps) => {
    //           return value.map((option, index) => (
    //             <Chip
    //               label={option.name}
    //               {...getTagProps({ index })}
    //               color="primary"
    //               sx={{
    //                 color: 'text.contrast',
    //                 '.MuiChip-deleteIcon': {
    //                   color: 'text.contrast'
    //                 }
    //               }}
    //             />
    //           ))
    //         }}
    //         renderInput={(params) => {
    //           return (
    //             <TextField
    //               {...params}
    //               label="Participants"
    //               placeholder="Participants"
    //             />
    //           )
    //         }}
    //       />
    //     </Box>
    //   </Grid>
    // </Grid>
  )
}
