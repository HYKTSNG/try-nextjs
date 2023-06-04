import Link from "next/link";
import type { FC } from "react";
import "../styles/global.css";

const FirstPost: FC = () => {
  // return <h1>First Post</h1>;
  return (
    <section>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <h1>First Post</h1>
      <h2 className="back">
        <Link href={"/"}>
          <span className="material-icons test">arrow_right_alt</span>
          Back to home
        </Link>
      </h2>
    </section>
  );
};

export default FirstPost;
