// const now = new Date();

// Date Object documentation:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date

// Note: Example date = new Date(2020, 8, 1, 19, 30, 0) is SEPTEMBER 1st 2020, 7:30pm.
// Month variable starts counting from 0.

export const events = [
  {
    id: 1,
    title: "How to Land an Internship",
    start: new Date(2020, 9, 13, 19, 0, 0),
    end: new Date(2020, 9, 13, 20, 0, 0),
    url: "https://www.facebook.com/events/336856614058713/",
    info: "Click to learn more about how to land an internship!",
    pic: "Events/Fall2020/how_to_land_an_internship.png",
    alt: "logo.png"
  },
  {
    id: 2,
    title: "Coffee Talks w/Microsoft",
    start: new Date(2020, 9, 15, 17, 0, 0),
    end: new Date(2020, 9, 15, 18, 0, 0),
    url: "https://www.facebook.com/events/796825201106990/",
    info: "Click to learn more about our Coffee Talk with Microsoft!",
    pic: "Events/Fall2020/coffee_talk_microsoft.png",
    alt: "logo.png"
  },
  {
    id: 3,
    title: "Internship Panel",
    start: new Date(2020, 9, 20, 19, 0, 0),
    end: new Date(2020, 9, 20, 20, 0, 0),
    url: "https://www.facebook.com/events/1213889215657466/",
    info: "Click to learn more about undergraduates' internship experiences!",
    pic: "Events/Fall2020/internship_panel.png",
    alt: "logo.png"
  },
  {
    id: 4,
    title: "Inaugural Informational Meeting",
    start: new Date(2020, 9, 8, 18, 0, 0),
    end: new Date(2020, 9, 8, 19, 0, 0),
    url: "https://www.facebook.com/events/467604784157325/",
    info: "Kick off the quarter with our informational meeting",
    pic: "Events/Fall2020/informational_meeting.png",
    alt: "logo.png"
  },
  {
    id: 5,
    title: "Coffee Talks w/Google",
    start: new Date(2020, 9, 22, 17, 0, 0),
    end: new Date(2020, 9, 22, 18, 0, 0),
    url: "https://www.facebook.com/events/993609941051569/",
    info: "Click to learn more about our Coffee Talk with Google",
    pic: "Events/Fall2020/coffee_talk_google.png",
    alt: "logo.png"
  },
  {
    id: 6,
    title: "Class Preview w/SWE",
    start: new Date(2020, 9, 28, 19, 0, 0),
    end: new Date(2020, 9, 28, 20, 0, 0),
    url: "https://www.facebook.com/events/373080633839518",
    info: "Click to learn more about our Classes Preview event w/SWE",
    pic: "Events/Fall2020/classes_preview.png",
    alt: "logo.png"
  },
  {
    id: 7,
    title: "Officer Apps Due",
    start: new Date(2020, 9, 11, 23, 59, 50),
    end: new Date(2020, 9, 11, 23, 59, 60),
    url:
      "https://docs.google.com/forms/u/3/d/1DWLlMBMK2TT9q8Losv10DK3pG77D_JbximST4tAZKTE/edit",
    info: "Click to apply to be a Coders SB Officer",
    pic: "Events/Fall2020/officer_apps.png",
    alt: "logo.png"
  }
];

export default events;
