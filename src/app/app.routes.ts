import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogPostComponent } from './components/blog/blog-post/blog-post.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog/:id', component: BlogPostComponent },
];
