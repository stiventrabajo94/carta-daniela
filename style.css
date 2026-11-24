:root {
  --bg-dark: #14070d;
  --bg-mid: #280c19;
  --bg-pitch: #050204;
  --paper: #f2e3c6;
  --paper-dark: #dcc59e;
  --ink: #2b1d16;
  --accent: #c92a42;
  --flame-core: #fff7d6;
  --flame-mid: #ffb703;
  --flame-outer: #fb8500;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 16px;
  background: radial-gradient(circle at 50% 65%, var(--bg-mid), var(--bg-dark) 75%);
  color: var(--ink);
  font-family: 'Lora', serif;
  overflow-x: hidden;
  position: relative;
  transition: background 1.2s ease;
}

body.is-dark {
  background: radial-gradient(circle at 50% 65%, #12060b, var(--bg-pitch) 75%);
}

body.is-cosmic {
  background: radial-gradient(circle at 50% 50%, #120824 0%, #06030f 65%, #020107 100%);
}

#galaxyCanvas {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.scene {
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 680px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.ambient-glow {
  position: fixed;
  width: 460px;
  height: 460px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 183, 3, 0.18) 0%, rgba(251, 133, 0, 0.06) 45%, transparent 70%);
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 0;
  opacity: 0;
  transition: opacity 0.8s ease, transform 0.2s ease-out, background 0.6s ease;
}

body.is-lit .ambient-glow {
  opacity: 1;
}

body.is-supernova .ambient-glow {
  background: radial-gradient(circle, rgba(255, 250, 220, 0.85) 0%, rgba(255, 183, 3, 0.45) 35%, rgba(168, 85, 247, 0.18) 65%, transparent 80%);
  transform: translate(-50%, -50%) scale(2.4) !important;
}

.hearts {
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
  opacity: 0;
  transition: opacity 1.2s ease;
}

body.is-lit .hearts {
  opacity: 1;
}

.heart {
  position: absolute;
  bottom: -30px;
  color: rgba(255, 105, 140, 0.24);
  animation: floatUp linear infinite;
}

@keyframes floatUp {
  0% {
    transform: translateY(0) scale(0.85) rotate(0deg);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  85% {
    opacity: 0.9;
  }
  100% {
    transform: translateY(-110vh) scale(1.15) rotate(18deg);
    opacity: 0;
  }
}

.letter-card {
  position: relative;
  width: 100%;
  max-width: 460px;
  background: linear-gradient(160deg, rgba(242, 227, 198, 0.95), rgba(220, 197, 158, 0.95));
  border-radius: 10px;
  padding: 26px 24px 32px;
  box-shadow:
    0 20px 45px rgba(0, 0, 0, 0.65),
    0 0 35px rgba(255, 175, 40, 0.14),
    inset 0 0 24px rgba(138, 98, 52, 0.22);
  border: 1px solid rgba(255, 240, 205, 0.45);
  opacity: 0;
  transform: translateY(24px) scale(0.96);
  pointer-events: none;
  transition: opacity 1s ease 0.25s, transform 1s cubic-bezier(0.22, 1, 0.36, 1) 0.25s;
}

body.is-lit .letter-card {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

.letter-greeting {
  font-family: 'Great Vibes', cursive;
  font-size: 2.45rem;
  text-align: center;
  color: #3a2216;
  margin-bottom: 10px;
}

.letter-body {
  font-style: italic;
  font-size: 1rem;
  line-height: 1.62;
  text-align: center;
  color: var(--ink);
}

.seal {
  position: absolute;
  right: 18px;
  bottom: 14px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #e63950, var(--accent));
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 0.95rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.35);
}

/* Galería con aparición secuencial cada 5 segundos */
.photo-gallery {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.photo-frame {
  background: #fff;
  padding: 8px 8px 24px 8px;
  width: 150px;
  border-radius: 2px;
  box-shadow:
    0 10px 24px rgba(0, 0, 0, 0.65),
    0 0 16px rgba(255, 195, 90, 0.12);
  opacity: 0;
  transform: translateY(22px) scale(0.92);
  pointer-events: none;
  transition: opacity 0.85s ease, transform 0.85s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease;
}

.photo-frame[data-index="0"] { --tilt: -3deg; }
.photo-frame[data-index="1"] { --tilt: 1.5deg; }
.photo-frame[data-index="2"] { --tilt: 3.5deg; }

.photo-frame.is-visible {
  opacity: 1;
  transform: translateY(0) scale(1) rotate(var(--tilt));
  pointer-events: auto;
}

.photo-frame.is-visible:hover {
  transform: translateY(-4px) scale(1.07) rotate(0deg);
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.8);
  z-index: 4;
}

.polaroid-img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  display: block;
  border: 1px solid #ececec;
}

.candle-scene {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4px;
}

.ignite-btn {
  margin-bottom: 14px;
  padding: 10px 20px;
  border-radius: 999px;
  border: 1px solid rgba(255, 195, 90, 0.45);
  background: rgba(255, 183, 3, 0.14);
  color: #ffe8b3;
  font-family: 'Lora', serif;
  font-size: 0.92rem;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(255, 183, 3, 0.2);
  animation: pulseBtn 2s infinite ease-in-out;
  transition: opacity 0.5s ease, transform 0.25s ease, background 0.25s ease;
}

.ignite-btn:hover {
  background: rgba(255, 183, 3, 0.26);
  transform: scale(1.04);
}

body.is-lit .ignite-btn {
  opacity: 0;
  pointer-events: none;
  height: 0;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

@keyframes pulseBtn {
  0%, 100% { box-shadow: 0 0 14px rgba(255, 183, 3, 0.18); }
  50% { box-shadow: 0 0 26px rgba(255, 183, 3, 0.42); }
}

.flame-wrap {
  position: relative;
  width: 28px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 2px;
  transform-origin: bottom center;
  opacity: 0;
  transform: scale(0.1);
  transition: opacity 0.6s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

body.is-lit .flame-wrap {
  opacity: 1;
  transform: scale(1);
}

.flame-outer {
  width: 22px;
  height: 46px;
  border-radius: 50% 50% 50% 50% / 65% 65% 35% 35%;
  background: radial-gradient(circle at 50% 70%, var(--flame-mid), var(--flame-outer) 75%, rgba(251, 133, 0, 0));
  box-shadow: 0 0 22px var(--flame-mid), 0 0 42px var(--flame-outer);
  transition: box-shadow 0.4s ease, filter 0.4s ease;
}

body.is-supernova .flame-outer {
  box-shadow: 0 0 55px #fff, 0 0 95px #ffd166, 0 0 140px #c77dff;
  filter: brightness(1.6);
}

.flame-inner {
  position: absolute;
  bottom: 3px;
  width: 10px;
  height: 24px;
  border-radius: 50% 50% 45% 45% / 65% 65% 35% 35%;
  background: var(--flame-core);
}

.wick {
  width: 3px;
  height: 8px;
  background: #222;
  border-radius: 2px;
}

.candle {
  width: 80px;
  height: 104px;
  border-radius: 10px 10px 14px 14px;
  background: linear-gradient(90deg, #8c5319 0%, #d4882a 28%, #f3b340 55%, #b56d1d 85%, #754210 100%);
  position: relative;
  cursor: pointer;
  box-shadow: inset 0 -10px 18px rgba(0, 0, 0, 0.35), 0 12px 24px rgba(0, 0, 0, 0.55);
}

.drip {
  position: absolute;
  top: 0;
  width: 11px;
  border-radius: 0 0 10px 10px;
  background: linear-gradient(180deg, #f7c552, #c97d22);
}

.drip.d1 { left: 10px; height: 32px; }
.drip.d2 { left: 25px; height: 48px; }
.drip.d3 { left: 44px; height: 26px; }
.drip.d4 { left: 59px; height: 40px; }

.plate {
  width: 126px;
  height: 18px;
  margin-top: -4px;
  border-radius: 50%;
  background: radial-gradient(ellipse at center, #e5a93c 0%, #8a5216 75%, #4a2908 100%);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.7);
}

.bigbang-btn {
  margin-top: 18px;
  padding: 11px 26px;
  border-radius: 999px;
  border: 1px solid rgba(216, 180, 254, 0.6);
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.35), rgba(236, 72, 153, 0.35));
  color: #fff;
  font-family: 'Lora', serif;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 0.92rem;
  cursor: pointer;
  box-shadow: 0 0 22px rgba(236, 72, 153, 0.35), inset 0 0 12px rgba(255, 255, 255, 0.15);
  opacity: 0;
  transform: translateY(10px) scale(0.95);
  pointer-events: none;
  transition: opacity 0.8s ease 0.9s, transform 0.35s ease, box-shadow 0.3s ease;
}

body.is-lit .bigbang-btn {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

.bigbang-btn:hover {
  transform: scale(1.06);
  box-shadow: 0 0 32px rgba(236, 72, 153, 0.65), 0 0 18px rgba(168, 85, 247, 0.6);
}
