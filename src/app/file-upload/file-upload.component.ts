import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
declare var toastr:any;

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
fileInput:FormControl;


  constructor() { 

          this.fileInput=new FormControl();
console.log(toastr);

  }

  ngOnInit() {
  }

  upload(){

    console.log(this.fileInput);


    var fInput=document.getElementById("fileUpload");
  
    var reader = new FileReader();
    reader.readAsBinaryString(fInput["files"][0]);
    reader.onload = (evt)=> {
        //document.getElementById("fileContents").innerHTML = evt.target.result;
         
          this.uploadFileToServer(fInput["files"][0]);
        
    
      }
    console.log(fInput["files"][0]);
  }


  uploadFileToServer(file){

var xhr=new XMLHttpRequest();


    xhr.addEventListener('progress', function(e) {
      var done = e["position"] || e.loaded, total = e["totalSize"] || e.total;
      console.log('xhr progress: ' + (Math.floor(done/total*1000)/10) + '%');
        toastr.info('Upload progress: ' + (Math.floor(done/total*1000)/10) + '%')
    }, false);
  if ( xhr.upload ) {
      xhr.upload.onprogress = function(e) {
        var done = e["position"] || e.loaded, total = e["totalSize"] || e.total;
        toastr.info('xhr.upload progress: ' + done + ' / ' + total + ' = ' + (Math.floor(done/total*1000)/10) + '%');
      };
  }
  xhr.onreadystatechange = function(e) {
      if ( 4 == this.readyState ) {
          console.log(['xhr upload complete', e]);
          toastr.success("File uploaded successfully");
      }
  };

var url="http://localhost:8000/upload"
  xhr.open('post', "/upload", true);
  var formData = new FormData();
  formData.append("thefile", file);
//  xhr.setRequestHeader("Content-Type","multipart/form-data");
  xhr.send(formData);

  }

}
