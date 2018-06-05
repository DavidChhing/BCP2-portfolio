'use strict';

(function(module) {
  const skillsController = {};

  // TODONE: Define a function that hides all main section elements, and then reveals just the #about section:
  Projects.fetchAll(skillsController.initSkillsPage);
  $('.navContent').hide();
//   $('#skills-section').show();
  module.skillsController = skillsController;
})(window);