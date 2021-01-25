const events = [
    {
        id: '1',
        calendarId: '0',
        title: 'TOAST UI Calendar Study',
        category: 'time',
        dueDateClass: '',
        // start: today.toISOString(),
        // end: getDate('hours', today, 3, '+').toISOString()
    },
    {
        id: '2',
        calendarId: '0',
        title: 'Practice',
        category: 'milestone',
        dueDateClass: '',
        // start: getDate('date', today, 1, '+').toISOString(),
        // end: getDate('date', today, 1, '+').toISOString(),
        isReadOnly: true
    },
    {
        id: '3',
        calendarId: '0',
        title: 'FE Workshop',
        category: 'allday',
        dueDateClass: '',
        // start: getDate('date', today, 2, '-').toISOString(),
        // end: getDate('date', today, 1, '-').toISOString(),
        isReadOnly: true
    },
    {
        id: '4',
        calendarId: '0',
        title: 'Report',
        category: 'time',
        dueDateClass: '',
        // start: today.toISOString(),
        // end: getDate('hours', today, 1, '+').toISOString()
    }
]

module.exports = events;
