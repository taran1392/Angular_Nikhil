

import * as models from './models';


export interface Version {
    "version"?: string;
    "buildid"?: string;
    "apiEndpoints"?: Array<models.InlineResponse2001ApiEndpoints>;
}

