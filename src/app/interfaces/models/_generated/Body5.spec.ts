import { TestBed, inject } from '@angular/core/testing';

import  {Body5} from './Body5';
import * as models from './models';


/*
   "id": string;
    
    "values": Array<string>;
*/ 
describe('Interface : Body5  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object",()=>{
      let values:Array<string>=[]
    
      let vObj:Body5={id:"",values:values };
    expect(vObj).toBeTruthy();
  });



  }
);

