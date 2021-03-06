import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { instance } from 'ts-mockito';
import { ToastrService } from 'ngx-toastr';

import { QuestTemplateService } from './quest-template.service';
import { QueryService } from '@keira-shared/services/query.service';
import { MockedQueryService, MockedToastrService } from '@keira-testing/mocks';
import { QuestHandlerService } from '../quest-handler.service';

describe('QuestTemplateService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
    ],
    providers: [
      { provide: QueryService, useValue: instance(MockedQueryService) },
      { provide: ToastrService, useValue: instance(MockedToastrService) },
      QuestHandlerService,
      QuestTemplateService,
    ]
  }));

  it('should be created', () => {
    const service: QuestTemplateService = TestBed.get(QuestTemplateService);
    expect(service).toBeTruthy();
  });
});
