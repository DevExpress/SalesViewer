import { TestBed, inject } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { RoutesService } from './routes.service';

describe('RoutesService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [RoutesService],
            imports: [RouterTestingModule]
        });
    });

    it('should be created', inject([RoutesService], (service: RoutesService) => {
        expect(service).toBeTruthy();
    }));
});
