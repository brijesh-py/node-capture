import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Capture } from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="*" element={<Capture />} />)
);

export default router;
