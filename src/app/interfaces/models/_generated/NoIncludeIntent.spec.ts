import { TestBed, inject } from '@angular/core/testing';

import  {NoIncludeIntent} from './NoIncludeIntent';
import * as models from './models';


describe('Interface : NoIncludeIntent  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object",()=>{
     let vObj:NoIncludeIntent={agentId:"",intentId:"" };
    expect(vObj).toBeTruthy();
  });



  }
);

