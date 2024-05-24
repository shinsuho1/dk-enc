
const header = document.querySelector("header");
const menuicon = document.querySelector("#menuicon");
const pop_menu = document.querySelector(".pop_menu");

let bg_wrap = document.querySelectorAll(".bg-wrap img");


let header_gnb = document.querySelector("header .gnb");
window.addEventListener("DOMContentLoaded", () => {
    let span_aos = document.querySelectorAll("span[data-aos]"),
        aos_delay = document.querySelectorAll("[data-aos-delay]");
    if (window.innerWidth <= 767) {
        aos_delay.forEach(el => {
            el.removeAttribute("data-aos-delay");
        });
    };

    span_aos.forEach(el => {
        el.style.display = "block";
    });

    if (window.scrollY != 0) {
        header.classList.remove("white");
    } else {
        header.classList.add("white")
    }


    if (location.href.split('/')[(location.href.split('/').length - 2)] != "main") {
        let ww_nation = document.querySelectorAll(".wrap .title-wrap ul li a");
        if (ww_nation[0]) {
            ww_nation[ww_nation.length - 1].addEventListener("click", (e) => {
                e.preventDefault();
            });
        }
    }


    if (window.innerWidth <= 1024) {
        if (header_gnb.classList.contains("header-pc")) { header_gnb.classList.remove("header-pc"); }
        header_gnb.classList.add("header-mo");
        $("header .gnb>li>a").on("click", function (e) {
            e.preventDefault();
            $(this).toggleClass("active");
            $(this).siblings(".sub-menu").stop().slideToggle();
        });
    } else {
        if (header_gnb.classList.contains("header-mo")) { header_gnb.classList.remove("header-mo"); }
        header_gnb.classList.add("header-pc");
        $("header .gnb>li>a").off("click");
        if (header.classList.contains("hover")) header.classList.remove("hover");
        document.querySelectorAll("header .gnb>li").forEach(el => {
            el.addEventListener("mouseenter", () => {
                header.classList.add("hover");
                document.querySelector(".blur").classList.add("on");
            });

            el.addEventListener("mouseleave", () => {
                header.classList.remove("hover");
                document.querySelector(".blur").classList.remove("on");
            });
        });
        document.querySelector(".bg").addEventListener("mouseenter", () => {
            header.classList.add("hover");
            document.querySelector(".blur").classList.add("on");
        });
        document.querySelector(".bg").addEventListener("mouseleave", () => {
            header.classList.remove("hover");
            document.querySelector(".blur").classList.remove("on");
        });
    }
});

window.addEventListener("resize", () => {
    if (document.querySelector("header .gnb").classList.contains("active")) {
        return false
    }
    else if (window.scrollY != 0) {
        header.classList.remove("white");
    } else {
        header.classList.add("white");
    }

    if (window.innerWidth <= 1024) {
        if (header_gnb.classList.contains("header-pc")) { header_gnb.classList.remove("header-pc"); }
        header_gnb.classList.add("header-mo");
        $('header .gnb.header-mo>li>a').off('click').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass("active");
            $(this).siblings(".sub-menu").stop().slideToggle();
        });
    } else {
        $("header .inner .asides>ul.header-mo>li").off("click");
        if (header_gnb.classList.contains("header-mo")) { header_gnb.classList.remove("header-mo"); }
        $("header .gnb>li>a").off("click");
        header_gnb.classList.add("header-pc");
        document.querySelectorAll("header .gnb>li").forEach(el => {
            el.classList.remove("hover");
        });
        if (header.classList.contains("hover")) header.classList.remove("hover");
        document.querySelectorAll("header .gnb>li").forEach(el => {
            el.addEventListener("mouseenter", () => {
                header.classList.add("hover")
            });

            el.addEventListener("mouseleave", () => {
                header.classList.remove("hover")
            });
        });
    }
});

let lastScroll = 0;
window.addEventListener("scroll", () => {
    if (window.scrollY != 0) {
        header.classList.remove("white");
    } else {
        header.classList.add("white")
    }
    let scrollTop = window.scrollY;
    if (scrollTop > lastScroll) {
        header.classList.remove("active");
    } else {
        header.classList.add("active");
    }
    lastScroll = scrollTop;

    if (window.scrollY == 0) {
        document.querySelector(".scroll-top").classList.remove("view");
    } else {
        document.querySelector(".scroll-top").classList.add("view");
    }
    if (window.innerWidth <= 1024 && document.querySelector("header .inner .gnb.header-mo").classList.contains("active")) {
        document.querySelector("header .inner .gnb.header-mo").classList.add("active");
    }
});

menuicon.addEventListener("click", () => {
    if (menuicon.checked) {
        document.querySelector("header ul.header-mo").style.transition = ".5s";
        if (header.classList.contains("white")) { header.classList.remove("white") }
        header_gnb.classList.add("active");
        document.querySelector("body").classList.add("stop_scroll");
    } else {
        header_gnb.classList.remove("active");
        document.querySelector("body").classList.remove("stop_scroll");
        if (window.scrollY == 0 && location.href.split('/')[(location.href.split('/').length - 2)] == "main") { header.classList.add("white") }

    }
});


document.querySelector(".scroll-top").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});




// history
const history_line = document.querySelector(".history .line");

if (history_line) {
    window.addEventListener("DOMContentLoaded", () => {
        let max_height = document.querySelector(".history .line2").getBoundingClientRect().height - 20,
            history_element = document.querySelectorAll(".history .box .aos-init");
        history_element.forEach(el => {
            if (!el.classList.contains("aos-animate")) {
                return false;
            } else {
                if (el == history_element[history_element.length - 1]) {
                    history_line.style.height = max_height + 20 + "px";
                    return false;
                };
                history_line.style.height = el.offsetTop + 20 + "px";
            }
        });
    });
    window.addEventListener("scroll", () => {
        let max_height = document.querySelector(".history .line2").getBoundingClientRect().height - 20,
            history_element = document.querySelectorAll(".history .box .aos-init");
        history_element.forEach(el => {
            if (!el.classList.contains("aos-animate")) {
                return false;
            } else {
                if (el == history_element[history_element.length - 1]) {
                    history_line.style.height = max_height + 20 + "px";
                    return false;
                };
                history_line.style.height = el.offsetTop + 20 + "px";
            }
        });
    });
    window.addEventListener("scrollend", () => {
        let max_height = document.querySelector(".history .line2").getBoundingClientRect().height - 20,
            history_element = document.querySelectorAll(".history .box .aos-init");
        history_element.forEach(el => {
            if (!el.classList.contains("aos-animate")) {
                return false;
            } else {
                if (el == history_element[history_element.length - 1]) {
                    history_line.style.height = max_height + 20 + "px";
                    return false;
                };
                history_line.style.height = el.offsetTop + 20 + "px";
            }
        });
    });
}

function contactCheck(el) {
    if (!el.value.trim().length > 0 || el.value.trim().length == 0) {
        el.focus();
        return false;
    }
    return true;
}

const form = document.querySelector(".contact_form");
if (form) {
    let input_company = document.querySelector(".input_company_name input"),
        input_name = document.querySelector(".input_name input"),
        input_phone = document.querySelector(".input_tel input"),
        input_email = document.querySelector(".input_email input"),
        textarea = document.querySelector(".textarea_box textarea"),
        input_checkbox = document.querySelector(".rule .check input"),
        button_submit = document.querySelector(".submit button"),
        num = /[0-9]/,
        email = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    input_checkbox.parentElement.addEventListener("click", () => {
        if (input_checkbox.checked) {
            input_checkbox.parentElement.classList.add("active");
            return false;
        }
        input_checkbox.parentElement.classList.remove("active");
    });

    button_submit.addEventListener("click", () => {

        if (!contactCheck(input_company)) {
            alert("기업명을 입력해주세요.");
            return false;
        }
        if (!contactCheck(input_name)) {
            alert("성명을 입력해주세요.");
            return false;
        }
        if (!email.test(input_email.value)) {
            alert("이메일을 확인해주세요.");
            return false;
        }
        if (!num.test(input_phone.value)) {
            alert("전화번호 확인해주세요.");
            return false;
        }
        if (!contactCheck(textarea)) {
            alert("문의내용을 입력해주세요.");
            return false;
        }
        if (!input_checkbox.checked) {
            alert("개인정보처리방침에 동의해주세요.");
            return false;
        }

        button_submit.disabled = false;
        form.submit();
    });

}


/* swiper */

var main_slide = new Swiper(".main_slide", {
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 5000,
    },
    speed: 1000,
});
var about_slide = new Swiper(".about_slide", {
    loop: true,
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
    speed: 1000,
});

var main_cert = new Swiper(".swiper_cert", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    slidesPerView: "auto",
    touchRatio: 0,
    speed: 3000,
    loop: true,
});




var performance_swiper = new Swiper(".performance .swiper", {
    spaceBetween: 30,
    slidesPerView: "auto",
    touchRatio: 0,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 6000,
    navigation: {
        nextEl: '.performance .btns .next',
        prevEl: '.performance .btns .prev',
    },
});

if (document.querySelector(".performance .swiper")) {
    performance_swiper.slideTo(1)
}


AOS.init({
    duration: 1000,
});

