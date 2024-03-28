// import {FaSearch} from 'react-icons/fa'
//  import { Link } from 'react-router-dom';
 
//  import './header.css';

//  import {useSelector} from 'react-redux';

// export default function Header() {
//     const {currentUser} = useSelector(state => state.user)
//   return (
//     <header className='bg-custom-color shadow-md'>
//         <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
//             <Link to='/'>
//             <h1 className='font-bold text-sm sm:text-xl flex-wrap'>
//                 <span className='text-slate-700 text-3xl'>Real</span>
//                 <span className='text-slate-700 text-3xl'>Estate</span>

//             </h1>
//             </Link>
//             <form className='bg-slate-300 p-3 rounded-lg flex items-center' >
//                 <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64'></input>
//                 <FaSearch className='test-slate-900'/>
//             </form>
//             <ul className='flex gap-4'>
//                 <Link to='/'>
//                 <li className='hidden sm:inline text-slate-700 text-xl hover:text-slate-100 duration-300'>Home</li>
//                 </Link>
//                 <Link to='/about'>
//                 <li className='hidden sm:inline text-slate-700 text-xl hover:text-slate-100 duration-300'>About</li>
//                 </Link>


//                 <Link to='/profile' >
//                     {currentUser ?(
//                         <img className='rounded-full h-11 w-11 object-cover' src={currentUser.avatar} alt='profile' />
//                     ):<li className=' text-slate-700 text-xl hover:text-slate-100 duration-300'>Sign In</li>
                    
//                     }
//                 </Link>

                
                
//             </ul>
//         </div>
//     </header>
//   );
// }

import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './header.css'; // Import your CSS file

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, []);

  return (
    <header className='bg-custom-color shadow-md'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
            <h1 className='font-bold text-sm sm:text-xl flex-wrap'>
                <span className='text-slate-700 text-3xl'>Real</span>
                <span className='text-slate-700 text-3xl'>Estate</span>
            </h1>
        </Link>
        <form onSubmit={handleSubmit} className='bg-slate-300 p-3 rounded-lg flex items-center'>
            <input
                type='text'
                placeholder='Search...'
                className='bg-transparent focus:outline-none w-24 sm:w-64'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type='submit' className='focus:outline-none'>
                <FaSearch className='test-slate-900'/>
            </button>
        </form>
        <ul className='flex gap-4'>
            <Link to='/'>
                <li className='hidden sm:inline text-slate-700 text-xl hover:text-slate-100 duration-300'>Home</li>
            </Link>
            <Link to='/about'>
                <li className='hidden sm:inline text-slate-700 text-xl hover:text-slate-100 duration-300'>About</li>
            </Link>
            <Link to='/profile' >
                {currentUser ?(
                    <img className='rounded-full h-11 w-11 object-cover' src={currentUser.avatar} alt='profile' />
                ):<li className=' text-slate-700 text-xl hover:text-slate-100 duration-300'>Sign In</li>}
            </Link>
        </ul>
    </div>
</header>
  );
}
