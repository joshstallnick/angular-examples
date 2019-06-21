import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetDashboardComponent } from './character-sheet-dashboard.component';
import {CharacterSheetService} from '../../services/character-sheet.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('CharacterSheetDashboardComponent', () => {
  let component: CharacterSheetDashboardComponent;
  let fixture: ComponentFixture<CharacterSheetDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSheetDashboardComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: [ CharacterSheetService ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(CharacterSheetDashboardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});