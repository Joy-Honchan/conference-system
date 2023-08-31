import { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import Badge from '@mui/material/Badge'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import ScheduleData from 'data/scheduleData.json'
interface MeetingType {
  roomName: string
  startTime: string
  endTime: string
  title?: string
  participants?: string[]
}

interface ScheduleDataType {
  day: string
  meeting: MeetingType[]
}

function ServerDay(
  props: PickersDayProps<Dayjs> & { highlightedDays?: number[] }
) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props

  const isSelected =
    !props.outsideCurrentMonth &&
    highlightedDays.indexOf(props.day.date()) >= 0 &&
    day.day() > 0 &&
    day.day() < 6

  const isWeekend = day.day() === 0 || day.day() === 6

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      badgeContent={isSelected ? '🔴' : undefined}
    >
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
        disabled={isWeekend}
      />
    </Badge>
  )
}

export default function MySchedule() {
  const SCHEDULE_DATA = ScheduleData as ScheduleDataType[]

  const [selectDay, setSelectDay] = useState<Dayjs>(dayjs())
  const [highlightedDays, setHighlightedDays] = useState([1, 2, 15])

  const handleMonthChange = (date: Dayjs) => {
    if (date.month() % 2 === 0) {
      setHighlightedDays([3, 16, 27])
    } else {
      setHighlightedDays([1, 2, 15])
    }
  }

  const handleSelect = (value: Dayjs | null) => {
    if (value) {
      setSelectDay(value)
    }
  }

  return (
    <Grid container>
      <Grid item lg={5} md={12}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            views={['day']}
            value={selectDay}
            onChange={handleSelect}
            onMonthChange={handleMonthChange}
            slots={{
              day: ServerDay
            }}
            slotProps={{
              day: {
                highlightedDays
              } as any
            }}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item lg={7} md={12}>
        <Card sx={{ p: 2 }}>
          <CardHeader title={selectDay.format('YYYY-MM-DD')} />
          <Divider />
          <CardContent>
            {highlightedDays.includes(selectDay.date()) ? (
              <>
                <Box
                  display="grid"
                  gridTemplateColumns={'max-content 1fr'}
                  sx={{
                    '.MuiBox-root': {
                      marginBottom: 1
                    },
                    '.MuiTypography-root': {
                      marginRight: 1
                    }
                  }}
                >
                  <Typography>Title:</Typography>
                  <Box>
                    {SCHEDULE_DATA[selectDay.day()].meeting[0].title ||
                      'Untitled Meeting'}
                  </Box>
                  <Typography>Time:</Typography>
                  <Box>
                    {SCHEDULE_DATA[selectDay.day()].meeting[0].startTime ||
                      '08:30'}
                    -
                    {SCHEDULE_DATA[selectDay.day()].meeting[0].endTime ||
                      '10:30'}
                  </Box>
                  <Typography>Participants:</Typography>
                  <Box>
                    {SCHEDULE_DATA[
                      selectDay.day()
                    ].meeting[0].participants?.join(', ') || 'No participants'}
                  </Box>
                </Box>
                <Typography sx={{ marginBottom: 1 }}>Quick Note:</Typography>
                <Box sx={{ marginBottom: 1 }}>
                  <TextField
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
                  <Button variant="contained">Save</Button>
                </Grid>
              </>
            ) : (
              'No meeting today'
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
