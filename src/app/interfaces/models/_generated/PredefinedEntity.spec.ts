import { TestBed, inject } from '@angular/core/testing';

import  {PredefinedEntity} from './PredefinedEntity';
import * as models from './models';


describe('Interface :PredefinedEntity  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object",()=>{
     let vObj:PredefinedEntity={id:"id",attributes:[],featureIds:[]};
    expect(vObj).toBeTruthy();
  });



  }
);

