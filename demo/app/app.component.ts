import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs/Rx';
import * as nshttp from 'http';
import * as fs from 'file-system';
import * as enums from 'ui/enums';

import { FilePhotoview } from 'nativescript-file-photoview';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit { 

    imageUrl: string;

    filePhotoView = new FilePhotoview();

    ngOnInit() {

        this.imageUrl = 'https://controller1.skywidesoft.com/images/sample1.jpg';

    }

    viewPhoto() {
        console.log('View Photo');
        console.log(`imageUrl: ${this.imageUrl}`);

        // Download image and save file to application cache
        Observable.from(nshttp.getImage(this.imageUrl)).subscribe(
            image => {

                let folder = fs.knownFolders.temp();

                let fileName = new Date().getTime() + '.jpg';

                let path = fs.path.join(folder.path, fileName);

                image.saveToFile(path, enums.ImageFormat.jpg);
                console.log(`File: ${path} saved successfully`);

                this.filePhotoView.show(path);

            }
        );
    }

}
