import {Outlet, Link} from 'react-router-dom'


export default function Contact () {
    return (
        <div>
            this is the contact page
            <Link to='contact/person'>person</Link>
            <Outlet />
        </div>
    )
}