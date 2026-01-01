export default function shuffleArray(arr: number[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function createArrayFromNtoM(m: number, n: number): number[] {
  const arr = Array.from({ length: (n - m + 1) }, (_, i) => i + m);
  return arr;
}

function test() {
  console.log(shuffleArray(createArrayFromNtoM(0, 4)));
}

test();
