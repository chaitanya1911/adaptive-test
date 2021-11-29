import React, { useState, useEffect } from "react";

function TestScreen() {
  const [hard, setHard] = useState([]);
  const [medium, setMedium] = useState([]);
  const [easy, setEasy] = useState([]);
  const [current, setCurrent] = useState(2);
  const [qs, setQs] = useState([
    {
      ques: "This is medium level qs default",
      options: [
        {
          opt: "this is option d1",
          mrks: 2,
        },
        {
          opt: "this is option d2",
          mrks: 0,
        },
        {
          opt: "this is option d3",
          mrks: 0,
        },
      ],
    },
  ]);
  const [ans, setAns] = useState([]);
  const [qsno, setQsno] = useState(0);

  useEffect(() => {
    setHard([
      ...hard,
      {
        ques: "This is hard qs",
        options: [
          {
            opt: "this is option",
            mrks: 5,
          },
          {
            opt: "this is option 2",
            mrks: 0,
          },
          {
            opt: "this is option 3",
            mrks: 0,
          },
        ],
      },
    ]);
    setMedium([
      ...medium,
      {
        ques: "This is medium level qs",
        options: [
          {
            opt: "this is option",
            mrks: 2,
          },
          {
            opt: "this is option 2",
            mrks: 0,
          },
          {
            opt: "this is option 3",
            mrks: 0,
          },
        ],
      },
      {
        ques: "This is medium level qs 2",
        options: [
          {
            opt: "this is option 21",
            mrks: 2,
          },
          {
            opt: "this is option 22",
            mrks: 0,
          },
          {
            opt: "this is option 23",
            mrks: 0,
          },
        ],
      },
      {
        ques: "This is medium level qs 3",
        options: [
          {
            opt: "this is option 31",
            mrks: 2,
          },
          {
            opt: "this is option 32",
            mrks: 0,
          },
          {
            opt: "this is option 33",
            mrks: 0,
          },
        ],
      },
      {
        ques: "This is medium level qs 4",
        options: [
          {
            opt: "this is option 41",
            mrks: 2,
          },
          {
            opt: "this is option 42",
            mrks: 0,
          },
          {
            opt: "this is option 43",
            mrks: 0,
          },
        ],
      },
    ]);
    setEasy([
      ...easy,
      {
        ques: "This is easy qs",
        options: [
          {
            opt: "this is option",
            mrks: 1,
          },
          {
            opt: "this is option 2",
            mrks: 0,
          },
          {
            opt: "this is option 3",
            mrks: 0,
          },
        ],
      },
    ]);
  }, []);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  function click(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    for (var pair of formData.entries()) {
      var myans = pair[1];
    }
var x;
    if (myans > 0) {
      if (current < 3) {
        setCurrent(current + 1);
         x = current+1;
      }
      else{
          x=3
      }
    } else {
      if (current > 1) {
        setCurrent(current - 1);
        x = current-1;
      }
      else{
          x=1
      }
    }
    switch (x) {
      case 1:
        var index = getRandomInt(0, easy.length);
        setQs([...qs, easy[index]]);
        easy.splice(index, 1);
        break;
      case 2:
        var index = getRandomInt(0, medium.length);
        setQs([...qs, medium[index]]);
        medium.splice(index, 1);
        break;
      case 3:
        var index = getRandomInt(0, hard.length);
        setQs([...qs, hard[index]]);
        hard.splice(index, 1);
        break;
    }
    setQsno(qsno + 1);
    e.target.reset();
  }
  return (
    <div>
      <form onSubmit={click}>
        <h1>{qs[qsno].ques}</h1>
        {qs[qsno].options.map((option, index) => {
          return (
            <p>
              <input
                key={index}
                type="radio"
                id={index}
                name={qs[qsno].ques}
                class="radio"
                value={option.mrks}
                required
              />
              <label for={index} class="option" id="option-one-label">
                {option.opt}
              </label>
            </p>
          );
        })}

        <button type="submit">Next Question</button>
      </form>
    </div>
  );
}

export default TestScreen;
