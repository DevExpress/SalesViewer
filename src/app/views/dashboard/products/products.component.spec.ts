import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProductsComponent } from './products.component';

describe('ProductsComponent', () => {
    let component: DashboardProductsComponent;
    let fixture: ComponentFixture<DashboardProductsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DashboardProductsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardProductsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
