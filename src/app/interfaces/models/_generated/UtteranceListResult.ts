

import * as models from './models';


export interface UtteranceListResult {
    
    "total": number;
    
    "amount": number;
    
    "start": number;
    "utterances": Array<models.InlineResponse2008Utterances>;
}

