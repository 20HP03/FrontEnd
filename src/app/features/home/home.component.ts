import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    RouterLink,
    NgFor
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  topSellers = [
    {
      id: 3,
      name: 'The Return of the King',
      pictureUrl: "/images/products/The Return of the King.jpg"
    },
    {
      id: 6,
      name: 'Harry Potter and the Prisoner of Azkaban',
      pictureUrl: "/images/products/Harry Potter and the Prisoner of Azkaban.jpg"
    },
    {
      id: 10,
      name: 'Harry Potter and the Deathly Hallows',
      pictureUrl: "/images/products/Harry Potter and the Deathly Hallows.jpg",
    }
  ];
  
}
