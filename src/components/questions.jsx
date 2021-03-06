// IMPORTANT!!!!
// DO NOT EDIT THIS FILE
// --------------------------------------

const questionList = [
  "Please make value from counter is increase +1 when click 'ADD' button",
  "Please make value from counter is decrease -1 when click 'MIN' button (NOTE: value cannot set below 0)",
  "Please make value from counter is set to 0 when click 'RESET' button",
  "Please show window alert 'You have update 5 times' every 5 time changes value of counter",
  "Please toggle text in <Child1/> when the counter value is even/odd",
  "Please render card in <child2/> based on counter value",
  "Please allows user to toggle the card into list or 3 column grid by click 'Grid/List' button",
  "Please allows user to toggle the card into black or white theme by click 'Black/White' button"
];

const Questions = () => {
  return (
    <div style={{ marginTop: 100, border: "1px solid #000" }}>
      <h2>TASK</h2>
      <ol style={{ textAlign: "left" }}>
        {questionList.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default Questions;
