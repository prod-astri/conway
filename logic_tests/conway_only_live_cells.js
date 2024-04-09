// always y then x - line then element
// const lindexOfLastLineWIthLiveCell =
// TODOTODO
// RETURNRANGE IS DONE
// change data structure to [line, [active Cells]] tipo [-4, [4, 5, 6]]

function arrayOfLiveCellsIndexesToBeautiful(arrayOfIndexes) {
  const range = retunrCellPositionRange(arrayOfIndexes);
  const minX = range[0][0];
  const minY = range[1][0];
  const boardOffset = [minX, minY];
  print(`range: ${range}\n`);
}

function print(arg) {
  process.stdout.write(arg);
}

const testCases = {
  // start: [
  //   [0, 0, 0, 0, 0],
  //   [0, 1, 1, 1, 0],
  //   [1, 0, 0, 0, 1],
  //   [1, 0, 0, 0, 1],
  //   [0, 1, 1, 1, 0],
  // ],
  line: [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ],
  // onedimensional: [0],
  not: "string",
};

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

function checkIf2DArrauThenMinify(input, inputName) {
  //
  if (!is2DArray(input)) {
    print(`${inputName} is NOT a valid 2D array\n`);
    return [];
  } else {
    print(`${inputName} is a valid 2D array\n`);
  }

  let minified = arrayOfBinaryValuesToArrayOfLiveCellIndexes(input);
  // console.log(minified);

  return minified;
}

function arrayOfBinaryValuesToArrayOfLiveCellIndexes(twoDArr) {
  let minifiedArr = [];
  for (let lineIndex in twoDArr) {
    for (let elementIndex in twoDArr[lineIndex]) {
      const cellIsAlive = twoDArr[lineIndex][elementIndex] ? 1 : 0;
      if (cellIsAlive === 1) {
        const liveCellCoordinates = [
          parseInt(lineIndex),
          parseInt(elementIndex),
        ];
        minifiedArr.push(liveCellCoordinates);
      }
    }
  }
  return minifiedArr;
}

function processState(inputArr) {
  let indexes = arrayOfBinaryValuesToArrayOfLiveCellIndexes([...inputArr]);
  // const indexes = [...inde];
  print("processState: ");
  console.log(indexes);

  return indexes;
}

function retunrCellPositionRange(arrayOfIndexes) {
  // console.log("arrayOfIndexes:");
  // console.log(arrayOfIndexes);
  let highY = 0;
  let lowY = 0;
  let highX = 0;
  let lowX = 0;
  for (cellIndexCouple of arrayOfIndexes) {
    let Y = cellIndexCouple[0];
    let X = cellIndexCouple[1];
    if (Y > highY) {
      highY = Y;
    }
    if (Y < lowY) {
      highY = Y;
    }
    if (X > highX) {
      highX = X;
    }
    if (X < lowX) {
      lowX = X;
    }
  }
  return [
    [lowY, highY],
    [lowX, highX],
  ];
}

// async
function test(testCases, fn, iterations) {
  for (let testcaseName in testCases) {
    const indexesOfLiveCells = checkIf2DArrauThenMinify(
      testCases[testcaseName],
      testcaseName
    );
    for (let i = 0; i < iterations; i++) {
      fn(indexesOfLiveCells);
      // sleep(2000);
    }
  }
}

function is2DArray(testSubject) {
  if (!Array.isArray(testSubject)) {
    return false;
  }
  for (subelement of testSubject) {
    if (!Array.isArray(subelement)) {
      return false;
    }
  }
  return true;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function liveCellsArrayToStateString(liveCellsArray) {
  return liveCellsArray;
}

test(testCases, processState, 4);
