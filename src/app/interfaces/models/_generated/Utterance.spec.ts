import { TestBed, inject } from '@angular/core/testing';

import  {Utterance} from './Utterance';
import * as models from './models';


describe('Interface:Utterance  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });
  it("should create  object",()=>{
      let entities:Array<models.InlineResponse2008Entities>=[];
    let vObj:Utterance={ id:"",tokenizedString:[],entities:entities};
    expect(vObj).toBeTruthy();
  });



  }
);

