import { Component } from '@angular/core';
import { Database, object, ref } from '@angular/fire/database';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  valor: any=[];
  temperature: number = 0;

  constructor(private database:Database) {}

    ngOnInit() {
      const route = ref(this.database,);
      object(route).subscribe(attributes => {
        this.valor = attributes.snapshot.val();
        console.log(this.valor);
      });
    }

  getMercuryColor() {
    if (this.temperature <= 25) {
      return 'green';
    } else if (this.temperature <= 50) {
      return 'yellow';
    } else if (this.temperature <= 75) {
      return 'orange';
    } else {
      return 'red';
    }
  }
}
