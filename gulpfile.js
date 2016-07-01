var gulp = require('gulp');
var browserSync = require('browser-sync');

// สร้าง task ชื่อว่า "browser-sync" ขึ้นมา พร้อมกับระบุงานที่จะให้ task นี้ทำ
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

// เพิ่ม task "browser-sync" ให้ทำพร้อม default task
gulp.task('default', ['browser-sync'], function() {
 
    // เมื่อไฟล์ html หรือ css มีการเปลี่ยนแปลง ก็ให้รีเฟรช web browser
    gulp.watch(['*.html'], browserSync.reload);
    gulp.watch(['css/**/*.css'], browserSync.reload);
 
});