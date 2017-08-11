

import * as models from './models';


export interface Utterance {
    
    "id": string;
    
    "tokenizedString": Array<string>;
    
    "entities": Array<models.InlineResponse2008Entities>;
}

