import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonbagComponent } from './pokemonbag.component';

describe('PokemonbagComponent', () => {
  let component: PokemonbagComponent;
  let fixture: ComponentFixture<PokemonbagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonbagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonbagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
