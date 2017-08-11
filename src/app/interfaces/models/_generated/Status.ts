

import * as models from './models';


export interface Status {
    "status"?: Status.StatusEnum;
    "subsystems"?: Array<models.InlineResponse200Subsystems>;
}

export namespace Status {
    export enum StatusEnum {
        Up = <any> 'up',
        Down = <any> 'down'
    }
}
