

import * as models from './models';


export interface AgentListResult {
    
    "total": number;
    
    "amount": number;
    
    "start": number;
    
    "sortby": string;
    
    "order": string;
    "agents": Array<models.InlineResponse2005Agents>;
}

