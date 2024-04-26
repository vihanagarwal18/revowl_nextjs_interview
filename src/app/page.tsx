import Link from "next/link";


export default function Home(){
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/login">CLick Here to view Login page</Link>
      <br></br>
      <Link href="/product">Click here to view product Page</Link>
      </>
  );
}
