import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}

  username:string = 'sardorstudent0618';
}
