// This is where your write the test cases for the code.

tests({

  'eert': function() {
    eq("tree", solution("eert"));
  },
  'car': function() {
    eq("rac", solution("car"));
  },
  'pencil': function() {
    eq("licnep", solution("pencil"));
  },
  '8873024': function() {
    eq("4203788", solution("8873024"));
  },
  '##&][&##': function() {
    eq("##&][&##", solution("##&][&##"));
  }

});