import { CSSProperties } from "react";

import "./MainListItem.scss";

const MainListItem = ({
  opacity = "30%",
  data,
  customStyle,
}: any): JSX.Element => {
  const listItemStyle: CSSProperties = {
    ...customStyle,
    opacity,
  };

  return (
    <div className="mainListItem" style={listItemStyle}>
      {data}%
    </div>
  );
};

export default MainListItem;
