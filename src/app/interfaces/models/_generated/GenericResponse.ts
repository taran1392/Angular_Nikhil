

import * as models from './models';


export interface GenericResponse {
    "status": GenericResponse.StatusEnum;
    "message"?: string;
    "code"?: string;
    "fields"?: Array<string>;
}

export namespace GenericResponse {
    export enum StatusEnum {
        Success = <any> 'success',
        Fail = <any> 'fail'
    }
}
