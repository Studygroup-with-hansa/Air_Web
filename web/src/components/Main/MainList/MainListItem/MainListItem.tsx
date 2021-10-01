import { CSSProperties } from "react";

import "./MainListItem.scss";

export interface IMainListStyleType {
  opacity: string;
  data: number;
  customStyle?: CSSProperties;
}
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
