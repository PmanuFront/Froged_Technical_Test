export interface OptionsModel {
    name: string;
    value: number;
    status: StatusType;
}

type StatusType = "OK" | "KO"