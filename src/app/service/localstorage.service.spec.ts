import { TestBed, inject } from '@angular/core/testing';

import { LocalstorageService } from './localstorage.service';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } 
       from '@angular/platform-browser-dynamic/testing';

describe('LocalstorageService', () => {
  beforeAll(()=>{
TestBed.resetTestEnvironment();

    TestBed
      .initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting())
    
    TestBed.configureTestingModule({

      providers:[LocalstorageService]
    });
  })
  beforeEach(() => {
      
    TestBed.configureTestingModule({
      providers: [LocalstorageService]
    });
  });

    let itemKey="Key";
    let data="Hello"
  it('should be created', inject([LocalstorageService], (service: LocalstorageService) => {
    expect(service).toBeTruthy();
  }));
  it("should return Item Saved Successfully",inject([LocalstorageService], (service: LocalstorageService) =>{

      service.saveItem(itemKey,data).then((d)=>{expect(d).toEqual("Item Saved Successfully")});
      

  })
);


  it("should return value "+data,inject([LocalstorageService], (service: LocalstorageService) =>{

      service.retrieveItem(itemKey).then((d)=>{expect(d).toEqual(data)});
      

  })
);



  it("should return message Item removed "+data,inject([LocalstorageService], (service: LocalstorageService) =>{

      service.removeItem(itemKey).then((d)=>{expect(d).toEqual("Item removed")});
      

  })
);
});
