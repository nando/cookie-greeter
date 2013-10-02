Cookie Greeter: personal greeting based on a cookie

Description:
    This JavaScript project is a simple function that attempts to say hello to
    the user based on the presence of a cookie. If the cookie does not exists
    the anonymous elements are shown.

    CookieGreeter.greet receives three arguments:
     - the cookie name: the name of the cookie with the name of the user
     - the anonymous element/s id/s: that will be shown if the cookie is not
       set. You can send a single id or an array of ids.
     - the personal element/s id/s: thet will be shown if the cookie has a
       value. All ocurrences of -the cookie name- will be replaced with the
       cookie value. You can use a single id or an array of ids.

    To show elements CookieGreeter sets the display of the target elements to
    "block". This could be changed setting CookieGreeter.display with another
    display value.

Example:

    CookieGreeter.display = 'inline'; // Use 'inline' instead of 'block'
    CookieGreeter.greet('greeter_username', 
      ['anonymous_greeter', 'create_your_account_now']
      'personal_greeter');

    This will look for the cookie 'greeter_username' and then:
    - if the cookie doesn't exist (or is blank) shows the 'anonymous_greeter'
      and 'create_your_account_now' elements and hides 'personal_greeter'.
    - if the cookie has a value hides 'anonymous_greeter' and
      'create_your_account_now' elements and show the 'personal_greeter'
      element after replacing the text '-greeter_username-' with that value.


More information:
    See test/unit/cookie_greeter_test.html for more examples.

Thanks:
    To Choan Galvez for making me happier using Jshoulda while writing this
    code. 
    
Author:
    Fernando García Samblas
