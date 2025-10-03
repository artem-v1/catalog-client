import { Component, EventEmitter, Output } from '@angular/core';
import { CityInterface } from '../../../interfaces/city/city.interface';
import { debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';
import { CityService } from '../../../services/city/city.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss'
})
export class SearchFormComponent {

  cityInput: string = '';
  cities: CityInterface[] = [];
  private searchTerms = new Subject<string>();

  @Output() citySelected = new EventEmitter<CityInterface>();

  constructor(private cityService: CityService) {}

  ngOnInit() {
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.cityService.searchCities(term))
    ).subscribe(cities => this.cities = cities);
  }

  onCityChange(value: string) {
    this.searchTerms.next(value);
  }

  selectCity(city: CityInterface) {
    this.cityInput = city.displayName;
    this.cities = [];
    this.citySelected.emit(city); // передаем выбранный город наружу
  }

  
}
