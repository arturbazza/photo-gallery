import { Component, OnInit } from '@angular/core';

import { PhotoService } from '../services/photo.service';
import { ViewDidEnter } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
  
export class Tab2Page implements OnInit, ViewDidEnter {

  constructor(public photoService: PhotoService) { }

  ionViewDidEnter(): void {
    console.info("Navegou para a tab 2")
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

}

