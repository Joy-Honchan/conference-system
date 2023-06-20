import { forwardRef } from 'react'
import Alert from '@mui/material/Alert'
import { CustomContentProps, MaterialDesignContent } from 'notistack'
import { styled } from '@mui/material/styles'

const Notification = forwardRef<HTMLDivElement, CustomContentProps>(
  (props, ref) => {
    return <Alert ref={ref} variant="filled" severity="success" />
  }
)

export default Notification
