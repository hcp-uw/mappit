export type Auth = {email: string, password: string};

export const parseEmail = (data: unknown): string => {
    if (typeof data !== 'string')
        throw new Error(`data is not a string: ${typeof data}`)

    return data;
};

export const parsePassword = (data: unknown): string => {
    if (typeof data !== 'string')
      throw new Error(`data is not a string: ${typeof data}`)
    
    return data;
};