import { Observable, of } from 'rxjs';
import { ICurrentWeather } from '../interfaces';
import { IWeatherService } from './weather.service';

export const fakeWeather: ICurrentWeather = {
  city: 'Brazilia',
  country: 'BR',
  date: new Date(),
  image: '',
  temperature: 280.32,
  description: 'light intensity drizzle',
}

export class WeatherServiceFake implements IWeatherService {
  public getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return of(fakeWeather);
  }

}
