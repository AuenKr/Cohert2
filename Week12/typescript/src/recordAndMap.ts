type UserRecord = {
    id: string;
    name: string;
}

type UsersOldWay = {
    [key: string]: UserRecord;
}

type Users = Record<string, UserRecord>

const users: Users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

// Map -- language independent. eg: cpp, js, java
// create (key, value pair)

const userMap = new Map<string, UserRecord>();
userMap.set('abc123', { id: 'abc123', name: 'John Doe' })
userMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' })

const user1 = userMap.get('abc123')
console.log(user1);