// const now = new Date();

// Date Object documentation:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date

export const events = [
  {
    id: 1,
    title: "Test Event 1",
    start: new Date(2020, 9, 13, 19, 30, 0), // 8 = SEPTEMBER, months start from 0 (January)
    end: new Date(2020, 9, 13, 20, 30, 0),
    url: "https://www.facebook.com/events/336856614058713/", //I have a placeholder here for now, until we have actual fb event pages
    info: "Click to learn more about how to land an internship!",
    pic: "resources_images/Oct132020.jpg",
  },
  {
    id: 2,
    title: "Test Event 2",
    start: new Date(2020, 9, 15, 18, 0, 0), // 7 = AUGUST, months start from 0 (January)
    end: new Date(2020, 9, 15, 20, 0, 0),

    url: "https://www.facebook.com/events/796825201106990/", //placeholder
    info: "Click to learn more about Microsoft!",
    pic: "resources_images/Oct152020.jpg",
  },
  {
    id: 3,
    title: "Test Event 3",
    start: new Date(2020, 9, 20, 18, 0, 0), // 11 = NOVEMBER, months start from 0 (January)
    end: new Date(2020, 9, 20, 20, 0, 0),
    url: "https://www.facebook.com/events/1213889215657466/", //placeholder
    info: "Click to learn more about undergraduates' internship experiences!",
    pic: "resources_images/Oct202020.jpg",
  },
  {
    id: 4,
    title: "Test Event 4",
    start: new Date(2020, 9, 28, 18, 0, 0), // 9 = OCTOBER, months start from 0 (January)
    end: new Date(2020, 9, 28, 18, 20, 0),
    url: "", //placeholder
    info: "",
    pic: "resources_images/Oct282020.png",
  },
  {
    id: 5,
    title: "Test Event 5",
    start: new Date(2020, 9, 3, 18, 0, 0), // 9 = OCTOBER, months start from 0 (January)
    end: new Date(2020, 9, 3, 20, 0, 0),
    url: "http://facebook.com", //placeholder
    info: "fifth event info",
    pic:
      "https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/15196011_1167971753282681_4498467004737646061_o.jpg?_nc_cat=110&_nc_sid=ca434c&_nc_ohc=yDkoSm8Do-8AX_P3UZr&_nc_ht=scontent-atl3-1.xx&oh=04b38411617f53767cf986084f289f84&oe=5F95C05A",
  },
];

// export default [
//   {
//     id: 1,
//     title: "Test Event 1",
//     start: new Date(2020, 8, 1, 19, 30, 0), // 8 = SEPTEMBER, months start from 0 (January)
//     end: new Date(2020, 8, 1, 20, 30, 0),
//     url: "http://facebook.com", //I have a placeholder here for now, until we have actual fb event pages
//   },
//   {
//     id: 2,
//     title: "Test Event 2",
//     start: new Date(2020, 7, 10, 18, 0, 0), // 7 = AUGUST, months start from 0 (January)
//     end: new Date(2020, 7, 10, 20, 0, 0),
//     url: "http://facebook.com", //placeholder
//   },
// ];

export default events;
