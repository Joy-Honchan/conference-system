import { forwardRef } from 'react'
import Alert from '@mui/material/Alert'
import { CustomContentProps } from 'notistack'

const Notification = forwardRef<HTMLDivElement, CustomContentProps>(
  (props, ref) => {
    return (
      <Alert ref={ref} variant="filled" severity="success">
        {props.message}
      </Alert>
    )
  }
)

export default Notification
