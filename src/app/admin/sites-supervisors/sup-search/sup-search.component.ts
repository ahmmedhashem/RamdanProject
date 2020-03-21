import { Component, OnInit } from '@angular/core';
import { VolSearch } from 'src/app/crud-class/policy';
import { ApiService } from 'src/app/api-service/api.service';

@Component({
  selector: 'app-sup-search',
  templateUrl: './sup-search.component.html',
  styleUrls: ['./sup-search.component.scss']
})
export class SupSearchComponent implements OnInit {
  Result:  VolSearch[];
  SiteSupSearchResult : VolSearch = {Phone : null, Name : null, Gov : null, Day : null, Country : null, City : null, Place : null, Date : null};

  //aray of Cities
  Cities = [
    {id: 1, name: "Cities1"},
    {id: 2, name: "Cities2"},
    {id: 3, name: "Cities3"},
    {id: 4, name: "Cities4"},
    {id: 5, name: "Cities5"},
    {id: 6, name: "Cities6"},
    {id: 7, name: "Cities7"},
    {id: 8, name: "Cities8"},
    {id: 9, name: "Cities9"}

  ]

  ///test function
  showww(){
    console.log(this.SiteSupSearchResult);
  }

  //send Search data as object
  SendSearchDate(form){
    this.apiService.VolSearchRequest(form.value).subscribe((policy: VolSearch)=>{
      console.log("Policy created, ", policy);
    });
  }


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

}
