export type FvNameAndMsgsType =  {
    id: number;
    first_name: string;
    last_name: string;
    first_msg: string;
    sec_msg: string;
}


export type ReasonType = {
    id: number;
    title : number;
    reason : number
}

export type IPbutton = {
    path: string;
    text: string;
}

export type IPQuestions = {
    id: number;
    question_text: string
    question_ans: boolean | null
}