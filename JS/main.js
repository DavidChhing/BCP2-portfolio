'use strict'

function Projects(rawProjectDataObject) {
    this.completeDate = rawProjectDataObject.completeDate;
    this.projectName = rawProjectDataObject.projectName;
    this.body = rawProjectDataObject.body;
}

Projects.all = [];

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
// const projectLoad = {};

Projects.loadAll = function(rawProjectData) {
    rawProjectData.forEach(function(projectObject) {
        Projects.all.push(new Projects(projectObject));
    });
}

const pageView = {};
pageView.initIndexPage = function() {
    Projects.all.forEach(function(displayProjectsToHTML){
        $('#previousProjects').append(displayProjectsToHTML.toHtml());
   });
}
    
Projects.fetchAll = function() {
    if(localStorage.rawData){
        var parsed = JSON.parse(localStorage.rawData);
        Projects.loadAll(parsed);
        pageView.initIndexPage();
    } else {
        $.ajax({
            dataType: 'json',
            url: '/JS/projectData.json',
    success: function(data) {
    localStorage.setItem("rawData", JSON.stringify(data));
    Projects.loadAll(data);
    pageView.initIndexPage();
    }   
    });
};
}

    





