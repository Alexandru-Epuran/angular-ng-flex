import { Component, OnInit } from "@angular/core";
import { User } from "../api/model/user";
import { DefaultService } from "../api";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-users",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./users.component.html",
    styleUrl: "./users.component.scss",
})
export class UsersComponent implements OnInit {
    users: User[] = [];

    constructor(private defaultService: DefaultService) {}

    ngOnInit() {
        this.defaultService.usersGet().subscribe(data => {
            this.users = data; // This will be your mock data
            console.log("@@@  data@@@", data);
        });
    }
}
