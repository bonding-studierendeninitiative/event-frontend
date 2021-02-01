import { TestBed } from '@angular/core/testing';

import { EventFormatterService } from './event-formatter.service';

describe('EventFormatterService', () => {
  let service: EventFormatterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventFormatterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
