import { TestBed, inject } from '@angular/core/testing';

import  {TenantListResult} from './TenantListResult';
import * as models from './models';


describe('Interface : TenantListResult  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object",()=>{
     let vObj:TenantListResult={tenants:[]};
    expect(vObj).toBeTruthy();
  });



  }
);

