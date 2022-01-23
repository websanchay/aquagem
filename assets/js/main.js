function deleteAllCookies() {
    for (var e = document.cookie.split(";"), t = 0; t < e.length; t++) {
        var o = e[t],
            s = o.indexOf("="); - 1 < s && o.substr(0, s);
        document.cookie = www.thecreatives.in + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
    }
}! function() {
    "use strict";
    var i = (e, t) => (e = e.trim(), t ? [...document.querySelectorAll(e)] : document.querySelector(e)),
        e = (t, e, o, s) => {
            let a = i(e, s);
            a && (s ? a.forEach(e => e.addEventListener(t, o)) : a.addEventListener(t, o))
        },
        t = (e, t) => { e.addEventListener("scroll", t) };
    let s = i("#navbar .scrollto", !0);
    var o = () => {
        var o = window.scrollY + 200;
        s.forEach(e => { var t;!e.hash || (t = i(e.hash)) && (o >= t.offsetTop && o <= t.offsetTop + t.offsetHeight ? e.classList.add("active") : e.classList.remove("active")) })
    };
    window.addEventListener("load", o), t(document, o);
    var a = e => {
        let t = i("#header"),
            o = t.offsetHeight;
        t.classList.contains("header-scrolled") || (o -= 16);
        e = i(e).offsetTop;
        window.scrollTo({ top: e - o, behavior: "smooth" })
    };
    
    let l = i("#header");
    if (l) {
        var n = l.offsetTop;
        let e = l.nextElementSibling;
        var r = () => { n - window.scrollY <= 0 ? (l.classList.add("fixed-top"), e.classList.add("scrolled-offset")) : (l.classList.remove("fixed-top"), e.classList.remove("scrolled-offset")) };
        window.addEventListener("load", r), t(document, r)
    }
    
    let c = i(".back-to-top");
    c && (r = () => { 100 < window.scrollY ? c.classList.add("active") : c.classList.remove("active") },
     window.addEventListener("load", r), t(document, r)), e("click", ".mobile-nav-toggle", 
     function(e) { i("#navbar").classList.toggle("navbar-mobile"), this.classList.toggle("bi-list"), 
     this.classList.toggle("bi-x") }),
    e("click", ".navbar .dropdown > a", function(e) { i("#navbar").classList.contains("navbar-mobile") && (e.preventDefault(), this.nextElementSibling.classList.toggle("dropdown-active")) }, !0), e("click", ".scrollto", function(e) {
        if (i(this.hash)) {
            e.preventDefault();
            let t = i("#navbar");
            if (t.classList.contains("navbar-mobile")) {
                t.classList.remove("navbar-mobile");
                let e = i(".mobile-nav-toggle");
                e.classList.toggle("bi-list"), e.classList.toggle("bi-x")
            }
            a(this.hash)
        }
    }, !0), window.addEventListener("load", () => { window.location.hash && i(window.location.hash) && a(window.location.hash) });
   
    let d = i("#hero-carousel-indicators"),
        v = i("#heroCarousel .carousel-item", !0);
    v.forEach((e, t) => { d.innerHTML += 0 === t ? "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + t + "' class='active'></li>" : "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + t + "'></li>" }), window.addEventListener("load", () => { AOS.init({ duration: 1e3, easing: "ease-in-out", once: !0, mirror: !1 }) })
}(), deleteAllCookies();

 


