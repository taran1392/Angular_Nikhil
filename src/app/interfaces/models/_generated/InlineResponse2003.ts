

import * as models from './models';


export interface InlineResponse2003 {
    
    "timestamp": string;
    
    "action": InlineResponse2003.ActionEnum;
    
    "target": string;
}

export namespace InlineResponse2003 {
    export enum ActionEnum {
        Deleted = <any> 'deleted',
        Created = <any> 'created',
        Modified = <any> 'modified'
    }
}
