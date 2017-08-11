

import * as models from './models';


export interface PredefinedEntityListResult {
    
    "total": number;
    
    "amount": number;
    
    "start": number;
    
    "sortby": string;
    
    "order": string;
    "predefinedEntities": Array<models.InlineResponse2004PredefinedEntities>;
}

