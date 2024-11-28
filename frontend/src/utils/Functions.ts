import { ReasonType } from "./types";

export const SetArrayToStringArray = (value: ReasonType[]) =>  {
    console.log('values ===>', value)
    let newArray: any[] = []
    value.map((reason) => newArray.push(reason.reason))
    return newArray as string[]
}