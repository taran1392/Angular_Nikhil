import { TestBed, inject } from '@angular/core/testing';

import  {Status} from './Status';
import * as models from './models';


describe('Interface : Status  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object",()=>{
     let vObj:Status={status:Status.StatusEnum.Down,subsystems:[]};
    expect(vObj).toBeTruthy();
  });



  }
);

