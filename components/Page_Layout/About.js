export default function About() {
  return (
    <div className="w3-row w3-padding-64" id="about">
      <h1 className="w3-center">About Coders SB</h1>

      <div className="w3-col m6 w3-padding-large w3-hide-small">
        <img
          src="shirt.png"
          className="w3-round w3-image w3-opacity-min"
          alt="Coders SB"
          width="600"
          height="750"
        />
      </div>

      <div className="w3-col m6 w3-padding-large">
        <br />
        <p className="w3-large">
          Computer Science/Engineering courses at UCSB are cool and all, but
          they don't really allow you to build your real-world engineering
          skills. Coders SB helps bridge the gap between school and the
          real-world, enabling you to build real world programs, apps, websites,
          utilities, and services. Come learn about building real-world,
          scalable web services, APIs, iOS/Android Applications, or gorgeous,
          professional-looking websites that will impress anyone. Coders SB
          provides an environment where students can have fun building cool
          stuff with their peers, improving both their programming and
          collaboration skills, which are vital to working in the industry (and
          boosting their resume!). We will also host workshops and have industry
          professionals come and share their wisdom with us. Most importantly,
          we're extremely open and welcoming to students of all ages and
          skill-sets, from freshmen with no experience to seniors with various
          internships and hackathon awards. Come to our next meeting to join to
          get started! Let's build something.
        </p>
      </div>
    </div>
  );
}
