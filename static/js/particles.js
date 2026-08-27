/**
 * Particle Effects Engine for Flag Snake Game.
 */
class ParticleSystem {
    constructor() {
        this.particles = [];
    }

    /**
     * Spawn burst of particles at given canvas coordinates with theme color.
     */
    spawnBurst(x, y, color, count = CONFIG.PARTICLE_COUNT_EAT) {
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 1 + Math.random() * 4;
            this.particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                radius: 2 + Math.random() * 3,
                color: color,
                alpha: 1.0,
                decay: 0.03 + Math.random() * 0.04
            });
        }
    }

    update() {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.alpha -= p.decay;

            if (p.alpha <= 0) {
                this.particles.splice(i, 1);
            }
        }
    }

    draw(ctx) {
        ctx.save();
        for (const p of this.particles) {
            ctx.globalAlpha = Math.max(0, p.alpha);
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }

    clear() {
        this.particles = [];
    }
}
