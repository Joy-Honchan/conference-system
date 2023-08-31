import { useState, useContext, useMemo, useEffect } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { NoteContext } from 'providers/NoteContext'

const NoteTextField = ({ timeString }: { timeString: string }) => {
  const { notes, handleNotes } = useContext(NoteContext)
  //   const initValue = useMemo(() => notes[timeString] || '', [notes, timeString])
  const initValue = notes[timeString] || ''
  const [text, setText] = useState(initValue)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  const handleSave = () => {
    handleNotes(timeString, text)
  }

  useEffect(() => {
    setText(notes[timeString] || '')
  }, [notes, timeString])
  return (
    <>
      <Typography sx={{ marginBottom: 1 }}>Quick Note:</Typography>
      <Box sx={{ marginBottom: 1 }}>
        <TextField
          value={text}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          placeholder="Type your note here"
        />
      </Box>
      <Grid
        item
        xs={12}
        sx={{
          textAlign: 'end'
        }}
      >
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
      </Grid>
    </>
  )
}

export default NoteTextField
