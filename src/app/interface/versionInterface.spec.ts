import { TestBed, inject } from '@angular/core/testing';

import { Version } from './versionInterface';

describe('Version Interface Test', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
     
    });
  });
  it("should create Version object",()=>{
    let vObj:Version={version:"1.0",buildid:"1.1.0"};
    expect(vObj).toBeTruthy();
  });

let vObj:Version={version:"2.0",buildid:"1.2.0"};

  it("should return the value of version ="+vObj.version,()=>{

    expect(vObj.version).toEqual("2.0");
  });


  it("should return the value of buildid ="+vObj.buildid,()=>{

      expect(vObj.buildid).toEqual("1.2.0");
  });

  }
);

  