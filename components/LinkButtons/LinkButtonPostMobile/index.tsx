import { AddCircle } from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'

function LinkButtonPostMobile() {
  return (
    <Link href="/post" className='btn_main2 d-flex2'><AddCircle /> Post Ads</Link>
  )
}

export default LinkButtonPostMobile