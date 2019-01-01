var windowTop, windowHeight, steps = [], chartHeight;
init();
bindings();


function init() {
    console.log('damn');
}

function getSteps() {
    $('.uit-step').each(function(i, el) {
        steps.push($(el).attr('data-step'));
    }.bind(this));
}

function bindings() {
    $(window).scroll(function() {
        this.onScroll();
    }.bind(this));
}

function onScroll() {
    this.updateValues();
    //this.fixMap();
    this.setStep();
}

function updateValues() {
    windowTop = window.pageYOffset || document.documentElement.scrollTop;
    windowHeight = $(window).height();
    //chartHeight = $('.uit-chart').height() + 48;
}

function fixMap() {
    if (windowTop > $('.uit-chart__point').offset().top - this.percentageOfHeight(5)) {
        $('.uit-chart').addClass('is-fixed');
    } else {
        $('.uit-chart').removeClass('is-fixed');
        $('.uit-chart__point').removeAttr('style');
    }
}

function setStep() {
    var stepToShow = null;
    $('.uit-step').each(function(i, el) {
        if (windowTop > $(el).offset().top - this.percentageOfHeight(95)) {
            stepToShow = $(el).data('step');
        }
    }.bind(this));
    this.highlightStates(stepToShow);
}

function highlightStates(currentStep) {
    switch (currentStep) {
        case 1:
        $('.c4').addClass('c3');
        $('.c3').removeClass('c4');
        break

        case 2:
        $('.c3').addClass('c4');
        $('.c4').removeClass('c3');
        console.log('yuh');
        break

        case 3:
        $('.c4').addClass('c3');
        $('.c3').removeClass('c4');
        break
    }
}

function percentageOfHeight(percentage) {
    return (windowHeight / 100) * percentage;
}
