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
    {
      id: 1,
      title: 'How to Prepare for TOEFL',
      excerpt: 'A comprehensive guide to help you ace the TOEFL exam...',
      image: 'assets/toefl-guide.jpg'
    },
    {
      id: 2,
      title: 'Top 10 TOEFL Tips',
      excerpt: 'Boost your score with these 10 expert tips...',
      image: 'assets/toefl-tips.jpg'
    },
    ];

}
