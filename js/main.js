// when the user presses a key, find the corresponding audio file on the page and play it
//
(()=> {
  console.log('drumkit js file loaded');

  function removeHighlight(e) {
    //console.log(e); //e for event
    if (e.propertyName !== "transform") {
      return;
    } else {
      e.target.classList.remove('playing');
    }
  }

  //run this whenever a key gets pressed
  function logKey(e) {
    //debugger; -commented this out
    //console.log(e); -these can be commented out as we know it works with the debugger. When you click, the debugger will make it stop on the line being run so you can see the stuff being done, (e) is a function
    //constant is variable that shouldnt change. queryselector gets the web browser to find what needs to be done next
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if (!key) { return; }//if you press different key, it won't break when this is inserted
    //add a highlight to the key artwork on the screen
    key.classList.add('playing');

    //if there is no matching audio element, then dont do anything (avoid errors)
    if (!audio) { return; }

    //play the audio
    audio.currentTime = 0; //plays the audio constantly
    audio.play();

  }

  const keys = Array.from(document.querySelectorAll('.key'));

  keys.forEach(key => key.addEventListener('transitionend',removeHighlight));

  window.addEventListener('keydown', logKey); //window is the browser window, 'keydown' references the function you want it to do - it can be click out, click on, etc.
})();


//variables at top, functions you are running in middle, event handling at end
