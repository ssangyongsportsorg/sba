import { useColorMode } from "@docusaurus/theme-common";
// @ts-expect-error
import LinkItem from "@theme/Footer/LinkItem";
import React, { useEffect, useState } from "react";

const footerTitle: React.CSSProperties = {
  fontFamily: "GTPlanar",
};

const ColumnLinkItem = ({ item }) => {
  return item.html ? (
    <li
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: item.html }}
      className="footer__item"
    />
  ) : (
    <li key={item.href ?? item.to} className="footer__item">
      <LinkItem item={item} />
    </li>
  );
};

const Column = ({ column }) => {
  return (
    <div className="col footer__col">
      <div style={footerTitle} className="footer__title">
        {column.title}
      </div>
      <ul className="footer__items clean-list">
        {column.items.map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <ColumnLinkItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
};

const copyright: React.CSSProperties = {
  textAlign: "left",
  color: "var(--ifm-footer-link-color)",
  fontSize: "0.8em",
  marginTop: 15,
  marginRight: 38,
};

export default ({ columns }) => {
  const { isDarkTheme } = useColorMode();
  const [src, setSrc] = useState("/img/new-logo.png");

  useEffect(() => {
    if (isDarkTheme) {
      setSrc("https://img.ssangyongsports.eu.org/logo2.png");
    } else {
      setSrc("https://img.ssangyongsports.eu.org/logo2.png");
    }
  }, [isDarkTheme]);

  return (
    <div className="row footer__links">
      <div
        style={{
          padding: "0 var(--ifm-spacing-horizontal)",
          marginBottom: 20,
        }}
      >
        <img
          key={String(isDarkTheme)}
          src={src}
          style={{
            height: 32,
            marginRight: 80,
          }}
        />
        <iframe
  src="https://status.ssangyongsports.org/embed-status/d532b9f9/light-md"
  width={230}
  height={61}
  frameBorder={0}
  scrolling="no"
  style={{ border: "none" }}
></iframe>

        <p style={copyright}>
          Copyright © 2023 雙龍體育, org. 維護團隊：雙龍體育.
        </p>
      </div>
      {columns.map((column, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Column key={i} column={column} />
      ))}
    </div>
  );
};
