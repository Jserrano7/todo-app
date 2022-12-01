import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoRegistroComponent } from './todo-registro.component';

describe('TodoRegistroComponent', () => {
  let component: TodoRegistroComponent;
  let fixture: ComponentFixture<TodoRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
