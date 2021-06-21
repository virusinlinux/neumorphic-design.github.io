

onload = function () {
    const items = [...document.querySelectorAll("ul li")];
    const containers = document.querySelectorAll(".container");
    const menu = document.querySelector("header .menu");
    const sidebar = document.querySelector("nav");
    const toggler = document.querySelector(".toggler");
    const root = document.documentElement; 
    const darkTheme = {
          "--bg": "#152447" ,
          "--content-bg": "#152447",
          "--primary": "#14244d",
          "--secondary": "#0b1630",
          "--border-color": "#192c5c",
          "--active": "#e43f5a",
          "--dark" : "#eee",
          "--footer" :"#e43f5a"
     };
     const lightTheme = {
          "--bg": "#dee9fd" ,
          "--content-bg": "#dee9f7",
          "--primary": "#edf3ff",
          "--secondary": "#b7c4dd",
          "--border-color": "#e2ecfd",
          "--active": "#ff4000",
          "--dark" : "#404040",
          "--footer" : "#162940"
     };
  
     items.forEach((item, i) => {
       item.addEventListener("click", function (e) {
        const active = document.querySelector(".active");
        const activeChild = active.childNodes[1].childNodes[1];
        const cur = e.currentTarget.childNodes[1].childNodes[1];      
        if (active) {
            active.classList.remove("active");
            activeChild.classList.remove("show");          
        }
        cur.classList.add("show");
        e.currentTarget.classList.add("active");  
        setTimeout(function(){
            cur.classList.remove("show")                   
        },3000);                  
      });
    });
  
    menu.addEventListener("click", function (e) {
        menu.classList.toggle("open")
        sidebar.classList.toggle("show-menu");
    });      
    
    function change() {
      menu.classList.add("open")
      let index = containers.length;
      while(--index && window.scrollY + 350 <containers[index].offsetTop);
      items.forEach(item => {
         item.classList.remove('morph-in');
         const cur = item.childNodes[1].childNodes[1];
         cur.classList.remove("show");        
      })
      const child = items[index].childNodes[1].childNodes[1]
      child.classList.add("show")
      items[index].classList.add('morph-in');
      sidebar.classList.add("show-menu")  
            
    }
    change();   
    window.addEventListener('scroll', change);
     
    toggler.addEventListener("click", function(e){
       let current = e.currentTarget;
       let circle = e.currentTarget.children[0]
       if(current.classList.contains("switch-on")){
          circle.className = "circle morph-out";
          current.className = "toggler morph-in switch-off"
          for(const [k, v] of Object.entries(lightTheme)){
             root.style.setProperty(k,v);
          }        
        }
        else {
          circle.className = "circle morph-in";
          current.className = "toggler morph-out switch-on";
          for(const [k, v] of Object.entries(darkTheme)){
              root.style.setProperty(k,v)
          }
        }
     });      
     alert("Neumorphic Floating NavBar v1.1\n[x] Added Dark Theme \n [x] Removed Auto hide Navbar");
     alert("Please Do : \n👍 Like\n🔗 Share and\n💬 Comment");
     
  };
  
  