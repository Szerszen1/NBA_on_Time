import { AngularFireAuth } from 'angularfire2/auth';
import { Component, Input } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NBA on Time';
  section: number;

  setSection(nr: number) {
    this.section = nr;
  }

  constructor(db: AngularFirestore) {

  }
}
