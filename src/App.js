import './App.css';
import data from "./data.json"
import { useState } from 'react';
import "./App.css"
import { Grid } from '@mui/material';

function App() {
  const [items] = useState(data);

  return (<>

    <div style={{ display: "flex", flexDirection: "column", alignContent: "center", flexWrap: "wrap" }}>
      <Grid container className="card" xs={12} lg={4} style={{ background: "#FFFFFF", borderRadius: 15, filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))", maxWidth: "900px" }}>
        <Grid item className='left'>
          <div className="left-card" style={{ width: "375px", height: "465.53px", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", alignItems: "center", backgroundColor: "#7857FF", borderRadius: 15 }}>
            <h2 className="circle-title" style={{ color: "#C8C7FF" }}>Your Result</h2>
            <div className="circle" style={{
              display: "flex",
              flexDirection: "column",
              height: 100,
              width: 100,
              background: "linear-gradient(#4E21CA,#2421CA)",
              borderRadius: "50%",
              justifyContent: "center",
            }}>
              <p style={{ flexDirection: "column", color: "#FFFFFF", fontWeight: 800, fontSize: 35, margin: 0 }}>76</p>
              <p style={{ color: "#C8C7FF", margin: 0 }}>of 100</p>
            </div>
            <p className="cricle-middle-text" style={{ color: "white", fontSize: 25, fontWeight: 800 }}>Great</p>
            <p className="circle-text" style={{ color: "#C8C7FF", width: 300 }}>You scored higher than 65% of the people who have taken these tests.</p>
          </div>
        </Grid>

        <Grid item className="right-card text" style={{ maxWidth: "500px", marginLeft: "20px" }} xs={12} lg={8}>
          <h2>Summary</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>{items.map((item, index) =>
            <div key={index} style={{
              backgroundColor: `${item.color}15`,
              borderRadius: 15,
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
              marginRight: "15px"
            }}>
              <h3 style={{ color: item.color, marginLeft: 25 }}>
                <img src={item.icon} alt={item.category} />{item.category}</h3>
              <p style={{ color: "#303B5A, 10%", marginRight: 25 }}>{item.score}
                <span style={{ color: "#303B5A" }}>/ 100</span></p>
            </div>
          )}
            <button className="button" style={{ margin: "auto", background: "gray", border: "none", borderRadius: 15, alignItems: "center", width: "full", display: "block", marginBottom: "10px" }}>
              <p className="Countinute">Continue</p>
            </button>
          </div>
        </Grid>
      </Grid >
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV/hub">Frontend Mentor</a>.
        Coded by <a href="https://www.frontendmentor.io/profile/Chious">Chiou Jia Sheng</a>.
      </div>
    </div >
  </>
  );
}

export default App;
