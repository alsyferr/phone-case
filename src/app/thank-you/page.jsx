import React, { Suspense } from 'react'
import Thankyou from './Thankyou'

const page = () => {
  return (
    <Suspense>
        <Thankyou />
    </Suspense>
  )
}

export default page