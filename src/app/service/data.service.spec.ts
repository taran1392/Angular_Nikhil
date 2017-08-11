import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService]
    });
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));


  
  it('Testing add/remove notification', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
    expect(service.userNotifications.length).toBe(0);
    let notification1={text:"test notification",type:"success",timeout:10,title:"Testing"};
    
    let notification2={text:"test notification-2",type:"success",timeout:20,title:"Testing-2"};
    service.addNotification("test notification","success",10,"Testing");
    
    service.addNotification("test notification-2","success",20,"Testing-2");
    expect(service.userNotifications.length).toBe(2);
    service.removeNotification(notification1);
    expect(service.userNotifications.length).toBe(1);
    service.removeNotification(notification2);
    expect(service.userNotifications.length).toBe(0);
    
    

  }));



  
  it('Testing TenantisSelected()', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
   expect(service.tenantIsSelected()).toBe(false); 
    

  }));



  
  it('Testing BreadCrumbs', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
   expect(service.breadcrumbs.value.length).toBe(0);
  
   service.addBreadcrumb({name:"any",route:null})
   
   service.addBreadcrumb({name:"any2",route:null})
   
   expect(service.breadcrumbs.value.length).toBe(2);

   service.clearBreadcrumb(false)
   expect(service.breadcrumbs.value.length).toBe(0);
 

  }));
});
