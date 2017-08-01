$("document").ready(function() {
    $(".navigation-icon").click(function() {
        $(".navigation-list").toggle(0, function() {
            if ($(".navigation-list").css("display") === "block") {
                $(".navigation-icon img").css("background-color", "#007cbd");
            }
            else {
               $(".navigation-icon img").css("background-color", "transparent"); 
            }
        });
    });
});