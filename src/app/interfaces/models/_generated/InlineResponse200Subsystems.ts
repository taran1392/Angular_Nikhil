

import * as models from './models';

export interface InlineResponse200Subsystems {
    "system"?: string;
    "status"?: InlineResponse200Subsystems.StatusEnum;
    "details"?: string;
}

export namespace InlineResponse200Subsystems {
    export enum StatusEnum {
        Up = <any> 'up',
        Down = <any> 'down'
    }
}
