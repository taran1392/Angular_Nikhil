import { Injectable } from '@angular/core';


@Injectable()
export class LocalstorageService {

  constructor() { }

  saveItem(key:string, obj:any){

    return new Promise((resolve,reject )=>{
      try{
        localStorage.setItem(key,obj);
        resolve("Item Saved Successfully");
      }catch(e){
          reject("Failed to save item"+ JSON.stringify(e));


      }
    })
  }

  retrieveItem(key:string){

      return new Promise((resolve,reject )=>{
      try{
        var v=localStorage.getItem(key);
        if(v)
        resolve(v);
        else
          reject("Cannot find value with key "+ key);
      }catch(e){

          reject("Failed to retrieve item" +JSON.stringify(e));


      }
    });

  }

  removeItem(key:string){


      return new Promise((resolve,reject )=>{
      try{
        localStorage.removeItem(key);
        resolve("Item removed");
            }catch(e){
          reject("Failed to remove item" +JSON.stringify(e));


      }
    });
  }
  

}
