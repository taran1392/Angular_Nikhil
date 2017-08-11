

import * as models from './models';


export interface InlineResponseDefault {
    "status": InlineResponseDefault.StatusEnum;
    "message"?: string;
    "code"?: string;
    "fields"?: Array<string>;
}

export namespace InlineResponseDefault {
    export enum StatusEnum {
        Success = <any> 'success',
        Fail = <any> 'fail'
    }
}
