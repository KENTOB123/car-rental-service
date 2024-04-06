import Image from "next/image";
import Thumbnail from "./components/Thumbnail";
import Bookcar from "./components/Bookcar";
import Descri from "./components/Descri";
import Vehicle from "./vehicle/page";
import Baner from "./components/Baner";
import Reason from "./components/Reason";
import Testimonials from "./components/Testimonials";
import Faquestion from "./components/Faquestion";

export default function Home() {
  return (
    <div>
      <Thumbnail />
      <Bookcar />
      <Descri />
      <Vehicle />
      <Baner />
      <Reason />
      <Testimonials />
      <Faquestion />
    </div>
  );
}
