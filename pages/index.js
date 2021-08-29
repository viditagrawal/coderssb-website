import Coders_SB from "../components/redesign/Coders_SB";
import What_We_Do from "../components/redesign/What_We_Do";
import Info_Sessions from "../components/redesign/Info_Sessions";
import Resources from "../components/redesign/Resources";
import Upcoming_Events from "../components/redesign/Upcoming_Events";

export default function Index() {
  return (
    <div>
      <Coders_SB id={0} bgcolor="#D2F5FF" />
      <What_We_Do id={1} bgcolor="#466D91" />
      <Info_Sessions id={2} bgcolor="#E4FDE1" />
      <Resources id={3} bgcolor="#FFEE93" />
      <Upcoming_Events id={4} bgcolor="white" />
    </div>
  );
}
