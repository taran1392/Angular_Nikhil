import { TestBed, inject } from '@angular/core/testing';

import  {UtteranceListResult} from './UtteranceListResult';


describe('Interface:UtteranceListResult  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object",()=>{
    let vObj:UtteranceListResult={ total:100,amount:50,start:1,utterances:[]};
    expect(vObj).toBeTruthy();
  });



  }
);

