// Sakura petals falling
for (let i = 0; i < 24; i++) {
  const p = document.createElement("span");
  p.className = "petal";
  p.style.left = Math.random() * 100 + "vw";
  p.style.setProperty("--s", 9 + Math.random() * 12 + "px");
  p.style.setProperty("--x", (Math.random() * 240 - 120) + "px");
  p.style.animationDuration = 8 + Math.random() * 9 + "s";
  p.style.animationDelay = -Math.random() * 16 + "s";
  document.body.appendChild(p);
}

// Click = sparkle burst
document.addEventListener("click", (e) => {
  const colors = ["#ffe08a", "#ff8fb1", "#ffffff", "#8fe3ff"];
  for (let i = 0; i < 10; i++) {
    const s = document.createElement("span");
    s.className = "spark";
    s.textContent = "✦";
    const a = (Math.PI * 2 * i) / 10, d = 50 + Math.random() * 50;
    s.style.left = e.clientX + "px";
    s.style.top = e.clientY + "px";
    s.style.color = colors[i % colors.length];
    s.style.setProperty("--dx", Math.cos(a) * d + "px");
    s.style.setProperty("--dy", Math.sin(a) * d + "px");
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 800);
  }
});
