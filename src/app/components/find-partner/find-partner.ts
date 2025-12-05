import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Person {
  id: number;
  name: string;
  sex: string;
  age: number;
  contact: string;
  description: string;
  country: string;
  city: string;
}

@Component({
  selector: 'app-find-partner',
  imports: [CommonModule, FormsModule],
  templateUrl: './find-partner.html',
  styleUrl: './find-partner.css',
})
export class FindPartner {
  selectedCountry: string = '';
  selectedCity: string = '';

  countries: string[] = ['Россия', 'Украина', 'Беларусь', 'Казахстан', 'Германия', 'США'];

  citiesByCountry: { [key: string]: string[] } = {
    Россия: ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань'],
    Украина: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Львов'],
    Беларусь: ['Минск', 'Гомель', 'Могилев', 'Витебск', 'Гродно'],
    Казахстан: ['Алматы', 'Нур-Султан', 'Шымкент', 'Караганда', 'Актобе'],
    Германия: ['Берлин', 'Гамбург', 'Мюнхен', 'Кёльн', 'Франкфурт'],
    США: ['Нью-Йорк', 'Лос-Анджелес', 'Чикаго', 'Хьюстон', 'Майами'],
  };

  people: Person[] = [
    {
      id: 1,
      name: 'Иван Петров',
      sex: 'М',
      age: 32,
      contact: '+7 900 123-45-67',
      description: 'Ищу партнера для взаимной миопрессуры, опыт 6 месяцев',
      country: 'Россия',
      city: 'Москва',
    },
    {
      id: 2,
      name: 'Мария Сидорова',
      sex: 'Ж',
      age: 28,
      contact: 'maria@email.com',
      description: 'Новичок, хочу обмениваться опытом',
      country: 'Россия',
      city: 'Москва',
    },
    {
      id: 3,
      name: 'Александр Козлов',
      sex: 'М',
      age: 45,
      contact: '+7 911 234-56-78',
      description: 'Практикую триггерную терапию 2 года, готов помочь',
      country: 'Россия',
      city: 'Санкт-Петербург',
    },
    {
      id: 4,
      name: 'Елена Новикова',
      sex: 'Ж',
      age: 35,
      contact: 'elena.nov@email.com',
      description: 'Ищу партнера для регулярных встреч',
      country: 'Россия',
      city: 'Санкт-Петербург',
    },
    {
      id: 5,
      name: 'Дмитрий Смирнов',
      sex: 'М',
      age: 29,
      contact: '+7 920 345-67-89',
      description: 'Есть опыт работы с триггерными точками',
      country: 'Россия',
      city: 'Новосибирск',
    },
    {
      id: 6,
      name: 'Ольга Иванова',
      sex: 'Ж',
      age: 41,
      contact: 'olga.i@email.com',
      description: 'Готова помогать и учиться',
      country: 'Украина',
      city: 'Киев',
    },
    {
      id: 7,
      name: 'Сергей Попов',
      sex: 'М',
      age: 38,
      contact: '+380 50 123-45-67',
      description: 'Опыт 1 год, ищу единомышленников',
      country: 'Украина',
      city: 'Киев',
    },
    {
      id: 8,
      name: 'Анна Васильева',
      sex: 'Ж',
      age: 26,
      contact: 'anna.v@email.com',
      description: 'Начинающий практик',
      country: 'Беларусь',
      city: 'Минск',
    },
  ];

  get filteredCities(): string[] {
    return this.selectedCountry ? this.citiesByCountry[this.selectedCountry] || [] : [];
  }

  get filteredPeople(): Person[] {
    if (!this.selectedCity) {
      return [];
    }
    return this.people.filter(
      (person) => person.country === this.selectedCountry && person.city === this.selectedCity
    );
  }

  onCountryChange(): void {
    this.selectedCity = '';
  }
}
