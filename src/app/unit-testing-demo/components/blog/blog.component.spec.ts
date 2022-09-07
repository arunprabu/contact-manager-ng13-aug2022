import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { BlogService } from '../../service/blog.service';

import { BlogComponent } from './blog.component';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;
  let blogService: BlogService;

  const mockPostList: any[] = [
    {
      id: 9,
      title: 'nesciunt iure omnis dolorem tempora et accusantium',
      body: 'consectetur animi nesciunt iure dolore\nenim quia ant voluptas autem voluptas'
    },
    {
      id: 10,
      title: 'optio molestias id quia eum',
      body: 'quo et expedita modi cum officia vel magni\ndus veritatis error'
    }
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogComponent ],
      imports: [HttpClientModule],
      // Setting up mock
      providers: [
        {
          provide: BlogService,
          useValue: {
            // mocking getPosts with mockPostList
            getPosts: () => of(mockPostList)
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    blogService = TestBed.inject(BlogService); // important because we dep inject this service in comp
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  /* Not Recommended */
  /* 
  it('has postList with 6 items', ((done)=> {
    component.ngOnInit();
    setTimeout( () =>{
      expect(component.postList.length).toEqual(6);
      done();
    }, 4000);
  }));
  */

  it('should have postList from service [MOCKING]', () => {
    expect(component.postList.length).toEqual(2);
    expect(component.postList).toEqual(mockPostList);
  });
});

/* 3 Disadvantages of API testing 
  1. Time Consuming 
  2. Availability of the REST API is a concern (api may be in dev, api may be down )
  3. No guarantee for the sample data to be present 

  Solution: Mocking API Calls 
*/ 

