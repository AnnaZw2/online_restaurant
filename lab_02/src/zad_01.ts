const arr: MyObject[] = [
  { x: 4, y: 2 },
  { x: 1, y: 8 },
  { x: 4, y: 2 },
];
interface MyObject {
  x: number;
  y: number;
}

function countAverage(arr: MyObject[], key: "x" | "y"): number {
  return arr.reduce((acc: number, curr: MyObject): number => {
    return acc + curr[key];
  }, 0) / arr.length;
}

console.log(countAverage(arr, "x")); 
