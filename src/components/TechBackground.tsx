// src/components/TechBackground.tsx
import React, { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

const TechBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // 這裡直接用非空斷言，讓 TS 知道一定不是 null
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    let particles: Particle[] = [];
    let animationId: number | null = null;

    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 90,
    };

    const settings = {
      maxDistance: 120,
      speed: 0.3,
    };

    function shouldRun() {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      )
        return false;

      if (window.innerWidth <= 640) return false;

      if (
        document.body &&
        document.body.dataset &&
        document.body.dataset.visuals === "off"
      )
        return false;

      return true;
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const area = width * height;
      const target = Math.max(
        30,
        Math.min(120, Math.floor(area / 16000))
      );

      while (particles.length < target) {
        particles.push(createParticle(width, height));
      }
      while (particles.length > target) {
        particles.pop();
      }
    }

    function createParticle(width: number, height: number): Particle {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * settings.speed * 2,
        vy: (Math.random() - 0.5) * settings.speed * 2,
        r: Math.random() * 1.8 + 0.6,
      };
    }

    function clearCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function step() {
      if (!shouldRun()) {
        if (animationId !== null) {
          cancelAnimationFrame(animationId);
          animationId = null;
        }
        clearCanvas();
        return;
      }

      const width = window.innerWidth;
      const height = window.innerHeight;
      ctx.clearRect(0, 0, width, height);

      // 移動 + 繪製粒子
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            p.vx += (dx / dist) * 0.6 * force;
            p.vy += (dy / dist) * 0.6 * force;
          }
        }

        ctx.beginPath();
        ctx.fillStyle = "rgba(160,180,255,0.9)";
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // 畫連線
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < settings.maxDistance) {
            const alpha = 0.12 * (1 - dist / settings.maxDistance);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(130,150,255,${alpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(step);
    }

    function handleMove(e: MouseEvent | TouchEvent) {
      const rect = canvas.getBoundingClientRect();
      let clientX: number;
      let clientY: number;

      if ("touches" in e && e.touches[0]) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ("clientX" in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      } else {
        return;
      }

      mouse.x = clientX - rect.left;
      mouse.y = clientY - rect.top;
    }

    function handleLeave() {
      mouse.x = null;
      mouse.y = null;
    }

    function handleVisibility() {
      if (document.hidden) {
        if (animationId !== null) {
          cancelAnimationFrame(animationId);
          animationId = null;
        }
      } else {
        if (animationId === null && shouldRun()) {
          animationId = requestAnimationFrame(step);
        }
      }
    }

    if (!document.body.dataset.visuals) {
      document.body.dataset.visuals = "on";
    }

    if (!shouldRun()) {
      return;
    }

    resize();

    const area = window.innerWidth * window.innerHeight;
    const target = Math.max(
      30,
      Math.min(120, Math.floor(area / 16000))
    );
    for (let i = 0; i < target; i++) {
      particles.push(createParticle(window.innerWidth, window.innerHeight));
    }

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove, { passive: true });
    window.addEventListener("mouseout", handleLeave);
    window.addEventListener("touchend", handleLeave);
    document.addEventListener("visibilitychange", handleVisibility);

    animationId = requestAnimationFrame(step);

    return () => {
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
      }
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseout", handleLeave);
      window.removeEventListener("touchend", handleLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
      clearCanvas();
    };
  }, []);

  return (
    <canvas
      id="tech-bg"
      ref={canvasRef}
      aria-hidden="true"
      style={{ pointerEvents: "none" }}
    />
  );
};

export default TechBackground;
