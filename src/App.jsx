import { useState } from "react";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>{people.length} Birthdays Today</h3>
        {people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <div className="person" key={id}>
              <div>
                <img src={image} alt="" />
              </div>
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </div>
          );
        })}
        {people.length === 0 ? (
          <button
            className="btn btn-block"
            style={{ margin: "1.5rem 0", backgroundColor: "blueviolet" }}
            onClick={() => setPeople(data)}
          >
            Reset
          </button>
        ) : (
          ""
        )}
        <button className="btn btn-block" onClick={() => setPeople([])}>
          Clear All
        </button>
      </div>
    </main>
  );
};
export default App;
