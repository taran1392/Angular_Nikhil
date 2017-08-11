

import * as models from './models';


export interface Entity {
    
    "id": string;
    
    "name": string;
    
    "description"?: string;
    
    "reference"?: string;
    
    "attributes": Array<models.InlineResponse2004Attributes>;
    
    "featureIds": Array<string>;
}

