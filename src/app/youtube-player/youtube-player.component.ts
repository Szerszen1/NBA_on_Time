import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {
  title ="Recent on channel";
  someItem="<h1>Sth</h1>"
  videoList = [
    {
    name: "Item 1",
    slug: "item-1",
    embed: `7NUTAFTljyA`,
    },
    {
    name: "item 2",
    slug: "item-2",
    embed: `7NUTAFTljyA`,
    },
    {
      name: "item 3",
      slug:"item-3",
      embed: null,
    }
  ]
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getEmbedUrl(item){
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/watch?v='+ item.embed)
  }
}


/*  player: YT.Player;
  channelId: 'UCWJ2lWNubArHWmf3FIHbfcQ';
  id: string = 'k6RMYTgWk-8';

  ngOnInit() {
  }

	savePlayer (player) {
    this.player = player;
    console.log('player instance', player);
	}
  onStateChange(event) {
    console.log('player state', event.data);
  }
*/

