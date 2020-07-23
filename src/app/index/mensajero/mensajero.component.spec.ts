import { TestBed, inject } from '@angular/core/testing';

import { MensajeroComponent } from './mensajero.component';

describe('a mensajero component', () => {
	let component: MensajeroComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				MensajeroComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([MensajeroComponent], (MensajeroComponent) => {
		component = MensajeroComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});