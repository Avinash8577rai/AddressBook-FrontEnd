import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouteConfigLoadEnd, Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  imports: [FormsModule, HttpClientModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  
http=inject(HttpClient);
router=inject(Router)

userData:any={
  "fullname": "",
    "address": "",
    "city": "",
    "state": "",
    "zipCode": "",
    "phoneNumber": ""
}

saveUserData(){
  this.http.post("http://localhost:8080/api/contacts/dto" ,this.userData).subscribe((result:any) => {
    alert("User updated successfully!");
    console.log(result);
    this.router.navigate(['/records'])
  
});
}

}
