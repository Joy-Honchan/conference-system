import Box from '@mui/material/Box'
import RoomMap from 'images/RoomMap'
export default function RoomStatus() {
  return (
    <Box>
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
