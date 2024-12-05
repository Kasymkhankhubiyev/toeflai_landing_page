import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogWelcomePageComponent } from './blog-welcome-page.component';

describe('BlogWelcomePageComponent', () => {
  let component: BlogWelcomePageComponent;
  let fixture: ComponentFixture<BlogWelcomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogWelcomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogWelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
