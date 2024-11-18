onload = () => {

    var r = document.querySelector('audio');
    var start_btn = document.querySelector(".start_btn")
    start_btn.onclick = () => {
      r.currentTime = 13
      console.log(r)
      r.play()
    }
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
    
    // const d = setTimeout(() => {
    //   // r.style.setProperty('--overlay-color', 'none');
    //   r.style.setProperty('--dark-color', 'rgba(255,255,255,0.1)');
    //   clearTimeout(d);
    //   // document.querySelectorAll(".")
    // }, 6000)
  };