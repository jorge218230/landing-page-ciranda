        // Função simples para animação suave de entrada
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.card, section h2, .adaptation-box').forEach(el => {
            el.classList.add('transition', 'duration-1000', 'opacity-0', 'translate-y-10');
            observer.observe(el);
        });