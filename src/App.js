import './App.css';
import data from "./data.json"
import { useState } from 'react';
import "./App.css"

function App() {
  const [items] = useState(data);

  return (<>

    <div>
      <div className="card">
        <section className="left-card" style={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", alignItems: "center", backgroundColor: "#7857FF", borderRadius: 15 }}>
          <h2 className="circle-title" style={{ color: "#C8C7FF" }}>Your Result</h2>
          <div className="circle" style={{
            height: 100,
            width: 100,
            background: "linear-gradient(#4E21CA,#2421CA)",
            borderRadius: "50%",
          }}>
            <p style={{ color: "white", fontWeight: 800, fontSize: 35 }}>76</p>
            <p style={{ color: "#C8C7FF" }}>of 100</p>
          </div>
          <p className="cricle-middle-text" style={{ color: "white", fontSize: 25, fontWeight: 800 }}>Great</p>
          <p className="circle-text" style={{ color: "#C8C7FF", width: 300 }}>You scored higher than 65% of the people who have taken these tests.</p>        </section>

        <section className="right-card text">
          <h2>Summary</h2>
          <div>{items.map((item, index) =>
            <div key={index} style={{
              backgroundColor: `${item.color}15`,
              borderRadius: 15,
              display: "flex",
              alignItems: "center",
              textAlign: "center"
            }}>
              <h3 style={{ color: item.color, marginLeft: 20 }}>
                <img src={item.icon} alt={item.category} />
                {item.category}
              </h3>
              <p style={{ color: "#303B5A, 50%" }}><span style={{ color: "#303B5A" }}>{item.score} </span>/ 100 </p>
            </div>
          )}</div>
          <button className="button">
            <p className="Countinute">Continue</p>
          </button>
        </section>
      </div >
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV/hub">Frontend Mentor</a>.
        Coded by <a href="https://www.frontendmentor.io/profile/Chious">Chiou Jia Sheng</a>.
      </div>
    </div >
  </>
  );
}

export default App;
