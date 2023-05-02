import { Component } from '@angular/core';
import { appService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  export class AppComponent {

    //ASP.NET Core application would be run on http://localhost:61377/, which needs to be set as `apiHost`
    public apiHost="http://localhost:61377/";
  
    //Url of the GetDetails action in ValuesController of the ASP.NET Core application
    public authorizationUrl= "api/boldbiembed/getdetails";
  
    //Url of the GetDashboards action in ValuesController of the ASP.NET Core application
    public getDashboardsUrl= "api/boldbiembed/getdashboards";

    public getEmbedConfigUrl= "api/boldbiembed/getdata";

    public configValue: any;
      
    public dashboards: any;
  
    public baseUrl: any;
  
    public dashboardServerApiUrl!: string;
    
    constructor(private _app: appService) {
    }

  ngOnInit() {

  }
}

