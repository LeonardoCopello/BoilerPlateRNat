export interface IFlags {
    nsfw: boolean,
    religious: boolean,
    political: boolean,
    racist: boolean,
    sexist: boolean,
    explicit: boolean
}

export interface IJokesData {
    error: string,
    category: string,
    type: string,
    setup: string,
    delivery: string,
    flags: IFlags,
    safe: boolean,
    id: number,
    lang: string
}
