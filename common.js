window.onload = function(){
    document.head.innerHTML += '<!-- Global site tag (gtag.js) - Google Analytics -->\
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-138223067-1"></script>\
    <script>\
      window.dataLayer = window.dataLayer || [];\
      function gtag(){dataLayer.push(arguments);}\
      gtag(\'js\', new Date());\
      gtag(\'config\', \'UA-138223067-1\');\
    </script>'
};