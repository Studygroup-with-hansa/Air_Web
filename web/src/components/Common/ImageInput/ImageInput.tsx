import { useCallback } from "react";
import { RiCloseFill } from "react-icons/ri";
import useImageInputBox from "hooks/image/useImageInputBox";

import "./ImageInput.scss";

export interface IFileTypes {
  id: number;
  object: File;
}

const ImageInput = () => {
  const {
    isDragging,
    dragRef,
    postRequestPicture,
    onChangeFiles,
    handleFilterFile,
  } = useImageInputBox();

  const checkNameLength = useCallback((name: string) => {
    if (name.length > 25) {
      return name.slice(0, 25).concat("...");
    }
    return name;
  }, []);

  return (
    <div className="imageInputBox">
      <div
        className={
          isDragging
            ? "imageInputBox-inputBox-dragging"
            : "imageInputBox-inputBox"
        }
        ref={dragRef}
      >
        <div className="imageInputBox-title">이미지를 드래그해주세요</div>
        <label className="imageInputBox-file" htmlFor="fileUpload">
          <div>이미지 선택</div>
          <input
            className="imageInputBox-btn"
            type="file"
            id="fileUpload"
            style={{ display: "none" }}
            accept="image/*"
            multiple={true}
            onChange={onChangeFiles}
          />
        </label>
      </div>

      <div className="imageInputBox-files">
        {postRequestPicture.length > 0 &&
          postRequestPicture.map((file: IFileTypes) => {
            const {
              id,
              object: { name },
            } = file;

            return (
              <div className="imageInputBox-files-item" key={id}>
                <div>{checkNameLength(name)}</div>
                <RiCloseFill
                  className="imageInputBox-files-filter"
                  onClick={() => handleFilterFile(id)}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ImageInput;
