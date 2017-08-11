import { TestBed, inject } from '@angular/core/testing';

import  {InlineResponseDefault} from './InlineResponseDefault';
import * as models from './models';


/*
"status": InlineResponseDefault.StatusEnum;
    "message"?: string;
    "code"?: string;
    "fields"?: Array<string>;
*/

describe('Interface : InlineResponseDefault  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object only with Status field",()=>{
      let attributes:Array<models.InlineResponse2004Attributes>=[];
      let featureIds:Array<string>=[]
    let noIncludeIntents: Array<models.InlineResponse2005NoIncludeIntents>=[];
    
      let vObj:InlineResponseDefault={
          status:InlineResponseDefault.StatusEnum.Fail,
          
      };
    expect(vObj).toBeTruthy();
  });


  it("should create  object with optional fields",()=>{
      let fields:Array<string>=[]
    
      let vObj:InlineResponseDefault={
          status:InlineResponseDefault.StatusEnum.Fail,
          message:"",
            code:"",
            fields:fields       
      };
    expect(vObj).toBeTruthy();
  });

  }
);

