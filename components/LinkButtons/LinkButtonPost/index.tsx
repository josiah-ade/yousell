import { AddCircle } from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'

function LinkButtonPost() {
  return (
    <Link href="/post" className='btn_main d-flex2 link__header__main_p'><AddCircle /> Post Ads</Link>
  )
}

export default LinkButtonPost