import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfermaCodiceABarreComponent } from './conferma-codice-a-barre.component';

describe('ConfermaCodiceABarreComponent', () => {
  let component: ConfermaCodiceABarreComponent;
  let fixture: ComponentFixture<ConfermaCodiceABarreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfermaCodiceABarreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfermaCodiceABarreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should open the modal', () => {
    component.openModal();
    expect(component.isModalVisible).toBeTrue();
  });

  it('should close the modal', () => {
    component.isModalVisible = true;
    component.closeModal();
    expect(component.isModalVisible).toBeFalse();
  });
});
