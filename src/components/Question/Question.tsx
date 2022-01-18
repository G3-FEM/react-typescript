import * as React from 'react';
import './Questions.scss';

type QuestionProps = {
    question: string;
    answer: string;
  };
  
  const Question = ({ question, answer }: QuestionProps) => {
    const [isHidden, toggleHidden] = React.useState<boolean>(true);
    return (
      <article className="question">
        <header>{question}</header>
        <p className="answer">
          <span className={isHidden ? "blurred" : ""}>{answer}</span>
        </p>
        <footer>
          <button onClick={() => toggleHidden(!isHidden)}>Toggle Answer</button>
        </footer>
      </article>
    );
  };

  export default Question;