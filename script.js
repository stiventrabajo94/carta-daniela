const body = document.body;
const igniteBtn = document.getElementById('igniteBtn');
const candleTrigger = document.getElementById('candleTrigger');
const bigBangBtn = document.getElementById('bigBangBtn');
const flame = document.getElementById('flame');
const glow = document.getElementById('glow');
const heartsContainer = document.getElementById('hearts');
const photoFrames = Array.from(document.querySelectorAll('.photo-frame'));

const canvas = document.getElementById('galaxyCanvas');
const ctx = canvas.getContext('2d');

let isLit = false;
let flameBoost = 1;
let photoTimers = [];

function mostrarTodasLasFotos() {
  photoTimers.forEach((id) => clearTimeout(id));
  photoTimers = [];
  photoFrames.forEach((frame) => frame.classList.add('is-visible'));
}

function iniciarSecuenciaFotosCada5s() {
  photoTimers.forEach((id) => clearTimeout(id));
  photoTimers = [];
  photoFrames.forEach((frame) => frame.classList.remove('is-visible'));

  const intervaloMs = 5000; // 5 segundos entre cada foto
  photoFrames.forEach((frame, idx) => {
    const delay = intervaloMs * (idx + 1);
    const timerId = setTimeout(() => {
      frame.classList.add('is-visible');
    }, delay);
    photoTimers.push(timerId);
  });
}

function encenderVela() {
  if (isLit) return;
  isLit = true;
  body.classList.remove('is-dark');
  body.classList.add('is-lit');
  iniciarSecuenciaFotosCada5s();
}

igniteBtn.addEventListener('click', encenderVela);
candleTrigger.addEventListener('click', encenderVela);

// Corazones suaves de fondo
for (let i = 0; i < 16; i++) {
  const heart = document.createElement('span');
  heart.className = 'heart';
  heart.textContent = '♥';
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 14}px`;
  heart.style.animationDuration = `${7 + Math.random() * 8}s`;
  heart.style.animationDelay = `${-Math.random() * 10}s`;
  heartsContainer.appendChild(heart);
}

// Parpadeo de la vela
setInterval(() => {
  if (!isLit) return;

  const scaleX = (0.92 + Math.random() * 0.18) * flameBoost;
  const scaleY = (0.9 + Math.random() * 0.22) * flameBoost;
  const skew = (Math.random() - 0.5) * 8;
  flame.style.transform = `scale(${scaleX.toFixed(2)}, ${scaleY.toFixed(2)}) skewX(${skew.toFixed(1)}deg)`;

  if (!body.classList.contains('is-supernova')) {
    const glowScale = 0.94 + Math.random() * 0.14;
    glow.style.transform = `translate(-50%, -50%) scale(${glowScale.toFixed(2)})`;
  }
}, 110);

// --- SISTEMA BIG BANG & CORAZÓN DE GALAXIAS ---
let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

const galaxyColors = [
  '#ff4d8d',
  '#c77dff',
  '#ffd166',
  '#4cc9f0',
  '#ff85a1',
  '#ffffff'
];

let particles = [];
let miniGalaxies = [];
let shockwaves = [];
let phase = 'idle';
let phaseTimer = 0;
let heartBeat = 0;

function getHeartPoint(t, scale) {
  const x = 16 * Math.pow(Math.sin(t), 3);
  const y = -(
    13 * Math.cos(t) -
    5 * Math.cos(2 * t) -
    2 * Math.cos(3 * t) -
    Math.cos(4 * t)
  );
  return { x: x * scale, y: y * scale };
}

function triggerBigBang() {
  if (!isLit) encenderVela();
  mostrarTodasLasFotos();

  body.classList.add('is-cosmic', 'is-supernova');
  flameBoost = 1.65;

  setTimeout(() => {
    body.classList.remove('is-supernova');
    flameBoost = 1.15;
  }, 900);

  const flameRect = flame.getBoundingClientRect();
  const originX = flameRect.left + flameRect.width / 2 || width / 2;
  const originY = flameRect.top + flameRect.height / 2 || height * 0.72;

  const centerX = width / 2;
  const centerY = height * 0.45;
  const heartScale = Math.min(width, height) * 0.025;

  particles = [];
  miniGalaxies = [];
  shockwaves = [
    { x: originX, y: originY, radius: 4, alpha: 1, color: '#fff3b0' },
    { x: originX, y: originY, radius: 1, alpha: 0.85, color: '#e0aaff' }
  ];

  const totalParticles = 380;
  for (let i = 0; i < totalParticles; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 3 + Math.random() * 14;
    const t = (i / totalParticles) * Math.PI * 2 + (Math.random() - 0.5) * 0.12;
    const thickness = 0.82 + Math.random() * 0.34;
    const targetOffset = getHeartPoint(t, heartScale * thickness);

    particles.push({
      x: originX,
      y: originY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      offsetX: targetOffset.x,
      offsetY: targetOffset.y,
      size: 1.2 + Math.random() * 2.6,
      color: galaxyColors[Math.floor(Math.random() * galaxyColors.length)],
      twinkle: Math.random() * Math.PI * 2,
      ease: 0.022 + Math.random() * 0.025
    });
  }

  const totalGalaxies = 28;
  for (let i = 0; i < totalGalaxies; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 2.5 + Math.random() * 10;
    const t = (i / totalGalaxies) * Math.PI * 2;
    const targetOffset = getHeartPoint(t, heartScale);

    miniGalaxies.push({
      x: originX,
      y: originY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      offsetX: targetOffset.x,
      offsetY: targetOffset.y,
      radius: 10 + Math.random() * 10,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() > 0.5 ? 1 : -1) * (0.02 + Math.random() * 0.03),
      color1: galaxyColors[i % galaxyColors.length],
      color2: galaxyColors[(i + 2) % galaxyColors.length],
      ease: 0.02 + Math.random() * 0.015
    });
  }

  phase = 'explode';
  phaseTimer = 0;
  bigBangBtn.textContent = 'UNIVERSO CREADO ✨';
}

bigBangBtn.addEventListener('click', triggerBigBang);

function drawMiniGalaxy(g) {
  ctx.save();
  ctx.translate(g.x, g.y);
  ctx.rotate(g.rotation);

  const grad = ctx.createRadialGradient(0, 0, 1, 0, 0, g.radius);
  grad.addColorStop(0, '#ffffff');
  grad.addColorStop(0.3, g.color1);
  grad.addColorStop(0.7, g.color2 + '55');
  grad.addColorStop(1, 'transparent');

  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(0, 0, g.radius, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = g.color1 + 'aa';
  ctx.lineWidth = 1.2;
  for (let arm = 0; arm < 2; arm++) {
    ctx.beginPath();
    for (let a = 0; a < 3.5; a += 0.25) {
      const r = a * (g.radius / 3.8);
      const theta = a + arm * Math.PI;
      const px = Math.cos(theta) * r;
      const py = Math.sin(theta) * r * 0.65;
      if (a === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();
  }

  ctx.restore();
}

function animateUniverse() {
  ctx.clearRect(0, 0, width, height);

  if (phase !== 'idle') {
    phaseTimer++;

    for (let i = shockwaves.length - 1; i >= 0; i--) {
      const sw = shockwaves[i];
      sw.radius += 16;
      sw.alpha -= 0.022;
      if (sw.alpha <= 0) {
        shockwaves.splice(i, 1);
        continue;
      }
      ctx.save();
      ctx.strokeStyle = sw.color;
      ctx.globalAlpha = sw.alpha;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    if (phase === 'explode' && phaseTimer > 55) {
      phase = 'heart';
    }

    const centerX = width / 2;
    const centerY = height * 0.45;
    heartBeat += 0.045;
    const pulse = phase === 'heart' ? 1 + Math.sin(heartBeat) * 0.045 : 1;

    for (const p of particles) {
      if (phase === 'explode') {
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;
      } else {
        const tx = centerX + p.offsetX * pulse;
        const ty = centerY + p.offsetY * pulse;
        p.x += (tx - p.x) * p.ease;
        p.y += (ty - p.y) * p.ease;
      }

      p.twinkle += 0.08;
      const alpha = 0.55 + Math.sin(p.twinkle) * 0.45;

      ctx.save();
      ctx.globalAlpha = Math.max(0.2, alpha);
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    for (const g of miniGalaxies) {
      g.rotation += g.rotSpeed;
      if (phase === 'explode') {
        g.x += g.vx;
        g.y += g.vy;
        g.vx *= 0.95;
        g.vy *= 0.95;
      } else {
        const tx = centerX + g.offsetX * pulse;
        const ty = centerY + g.offsetY * pulse;
        g.x += (tx - g.x) * g.ease;
        g.y += (ty - g.y) * g.ease;
      }
      drawMiniGalaxy(g);
    }
  }

  requestAnimationFrame(animateUniverse);
}

animateUniverse();
