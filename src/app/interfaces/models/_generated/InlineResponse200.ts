

import * as models from './models';


export interface InlineResponse200 {
    "status"?: InlineResponse200.StatusEnum;
    "subsystems"?: Array<models.InlineResponse200Subsystems>;
}

export namespace InlineResponse200 {
    export enum StatusEnum {
        Up = <any> 'up',
        Down = <any> 'down'
    }
}
