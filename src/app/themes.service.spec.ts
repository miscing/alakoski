import { TestBed } from '@angular/core/testing';

import { ThemesService } from './themes.service';

describe('ThemesService', () => {
  let service: ThemesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

	// Should be rewritten to use theme stored in cookie once that has been implemented
	// it('#getTheme should return default value', () => {
	// 	service.getTheme().subscribe( {
	// 		next(theme){
	// 			expect(theme).toBe('light-theme');
	// 		}
	// 	});
	// });

});
