import { useContext, useState, useEffect} from 'react'
import { UserContext } from '../../../../context/userContext'

export default function Conversations() {
    const { authData } = useContext(UserContext);

    return (
        <>
            { authData._id }
        </>
  )
}
