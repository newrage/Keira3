import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { anything, instance, when } from 'ts-mockito';

import { PickpocketingLootTemplateComponent } from './pickpocketing-loot-template.component';
import { QueryOutputComponent } from '../../shared/query-output/query-output.component';
import { TopBarComponent } from '../../../main-window/top-bar/top-bar.component';
import { CommonTestModule } from '../../../../test-utils/common-test.module';
import { MysqlService } from '../../../../services/mysql.service';
import { MockedMysqlService } from '../../../../test-utils/mocks';
import { of } from 'rxjs';

describe('PickpocketingLootTemplateComponent', () => {
  let component: PickpocketingLootTemplateComponent;
  let fixture: ComponentFixture<PickpocketingLootTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PickpocketingLootTemplateComponent,
        QueryOutputComponent,
        TopBarComponent,
      ],
      imports: [
        CommonTestModule,
      ],
      providers: [
        { provide : MysqlService, useValue: instance(MockedMysqlService) },
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    when(MockedMysqlService.query(anything(), anything())).thenReturn(of());

    fixture = TestBed.createComponent(PickpocketingLootTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
