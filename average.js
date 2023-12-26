const marks = [85, 97, 44, 37, 76, 60];

const totalSub = marks.length;
let sumOfMarks = 0;

for (let mark of marks) {
  sumOfMarks += mark;
}

console.log(`Average of ${marks} is ${sumOfMarks / totalSub}`);
