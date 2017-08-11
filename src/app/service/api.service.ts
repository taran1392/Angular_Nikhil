import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
//import {configValues} from "../globals/config";
import "rxjs/add/operator/map";

import {HttpService} from "./http.service";
import {DataService} from "./data.service";

import {Status, Version, Tenant, Agent, Feature, Entity, PredefinedEntity, Intent, Utterance, JournalEntry} from "../interfaces/models/_generated/models";

let configValues:any={};

@Injectable()
export class ApiService {
  // local string to shorten our code. composed out of base path and version path
  private apiPathRoot;
  private apiPathModel;

  constructor(private _http: HttpService, private _dataService: DataService) {
    this.apiPathRoot = configValues.host + this._dataService.versionPathRoot;
    this.apiPathModel = configValues.host + this._dataService.versionPathModel;
  }

  /**
   * Internal function to shorten our code. Calls the URL based on HTTP METHOD TYPE and returns the Observable
   * @param TYPE
   * @param URL
   * @param DATA
   * @param headers
   * @returns Observable
   * @private
   */
  _apiCall(TYPE, URL, DATA, headers = null) {

    return Observable.create(observer => {
        this._http.call(TYPE, URL, DATA, headers).subscribe(response => {
          // observer.complete();
          // console.log('response',response)

          if (response.status == 200) {
            observer.next(response);
            observer.complete();
          }
          else {
            observer.complete();
            alert(response.status);
            alert('Please handle the following error Response.Status' + response.status);
          }
        });
      },
      error => {
        // @todo-abe test the error case.
        //@todo-abe if error, look and see if the system is up..add a BehaviourSubject..and change the badges to red bullets
        console.log('Error');
        alert('Error');
      });

  }

  /************************************* SYSTEM CALLS *************************************/

  /**
   * Retrieves the system status
   */
  getStatus() {
    return this._apiCall("GET", this.apiPathRoot + configValues.apiPaths.status, null).map(response => response.json() as Status);
  }

  /**
   * Retrieves the system version number and version path
   */
  getVersion() {
    return this._apiCall("GET", this.apiPathRoot + configValues.apiPaths.version, null).map(response => response.json() as Version);
  }

  /************************************* TENANTS CALLS *************************************/

  /**
   * Retrives a tenants list
   * @param TYPE: GET
   */
  tenants(TYPE) {
    return this._apiCall(TYPE, this.apiPathRoot + configValues.apiPaths.tenants, null).map(response => response.json().tenants as Tenant);
  }

  /************************************* AGENTS CALLS *************************************/

  /**
   * Retrieves the agents list
   * @param TYPE:
   *  - GET X-TenantId*, amount, start, sortby, order(ascending/descending)
   */
  agents(TYPE, params) {
    let headers = [];
    if (this._dataService.activeTenant.value['id'] != null) {
      headers.push({'name': "X-TenantId", 'value': this._dataService.activeTenant.value['id']});
    }

    return this._apiCall(TYPE, this.apiPathModel + configValues.apiPaths.agents + params, null, headers).map(response => response.json());
  }

  /**
   * CRUD calls for an agent
   * @param TYPE:
   *  - GET X-TenantId*, agentId*
   *  - POST X-TenantId*, body*
   *  - PUT X-TenantId*, body*, agentId*,
   *  - DELETE X-TenantId*, agentId*
   * @param DATA
   */
  agent(TYPE, DATA = null) {
    let headers = [];
    if (this._dataService.activeTenant.value['id'] != null) {
      headers.push({'name': "X-TenantId", 'value': this._dataService.activeTenant.value['id']});
    }
    let path = this.apiPathModel + configValues.apiPaths.agents;

    // if isset ID,update the api path
    if (DATA.id != null)
      path = path + '/' + DATA.id;
    return this._apiCall(TYPE, path, DATA, headers).map(response => response.json() as Agent);
  }

  /************************************* AGENT ENTITIES CALLS *************************************/

  /**
   * CRUD calls for an agent entities
   * @param TYPE:
   *  - GET X-TenantId*, entityId*
   *  - POST X-TenantId*, agentId*, body*
   *  - PUT X-TenantId*, entityId*, body*
   *  - DELETE X-TenantId*, entityId*
   * @param DATA
   */
  entity(TYPE, DATA = null, agentId = null) {
    let headers = [];
    if (this._dataService.activeTenant.value['id'] != null) {
      headers.push({'name': "X-TenantId", 'value': this._dataService.activeTenant.value['id']});
    }
    let path = this.apiPathModel + configValues.apiPaths.entities;
    // if isset ID,update the api path
    if (DATA.id != null)
      path = path + '/' + DATA.id;

    if(TYPE == 'POST')
      path = path + '?agentId=' + agentId;
    return this._apiCall(TYPE, path, DATA).map(response => response.json() as Entity);
  }

  /************************************* AGENT INTENT CALLS *************************************/

  /**
   * CRUD calls for an intent
   * @param TYPE:
   *  - GET X-TenantId*, intentId*
   *  - POST X-TenantId*, parent*, body*
   *  - PUT X-TenantId*, intentId*, body*
   *  - DELETE X-TenantId*, intentId*
   * @param DATA
   */
  intent(TYPE, DATA = null, agentId = null) {
    let headers = [];
    if (this._dataService.activeTenant.value['id'] != null) {
      headers.push({'name': "X-TenantId", 'value': this._dataService.activeTenant.value['id']});
    }
    let path = this.apiPathModel + configValues.apiPaths.intents;

    // if isset ID,update the api path
    if (DATA.id != null)
      path = path + '/' + DATA.id;

    if(TYPE == 'POST')
      path = path + '?agentId=' + agentId;
    return this._apiCall(TYPE, path, DATA).map(response => response.json() as Intent);
  }

  /************************************* INTENT UTTERANCES CALLS *************************************/

  /**
   * Retrieves the utterances list
   * @param TYPE:
   *  - GET X-TenantId*, query*, amount, start
   */
  utterances(TYPE) {
    let headers = [];
    if (this._dataService.activeTenant.value['id'] != null) {
      headers.push({'name': "X-TenantId", 'value': this._dataService.activeTenant.value['id']});
    }
    // @todo-abe move the params as a parameter, one level up, before calling the function
    let params = '?amount=10&start=1&sortby=id&order=ascending';
    return this._apiCall(TYPE, this.apiPathModel + configValues.apiPaths.utterances + params, null, headers).map(response => response.json() as Utterance);
  }

  /**
   * CRUD calls for an utterance
   * @param TYPE:
   *  - GET X-TenantId*, utteranceId*
   *  - POST X-TenantId*, intentId*, body*
   *  - PUT X-TenantId*, utteranceId*, body*
   *  - DELETE X-TenantId*, utteranceId*
   * @param DATA
   */
  utterance(TYPE, DATA = null) {
    let headers = [];
    if (this._dataService.activeTenant.value['id'] != null) {
      headers.push({'name': "X-TenantId", 'value': this._dataService.activeTenant.value['id']});
    }
    let path = this.apiPathModel + configValues.apiPaths.utterances;
    // if isset ID,update the api path
    if (DATA.id != null)
      path = path + '/' + DATA.id;
    return this._apiCall(TYPE, path, DATA).map(response => response.json() as Utterance);
  }

  /************************************* FEATURES CALLS *************************************/

  /**
   * CRUD calls for a feature
   * @param TYPE:
   *  - GET X-TenantId*, featureId*
   *  - POST X-TenantId*, parent*, body*
   *  - PUT X-TenantId*, featureId*, body*
   *  - DELETE X-TenantId*, featureId*
   * @param DATA
   */
  feature(TYPE, DATA = null) {
    let headers = [];
    if (this._dataService.activeTenant.value['id'] != null) {
      headers.push({'name': "X-TenantId", 'value': this._dataService.activeTenant.value['id']});
    }
    let path = this.apiPathModel + configValues.apiPaths.features;
    // if isset ID,update the api path
    if (DATA.id != null)
      path = path + '/' + DATA.id;
    return this._apiCall(TYPE, path, DATA).map(response => response.json() as Feature);
  }

  /************************************* GLOBAL PREDEFINED ENTITIES CALLS *************************************/

  /**
   * Retrieves the global entities list
   * @param TYPE:
   *  - GET X-TenantId*, amount, start, sortby, order(ascending/descending)
   */
  globalEntities(TYPE) {
    let headers = [];
    if (this._dataService.activeTenant.value['id'] != null) {
      headers.push({'name': "X-TenantId", 'value': this._dataService.activeTenant.value['id']});
    }
    // @todo-abe move the params as a parameter, one level up, before calling the function
    let params = '?amount=10&start=1&sortby=id&order=ascending';
    return this._apiCall(TYPE, this.apiPathModel + configValues.apiPaths.globalEntitites + params, null, headers).map(response => response.json() as PredefinedEntity);
  }

  /**
   * CRUD calls for a global predefined entity
   * @param TYPE:
   *  - GET X-TenantId*, predefinedEntityId*
   *  - POST X-TenantId*, body*
   *  - PUT X-TenantId*, predefinedEntityId*, body*
   *  - DELETE X-TenantId*, predefinedEntityId*
   * @param DATA
   */
  globalEntity(TYPE, DATA = null) {
    let headers = [];
    if (this._dataService.activeTenant.value['id'] != null) {
      headers.push({'name': "X-TenantId", 'value': this._dataService.activeTenant.value['id']});
    }
    let path = this.apiPathModel + configValues.apiPaths.globalEntitites;
    // if isset ID,update the api path
    if (DATA.id != null)
      path = path + '/' + DATA.id;
    return this._apiCall(TYPE, path, DATA).map(response => response.json() as PredefinedEntity);
  }

  /************************************* Journal *************************************/

  /**
   * Retrieves a portion of the journal
   * @param TYPE:
   *  - GET X-TenantId*
   */
  journal() {
    let headers = [];
    if (this._dataService.activeTenant.value['id'] != null) {
      headers.push({'name': "X-TenantId", 'value': this._dataService.activeTenant.value['id']});
    }
    return this._apiCall("GET", this.apiPathModel + configValues.apiPaths.utterances, null, headers).map(response => response.json() as JournalEntry);
  }

  // @todo-abe add /model/intents/{intentId}/entities
}
