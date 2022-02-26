import React,{useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const DarkMode = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    }
    useEffect(() => {
        const retrievedTheme = localStorage.getItem('darkTheme');
        const theme = JSON.parse(retrievedTheme);
        if (theme) {
            setDarkTheme(theme);
        }
    } , [])
        
    useEffect(() => {
        localStorage.setItem('darkTheme', JSON.stringify(darkTheme));
    },[darkTheme])
    useEffect(() => {
        if(darkTheme){
            document.getElementById('App').classList.add('dark');
        }else{
            document.getElementById('App').classList.remove('dark');
        }
    }, [darkTheme])
  return (
    <div className='transition-colors delay-200 icon-container w-14 h-14 bg-accent-1 dark:bg-secondary rounded-full cursor-pointer' onClick={toggleTheme}>
        <FontAwesomeIcon className='transition-colors delay-200 w-14 h-14 text-secondary dark:text-accent-1 ' icon={faMoon}/>
    </div>
  )
}

export default DarkMode
