import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import RoomMap from 'images/RoomMap'
export default function RoomStatus() {
  return (
    <Box>
      <Typography variant="h4">Room Status</Typography>
      <RoomMap
        roomS1={'available'}
        roomS2={'available'}
        roomS3={'available'}
        roomM1={'available'}
        roomM2={'available'}
        roomL1={'available'}
      />
    </Box>
  )
}
