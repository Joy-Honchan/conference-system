import { ReactNode, Suspense } from "react";
import Skeleton from '@mui/material/Skeleton';

export default function SuspenseWrapper({component}:{component:ReactNode}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        {component}
    </Suspense>
  )
}

export const IconSuspenseWrapper = ({component}:{component:ReactNode}) => {
  return (
    <Suspense fallback={<Skeleton variant="circular"/>}>
        {component}
    </Suspense>
  )
}

//icon suspense, loadingfallback