

import * as models from './models';


export interface Intent {
    
    "id": string;
    
    "name"?: string;
    
    "description"?: string;
    
    "attributes": Array<models.InlineResponse2004Attributes>;
    
    "utteranceIds"?: Array<string>;
}

