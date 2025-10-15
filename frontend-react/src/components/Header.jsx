import {useContext} from 'react'
import Button from './Button'
import {Link, useNavigate} from "react-router-dom"
import { AuthContext } from '../AuthProvider'
import Dashboard from './dashboard/Dashboard'

const Header = () => {
    const {isLoggedIn,setIsLoggedIn}= useContext(AuthContext)
    const navigate = useNavigate();
    
    const handleLogout =()=>{
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      setIsLoggedIn(false)
      console.log('Logged Out')
      navigate('/login')
    }
  return (
    <>
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            <Link className='navbar-brand text-light' to="/">Stock Prediction Portal</Link>

            <div>
              {isLoggedIn ?(<>
              <button className='btn btn-info mx-2 ' url="/dashboard">Dashboard</button>
              <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
             
              </>
               
              
              ):(
                <>
                 <Button text='Login' class='btn-outline-info' url="/login"/>
                &nbsp;
               <Button text='Register' href="" class="btn-info" url="/register"/>
            
                </>
              )}
              
            </div>
        
        </nav>

    </>
    
  )
}

export default Header