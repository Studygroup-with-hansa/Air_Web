import SideBar from "components/Common/SideBar";
import { IPageTemplateTypes } from "types/common.types";

import "./PageTemplate.scss";

const PageTemplate = ({ children }: IPageTemplateTypes): JSX.Element => {
  return (
    <div className="pageTemplate">
      <div className="pageTemplate-sideBar">
        <SideBar />
      </div>
      <div className="pageTemplate-content">{children}</div>
    </div>
  );
};

export default PageTemplate;
