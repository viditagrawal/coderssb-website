// const now = new Date();

// Date Object documentation:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date

// Note: Example date = new Date(2020, 8, 1, 19, 30, 0) is SEPTEMBER 1st 2020, 7:30pm.
// Month variable starts counting from 0.

export const events = [
  {
    id: 0,
    title: "Social & Intro to W21",
    start: new Date(2021, 0, 8, 19, 0, 0),
    end: new Date(2021, 0, 8, 20, 0, 0),
    url: "https://www.facebook.com/events/189047422942078",
    info:
      "Join us for a fun night of games and and learn more about our upcoming events for the Winter",
    pic: "Events/Winter2021/winter_social.png",
    alt:
      "Join us for our winter social to have the chance to win 3 amazon gift cards"
  },
  {
    id: 1,
    title: "Linkedin & Resume Workshop",
    start: new Date(2021, 1, 2, 18, 30, 0),
    end: new Date(2021, 1, 2, 19, 30, 0),
    url: "https://www.facebook.com/events/796825201106990/",
    info:
      "Click to learn more about our Linkedin & Resume workshop. Stop by for 1:1 feedback",
    pic: "Events/Fall2020/coffee_talk_microsoft.png",
    alt: "Linkedin & Resume workshop graphic"
  },
  {
    id: 2,
    title: "Project Series: Intro to React",
    start: new Date(2021, 0, 14, 19, 0, 0),
    end: new Date(2021, 0, 14, 20, 30, 0),
    url: "https://fb.me/e/1Yhdv4oB4",
    info:
      "Project Series Workshop 1: Creating and hosting a React application.",
    pic: "ProjectSeries/workshop1-c.png",
    alt: "Introduction to react project series"
  },
  {
    id: 4,
    title: "Project Series: React fundamentals",
    start: new Date(2021, 0, 21, 19, 0, 0),
    end: new Date(2021, 0, 21, 20, 30, 0),
    url: "https://fb.me/e/3ar3Ec8xU",
    info: "Project Series Workshop 2: React fundamentals.",
    pic: "ProjectSeries/workshop2-c.png",
    alt: "Learning the fundamentals of react project series graphic"
  },
  {
    id: 5,
    title: "Landing Your First Interview",
    start: new Date(2021, 0, 19, 18, 30, 0),
    end: new Date(2021, 0, 19, 19, 30, 0),
    url: "https://www.facebook.com/events/897241164414359",
    info:
      "Come join us to learn how to look better on paper, make successful elevator pitches, and cold email recruiters! Even if you've already landed your first interview, the tips and strategies that can be gained from this event are invaluable. ",
    pic: "Events/Winter2021/land_first_interview.png",
    alt: "Landing your first interview image"
  },
  {
    id: 6,
    title: "Project Series: Google OAuth Sign In",
    start: new Date(2021, 0, 28, 19, 0, 0),
    end: new Date(2021, 0, 28, 20, 30, 0),
    url: "https://www.coderssb.com/ProjectSeries",
    info:
      "Learn how to let users login to your website via their Google account",
    pic: "ProjectSeries/workshop3-c.png",
    alt: "Google OAuth sign in tutorial"
  },
  {
    id: 7,
    title: "Project Series: Midpoint Showcase",
    start: new Date(2021, 1, 4, 19, 0, 0),
    end: new Date(2021, 1, 4, 20, 30, 0),
    url: "https://www.coderssb.com/ProjectSeries",
    info: "Present a video demo of your wesbite",
    pic: "ProjectSeries/midpointShowcase-c.png",
    alt: "Midpoint showcase graphic"
  },
  {
    id: 8,
    title: "CS Professor Coffee Talk",
    start: new Date(2021, 0, 26, 18, 30, 0),
    end: new Date(2021, 0, 26, 19, 30, 0),
    url: "https://www.facebook.com/events/373080633839518",
    info: "Click to learn more about our upcoming professor coffee talk!",
    pic: "Events/Fall2020/classes_preview.png",
    alt: "UCSB professor coffee talk"
  },
  {
    id: 9,
    title: "Project Series: Connecting to a database",
    start: new Date(2021, 1, 11, 19, 0, 0),
    end: new Date(2021, 1, 11, 20, 30, 0),
    url: "https://www.coderssb.com/ProjectSeries",
    info:
      "Learn how to let users login to your website via their Google account",
    pic: "ProjectSeries/workshop4-c.png",
    alt: "Connecting to a database project series graphic"
  },
  {
    id: 10,
    title: "Project Series: Connecting to an API",
    start: new Date(2021, 1, 18, 19, 0, 0),
    end: new Date(2021, 1, 18, 20, 30, 0),
    url: "https://www.coderssb.com/ProjectSeries",
    info: "Learn how to utilize an API to fetch data for your website",
    pic: "ProjectSeries/workshop5-c.png",
    alt: "Conecting to an API project series graphic"
  },
  {
    id: 11,
    title: "Specialized Internships Panel",
    start: new Date(2021, 1, 16, 18, 30, 0),
    end: new Date(2021, 1, 16, 19, 30, 0),
    url: "https://www.facebook.com/events/373080633839518",
    info: "Click to learn more about our upcoming professor coffee talk!",
    pic: "Events/Fall2020/classes_preview.png",
    alt: "Specialized internship panel"
  },
  {
    id: 12,
    title: "Project Series: Work Week",
    start: new Date(2021, 1, 25, 18, 30, 0),
    end: new Date(2021, 1, 25, 19, 30, 0),
    url: "https://www.coderssb.com/ProjectSeries",
    info:
      "There are no workshops this week. Use this time to finish up your Website.",
    pic: "ProjectSeries/workWeek-c.png",
    alt: "Project series work week graphic"
  },
  {
    id: 13,
    title: "Project Series Final Showcase",
    start: new Date(2021, 2, 4, 18, 30, 0),
    end: new Date(2021, 2, 4, 19, 30, 0),
    url: "https://www.coderssb.com/ProjectSeries",
    info: "Demo your website in front of recruiters and win prizes!",
    pic: "ProjectSeries/finalShowcase-c.png",
    alt: "Final showcase graphic"
  }
];

export default events;
