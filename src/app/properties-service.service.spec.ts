import { TestBed, inject } from '@angular/core/testing';

import { PropertiesServiceService } from './properties-service.service';

describe('PropertiesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertiesServiceService]
    });
  });

  it('should be created', inject([PropertiesServiceService], (service: PropertiesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
