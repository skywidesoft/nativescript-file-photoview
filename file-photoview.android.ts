let frame = require('ui/frame');

export class FilePhotoview {

    public show(imageFilePath: string) {

        let activity = frame.topmost().android.activity;

        let intent = new android.content.Intent(activity, com.skywidesoft.filephotoview.FilePhotoViewActivity.class);

        intent.putExtra("imageFilePath", imageFilePath);

        activity.startActivity(intent);

    }

}