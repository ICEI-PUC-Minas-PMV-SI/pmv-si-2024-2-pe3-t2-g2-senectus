/* eslint-disable @typescript-eslint/no-unused-vars */

type Replace<T, R> = Omit<T, keyof R> & R
