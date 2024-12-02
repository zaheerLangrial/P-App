import { ReasonType } from "./types";

export const SetArrayToStringArray = (value: ReasonType[]): string[] => {
    const newArray: string[] = [];
    value.map((reason) => newArray.push(String(reason.reason)));
    return newArray;
}
