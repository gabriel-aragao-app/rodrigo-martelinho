export default function initOrigins() {
    const originsContainer = document.querySelector('#origins-container');
    if (!originsContainer) return;

    // Content
    const content = {
        title: "Excelência e",
        highlight: "Tradição",
        description: `
            <p class="mb-6">Na <b>Rodrigo Martelinho de Ouro</b>, nossa paixão por carros vai além do trabalho. Cada veículo que entra em nossa oficina em Cajazeiras recebe um tratamento exclusivo, focado em restaurar a originalidade e o valor do seu bem.</p>
            <p>Com anos de experiência e ferramentas de precisão, garantimos resultados que impressionam. Seja um leve amassado ou um reparo mais complexo, nossa técnica artesanal dispensa pintura e massa, preservando a essência do seu automóvel.</p>
        `,
        stats: [
            { value: "100%", label: "Clientes Satisfeitos" },
            { value: "4.9", label: "Estrelas no Google" },
            { value: "SSA", label: "Atendimento em Salvador" }
        ],
        image: "assets/images/fachada.jpg"
    };

    // HTML Structure
    const html = `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <!-- Image Side (Left) -->
            <div class="relative group fade-in-left opacity-0" id="origins-img-wrapper">
                <div class="absolute -inset-4 bg-brand-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div class="relative overflow-hidden rounded-sm border-l-4 border-brand-gold">
                    <img src="${content.image}" alt="Artesão trabalhando" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0">
                    <div class="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent"></div>
                    <div class="absolute bottom-6 left-6">
                        <span class="text-brand-gold font-display font-bold text-6xl opacity-20 select-none">EST. 2008</span>
                    </div>
                </div>
            </div>

            <!-- Content Side (Right) -->
            <div class="space-y-8 fade-in-right opacity-0" id="origins-text-wrapper">
                <div>
                    <span class="text-brand-gold text-sm tracking-widest uppercase font-bold flex items-center gap-2">
                        <span class="w-8 h-[1px] bg-brand-gold"></span> Nossa História
                    </span>
                    <h2 class="text-4xl md:text-5xl font-display font-bold text-white mt-4">
                        ${content.title} <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-goldLight">${content.highlight}</span>
                    </h2>
                </div>

                <div class="text-gray-400 leading-relaxed font-light text-lg border-l border-brand-gray pl-6">
                    ${content.description}
                </div>

                <div class="grid grid-cols-3 gap-6 pt-6 border-t border-brand-gray/30">
                    ${content.stats.map(stat => `
                        <div class="text-center md:text-left">
                            <span class="block text-3xl font-display font-bold text-white mb-1 counter" data-target="${parseInt(stat.value.replace(/\D/g, ''))}">${stat.value}</span>
                            <span class="text-xs text-brand-gold uppercase tracking-wider">${stat.label}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    originsContainer.innerHTML = html;

    // Scroll Animation Logic (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const imgWrapper = entry.target.querySelector('.fade-in-left');
                const textWrapper = entry.target.querySelector('.fade-in-right');

                if (imgWrapper) {
                    imgWrapper.classList.remove('opacity-0');
                    imgWrapper.classList.add('animate-slideInLeft'); // Need to define custom animation or use wrapper style
                    imgWrapper.style.animation = "fadeInLeft .8s ease-out forwards";
                }
                if (textWrapper) {
                    textWrapper.classList.remove('opacity-0');
                    textWrapper.style.animation = "fadeInRight .8s ease-out forwards";
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(originsContainer);

    // Add Keyframes programmatically if not exists
    if (!document.getElementById('dynamic-animations')) {
        const styleSheet = document.createElement("style");
        styleSheet.id = "dynamic-animations";
        styleSheet.innerText = `
            @keyframes fadeInLeft {
                from { opacity: 0; transform: translateX(-50px); }
                to { opacity: 1; transform: translateX(0); }
            }
            @keyframes fadeInRight {
                from { opacity: 0; transform: translateX(50px); }
                to { opacity: 1; transform: translateX(0); }
            }
        `;
        document.head.appendChild(styleSheet);
    }
}
