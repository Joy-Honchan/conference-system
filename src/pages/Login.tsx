import { useTheme, Typography, Box, Paper, Button } from '@mui/material'
import { notifySuccess, notifyError } from 'utils/notify'
import useSWR from 'swr'
import { useFormik } from 'formik'
import * as yup from 'yup'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { useAppSelector, useAppDispatch } from 'hooks/reduxHooks'
import { addTodo } from 'store/slices/todoSlice'

interface UserSWRType {
  id: string
  name: string
}
const Login = () => {
  const theme = useTheme()
  // const { data, error } = useSWR<UserSWRType>('/user')
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      title: ''
    },
    validationSchema: yup.object({
      title: yup.string().required()
    }),
    onSubmit: (values) => {
      // console.log(values)
      try {
        dispatch(addTodo(values))
        notifySuccess('Success')
      } catch (error) {
        notifyError('Error')
      }
    }
  })
  const todoList = useAppSelector((state) => state.todo)
  return (
    <Box sx={{ backgroundColor: theme.palette.background.default }}>
      <Paper> Hello</Paper>
      <Typography variant="h1" sx={{ color: theme.palette.primary.main }}>
        Login
      </Typography>
      <Typography variant="h2" sx={{ color: theme.palette.primary.darker }}>
        Login
      </Typography>
      {/* {data && (
        <Typography variant="h3" sx={{ color: theme.palette.primary.main }}>
          {data.name}
        </Typography>
      )} */}
      <Button onClick={() => notifySuccess('Success')}>Success</Button>
      <Button onClick={() => notifyError('Error')}>Error</Button>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <button type="submit">Submit</button>
      </form>
      <List>
        {todoList.map((item) => (
          <ListItem
            sx={{
              color: theme.palette.text.contrast,
              backgroundColor: item.completed ? 'green' : 'red'
            }}
            key={item.id}
          >
            {item.title}
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default Login
