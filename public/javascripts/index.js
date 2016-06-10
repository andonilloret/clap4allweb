$( document ).ready(function() {
  if (typeof bowser !== 'undefined' && bowser !== null){
    if( bowser.android ) paintStoreBadge("android");
    if( bowser.iphone || bowser.ipad ) paintStoreBadge("ios");
  }
});

function paintStoreBadge(os){
  $(".div-badge-container").append("<img id=\"storeBadge\"/>");
  switch(os){
    case 'android':
      $("#storeBadge").attr('src','https://play.google.com/intl/en_us/badges/images/generic/es_badge_web_generic.png');
      break;
    case 'ios':
      break;
  }
}
