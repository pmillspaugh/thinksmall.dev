import * as cheerio from "cheerio";
import Image from "next/image";

import styles from "./Preview.module.css";

interface PreviewProps {
  url: string;
  desc: string;
}

export default async function Preview({ url, desc }: PreviewProps) {
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);
  // TODO: add fallback when there's no og image
  const ogImgUrl = $("meta[property=og:image]").attr("content");
  const cleanUrl = url.replace("https://", "");

  return (
    <li className={styles.li}>
      <a href={url}>
        {ogImgUrl && (
          <div className={styles.imgWrapper}>
            <Image
              src={ogImgUrl}
              alt={`Open graph image for ${cleanUrl}`}
              fill={true}
            />
          </div>
        )}
        <div className={styles.descWrapper}>
          <h2>{cleanUrl}</h2>
          <p>{desc}</p>
        </div>
      </a>
    </li>
  );
}

export function Suggestion() {
  return (
    <li className={styles.li}>
      <a
        className={styles.suggest}
        href="https://github.com/pmillspaugh/thinksmall.dev"
      >
        Suggest one!
      </a>
    </li>
  );
}
