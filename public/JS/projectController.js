'use strict';

(function(module) {
  const projectController = {};

  // TODONE: Define a function that hides all main section elements, and then reveals just the #about section:
  Projects.fetchAll(projectController.initProjectPage);
  $('.navContent').hide();
  $('#previousProjects').show();
  module.projectController = projectController;
})(window);