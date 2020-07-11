$(window).on("load", function () {
  // Allow multiple tags for markdown code
  $("code").each(function () {
    var codefield = $(this);
    var code_class = $(this).attr("class");
    console.info("code class" + code_class);
    if (code_class.includes("_")) {
      var renderers = code_class.split("_");
      console.info(renderers);
      $.each(renderers, function (index, item) {
        console.info(codefield, item)
        codefield.addClass(item);
      });
    };
  });

  // Add Visualize Pythons
  $("code.visualize").each(function () {
    $(this).addClass("python visualize");
  });

  $("code.visualize ").each(function () {
    $('<button type="button" class="visualize" >Visualisieren</button>').insertAfter(this);
  });

  // Visualize python code fields

  $("button.visualize").click(function () {
    var code = encodeURIComponent($(this).prev().text());
    $("<iframe width = 100% height = 400px class=\"visualize\" src=\"https://visual.opencoding.de/iframe-embed.html#code=" + code + "&cumulative=false&py=3&curInstr=0\"></iframe> ").insertAfter($(this));
    $(this).hide();
  });


  //$(".quizstartbuttondiv button").click()

  //  if(!$(".generaltable.quizattemptsummary").length){
  //    $(".quizstartbuttondiv button").click()
  //  }

  if ($(".coderunner-test-results.good").length) {
    console.info("jumping to end");
    $("input.mod_quiz-next-nav").click();
  }

  $(".pagelayout-frontpage .coursebox").each(function () {
    if (!$(this).is(':contains("#Klasse")') && !$(this).is(':contains("#Digitales Lehrerzimmer")')) {
      console.info("Hide element");
      $(this).hide();
    }
  });

  /*
  Backlinks
  ---------
  */
  $(window).on("load", function () {
    $(".single-section").after($(".breadcrumb-item:nth-last-child(2) a").clone().text("Zurück zum Kurs").wrap('<div class="topic-backlink"></div>').parent());
    $(".activity-navigation").after($(".breadcrumb-item:nth-last-child(2) a").clone().text("Zurück zum Thema").wrap('<div class="topic-backlink"></div>').parent());
  });

  /*
  Completion
  -----------------
  */

  /*
  Fügt ein Attribut "abgeschlossen" zu Aktivitäten hinzu
  */
  $(window).on("load", function () {
    $(".activity").has("img[title*=Abgeschlossen]").each(function () {
      $(this).addClass("completed");
    });
  });

  // Add .completed to single section
  $(window).on("load", function () {
    $(".section-summary").each(function () {
      var bearbeitungsstand = $(this).find(".activity-count:contains('Mein Bearbeitungsstand')").text();
      bearbeitungsstand = bearbeitungsstand.split(":")[1];
      if (bearbeitungsstand != undefined) {
        var bearbeitet = bearbeitungsstand.split("/")[0].trim();
        var gesamt = bearbeitungsstand.split("/")[1].trim();
        console.info(bearbeitet, gesamt);
        if (bearbeitet == gesamt) {
          $(this).addClass("completed");
          console.info("completed");
        }
        else if (bearbeitet == 0) {
          $(this).addClass("not-started");
        }
        else if (bearbeitet > 0 && bearbeitet < gesamt) {
          $(this).addClass("incomplete");
        }
      }
    });
  });
});


/*
Quiz
-----------------
*/

// Auto submit quiz
$(window).on("load", function () {
  $("#page-mod-quiz-view .btn:contains('Test jetzt durchführen')").click();
  $("#page-mod-quiz-summary .btn:contains('Abgabe')").click(); // Automatisch abgeben

 $("#page-mod-quiz-summary .confirmation-buttons .btn:last-child").ready(function() {
    console.info("bind")
    $(this).mouseup(function () {
      console.info("do")
      $(".path-mod-quiz .btn:contains('Zurück zum Versuch')").click();
    });
  });


  
});
