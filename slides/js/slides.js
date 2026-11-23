const slides = document.querySelectorAll('.slide');
        const progressBar = document.getElementById('progressBar');
        const slideCounter = document.getElementById('slideCounter');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const fsBtn = document.getElementById('fsBtn');
        
        let currentSlide = 0;
        const totalSlides = slides.length;

        function updateSlide(index) {
            slides[currentSlide].classList.remove('active');
            currentSlide = (index + totalSlides) % totalSlides;
            slides[currentSlide].classList.add('active');

            // Atualiza barra de progresso e contador
            const progress = ((currentSlide + 1) / totalSlides) * 100;
            progressBar.style.width = progress + '%';
            slideCounter.textContent = `${currentSlide + 1} / ${totalSlides}`;
        }

        prevBtn.addEventListener('click', () => updateSlide(currentSlide - 1));
        nextBtn.addEventListener('click', () => updateSlide(currentSlide + 1));

        fsBtn.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(() => {});
            } else {
                document.exitFullscreen().catch(() => {});
            }
        });

        // Controle por Teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
                updateSlide(currentSlide + 1);
            } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
                updateSlide(currentSlide - 1);
            } else if (e.key === 'Home') {
                updateSlide(0);
            } else if (e.key === 'End') {
                updateSlide(totalSlides - 1);
            } else if (e.key.toLowerCase() === 'f') {
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen().catch(() => {});
                } else {
                    document.exitFullscreen().catch(() => {});
                }
            }
        });

        // Inicializar Gráfico Chart.js quando renderizado
        window.addEventListener('DOMContentLoaded', () => {
            const ctx = document.getElementById('homologationChart');
            if (ctx) {
                new Chart(ctx, {
                    type: 'radar',
                    data: {
                        labels: ['Sigilo de Dados', 'Concisão (<=5L)', 'Zero Alucinação', 'Transbordo Ágil', 'Clareza / FCR'],
                        datasets: [{
                            label: 'Taxa de Conformidade (%)',
                            data: [100, 100, 100, 100, 95],
                            backgroundColor: 'rgba(79, 85, 241, 0.25)',
                            borderColor: '#4f55f1',
                            borderWidth: 2,
                            pointBackgroundColor: '#00d2ff',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: '#4f55f1'
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            r: {
                                angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
                                grid: { color: 'rgba(255, 255, 255, 0.08)' },
                                pointLabels: {
                                    color: '#9aa5bc',
                                    font: { size: 10, family: "'Plus Jakarta Sans', sans-serif" }
                                },
                                ticks: { display: false, max: 100 }
                            }
                        },
                        plugins: {
                            legend: { display: false }
                        }
                    }
                });
            }
        });
