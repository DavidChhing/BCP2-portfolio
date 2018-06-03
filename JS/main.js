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
        "projectName": this.projectName,
        "completeDate": this.completeDate,
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




