/**
 *  Script หลักๆในการแสดงผล หรือ ใช้งาน
 */
var alert = {
  success: function(txt) {
    $('#alert').html('');
    var html = ''
    + '<div class="alert alert-success alert-dismissible" role="alert">'
    + '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
    + '<span aria-hidden="true">&times;</span></button>'
    + '<strong>ยินดีด้วย!</strong> ' + txt + ' </div>';
    $('#alert').append(html);
  },
  error: function(txt) {
    $('#alert').html('');
    var html = ''
    + '<div class="alert alert-danger alert-dismissible" role="alert">'
    + '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
    + '<span aria-hidden="true">&times;</span></button>'
    + '<strong>ผิดพลาด!</strong> ' + txt + ' </div>';
    $('#alert').append(html);
  }
}

var loader = {
  open: function() {
    $('#loader').fadeIn('fast');
  },
  close: function() {
    $('#loader').fadeOut('slow');
  }
}
