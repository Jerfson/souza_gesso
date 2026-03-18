document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       1. INICIALIZAÇÃO LENIS (SMOOTH SCROLL)
       Crucial para o sentimento "Apple" do site.
       ========================================= */
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
        smooth: true,
        wheelMultiplier: 1,
    });

    // Sincroniza o RAF do Lenis do scroll suave à repintura do browser
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);


    /* =========================================
       2. ANIMAÇÕES DE ENTRADA (Aura v6 Engine)
       ========================================= */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.motion-enter, .hero-text-mask').forEach((el) => {
        observer.observe(el);
    });

    // Fallback: Disparar animações no hero imediatamente caso estejam no topo
    setTimeout(() => {
        document.querySelectorAll('.hero-text-mask').forEach(el => el.classList.add('active'));
        document.querySelectorAll('.motion-enter').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('active');
            }
        });
    }, 100);


    /* =========================================
       3. EFEITO HOVER LUMINOSO (GLOW CARDS)
       O brilho segue a posição do cursor.
       ========================================= */
    const glowCards = document.querySelectorAll('.glow-card');
    glowCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });


    /* =========================================
       4. PARALLAX ESTILO APPLE COM GSAP
       Conecta o ScrollTrigger ao Lenis para sinc.
       ========================================= */
    gsap.registerPlugin(ScrollTrigger);

    // Sincronizando o ScrollTrigger com o Lenis para perfeição
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    // Timeline do Parallax na Imagem Principal
    // Efeito: Quanto mais desce, mais a imagem avança (scale) e desce (yPercent)
    // O uso de scrub: 1 cria a interpolação suave de mola no retorno (delay natural)
    const heroParallax = gsap.timeline({
        scrollTrigger: {
            trigger: ".parallax-wrap",
            start: "top bottom",     // Começa a ouvir quando aparece no fundo da tela
            end: "bottom top",       // Termina quando some no topo
            scrub: 1.2,              // Smoothing de 1.2 segundos para efeito mola super suave
        }
    });

    // Mapeia o Scroll da tela inteira na Imagem
    heroParallax.fromTo("#hero-img", 
        { yPercent: -10, scale: 1 }, 
        { yPercent: 15, scale: 1.15, ease: "none" }
    );

    // (Opcional) Fade out e deslocamento da Coluna Esquerda ao sair da tela
    gsap.to(".left-col-content", {
        scrollTrigger: {
            trigger: ".left-col-content",
            start: "top 20%",
            end: "bottom top",
            scrub: 1
        },
        y: -100,
        opacity: 0,
        ease: "none"
    });

});