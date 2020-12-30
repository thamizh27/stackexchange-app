import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./component/Search";
import Content from "./component/Content";
import Loader from "./component/Loader";
import NoResult from "./component/NoResult";

function App() {
  const [query, setQuery] = useState("mediaquery");
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.stackexchange.com/2.2/search/advanced?page=1&pagesize=20&order=desc&sort=activity&q=${query}&accepted=False&closed=False&migrated=False&notice=False&site=stackoverflow`
    )
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.items);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [query]);

  return (
    <div>
      <header>
        <h1 className="title">StackExchange App</h1>
      </header>
      <Search searchText={(text) => setQuery(text)} />
      {!isLoading && questions.length === 0 && <NoResult />}

      {isLoading ? (
        <Loader />
      ) : (
        <div className="map-content">
          {questions.map((question) => {
            return <Content key={question.question_id} question={question} />;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
