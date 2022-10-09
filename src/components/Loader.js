import React from "react";
import ContentLoader from "react-content-loader";

const Loader = (props) => (
  <ContentLoader
    speed={2}
    width={500}
    height={100}
    viewBox="0 0 500 100"
    backgroundColor="#f3f3f3"
    foregroundColor="#d1d1d1"
    {...props}
  >
    <circle cx="569" cy="231" r="20" />
    <rect x="562" y="112" rx="0" ry="0" width="27" height="22" />
    <rect x="195" y="8" rx="0" ry="0" width="50" height="32" />
    <rect x="253" y="8" rx="0" ry="0" width="50" height="32" />
    <rect x="311" y="8" rx="0" ry="0" width="50" height="32" />
    <rect x="22" y="22" rx="6" ry="6" width="75" height="10" />
  </ContentLoader>
);

export default Loader;
