// <!-- Include the library. -->
GitHubCalendar(".calendar", "nirajj87");
// or enable responsive functionality
GitHubCalendar(".calendar", "nirajj87", {
    responsive: true
});
$(document).ready(function() {
    $("#contactForm").submit(function(e) {
        e.preventDefault(); // Form submit hone se roken
        
        $(".error").text(""); // Pehle error messages clear karein
        $("#responseMsg").text("").removeClass("success error");

        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var subject = $("#subject").val().trim();
        var message = $("#message").val().trim();
        var isValid = true;

        if (name === "") {
            $("#nameError").text("Name is required").css("color", "red");
            isValid = false;
        }
        if (email === "") {
            $("#emailError").text("Email is required").css("color", "red");
            isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            $("#emailError").text("Invalid email format").css("color", "red");
            isValid = false;
        }
        if (subject === "") {
            $("#subjectError").text("Subject is required").css("color", "red");
            isValid = false;
        }
        if (message === "") {
            $("#messageError").text("Message is required").css("color", "red");
            isValid = false;
        }

        if (!isValid) return; // Agar validation fail ho gaya to submit mat karo

        $("#submitBtn").text("Sending...").prop("disabled", true);

        $.ajax({
            type: "POST",
            url: "/send_mail.php",
            data: { name, email, subject, message },
            success: function(response) {
                $("#submitBtn").text("Send Message").prop("disabled", false);

                if (response === "success") {
                    $("#responseMsg").text("Message sent successfully!").css("color", "green");
                    $("#contactForm")[0].reset();
                } else {
                    $("#responseMsg").text("Failed to send message. Try again.").css("color", "red");
                }
            },
            error: function() {
                $("#submitBtn").text("Send Message").prop("disabled", false);
                $("#responseMsg").text("Server error! Please try again.").css("color", "red");
            }
        });
    });
});





































$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }
    });

    // slide-up script
    $(".scroll-up-btn").click(function() {
        $("html").animate({
            scrollTop: 0
        });
        // removing smooth scroll on slide-up button click
        $("html").css("scrollBehavior", "auto");
    });

    $(".navbar .menu li a").click(function() {
        // applying again smooth scroll on menu items click
        $("html").css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $(".menu-btn").click(function() {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Back-End Developer", "Dreamer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    var typed = new Typed(".typing-2", {
        strings: ["Back-End Developer", "Dreamer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    // owl carousel script
    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
                nav: false,
            },
        },
    });
});