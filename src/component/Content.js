const Content = ({ question }) => {
  return (
    <div className="content">
      <h2>Question ID - {question.owner.user_id}</h2>
      <p className="question">{question.title}</p>
      {question.answer_count <= 1 ? (
        <p className="count">
          This question contain{" "}
          <span className="number">{question.answer_count}</span> answer.
        </p>
      ) : (
        <p className="count">
          This question contains{" "}
          <span className="number">{question.answer_count}</span> answers.
        </p>
      )}
      <div>
        {question.tags.map((tag, index) => {
          return (
            <span className="tags" key={index}>
              # {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
