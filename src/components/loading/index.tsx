import { VscLoading } from "react-icons/vsc";

function Loading() {
  return (
    <div className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-screen">
      <div className="w-fit mx-auto dark:text-white">
        <VscLoading className="block w-fit mx-auto text-3xl animate-spin " />
        <h3 className="mt-2">Loading...</h3>
      </div>
    </div>
  );
}

export default Loading;
