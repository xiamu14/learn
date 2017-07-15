export const fetchMeetups = () =>
    fetch('http://127.0.0.1:3000/api/getAllMeetups')
    .then(res => res.json())
