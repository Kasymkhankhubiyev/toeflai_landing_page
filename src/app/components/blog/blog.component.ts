import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  articles: Array<{
    id: string;
    title: string;
    excerpt: string;
    image: string;
  }> = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  private loadArticles(): void {
    this.http.get<{ id: string; title: string; excerpt: string; image: string }[]>('/assets/articles/articles.json').subscribe({
      next: (data) => (this.articles = data),
      error: (err) => console.error('Failed to load articles:', err),
    });
  }
}
