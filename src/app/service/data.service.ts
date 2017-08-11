import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class DataService {

  public versionPathRoot = '/';
  public versionPathModel = '/model/';
  public systemStatus = new BehaviorSubject( {'status': 'loading', 'subsystems': []} );

  public activeTenant = new BehaviorSubject( {} );
  public activeAgent = new BehaviorSubject( null ); //id, name


  public userNotifications = []; //{type, text, title, timeout}

  // used on the logout, if lets say agent data has been changed and someone want to logout, we can warn them
  public activeFormChanged = false;

  public breadcrumbs = new BehaviorSubject( [] ); // fields: name, route

  public sortName = 'id';
  public sortDir = 'descending';

  constructor() { }

  tenantIsSelected(){
    return this.activeTenant.value['id']!=null ? true : false;
  }

  addNotification(text, type='success', timeout = 0, title= ""){
    // @todo-abe timeout not implemented yet
    this.userNotifications.push({
      id: Date.now(),
      type: type,
      text: text,
      title: title,
      timeout: timeout
    })
  }

  removeNotification(notification){
    this.userNotifications.splice( this.userNotifications.indexOf(notification), 1);
  }

  /**
   * Resets the breadcrumb
   * If hasDefaultValue adds the active tenant as the first node
   */
  clearBreadcrumb( hasDefaultValue = true){

    let breadcrumb = [];
    if(hasDefaultValue)
      breadcrumb.push({
        'name': this.activeTenant.value['name'],
        'route': null
      })
    this.breadcrumbs.next(breadcrumb);
  }

  /**
   *
   * @param obj:
   *    name,
   *    route
   */
  addBreadcrumb( obj ){
    let breadcrumb = this.breadcrumbs.value;
    breadcrumb.push( obj );
    this.breadcrumbs.next(breadcrumb);
  }

}
