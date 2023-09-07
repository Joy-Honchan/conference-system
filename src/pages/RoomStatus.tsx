import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import RoomMap from 'components/RoomMap'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
export default function RoomStatus() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap'
      }}
    >
      <Typography variant="body1" sx={{ marginBottom: 1 }}>
        last updated: {new Date().toLocaleString()}
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          minWidth: 320,
          '#expend-icon': {
            rect: {
              transition: 'width 1s ease'
            },
            // '#explain_text': {
            //   transition: 'all 1s ease'
            // },
            '&:hover': {
              rect: {
                width: 607
              },
              '#explain_text': {
                opacity: 1,
                transform: 'translateX(0%)'
              }
            }
          },
          '#explain_text': {
            opacity: 0,
            transform: 'translateX(-5%)',
            transition: 'all 1s ease'
          },
          '.room': {
            cursor: 'pointer'
          }
        }}
      >
        <RoomMap />
      </Box>
    </Box>
  )
}
