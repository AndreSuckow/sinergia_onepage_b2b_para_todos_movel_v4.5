const ScormOBJ = {
    scormAPIDebug: true,
    isConnected: false,
    hasScore: true,
  
    data: {
      location: 0,
      score: 0,
      status: "incomplete",
    },
  
    init: function () {
      lms.debug.isActive = this.scormAPIDebug;
      this.isConnected = lms.SCORM.init();
  
      if (this.isConnected) {
        console.log("<<< Conectado ao LMS. >>>");
        lms.SCORM.set("cmi.core.lesson_status", "incomplete");
  
        if (this.hasScore) {
          lms.SCORM.set("cmi.core.score.min", "0");
          lms.SCORM.set("cmi.core.score.max", "100");
        }
  
        lms.SCORM.save();
      } else {
        console.log("<<< Conexão LOCAL. >>>");
      }
    },
  
    // SETTERS
    setLocation: function (loc) {
      if (this.isConnected) lms.SCORM.save();
    },
  
    setScore: function (score) {
      if (this.isConnected) {
        lms.SCORM.set("cmi.core.score.raw", score.toString());
        lms.SCORM.save();
      }
    },
  
    setStatus: function (status) {
      if (this.isConnected) {
        lms.SCORM.set("cmi.core.lesson_status", status);
        lms.SCORM.save();
      }
    },
  
    // when = 1: quit and close the window
    callQuit: function (when) {
      if (this.isConnected) {
        if (when == 0) {
          lms.SCORM.quit();
        } else {
          lms.SCORM.quit();
  
          // close window
          var ua = window.navigator.userAgent;
          var msie = ua.indexOf("MSIE");
  
          if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
            window.open("", "_self", "");
            window.close();
          } else {
            var tab0 = window.open(window.location, "_self");
            var tab1 = window.open(window.location, "_top");
            var tab2 = window.open("", "_self");
            tab0.close();
            tab1.close();
            tab2.close();
          }
        }
      }
    },
  
    // GETTERS
    getCurrentInfo: function () {
      if (this.isConnected) {
        console.log("*******************************");
  
        if (this.hasScore) {
          console.log("Min score >>> ", lms.SCORM.get("cmi.core.score.min"));
          console.log("Max score >>> ", lms.SCORM.get("cmi.core.score.max"));
          console.log("Score >>> ", lms.SCORM.get("cmi.core.score.raw"));
        }
  
        console.log("Status >>> ", lms.SCORM.get("cmi.core.lesson_status"));
        console.log("*******************************");
      } else {
        console.log("Conexão LOCAL [SEM INFO].");
      }
    },
  };
  
  $(window).on('scroll', function() {
    var scrollPercentage = ($(window).scrollTop() / ($(document).height() - $(window).height())) * 100;
    // console.log('Porcentagem de rolagem:', scrollPercentage.toFixed(2) + '%');
    
    if (scrollPercentage >= 90) {
      if (lms.SCORM.get("cmi.core.lesson_status") != "completed") {
        ScormOBJ.setScore(100);
        ScormOBJ.setStatus("completed");
        ScormOBJ.getCurrentInfo();
      }
    }
  });
  