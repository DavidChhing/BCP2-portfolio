'use strict'

var projects = [];

function Projects(rawProjectDataObject) {
    this.completeDate = rawProjectDataObject.completeDate;
    this.projectName = rawProjectDataObject.projectName;
    this.body = rawProjectDataObject.body;
}

Projects.prototype.toHtml = function() {
    var template = $('#project-template').html();
    var compile = Handlebars.compile(template);
    var templateInfo = {
        "completeDate": this.completeDate,
        "projectName": this.projectName,
        "body": this.body
    };
    var $createNewProject = compile(templateInfo)
    return $createNewProject;
};

rawProjectData.forEach(function(projectObject) {
    projects.push(new Projects(projectObject));
});

projects.forEach(function(displayProjectsToHTML){
    $('#previousProjects').append(displayProjectsToHTML.toHtml());
});

// function renderMenu() {
//     var projectList = document.getElementById('project-list');
//     for (var i = 0; i < projects.length; i++) {
//       projectList.innerHTML += `<h2><a href="#" id="${projects[i].projectName}">${projects[i].projectName}</a></h2>`;
//     }
//   }

// menuItems.forEach(function(menuObject) {
//     projects.push(new Projects(menuObject));
// });

// projects.forEach(function(displayProjectsToHTML){
//     $('#nav-list').append(displayProjectsToHTML.toHtml());
// });

// const renderProjectList = () => {
//     var navigationList = $('project-list').data('key');
//     let counter = navigationList => navigationList++;
//     navigationList.innerHTML += '<a href="#" id="${projects[i].projectName}"></a>'
// }

// var projectView = {};

// $(document).ready(function() {
//     $('#projects').children().hide();;
//     projectView.handleClicks();
//     renderProjectList();
//   });



