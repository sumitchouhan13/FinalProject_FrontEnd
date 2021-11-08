import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  buildings = [
    {
      name: 'Ruby Tower',
      src: 'https://img.icons8.com/external-photo3ideastudio-lineal-photo3ideastudio/80/000000/external-apartments-building-photo3ideastudio-lineal-photo3ideastudio.png',
      desc: 'Spacious 1 BHK flats with an area of 1000 sq. ft.',
    },
    {
      name: 'Topaz Tower',
      src: 'https://img.icons8.com/external-prettycons-lineal-color-prettycons/80/000000/external-apartments-urban-vol-2-prettycons-lineal-color-prettycons.png',
      desc: 'Spacious 2 BHK flats with an area of 1200 sq. ft.',
    },
    {
      name: 'Emerald Tower',
      src: 'https://img.icons8.com/external-prettycons-solid-prettycons/80/000000/external-apartments-urban-vol-2-prettycons-solid-prettycons.png',
      desc: 'Spacious 3 BHK flats with an area of 1800 sq. ft.',
    },
    {
      name: 'Sapphire Tower',
      src: 'https://img.icons8.com/external-photo3ideastudio-lineal-color-photo3ideastudio/80/000000/external-apartments-building-photo3ideastudio-lineal-color-photo3ideastudio.png',
      desc: 'Spacious Penthouse with an area of 2800 sq. ft.',
    },
  ];
}
