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
    url: "https://fb.me/e/1XRRfMpTb",
    info: "first event info",
    pic: "resources_images/Oct132020.jpg",
  },
  {
    id: 2,
    title: "Coffee Talks with Microsoft",
    start: new Date(2020, 9, 15, 17, 0, 0),
    end: new Date(2020, 9, 15, 18, 0, 0),
    url: "https://fb.me/e/3J74O1mHC",
    info: "second event info",
    pic: "resources_images/Oct152020.jpg",
  },
  {
    id: 3,
    title: "Internship Panel",
    start: new Date(2020, 9, 20, 19, 0, 0),
    end: new Date(2020, 9, 20, 20, 0, 0),
    url: "https://fb.me/e/5FD1eXHKo", //placeholder
    info: "third event info",
    pic: "resources_images/Oct202020.jpg",
  },
  //haven't updated the events below
  {
    id: 4,
    title: "Test Event 4",
    start: new Date(2020, 9, 1, 18, 0, 0),
    end: new Date(2020, 9, 1, 18, 20, 0),
    url: "http://facebook.com", //placeholder
    info: "fourth event info",
    pic:
      "https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/15196011_1167971753282681_4498467004737646061_o.jpg?_nc_cat=110&_nc_sid=ca434c&_nc_ohc=yDkoSm8Do-8AX_P3UZr&_nc_ht=scontent-atl3-1.xx&oh=04b38411617f53767cf986084f289f84&oe=5F95C05A",
  },
  {
    id: 5,
    title: "Test Event 5",
    start: new Date(2020, 9, 3, 18, 0, 0),
    end: new Date(2020, 9, 3, 20, 0, 0),
    url: "http://facebook.com", //placeholder
    info: "fifth event info",
    pic:
      "https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/15196011_1167971753282681_4498467004737646061_o.jpg?_nc_cat=110&_nc_sid=ca434c&_nc_ohc=yDkoSm8Do-8AX_P3UZr&_nc_ht=scontent-atl3-1.xx&oh=04b38411617f53767cf986084f289f84&oe=5F95C05A",
  },
];

export default events;
