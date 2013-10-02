
var CookieGreeter = {
  display: 'block',
  element: function(id) { return document.getElementById(id) },
  readCookie: function(name) {
    var all_cookies = document.cookie;
    var pos = all_cookies.indexOf(name + '=');
    if (pos != -1) {
      var start_at = pos + name.length + 1;
      var end_at = all_cookies.indexOf(";", start_at);
      if (end_at == -1) end_at = all_cookies.length;
      var value = all_cookies.substring(start_at, end_at);
      return decodeURIComponent(value);
    }
    else 
      return false;
  },
  setDisplays: function(array_of_ids, display_value) {
    var e;
    if (typeof(array_of_ids) == "string") array_of_ids = [ array_of_ids ];
    for (var i in array_of_ids) {
      e = CookieGreeter.element(array_of_ids[i]);
      if (e) e.style.display = display_value;
    };
  },
  showElements: function(array_of_ids) {
    CookieGreeter.setDisplays(array_of_ids, CookieGreeter.display);
  },
  hideElements: function(array_of_ids) {
    CookieGreeter.setDisplays(array_of_ids, 'none');
  },
  greet: function(name, anonymous_ids, personal_ids) {
    var value = CookieGreeter.readCookie(name);
    if (value) {
      CookieGreeter.hideElements(anonymous_ids);
      if (typeof(personal_ids) == "string") personal_ids = [ personal_ids ];
      for (var i in personal_ids) {
        e = CookieGreeter.element(personal_ids[i]);
        if (e) {
          var re = new RegExp('-' + name + '-', "g");
          e.innerHTML = e.innerHTML.replace(re, value);
          e.style.display = CookieGreeter.display;
        };
      };
    }
    else {
      CookieGreeter.hideElements(personal_ids);
      CookieGreeter.showElements(anonymous_ids);
    }
  }
};

