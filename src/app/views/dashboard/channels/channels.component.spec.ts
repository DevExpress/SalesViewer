import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChannelsComponent } from './channels.component';

describe('ChannelsComponent', () => {
    let component: DashboardChannelsComponent;
    let fixture: ComponentFixture<DashboardChannelsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DashboardChannelsComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardChannelsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
