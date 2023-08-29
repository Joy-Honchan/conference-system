import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import RoomMap from 'images/RoomMap'
export default function RoomStatus() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Typography variant="body1" sx={{ marginBottom: 1 }}>
        last updated: {new Date().toLocaleString()}
      </Typography>
      <RoomMap
        roomS1={'available'}
        roomS2={'scheduled'}
        roomS3={'available'}
        roomM1={'available'}
        roomM2={'available'}
        roomL1={'occupied'}
      />
    </Box>
  )
}
