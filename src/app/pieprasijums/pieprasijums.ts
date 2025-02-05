import { Params } from "../paramEnums/params";
import { Status } from "../paramEnums/status";
import { Tehnika } from "../tehnika/tehnika";

export class Pieprasijums {
    constructor(
        public tehnika: Tehnika,
        public datums: Date,
        public pamatojums: string,
        public parametri: Params,
        public status: Status,
        public id?: number
    ) {}
}
