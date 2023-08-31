import { ReactNode } from 'react'
import { SnackbarProvider } from 'notistack'
import Notification from 'components/Notification'
export default function NotistackProvider({
  children
}: {
  children: ReactNode
}) {
  return (
    <SnackbarProvider
      Components={{
        success: Notification
      }}
    >
      {children}
    </SnackbarProvider>
  )
}
