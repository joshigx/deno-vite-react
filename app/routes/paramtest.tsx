import type { Route } from "./+types/paramtest.ts";

export function clientLoader({
  params,
}: Route.ClientLoaderArgs) {
  const res = params.pid;
  return res;
}

// HydrateFallback is rendered while the client loader is running
export function HydrateFallback() {
  return <div>Loading...</div>;
}

export default function ParamTest({
  loaderData,
}: Route.ComponentProps) {
  const param = loaderData;
  return (
    <div>
      <p>{param}</p>
    </div>
  );
}