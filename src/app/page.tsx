import Preview, { Suggestion } from "@/components/Preview";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>thinksmall.dev</header>
      <main className={styles.main}>
        <p>
          A showcase of does-one-thing-well websites. See also:{" "}
          <a href="https://www.petemillspaugh.com/think-small">Think Small</a>.
        </p>
        <ul className={styles.ul}>
          <Preview
            url="https://pkg-size.dev"
            desc="Check the size of an npm package before installing."
          />
          <Preview
            url="https://npm.chart.dev"
            desc="Beautiful, shareable npm package download charts."
          />
          <Preview
            url="https://makeareadme.com"
            desc="The what, why, who, when, where, and how of READMEs."
          />
          <Preview
            url="https://joshwcomeau.com/operator-lookup"
            desc="Search a JavaScript operator for an explanation and code example."
          />
          {/* <Preview
            url="https://emoji.supply/kitchen"
            desc="Combine emojis—great for favicons and custom Slack reactions."
          /> */}
          <Suggestion />
        </ul>
      </main>
      <footer>
        The source code for this website is{" "}
        <a href="https://github.com/pmillspaugh/thinksmall.dev">public</a>.
        Thanks to Azeem for the{" "}
        <a href="https://x.com/azeemb_a/status/1855025344514080950">idea</a>.
      </footer>
    </div>
  );
}
