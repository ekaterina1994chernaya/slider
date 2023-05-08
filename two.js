const entities = [
    {
        city_one:'Rostov-on-Don',
        city_two:'LCD admiral',
        area:'81 m2',
        time:'3.5 months',
        image:'/image/admiral.png'
    },
    {
        city_one:'Sochi',
        city_two:'Thieves',
        area:'105 m2',
        time:'4 months',
        image:'/image/sochi.png'
    },
    {
        city_one:'Rostov-on-Don',
        city_two:'Patriotic',
        area:'93 m2',
        time:'3 months',
        image:'/image/patriotic.png'
    }
    ]
    
    const city_one = document.querySelector('.city_one')
    const city_two = document.querySelector('.city_two')
    const area = document.querySelector('.area')
    const time = document.querySelector('.time')
    const image = document.querySelector('.image')
    let currentIndex = 0
    setEntity(currentIndex);

    function nextSlide() {
        setEntity(currentIndex += 1);
    }

    function previousSlide() {
        setEntity(currentIndex -= 1);
    }
    
    function currentSlide(n) {
        setEntity(currentIndex = n);
    }
    
    function setEntity(n){
        city_one.innerText = entities[n].city_one
        city_two.innerText = entities[n].city_two
        area.innerText = entities[n].area
        time.innerText = entities[n].time
        image.style.backgroundImage = `url(${entities[n].image})`
      }
    
    
    
    
    const prev = document.querySelector('.prev')
    const next = document.querySelector('.next')
    
    
    prev.addEventListener('click', () => {
      setEntity(currentIndex - 1);
      currentIndex -= 1;
    })
    next.addEventListener('click', () => {
      setEntity(currentIndex + 1);
      currentIndex += 1;
    })
    
    const first_city = document.querySelector('.first_city')
    const two_city = document.querySelector('.two_city')
    const three_city = document.querySelector('.three_city')
    
    first_city.addEventListener('click', () =>{
      setEntity(currentIndex);
    })
    
    two_city.addEventListener('click', () =>{
      setEntity(currentIndex +1);
    })
    three_city.addEventListener('click', () =>{
      setEntity(currentIndex +2);
    })
    
    const one_dot = document.querySelector('.one_dot')
    const two_dot = document.querySelector('.two_dot')
    const three_dot = document.querySelector('.three_dot')
    
    one_dot.addEventListener('click', () =>{
      setEntity(currentIndex);
    })
    
    two_dot.addEventListener('click', () =>{
      setEntity(currentIndex +1);
    })
    three_dot.addEventListener('click', () =>{
      setEntity(currentIndex +2);
    })