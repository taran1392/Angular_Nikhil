import { TestBed, inject } from '@angular/core/testing';

import  {PredefinedEntityListResult} from './PredefinedEntityListResult';
import * as models from './models';


describe('Interface :PredefinedEntityListResult  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object",()=>{
     let vObj:PredefinedEntityListResult={total:0,amount:0,order:"",sortby:"desc",start:1, predefinedEntities:[]};
    expect(vObj).toBeTruthy();
  });



  }
);

