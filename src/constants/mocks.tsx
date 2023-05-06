interface IPerson {
    id: string,
    name: string,
    age: number,
    birth: string
}

export const persons: IPerson[] = [
    {
        id: '1',
        name: 'Leo',
        age: 45,
        birth: '30/09/77'
    },
    {
        id: '2',
        name: 'John',
        age: 34,
        birth: '03/06/99'
    },
    {
        id: '3',
        name: 'Maria',
        age: 20,
        birth: '23/06/78'
    },
    {
        id: '4',
        name: 'Mike',
        age: 78,
        birth: '03/02/50'
    },
]