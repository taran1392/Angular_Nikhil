import { TestBed, inject } from '@angular/core/testing';

import  {Attribute} from './Attribute';
import * as models from './models';


describe('Interface : Attribute  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object",()=>{
     let vObj:Attribute={name:"",value:""};
    expect(vObj).toBeTruthy();
  });



  }
);

