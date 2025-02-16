// import { neon } from "@neondatabase/serverless";

// async function getData() {
//   const sql = neon(process.env.DATABASE_URL || "");
//   const response = await sql`SELECT version()`;
//   return response[0].version;
// }

import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId, redirectToSignIn } = await auth();
  if (!userId) return redirectToSignIn();

  // return <h1>Hello, {userId}</h1>;
}
