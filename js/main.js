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
    console.log(currentStep);
    /*
    if ((currentStep != null) && (currentStep != window.currentStep)) {
        window.currentStep = currentStep;
        for (var step in steps) {
            $('.uit-chart').removeClass('is-' + steps[step])
        }
        $('.uit-chart').addClass('is-' + currentStep);
        window.currentStep = currentStep;
        switch (currentStep) {
            case 'forestry':
            break

            case 'limited_water':
            break

            case 'dead_trees':
            break
        }
    }
    */
}

function percentageOfHeight(percentage) {
    return (windowHeight / 100) * percentage;
}
