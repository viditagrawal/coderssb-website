import Card from "../components/redesign/Card";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default function Index() {
  return (
    <div style={styles}>
      <Card id={0} title={"Coders SB"} bgcolor="#D2F5FF" />
      <Card id={1} title={"Here's What We Do"} bgcolor="#466D91" />
      <Card id={2} title={"Info Sessions"} bgcolor="#E4FDE1" />
      <Card id={3} title={"Resources"} bgcolor="#FFEE93" />
      <Card id={4} title={"Upcoming Events"} bgcolor="white" />
    </div>
  );
}
