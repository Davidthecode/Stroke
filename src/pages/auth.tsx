import {Outlet, Link} from 'react-router-dom'

const handleSubmit = () => {

}

export default function Auth () {
    return (
      <div className='h-screen flex flex-col justify-center items-center'>
      <h1 className='text-lg'>BioCanvas</h1>
      <form onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <label htmlFor="username">Username</label>
            <input type="text" className='border' id='username'/>
            <label htmlFor="password">Password</label>
            <input type="text" className='border' id='password'/>
          </div>
      </form>
    </div>
    )
}