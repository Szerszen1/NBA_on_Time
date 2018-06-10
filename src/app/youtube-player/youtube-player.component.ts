import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {

  constructor() { }
  id: string = 'k6RMYTgWk-8';
  id1: string = 'k6RMYTgWk-8';
  id2: string = 'EKOJb0wv6yI';
  id3: string = 'Crq9XLTqxOw';
  id4: string = 'Fl0ohG57PSY';
  id5: string = '6cyLhaqKR-c';
  id6: string = 'mU22lWPu37k';
  id7: string = 'XdXfQ-ubWy0';
  id8: string = 'vdupncE8gXM';
  id9: string = 'AUPeHXijgH8';
  id11: string = 'Jb8RX8b3b30';
  id12: string = 'C27hkQ5ARaY';
  id14:string = 'qvHKVQtalas';
  id15: string = 'exjMt3v81tA';

  player: YT.Player;


  ngOnInit() {
  }

	savePlayer (player) {
    this.player = player;
    console.log('player instance', player);
	}
  onStateChange(event) {
    console.log('player state', event.data);
  }

}
