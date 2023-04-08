import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.scss'],
})
export class BottombarComponent implements OnInit {
  @ViewChild('audioOption') audioPlayerRef: ElementRef;
  constructor() {}

  public ngOnInit(): void {}

  public onAudioPlay(): void {
    this.audioPlayerRef.nativeElement.play();
  }
}
