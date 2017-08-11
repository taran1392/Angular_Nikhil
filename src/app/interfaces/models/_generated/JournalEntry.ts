

import * as models from './models';


export interface JournalEntry {
    
    "timestamp": string;
    
    "action": JournalEntry.ActionEnum;
    
    "target": string;
}

export namespace JournalEntry {
    export enum ActionEnum {
        Deleted = <any> 'deleted',
        Created = <any> 'created',
        Modified = <any> 'modified'
    }
}
