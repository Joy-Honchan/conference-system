import {
  styled,
  Box,
  Typography,
  Stack,
  Autocomplete,
  TextField
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { useFormik } from 'formik'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Button } from '@mui/material'
import dayjs, { Dayjs } from 'dayjs'

export default function FutureVacancy() {
  const formik = useFormik<{ startDate: Dayjs | null; endDate: Dayjs | null }>({
    initialValues: {
      startDate: null,
      endDate: null
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })
  return (
    <StyleWrapper>
      <form onSubmit={formik.handleSubmit}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={2} direction="row" alignItems={'center'}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={['One', 'Two', 'Three']}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Room No." />
              )}
            />
            <DatePicker
              label="Start Date"
              views={['year', 'month', 'day']}
              value={formik.values.startDate}
              // onChange={(e) => console.log(dayjs(Number(e)))}
              // onChange={formik.handleChange}
              onChange={(e) => formik.setFieldValue('startDate', e)}
            />
            <Typography variant="h4">-</Typography>
            <DatePicker
              label="End Date"
              views={['year', 'month', 'day']}
              value={formik.values.endDate}
              onChange={(e) => formik.setFieldValue('startDate', e)}
            />
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Stack>
        </LocalizationProvider>
      </form>
    </StyleWrapper>
  )
}

const StyleWrapper = styled(Box)(({ theme }) => ({}))
