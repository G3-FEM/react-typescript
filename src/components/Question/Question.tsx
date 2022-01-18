import './Questions.scss';

type QuestionProps = {
    question: string;
    answer: string;
  };
  
  const Question = ({ question, answer }: QuestionProps) => {
    return (
      <article className="question">
        <header>{question}</header>
        <p className="answer">
          <span className="blurred">{answer}</span>
        </p>
        <footer>
          <button>Toggle Answer</button>
        </footer>
      </article>
    );
  };

  export default Question;