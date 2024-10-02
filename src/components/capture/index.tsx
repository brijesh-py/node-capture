import { useEffect } from "react";
import Loading from "../loading";
import nodeCapture from "../../services/node-capture";

function Capture() {
  useEffect(() => {
    nodeCapture();
  }, []);
  return (
    <>
      <Loading />
    </>
  );
}
export default Capture;
