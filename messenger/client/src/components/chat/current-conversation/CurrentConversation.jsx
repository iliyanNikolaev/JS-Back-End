import React from 'react'

export default function CurrentConversation({
    chat
}) {
  return (
    <>
    {chat ? <>messages here</> : <>pick a user for start conversation</>}
    </>
    )
}
