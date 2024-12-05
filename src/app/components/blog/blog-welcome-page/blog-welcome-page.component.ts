import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-welcome-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-welcome-page.component.html',
  styleUrl: './blog-welcome-page.component.scss'
})
export class BlogWelcomePageComponent implements OnInit {
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
