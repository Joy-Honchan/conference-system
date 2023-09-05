import { TimeView } from '@mui/x-date-pickers'
import {
  TimePicker as MuiTimePicker,
  TimePickerProps
} from '@mui/x-date-pickers/TimePicker'
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers'
import { Dayjs } from 'dayjs'

interface Props extends TimePickerProps<Dayjs> {}

const TimePicker = ({ label }: Props) => {
  return (
    <MuiTimePicker
      label={label}
      minutesStep={15}
      viewRenderers={{
        hours: renderTimeViewClock,
        minutes: renderTimeViewClock,
        seconds: renderTimeViewClock
      }}
      shouldDisableTime={(value: Dayjs, view: TimeView) => {
        if (view === 'hours' && (value.hour() < 8 || value.hour() > 19)) {
          return true
        }
        return false
      }}
    />
  )
}

export default TimePicker
