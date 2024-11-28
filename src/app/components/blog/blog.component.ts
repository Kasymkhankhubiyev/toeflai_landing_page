import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  articles = [
    { id: 1, title: 'How ToeflAi Can Help You' },
    { id: 2, title: 'Top TOEFL Preparation Tips' },
  ];
}
