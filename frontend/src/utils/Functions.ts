import { ReasonType } from "./types";

export const SetArrayToStringArray = (value: ReasonType[]) =>  {
    let newArray: any[] = []
    value.map((reason) => newArray.push(reason.reason))
    return newArray as string[]
}