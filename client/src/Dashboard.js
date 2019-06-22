import React from "react";

function Dashboard(props) {
  return (
    <>
      <button onClick={props.strikeHelper}>Strike</button>
      <button onClick={props.ballHelper}>Ball</button>
      <button onClick={props.foulHelper}>Foul</button>
      <button onClick={props.hitHelper}>Hit</button>
    </>
  );
}

export default Dashboard;
