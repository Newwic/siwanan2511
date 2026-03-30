function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("show");
}

// Fade animation
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});
document.querySelectorAll(".fade").forEach(el=>observer.observe(el));
