import { TestBed, inject } from '@angular/core/testing';

import  {Body4} from './Body4';
import * as models from './models';


/*
   "id": string;
    
    "values": Array<string>;
*/ 
describe('Interface : Body4  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object",()=>{
      let values:Array<string>=[]
    
      let vObj:Body4={id:"",values:values };
    expect(vObj).toBeTruthy();
  });



  }
);

