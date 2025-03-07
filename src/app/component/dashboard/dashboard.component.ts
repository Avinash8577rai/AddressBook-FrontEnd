import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { popResultSelector } from 'rxjs/internal/util/args';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink,HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  userData:any[]=[];
  http=inject(HttpClient);
  constructor(private router :Router){
    this.getusers();
  }
  getusers(){
    this.http.get("http://localhost:8080/api/contacts/dto").subscribe((result:any)=>{
      this.userData=result;

    })
  }
  deleteUser(userId:number){
    this.http.delete("http://localhost:8080/api/contacts/dto/"+userId).subscribe((result:any)=>{
      alert("Item is Deleted!")
      this.getusers();
    })
  }
  editUser(user: any) {
    this.router.navigate(['/add-records'], { state: { userData: user } });
  }
  

}
