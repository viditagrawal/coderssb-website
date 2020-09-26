// Date Object documentation: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date

export default [
  {
    id: 1,
    title: 'Test Event 1',
    start: new Date(2020, 8, 1, 19, 30, 0), // 8 = SEPTEMBER, months start from 0 (January)
    end: new Date(2020, 8, 1, 20, 30, 0),
    url: 'http://facebook.com', //I have a placeholder here for now, until we have actual fb event pages
  },
  {
    id: 2,
    title: 'Test Event 2',
    start: new Date(2020, 7, 10, 18, 0, 0), // 7 = AUGUST, months start from 0 (January)
    end: new Date(2020, 7, 10, 20, 0, 0),
    url: 'http://facebook.com', //placeholder
  },
]
