import { TestBed, inject } from '@angular/core/testing';

import  {Feature} from './Feature';
import * as models from './models';


/*
"id": string;
    
   
    "id": string; 
    "values": Array<string>;*/

describe('Interface : Feature  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object",()=>{
      let values:Array<string>=[]
    
      let vObj:Feature={id:"",values:values};
    expect(vObj).toBeTruthy();
  });



  }
);

