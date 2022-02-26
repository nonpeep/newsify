import React from 'react'
import { useState } from 'react'
import QASkeleton from './QASkeleton'

const Article = (props) => {
  const [text, setText] = useState('')
  const [input, setInput] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [QA, setQA] = useState([])

  const handleSubmit = (e) => {
    setLoading(true)
    getText(props.link)
    fetch("https://www.boredapi.com/api/activity") //make a fetch to the model with the question and the context 
    .then(res => {return {"question":input,"answer":"The answer to your question majesty."}})
    .then(res => {
      setLoading(false)
      setQA([...QA, {question:input,answer:res.answer}])
      setInput('')
    })
    
    e.preventDefault()
  }

  const getText = (link) => {
    console.log(link)
    fetch("https://www.boredapi.com/api/activity") //make a fetch to the scraper with the
    .then(res =>{return {text:'for u bro:)'}})             //article link 
    .then(res => setText(res.text))
  }




  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const renderQA = (qa) => {
    return qa.map((item, index) => {
      return <div key={index}>
        <div className='transition-colors delay-200 bg-primary dark:bg-accent-2 rounded-xl my-3 '>
        <p className=' transition-colors delay-200 text-left text-2xl font-bold font-mono text-accent-2 dark:text-secondary p-3 pb-0 '>{item.question}</p>
        <p className='transition-colors delay-200 text-left text-xl font-bold font-mono text-accent-1 dark:text-secondary-shade p-3 py-0 pb-3 '>{item.answer}</p>
        </div>
      </div>
    })
  }

    
  return (
    <div className=' m-6 transition-colors delay-200 bg-secondary-shade dark:bg-accent-shade rounded-3xl'>
        <h1 className='transition-colors delay-200 bg-secondary hover:underline  dark:bg-accent-1 rounded-t-3xl font-mono text-4xl text-left p-3 font-bold text-accent-1 dark:text-primary leading-relaxed'><a href={props.link} className = " decoration-solid " >{props.headline}</a></h1>
        <div className='transition-colors delay-200 bg-transparent rounded-b-3xl p-3'>
         {isLoading ? <QASkeleton/> : renderQA(QA)}
          <form onSubmit={handleSubmit} >
            <input disabled={isLoading} value={input} onChange={handleChange} placeholder='Ask anything related to the headline...' className='transition-colors delay-200 font-mono font-bold overflow-hidden text-accent-1 dark:text-secondary h-max pl-3 pt-4 w-full text-2xl text-left bg-transparent outline-none border-none placeholder:text-accent-shade dark:placeholder:text-secondary-shade resize-none caret-accent-1 dark:caret-primary '/>
          </form> 
        </div>
    </div>
  )
}

export default Article
