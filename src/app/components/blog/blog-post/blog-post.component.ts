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
  markdownContent = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const articleId = this.route.snapshot.paramMap.get('id');

    // Fetch the markdown content
    this.http
      .get(`/assets/articles/article${articleId}.md`, { responseType: 'text' })
      .subscribe((content) => {
        this.markdownContent = content;
      });

    // Fetch the article metadata
    this.http
      .get<{ id: string; title: string }[]>('/assets/articles/articles.json')
      .subscribe((data) => {
        const article = data.find((item: { id: string }) => item.id === articleId);
        if (article) {
          this.title = article.title;
        }
      });
  }
}
