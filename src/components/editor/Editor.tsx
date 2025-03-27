"use client";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Bold, Code, Italic, Strikethrough } from "lucide-react";
import { initialContent } from "./InitialContent";
import { SidebarTrigger } from "../ui/sidebar";

const EditorBase = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent,
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
  });

  return (
    <>
      <SidebarTrigger className="absolute z-10 top-4 left-4" />
      <EditorContent
        className="mx-auto my-0 overflow-hidden text-zinc-50 prose prose-invert prose-violet max-w-[800px] w-[800px] max-h-[90%]"
        editor={editor}
      />
      {editor && (
        <BubbleMenu
          className="bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600"
          editor={editor}
        >
          <button className="p-2 text-zinc-200 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600">
            <Bold width={24} height={24} />
          </button>
          <button className="p-2 text-zinc-200 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600">
            <Italic width={24} height={24} />
          </button>
          <button className="p-2 text-zinc-200 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600">
            <Strikethrough width={24} height={24} />
          </button>
          <button className="p-2 text-zinc-200 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600">
            <Code width={24} height={24} />
          </button>
        </BubbleMenu>
      )}
    </>
  );
};

export default EditorBase;
