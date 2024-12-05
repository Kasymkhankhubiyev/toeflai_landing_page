import { Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { BlogPostComponent } from './components/blog/blog-post/blog-post.component';
import { HomeComponent } from './components/landing/home/home.component';
import { BlogWelcomePageComponent } from './components/blog/blog-welcome-page/blog-welcome-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, 
    { path: 'home', component: HomeComponent },
    {
        path: 'home/blog',
        component: BlogComponent,
        children: [
            { path: '', component: BlogWelcomePageComponent },
            { path: ':id', component: BlogPostComponent },
        ],
    },
];
