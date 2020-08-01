const now = new Date()

export default [
  {
    id: 1,
    title: 'Test Event 1',
    start: new Date(2020, 7, 1, 19, 30, 0), // 7 = AUGUST, months start from 0 (January)
    end: new Date(2020, 7, 1, 20, 30, 0),
  },
  {
    id: 2,
    title: 'Test Event 2',
    start: new Date(2020, 7, 10, 18, 0, 0), // 7 = AUGUST, months start from 0 (January)
    end: new Date(2020, 7, 10, 20, 0, 0),
  },
]
