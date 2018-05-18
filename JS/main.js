'use strict'

var projects = [];

function Projects(rawDataObject) {
    this.completeDate = rawDataObject.completeDate;
    this.projectName = rawDataObject.projectName;
    this.body = rawDataObject.body;
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

rawData.forEach(function(projectObject) {
    projects.push(new Projects(projectObject));
});

projects.forEach(function(displayProjectsToHTML){
    $('#previousProjects').append(displayProjectsToHTML.toHtml());
});

