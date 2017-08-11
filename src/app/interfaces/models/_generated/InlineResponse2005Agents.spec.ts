import { TestBed, inject } from '@angular/core/testing';

import  {InlineResponse2005Agents} from './InlineResponse2005Agents';
import * as models from './models';

/*
 "id": string;
    
    "name": string;
    
    "description"?: string;
    
    "attributes": Array<models.InlineResponse2004Attributes>;
    
    "noIncludeIntents": Array<models.InlineResponse2005NoIncludeIntents>;
    
    "intentIds": Array<string>;
    
    "entityIds": Array<string>;*/

describe('Interface : InlineResponse2005Agents  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object",()=>{
      let attributes:Array<models.InlineResponse2004Attributes>=[];
      let noIncludeIntents: Array<models.InlineResponse2005NoIncludeIntents>=[];
    let entityIds:Array<string>=[]
      let obj:InlineResponse2005Agents={id: "",name:"",description:"",attributes:attributes,noIncludeIntents:noIncludeIntents,entityIds:entityIds,intentIds:[]}
    expect(obj).toBeTruthy();
  });


  
  it("verify data Type of properties",()=>{
      let attributes:Array<models.InlineResponse2004Attributes>=[];
      let noIncludeIntents: Array<models.InlineResponse2005NoIncludeIntents>=[];
    let entityIds:Array<string>=[]
      let obj:InlineResponse2005Agents={id: "1",name:"name",description:"desc",attributes:attributes,noIncludeIntents:noIncludeIntents,entityIds:entityIds,intentIds:[]}
    
      expect(obj.attributes).toBe(attributes);
      expect(obj.id).toBe("1");
      expect(obj.description).toBe("desc");
  });


  }
);

