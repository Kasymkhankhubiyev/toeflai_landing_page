import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent implements OnInit {
  title = '';
  markdownContent = ''; // Raw markdown content

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const articleId = this.route.snapshot.paramMap.get('id');

    if (articleId) {
      // Fetch the markdown content
      this.http
        .get(`/assets/articles/article${articleId}.md`, { responseType: 'text' })
        .subscribe({
          next: (content: string) => {
            this.markdownContent = content; 
          },
          error: (err) => {
            console.error('Error loading content:', err);
          },
        });

      // Fetch the article metadata
      this.http
        .get<{ id: string; title: string }[]>('/assets/articles/articles.json')
        .subscribe({
          next: (data) => {
            const article = data.find((item) => item.id === articleId);
            if (article) {
              this.title = article.title;
            }
          },
          error: (err) => {
            console.error('Error loading article metadata:', err);
          },
        });
    } else {
      console.error('No article ID found in route.');
    }
  }
}
