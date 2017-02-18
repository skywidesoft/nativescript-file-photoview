import {Observable} from 'data/observable';
import {FilePhotoview} from 'nativescript-file-photoview';

export class HelloWorldModel extends Observable {
  public message: string;
  private filePhotoview: FilePhotoview;

  constructor() {
    super();

    this.filePhotoview = new FilePhotoview();
    this.message = this.filePhotoview.message;
  }
}