import type { Route } from "./+types/test.ts";
import { Pool } from "npm:pg";

// Diese Funktion läuft server-side
export async function loader({ params }: Route.LoaderArgs) {


  const pool = new Pool();

  const _createTable = await pool.query('CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(100) NOT NULL)');



  
  return ("");
}


export default function Home() {
  return (
  <>
  <p>Test</p>
</>
  );
}
