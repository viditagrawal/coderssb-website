import Coders_SB from "../components/redesign/Coders_SB";
import Project_Series from "../components/redesign/Project_Series";
import Info_Sessions from "../components/redesign/Info_Sessions";
import Resources from "../components/redesign/Resources";
import Upcoming_Events from "../components/redesign/Upcoming_Events";
import Companies from "../components/redesign/Companies";
import Join_Us from "../components/redesign/Join_Us";
import FooterPage from "../components/redesign/FooterPage";

export default function Index() {
  const style = {
    display: "flex",
    flexDirection: "column"
  };

  return (
    <div style={style}>
      <Coders_SB id={0} bgcolor="#D2F5FF" />
      <Project_Series id={1} bgcolor="#466D91" />
      <Info_Sessions id={2} bgcolor="#E4FDE1" />
      <Resources id={3} bgcolor="#FFEE93" />
      <Upcoming_Events id={4} bgcolor="white" />
      <Companies id={5} bgcolor="white" />
      <Join_Us id={6} bgcolor="white" />
      <FooterPage id={7} bgcolor="white" />
    </div>
  );
}
