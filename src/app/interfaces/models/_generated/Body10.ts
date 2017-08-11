

import * as models from './models';


export interface Body10 {
    
    "id": string;
    
    "name": string;
    
    "description"?: string;
    
    "reference"?: string;
    
    "attributes": Array<models.InlineResponse2004Attributes>;
    
    "featureIds": Array<string>;
}

