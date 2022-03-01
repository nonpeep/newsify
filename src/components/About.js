import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function MyModal(props) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
     <>
      <div className='transition-colors delay-200 flex items-center bg-accent-1 dark:bg-secondary gap-2 w-2/2 h-14 p-2 text-center rounded-xl px-5'>
      <button type='button' onClick={openModal}>
         <span className='transition-colors delay-200 block truncate text-primary dark:text-accent-1 font-pop text-xl font-bold justify-center text-center'> 
         About
          </span> 
      </button> 
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        {props.darkTheme ?
        <Dialog as="div" className="dark fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className=" fixed inset-0 opacity-20"  />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">      
              <div className="inline-block w-1/1 max-w-md p-6 my-8 overflow-hidden text-center align-middle transition-all transform shadow-xl rounded-2xl text-primary dark:text-accent-2 bg-accent-1 dark:bg-secondary">
                <Dialog.Title
                  as="h3"
                  className="transition-colors delay-200 block truncate  font-pop text-3xl font-bold justify-center text-center p-2 mt-5 text-primary dark:text-accent-2"
                >
                  About
                </Dialog.Title>
                <div className="mt-2 relative">
                  <p className="text-lg text-justify text-primary dark:text-accent-2 font-sans">
                  Ever read a headline and wanted the answer to a simple question without having to parse through paragraphs on paragraphs of fluff? <br/><br/> Newsify gets the latest headlines from different news sources and topics of your choice, and answers your questions about the headline directly, without ever needing to skim the article.
                  <br/>
                  <br/>
                  Newsify uses a machine learning model behind the scenes, but it can only answer questions when the answer can be found in the content of the article. The wording of the questions also might impact the quality of results, so remember to phrase them appropriately.
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    onClick={closeModal}
                  >
                   <FontAwesomeIcon icon={faXmark} className='text-primary dark:text-accent-2 rounded-full p-2 px-4 m-2 text-3xl absolute top-0 right-0 font-bold block border-0  bg-accent-1 dark:bg-secondary' />
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog> :
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
                <div className="min-h-screen px-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Dialog.Overlay className=" fixed inset-0 opacity-20"  />
                  </Transition.Child>
      
                  {/* This element is to trick the browser into centering the modal contents. */}
                  <span className="inline-block h-screen align-middle" aria-hidden="true">
                    &#8203;
                  </span>
                  <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">      
                    <div className="inline-block w-1/1 max-w-md p-6 my-8 overflow-hidden text-center align-middle transition-all transform shadow-xl rounded-2xl text-primary dark:text-accent-2 bg-accent-1 dark:bg-secondary">
                      <Dialog.Title
                        as="h3"
                        className="transition-colors delay-200 block truncate  font-pop text-3xl font-bold justify-center text-center p-2 mt-5 text-primary dark:text-accent-2"
                      >
                        About
                      </Dialog.Title>
                      <div className="mt-2 relative">
                        <p className="text-lg text-justify text-primary dark:text-accent-2 font-sans">
                        Ever read a headline and wanted the answer to a simple question without having to parse through paragraphs on paragraphs of fluff?<br/><br/>Newsify gets the latest headlines from different news sources and topics of your choice, and answers your questions about the headline directly, without ever needing to skim the article.
                        <br/>
                        <br/>
                        Newsify uses a machine learning model behind the scenes, but it can only answer questions when the answer can be found in the content of the article. The wording of the questions also might impact the quality of results, so remember to phrase them appropriately.
                        </p>
                      </div>
      
                      <div className="mt-4">
                        <button
                          onClick={closeModal}
                        >
                         <FontAwesomeIcon icon={faXmark} className='text-primary dark:text-accent-2 rounded-full p-2 px-4 m-2 text-3xl absolute top-0 right-0 font-bold block border-0  bg-accent-1 dark:bg-secondary' />
                        </button>
                      </div>
                    </div>
                  </Transition.Child>
                </div>
        </Dialog>} 
      </Transition>
    </>
  )
}