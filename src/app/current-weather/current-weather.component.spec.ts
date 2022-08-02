import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrentWeatherComponent } from './current-weather.component';
import { WeatherService } from '../weather/weather.service';
import { injectSpy } from 'angular-unit-test-helper';

describe('CurrentWeatherComponent', () => {
  let fixture: ComponentFixture<CurrentWeatherComponent>;
  let component: CurrentWeatherComponent;
  let weatherServiceMock: jasmine.SpyObj<WeatherService>

  beforeEach(async () => {
    const weatherServiceSpy = jasmine.createSpyObj('WeatherService', ['getCurrentWeather'])
    await TestBed.configureTestingModule({
      declarations: [CurrentWeatherComponent],
      providers: [{
        provide: WeatherService, useClass: weatherServiceSpy
      }],
    })
      .compileComponents();
    weatherServiceMock = injectSpy(WeatherService);

    fixture = TestBed.createComponent(CurrentWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
