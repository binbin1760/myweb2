export interface routes {
    path: string,
    name: string,
    meta?: Record<string, unknown>,
    children?: Array<Record<string, unknown>>
}

