import { CSSProperties } from "react";
import { IMainListStyleType } from "types/mainList.types";

import "./MainListItem.scss";

const MainListItem = ({
  opacity = "30%",
  data,
  customStyle,
}: IMainListStyleType): JSX.Element => {
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
