import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import type { ToastEditorProps } from "./ToastEditor.types";

const toolbarItems = [
  ["heading", "bold", "italic", "strike"],
  ["hr"],
  ["ul", "ol", "task"],
  ["table", "link"],
  ["image"],
  ["code"],
  ["scrollSync"],
];

const ToastEditor = ({ content, editorRef }: ToastEditorProps) => {
  return (
    <>
      {editorRef && (
        <Editor
          placeholder="내용을 입력해주세요."
          initialValue={content || ""}
          previewStyle="vertical"
          height="100vh"
          initialEditType="wysiwyg"
          toolbarItems={toolbarItems}
          useCommandShortcut={true}
          usageStatistics={false}
        />
      )}
    </>
  );
};

export default ToastEditor;
