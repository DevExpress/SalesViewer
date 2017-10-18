import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSectorsComponent } from './sectors.component';

describe('SectorsComponent', () => {
    let component: DashboardSectorsComponent;
    let fixture: ComponentFixture<DashboardSectorsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DashboardSectorsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardSectorsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
