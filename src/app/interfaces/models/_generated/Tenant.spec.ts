import { TestBed, inject } from '@angular/core/testing';

import  {Tenant} from './Tenant';
import * as models from './models';


describe('Interface : Tenant  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object",()=>{
     let vObj:Tenant={id:"",name:""};
    expect(vObj).toBeTruthy();
  });



  }
);

