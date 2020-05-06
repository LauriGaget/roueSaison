; (function ($) {

    //--- ROTATION ---    
    var ete = document.getElementById("b-ete");

    var hammerEte = new Hammer(ete);

    var automne = document.getElementById("b-automne");

    var hammerAutomne = new Hammer(automne);

    var hiver = document.getElementById("b-hiver");

    var hammerHiver = new Hammer(hiver);

    var printemps = document.getElementById("b-printemps");

    var hammerPrintemps = new Hammer(printemps);




    function rotate(rotation) {

        $("#quart1").animate({ "transform-origin": "bottom right", "rotate": + rotation + "deg" }, 600)
        $("#quart3").animate({ "transform-origin": "top right", "rotate": + rotation + "deg" }, 600)
        $("#quart4").animate({ "transform-origin": "top left", "rotate": + rotation + "deg" }, 600)

    }


    hammerAutomne.on("tap", function (ev) {
        rotate(90)
    })


    hammerHiver.on("tap", function (ev) {
        rotate(180)
    })

    hammerEte.on("tap", function (ev) {
        rotate(360)
    })

    hammerPrintemps.on("tap", function (ev) {
        rotate(270)
    })


    //----  LECTURE VIDÉOS ----



    function lecture(src) {

        source.setAttribute('src', src);
        $("#video").animate({ "display": "block" }, 10)
        $("#video").animate({ "opacity": "1" }, 1000)
        $("#cross").animate({ "opacity": "1" }, 1000)
        $("#cross").animate({ "display": "block" }, 10)
        $("#body").animate({ "background": "grey" })
        video.load()
        video.play()
    }

    function stopLecture() {
        $("#video").animate({ "opacity": "0" }, 1000)
        $("#cross").animate({ "opacity": "0" }, 1000)
        setTimeout(function () {
            $("#video").animate({ "display": "none" }, 10)
            $("#cross").animate({ "display": "none" }, 10)
            $("#body").animate({ "background": "white" })
        }, 1000)

    }

    //-- Variable --

    var video = document.getElementById("video");
    var source = document.createElement('source');
    video.appendChild(source);

    //ETE
    var viticultureEte = document.getElementById("vit-ete");
    var hammerVitEte = new Hammer(viticultureEte);

    var agricultureEte = document.getElementById("agr-ete");
    var hammerAgrEte = new Hammer(agricultureEte);

    var blanchisserieEte = document.getElementById("bla-ete");
    var hammerBlaEte = new Hammer(blanchisserieEte);

    //AUTOMNE
    var viticultureAutomne = document.getElementById("vit-automne");
    var hammerVitAutomne = new Hammer(viticultureAutomne);

    var agricultureAutomne = document.getElementById("agr-automne");
    var hammerAgrAutomne = new Hammer(agricultureAutomne);

    var blanchisserieAutomne = document.getElementById("bla-automne");
    var hammerBlaAutomne = new Hammer(blanchisserieAutomne);

    //HIVER
    var viticultureHiver = document.getElementById("vit-hiver");
    var hammerVitHiver = new Hammer(viticultureHiver);

    var agricultureHiver = document.getElementById("agr-hiver");
    var hammerAgrHiver = new Hammer(agricultureHiver);

    var blanchisserieHiver = document.getElementById("bla-hiver");
    var hammerBlaHiver = new Hammer(blanchisserieHiver);

    //PRINTEMPS
    var viticulturePrintemps = document.getElementById("vit-printemps");
    var hammerVitPrintemps = new Hammer(viticulturePrintemps);

    var agriculturePrintemps = document.getElementById("agr-printemps");
    var hammerAgrPrintemps = new Hammer(agriculturePrintemps);

    var blanchisseriePrintemps = document.getElementById("bla-printemps");
    var hammerBlaPrintemps = new Hammer(blanchisseriePrintemps);

    //CROSS
    var cross = document.getElementById("cross");
    var hammerCross = new Hammer(cross)

    //--Evenements--

    hammerVitEte.on("tap", function (ev) {
        lecture(Data.ete.viticulture)

    })

    hammerAgrEte.on("tap", function (ev) {
        lecture(Data.ete.agriculture)

    })

    hammerBlaEte.on("tap", function (ev) {
        lecture(Data.ete.blanchisserie)
    })


    hammerVitAutomne.on("tap", function (ev) {
        lecture(Data.automne.viticulture)
    })

    hammerAgrAutomne.on("tap", function (ev) {
        lecture(Data.automne.agriculture)
    })

    hammerBlaAutomne.on("tap", function (ev) {
        lecture(Data.automne.blanchisserie)
    })


    hammerVitHiver.on("tap", function (ev) {
        lecture(Data.hiver.viticulture)

    })

    hammerAgrHiver.on("tap", function (ev) {
        lecture(Data.hiver.agriculture)

    })

    hammerBlaHiver.on("tap", function (ev) {
        lecture(Data.hiver.blanchisserie)
    })

    hammerVitPrintemps.on("tap", function (ev) {
        lecture(Data.printemps.viticulture)

    })

    hammerAgrPrintemps.on("tap", function (ev) {
        lecture(Data.printemps.agriculture)

    })

    hammerBlaPrintemps.on("tap", function (ev) {
        lecture(Data.printemps.blanchisserie)
    })

    hammerCross.on("tap", function (ev) {
        stopLecture()
    })

})(Zepto)    