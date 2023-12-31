function splitTextInSpans(elem) {
    var letters = elem.textContent.split('');
    elem.innerHTML = '';
    return letters.map(function (letter) {
        var span = document.createElement('span');
        span.textContent = letter;
        elem.appendChild(span);
        return span;
    });
}
function intro() {
    function animateLogo(tl) {
        var maxWindowSize = Math.max(window.innerHeight, window.innerWidth);
        var squareDarkWrapper = document.querySelector('.square-dark-wrapper');
        var squareDark = squareDarkWrapper.querySelector('.square-dark');
        var square = document.querySelector('.square-wrapper');
        var lines = square.querySelectorAll('.line');
        var sparks = document.querySelectorAll('.spark');
        var outerCircle = document.querySelector('.outer-logo-circle .circle');
        var logo = document.querySelector('.fadi-logo');

        tl.set(squareDark, {
            height: maxWindowSize,
            width: maxWindowSize
        }).set(lines, { scaleX: 0 });
        _.forEach(lines, function (line, i) {
            tl.to(lines[i], 2, {
                scaleX: 1,
                ease: 'Expo.easeOut'
            }, i / 10);
        });
        tl.to(lines, .05, {
            opacity: 0
        }, 1).to(squareDarkWrapper, 1.5, {
            scale: 1.4,
            ease: 'Expo.easeOut'
        }, 1).to(square, 2, {
            rotationZ: 45,
            ease: 'Expo.easeOut'
        }, 1.5).to(sparks, 1, {
            strokeDashoffset: 0,
            ease: 'Expo.easeOut'
        }, 1.5).to(sparks, 1, {
            strokeDashoffset: 145,
            ease: 'Expo.easeOut'
        }, 1.5).to(outerCircle, 1.4, {
            strokeDashoffset: 0,
            ease: 'Expo.easeInOut'
        }, 1.7).to(outerCircle, .4, {
            opacity: 0,
            ease: 'Power4.easeOut'
        }, 2.7).to(logo, 1, {
            opacity: 1,
            scale: 1,
            ease: 'Power4.easeOut'
        }, 2.7);
        return tl;
    }
    function animateWords(tl) {
        var wordsWrapper = document.querySelector('.fadi-words');
        var words = wordsWrapper.querySelectorAll('.fadi-word');
        var lineSeparator = wordsWrapper.querySelector('.line-separator');
        tl.set(lineSeparator, { scaleX: 0 }).to(lineSeparator, 1, {
            scaleX: 1,
            ease: 'Expo.easeOut'
        }, 3);
        _.forEach(words, function (word) {
            var spans = splitTextInSpans(word);
            _.forEach(spans, function (span, j) {
                var tlWords = new TimelineMax();
                tlWords.set(span, { y: span.clientHeight, opacity: 1 });
                var delay = (3 + Math.abs(spans.length / 2 - j) / 20).toFixed(2);
                tlWords.to(span, 1.4, {
                    y: 0,
                    ease: 'Expo.easeOut'
                }, delay);
            });
        });
        return tl;
    }
    function animateBackground(tl) {
        var wrapper = document.querySelector('.bg-lines-wrapper');
        var createLines = function createLines(qty) {
            for (var i = 0; i < qty; i++) {
                var line = document.createElement('div');
                line.classList.add('line');
                wrapper.appendChild(line);
                tl.set(line, {
                    x: _.random(window.innerWidth),
                    y: _.random(window.innerHeight),
                    z: _.random(-200, 200),
                    width: _.random(0, 100) + 50,
                    scaleX: 0
                });
            }
        };
        function animateLines(lines) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;
            try {
                for (var _iterator = lines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var line = _step.value;
                    var startTime = _.random(5, true);
                    tl.to(line, .4, {
                        scaleX: 1,
                        ease: 'Expo.Power4'
                    }, startTime).to(line, 2, {
                        scaleX: 0,
                        x: '+=' + line.style.width,
                        ease: 'Power4.easeOut'
                    }, startTime + .4);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            var rotate = function rotate(rx, ry) {
                TweenMax.to(wrapper, .75, {
                    rotationX: ry,
                    rotationY: rx,
                    ease: 'Power0.easenone'
                });
            };
            function update(elem, event, tilt) {
                if (tilt) {
                    var tiltLR = event.gamma;
                    var tiltFB = event.beta;
                    rotate(tiltLR / 1.5, tiltFB / 1.5);
                    return;
                }
                var xpos = event.layerX || event.offsetX;
                var ypos = event.layerY || event.offsetY;

                var ax = -(window.innerWidth / 2 - xpos) / 40;
                var ay = (window.innerHeight / 2 - ypos) / 10;
                rotate(ax, ay);
            }
            var trackerLayer = document.querySelector('.mouse-tracker-layer');
            trackerLayer.addEventListener('mousemove', function (e) {
                return window.requestAnimationFrame(function () {
                    return update(wrapper, e);
                });
            });
            if (window.DeviceOrientationEvent) {
                window.addEventListener('deviceorientation', function (e) {
                    return window.requestAnimationFrame(function () {
                        return update(wrapper, e, true);
                    });
                });
            }
        }
        createLines(50);
        animateLines(wrapper.querySelectorAll('.line'));
    }
    return {
        animateLogo: animateLogo,
        animateWords: animateWords,
        animateBackground: animateBackground
    };
}
intro().animateLogo(new TimelineMax());
intro().animateWords(new TimelineMax());