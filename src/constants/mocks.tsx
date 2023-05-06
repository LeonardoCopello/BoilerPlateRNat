interface IPerson {
    id: string,
    name: string,
    age: number,
    birth: string
    matricula: string
}

export const persons: IPerson[] = [
    {
        id: '1',
        name: 'Leo',
        age: 45,
        birth: '30/09/77',
        matricula: 'OL4578'
    },
    {
        id: '2',
        name: 'John',
        age: 34,
        birth: '03/06/99',
        matricula: 'OL4578'
    },
    {
        id: '3',
        name: 'Maria',
        age: 20,
        birth: '23/06/78',
        matricula: 'OM1234'
    },
    {
        id: '4',
        name: 'Mike',
        age: 78,
        birth: '03/02/50',
        matricula: 'OP2222'
    },
]