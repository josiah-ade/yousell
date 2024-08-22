import React from 'react'
import IconActions from './IconActions'
import ChatSection from './ChatSection'
import UserSection from './UserSection'

function Sidebar({data}: {data: any}) {
  return (
    <div>
        <IconActions />
        <ChatSection />
        <UserSection data={data}/>
    </div>
  )
}

export default Sidebar