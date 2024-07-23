import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public nombre: string = 'Iroronhero';
  public edad: number = 25;

  get capitalizedName(): string {
    return this.nombre.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.nombre}/ ${this.edad}`;
  }

  changeHero(): void {
    this.nombre = "Spiderman"

  }

  changeAge(): void {
    this.edad = 40

  }

}
