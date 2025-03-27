import EditorBase from "../../components/editor/Editor";

const classNameScroll = `[&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent! [&::-webkit-scrollbar-thumb]:bg-zinc-600! [&::-webkit-scrollbar-thumb]:hover:bg-zinc-800! [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:mr-6`;

export default function IdeaKeeper() {
  return (
    <div
      className={`${classNameScroll} relative top-5 bottom-5 ml-5 my-5 h-[90%] max-w-full bg-zinc-900 pt-16 px-8 rounded-2xl overflow-y-auto overflow-x-hidden mx-auto mb-16`}
    >
      <EditorBase />
    </div>
  );
}
