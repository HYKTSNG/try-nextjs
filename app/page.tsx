import Link from "next/link";

export default function Home() {
  return (
    <>
      <section>
        <h1>Home</h1>
        <p>リンク集</p>
        <ul>
          <li>
            項目1: <Link href={"/posts"}>posts page!</Link>
          </li>
          <li>項目2</li>
          <li>項目3</li>
        </ul>
      </section>
    </>
  );
}
