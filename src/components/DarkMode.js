import React,{useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const DarkMode = (props) => {
    const toggleTheme = () => {
        props.setDarkTheme(!props.darkTheme);
    }
   
    useEffect(() => {
        if(props.darkTheme){
            document.getElementById('App').classList.add('dark');
        }else{
            document.getElementById('App').classList.remove('dark');
        }
    }, [props.darkTheme])
  return (
    <div className='transition-colors delay-200 icon-container w-14 h-14 bg-accent-1 dark:bg-secondary rounded-full cursor-pointer' onClick={toggleTheme}>
        <FontAwesomeIcon className='transition-colors delay-200 w-14 h-14 text-secondary dark:text-accent-1 ' icon={faMoon}/>
    </div>
  )
}

export default DarkMode
