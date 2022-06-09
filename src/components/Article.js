import React, { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Article = (props) => {
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [QA, setQA] = useState([]);

  useEffect(() => {
    if (text) {
      getQA();
    }
  }, [text]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = async (e) => {
    setLoading(true);
    if (!text) {
      fetch(`${process.env.REACT_APP_BACKEND}/article`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: props.link }),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setText(res.text);
        })
        .catch((err) => {
          alert("Error getting article text");
        });
    } else {
      getQA();
    }
    e.preventDefault();
  };

  const getQA = () => {
    fetch(`${process.env.REACT_APP_BACKEND}/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ context: text, question: input }),
    }) //make a fetch to the model with the question and the context
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setLoading(false);
        setQA([...QA, { question: input, answer: res.answer }]);
        setInput("");
      })
      .catch((err) => {
        setLoading(false);
        alert("Error getting QA");
      });
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const renderQA = (qa) => {
    return qa.map((item, index) => {
      return (
        <div key={index}>
          <div className=" animate-appear transition-colors delay-200 bg-primary dark:bg-accent-2 rounded-xl my-3 ">
            <p className=" transition-colors delay-200 text-left sm:text-xl text-l font-bold font-mono text-accent-2 dark:text-secondary p-3 pb-0 ">
              {item.question}
            </p>
            <p className="transition-colors delay-200 text-left sm:text-l text-base font-bold font-mono text-accent-1 dark:text-secondary-shade p-3 py-0 pb-3 ">
              {item.answer}
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="animate-appear sm:m-6 m-3 transition-all delay-200 bg-secondary-shade dark:bg-accent-shade rounded-3xl">
      <h1 className="transition-colors delay-200 bg-secondary hover:underline  dark:bg-accent-1 rounded-t-3xl font-mono sm:text-2xl text-xl text-left sm:p-5 p-3 font-bold text-accent-1 dark:text-primary leading-relaxed">
        <a
          href={props.link}
          className=" decoration-solid "
          target="_blank"
          rel="noreferrer"
        >
          {props.headline}
        </a>
      </h1>
      <div className="transition-colors delay-200 bg-transparent rounded-b-3xl p-3">
        {renderQA(QA)}
        <form onSubmit={handleSubmit} className="flex ">
          <input
            disabled={isLoading}
            value={input}
            onChange={handleChange}
            placeholder="Ask anything related to the headline..."
            className="transition-colors delay-200 font-mono font-bold overflow-hidden
              text-accent-1 dark:text-secondary h-max sm:m-3 m-1 w-[95%] sm:text-xl text-l 
              text-left bg-transparent outline-none border-b-2 placeholder:text-accent-shade 
              placeholder:transition-colors placeholder:delay-200 dark:placeholder:text-secondary-shade
               dark:placeholder:transition-colors dark:placeholder:delay-200
                resize-none caret-accent-1 dark:caret-primary "
          />

          {isLoading ? (
            <FontAwesomeIcon
              className="p-3 text-accent-2 dark:text-primary animate-spin sm:text-xl text-l"
              icon={faCircleNotch}
            />
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default Article;
