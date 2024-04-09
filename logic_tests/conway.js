//TODO HANDLE DEAD BOARD
// VERSION THAT KEEPS CELLS
// maybe with absolute index , only storing the live cells

const deadCellSymbol = "x";
const aliveCellSymbol = "O";
const unknownCellSymbol = "-";
const line = [
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [0, 1, 1, 1, 0],
];
const start = [
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0],
];
const gun = [
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
  ],
  [
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
  ],
  [
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0,
    1, 0, 0, 0, 1, 0, 0,
  ],
  [
    0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1,
    0, 0, 0, 0, 0, 1, 0,
  ],
  [
    0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0,
    0, 0, 0, 0, 0, 0, 1,
  ],
  [
    0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0,
    0, 0, 0, 0, 0, 0, 1,
  ],
  [
    0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
  ],
  [
    0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1,
    0, 0, 0, 0, 0, 1, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0,
    1, 0, 0, 0, 1, 0, 0,
  ],
  [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 0, 0, 0,
  ],
];

const adjacentIndexesOffsetsTable = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

function zero(arr, iterations, milliseconds) {
  let state = [...arr];

  console.log(`starting state:\n`);
  console.log(beautifyArray(state));

  for (let i = iterations; i >= 0; i--) {
    console.clear();
    state = processState(state);
    console.log(`iterations remaining ${i}\n`);
    console.log(beautifyArray(state));
    horribleWait(milliseconds);
  }
}

function processState(arr) {
  const oldState = arr;
  const borderedState = addRight(addLeft(addBottom(addTop(oldState))));
  let newState = deepSwap(borderedState, 2);

  for (let lineIndex in borderedState) {
    for (let elementIndex in borderedState[lineIndex]) {
      const cellIsAlive = borderedState[lineIndex][elementIndex] === 1 ? 1 : 0;
      // console.log(`checking line ${lineIndex} index ${elementIndex}`);
      // console.log(`borderedState:\n`);
      // console.table(borderedState);
      let neighbours = 0;

      for (let offsetCouple of adjacentIndexesOffsetsTable) {
        let indexes = [
          parseInt(lineIndex) + parseInt(offsetCouple[0]),
          parseInt(elementIndex) + parseInt(offsetCouple[1]),
        ];

        // console.log(`line ${indexes[0]} index ${indexes[1]}`);

        if (
          indexes[0] >= 0 &&
          indexes[1] >= 0 &&
          indexes[0] <= borderedState.length - 1 &&
          indexes[1] <= borderedState[0].length - 1
        ) {
          // console.log(` - checking`);
          let neighbourChecked = borderedState[indexes[0]][indexes[1]];

          if (neighbourChecked === 1) {
            neighbours++;
          }
        }
      }

      if (neighbours === 3 || (cellIsAlive && neighbours === 2)) {
        newState[lineIndex][elementIndex] = 1;
      } else {
        newState[lineIndex][elementIndex] = 0;
      }

      // console.log(`newState:\n`);
      // console.log(beautifyArray(newState));
    }
  }
  newState = cleanEmptyLines(newState);
  return newState;
}

function horribleWait(ms) {
  const start = Date.now();
  let now = start;
  while (now - start < ms) {
    now = Date.now();
  }
}

function cleanEmptyLines(arr) {
  let array = [...arr];
  while (array[0].reduce((acc, val) => acc + val) === 0) {
    array.shift();
  }
  while (array[array.length - 1].reduce((acc, val) => acc + val) === 0) {
    array.pop();
  }
  while (array.map((line) => line[0]).reduce((acc, val) => acc + val) === 0) {
    for (let line of array) {
      line.shift();
    }
  }
  while (
    array
      .map((line) => line[line.length - 1])
      .reduce((acc, val) => acc + val) === 0
  ) {
    for (let line of array) {
      line.pop();
    }
  }

  if (array === []) {
    array = [0];
  }
  //TODO HANDLE DEAD BOARD
  return array;
}

function deepSwap(arr, val) {
  if (!Array.isArray(arr)) {
    throw new Error("deepSwap - input is not an Array");
  }
  const defaultNewValue = 0;
  const newValue = val === 0 ? 0 : val ? val : defaultNewValue;
  const result = checkInside(arr, newValue);

  return result;

  function checkInside(input, substitute) {
    return input.map((el) =>
      Array.isArray(el) ? checkInside(el, substitute) : substitute
    );
  }
}

function addTop(arr, fill) {
  const filling = fill === 0 ? fill : fill || 2;
  const lineLength = arr[0].length;
  const bufferLine = new Array(lineLength).fill(filling);
  return [bufferLine, ...arr];
}

function addBottom(arr, fill) {
  const filling = fill === 0 ? fill : fill || 2;
  const lineLength = arr[0].length;
  const bufferLine = new Array(lineLength).fill(filling);
  return [...arr, bufferLine];
}

function addLeft(arr, fill) {
  const filling = fill === 0 ? fill : fill || 2;
  return [...arr].map((line) => {
    return [filling, ...line];
  });
}

function addRight(arr, fill) {
  const filling = fill === 0 ? fill : fill || 2;
  return [...arr].map((line) => {
    return [...line, filling];
  });
}

function beautifyArray(arr) {
  const arrLen = arr.length;
  return [...arr]
    .map((line, lineIndex) => {
      return line
        .map((el) => {
          if (el === 0) {
            return deadCellSymbol;
          } else if (el === 1) {
            return aliveCellSymbol;
          } else {
            return unknownCellSymbol;
          }
        })
        .join("");
    })
    .map((line, lineIndex) => {
      return `${line}${lineIndex === arrLen ? "" : "\n"}`;
    })
    .join("");
}

function dotCellsToBinaryArray(str) {
  return str
    .split("\n")
    .map((line) =>
      line.split("").map((val) => (val === "O" ? 1 : val === "." ? 0 : 2))
    );
}

function fillArray(arr) {
  let maxLength = lengthOfLongestElement(arr);

  return arr.map((line) => {
    const difference = maxLength - line.length;
    if (difference > 0) {
      let filler = new Array(difference).fill(2);
      return [...line, ...filler];
    } else {
      return line;
    }
  });

  function lengthOfLongestElement(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("input is not an array!");
    }
    let longest = [];
    for (el of arr) {
      if (el.length > longest.length) {
        longest = el;
      }
    }
    return longest.length;
  }
}

const gosperCells = `........................O
......................O.O
............OO......OO............OO
...........O...O....OO............OO
OO........O.....O...OO
OO........O...O.OO....O.O
..........O.....O.......O
...........O...O
............OO`;

const gosper = fillArray(dotCellsToBinaryArray(gosperCells));

// console.log(gun);
zero(line, 1000, 50);

// console.log(gun);
// 3 - live
// 2 - live if was alive
