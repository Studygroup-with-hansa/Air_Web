import useImageInputBox from "hooks/image/useImageInputBox";

import "./ImageInput.scss";

export interface IFileTypes {
  id: number;
  object: File;
}

const ImageInput = () => {
  const { isDragging, dragRef, onChangeFiles } = useImageInputBox();

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
            multiple={false}
            onChange={onChangeFiles}
          />
        </label>
      </div>
    </div>
  );
};

export default ImageInput;
