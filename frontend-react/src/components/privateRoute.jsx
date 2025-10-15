import {useContext} from 'react'
import { AuthContext } from '../AuthProvider'
import { Navigate } from 'react-router-dom'

const privateRoute = () => {
    const{isLoggedIn} = useContext(AuthContext)
  return isLoggedIn ? (
    children
  ):(
    <Navigate to='/login'/>
  )
}

export default privateRoute