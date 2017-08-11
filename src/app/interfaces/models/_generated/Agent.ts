

import * as models from './models';


export interface Agent {
    
    "id": string;
    
    "name": string;
    
    "description"?: string;
    
    "attributes": Array<models.InlineResponse2004Attributes>;
    
    "noIncludeIntents": Array<models.InlineResponse2005NoIncludeIntents>;
    
    "intentIds": Array<string>;
    
    "entityIds": Array<string>;
}

