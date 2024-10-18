import React,{ useState } from 'react';
import { Link } from 'react-router-dom';


//Here just defined Links of navbar contents
//and it will connect with componhents in app.js

function Header({onSendMessage}) {
    const [inputId, setInputId] = useState('');


    const handleChange = (e) => {
        setInputId(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log(`this is form child1.js ${inputId}`);
        onSendMessage(inputId);
      
    }

 
    return (
        <div >
            <nav className='HeaderCard'>
                <div className='HeaderElement'> <Link className='HeaderContentLink' to="/">Home</Link></div>
                <div className='HeaderElement'> <Link className='HeaderContentLink' to='/About'>About</Link></div>
                <div className='HeaderElement'><Link className='HeaderContentLink' to='/Contact'>Contact</Link></div>
                <form onSubmit={handleSubmit}>
                <div className='InputBox'>
                    <input type='text' value={inputId} onChange={handleChange} />
                    <button class='button'>Search</button>
                </div></form>
                <div className='HeaderElementProfile'><Link className='HeaderContentLink' to='/Profile'>Profile</Link></div>
            </nav>
        </div>
    )
}

export default Header;
