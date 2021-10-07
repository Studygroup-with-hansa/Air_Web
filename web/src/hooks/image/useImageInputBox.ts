import {
  ChangeEvent,
  MutableRefObject,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export interface IFileTypes {
  id: number;
  object: File;
}

const useImageInputBox = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [imageInputRequest, setImageInputRequest] = useState<string>("");
  const [postRequestPicture, setPostRequestPicture] = useState<IFileTypes[]>(
    []
  );

  const dragRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const fileId: MutableRefObject<number> = useRef<number>(0);

  const onChangeFiles = useCallback(
    (e: ChangeEvent<HTMLInputElement> | any): void => {
      let selectFiles: File[] = [];
      let tempFiles: IFileTypes[] = [...postRequestPicture];

      if (e.type === "drop") {
        selectFiles = e.dataTransfer.files;
      } else {
        selectFiles = e.target.files;
      }

      for (const file of selectFiles) {
        if (!file.type.includes("image")) {
          continue;
        }

        tempFiles = [
          ...tempFiles,
          {
            id: fileId.current++,
            object: file,
          },
        ];
      }

      setPostRequestPicture((prevRequest) => [...prevRequest, ...tempFiles]);
    },
    [setImageInputRequest, setPostRequestPicture]
  );

  const handleFilterFile = useCallback(
    (id: number): void => {
      setPostRequestPicture((prevRequest) =>
        prevRequest.filter((file: IFileTypes) => file.id !== id)
      );
    },
    [setPostRequestPicture]
  );

  const handleDragIn = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer!.files) {
      setIsDragging(true);
    }
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();

      onChangeFiles(e);
      setIsDragging(false);
    },
    [onChangeFiles]
  );

  const initDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.addEventListener("dragenter", handleDragIn);
      dragRef.current.addEventListener("dragleave", handleDragOut);
      dragRef.current.addEventListener("dragover", handleDragOver);
      dragRef.current.addEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = useCallback((): void => {
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener("dragenter", handleDragIn);
      dragRef.current.removeEventListener("dragleave", handleDragOut);
      dragRef.current.removeEventListener("dragover", handleDragOver);
      dragRef.current.removeEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  useEffect(() => {
    initDragEvents();

    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

  return {
    isDragging,
    dragRef,
    postRequestPicture,
    onChangeFiles,
    handleFilterFile,
  };
};

export default useImageInputBox;
