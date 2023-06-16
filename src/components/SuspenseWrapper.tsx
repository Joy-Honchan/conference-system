import { ReactNode, Suspense } from "react";

export default function SuspenseWrapper({component}:{component:ReactNode}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        {component}
    </Suspense>
  )
}

//icon suspense, loadingfallback