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





Date.daysBetween = function( date1, date2 ) {
    //Get 1 day in milliseconds
    var one_day=1000*60*60*24;
  
    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();
  
    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;
      
    // Convert back to days and return
    return Math.round(difference_ms/one_day); 
  }
  
  //Set the two dates
  var y2k  = new Date(2000, 0, 1); 
  var Jan1st2010 = new Date(y2k.getFullYear() + 10, y2k.getMonth(), y2k.getDate());
  var today= new Date();

  console.log( 'Days since ' 
           + Jan1st2010.toLocaleDateString() + ': ' 
           + Date.daysBetween(Jan1st2010, today));