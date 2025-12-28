import type { ReactElement, ReactNode } from "react";

function Cup({ guest }: {guest: number}) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaGathering() {
  const cups: ReactElement[] = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
}
