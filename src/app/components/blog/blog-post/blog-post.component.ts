import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const articleId = this.route.snapshot.paramMap.get('id');

    if (articleId === '1') {
      this.title = 'How ToeflAi Can Help You';
      this.markdownContent = '/assets/articles/article1.md';
    } else if (articleId === '2') {
      this.title = 'Top TOEFL Preparation Tips';
      this.markdownContent = '/assets/articles/article2.md';
    }
  }
}
