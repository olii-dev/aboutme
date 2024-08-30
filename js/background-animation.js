document.addEventListener("DOMContentLoaded", function () {
    const duration = 15000; // Duration of the gradient animation in milliseconds (15 seconds)

    const currentTime = new Date().getTime();

    const startTime = localStorage.getItem("gradientAnimationStartTime");

    let elapsedTime;
    if (startTime) {
        elapsedTime = (currentTime - parseInt(startTime, 10)) % duration;
    } else {
        localStorage.setItem("gradientAnimationStartTime", currentTime);
        elapsedTime = 0;
    }

    document.body.style.animation = `gradient ${duration}ms ease infinite`;
    document.body.style.animationDelay = `-${elapsedTime}ms`;
});
