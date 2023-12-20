import { useState, useContext, useEffect, useMemo } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { useAppSelector, useAppDispatch } from "hooks/reduxHooks";
import { addNote } from "store/slices/noteSlice";

// import { NoteContext } from 'providers/NoteContext'

const NoteTextField = ({ timeString }: { timeString: string }) => {
  // const { notes, handleNotes } = useContext(NoteContext)
  const notes = useAppSelector((state) => state.note);
  const dispatch = useAppDispatch();
  const initValue = useMemo(() => notes[timeString] || "", [notes, timeString]);
  const [text, setText] = useState(initValue);
  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleSave = () => {
    // handleNotes(timeString, text)
    dispatch(addNote({ time: timeString, note: text }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setText(initValue);
    setIsEditing(false);
  };

  useEffect(() => {
    setIsEditing(false);
    setText(initValue);
  }, [initValue, timeString]);

  return (
    <Box>
      <Box sx={{ marginBottom: 1 }}>
        {isEditing ? (
          <TextField
            // key={timeString}
            value={text}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            placeholder="Type your note here"
          />
        ) : (
          <Typography>{initValue}</Typography>
        )}
      </Box>
      <Box
        sx={{
          textAlign: "end",
        }}
      >
        {isEditing ? (
          <>
            <Button
              sx={{ marginRight: 1 }}
              variant="contained"
              onClick={handleSave}
            >
              Save
            </Button>
            <Button variant="outlined" onClick={handleCancel}>
              Cancel
            </Button>
          </>
        ) : (
          <Button variant="contained" onClick={handleEdit}>
            Edit
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default NoteTextField;
