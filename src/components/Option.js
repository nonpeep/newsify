import { Listbox } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
// import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'


const Option = (props) => {
  
  return (
    <div className=" w-auto min-w-[200px] h-14">
      <Listbox value={props.selected} onChange={props.setSelected}>
        <Listbox.Button className="transition-colors delay-200 flex items-center justify-between gap-2 bg-accent-1 dark:bg-secondary w-full h-full p-2 text-left rounded-xl cursor-default sm:text-sm">
          <span className="transition-colors delay-200 text-center block truncate text-primary dark:text-accent-1 font-pop text-xl font-bold capitalize">{props.selected.name}</span>
          <FontAwesomeIcon className='transition-colors delay-200 w-5 h-5 text-secondary dark:text-accent-1' icon={faAngleDown}/>
        </Listbox.Button>
        
        {/* <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0"> */}
          <Listbox.Options className="transition-colors delay-200 z-30 relative top-3 bg-accent-1 dark:bg-secondary rounded-xl">
          
          {props.news_channels.map((news, newsIdx) => (
              <Listbox.Option key={newsIdx} className={({ active }) => `cursor-default select-none relative p-2 rounded-xl ${active ? 'text-primary dark:text-accent-2 bg-accent-2 dark:bg-primary' : 'text-gray'}`} value={news}>
      
                {({ selected }) => (
                  <> 
                    <span className='block text-primary dark:text-accent-2 font-pop text-xl font-bold capitalize'>{news.name}</span>
                  </>   
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        {/* </Transition> */}
    </Listbox>
    </div>
  )
}

export default Option