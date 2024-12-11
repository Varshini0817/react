import { Component } from "@angular/core";

@Component({
    selector: 'app-navbar',
    standalone: true,
    template : `<h2>Navbar component</h2>
                <p> Second line (with backticks)<p>`,
    styles: `h2{
                color:red;
                background: pink
                }
            p{
            color: blue;
            }`,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})  

export class AppNavbar{

}