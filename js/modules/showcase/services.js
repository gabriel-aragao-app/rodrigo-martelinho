
export default function initServices() {
    const servicesContainer = document.querySelector('#services-container');
    if (!servicesContainer) return;

    const services = [
        {
            title: "Martelinho de Ouro",
            description: "Técnica artesanal para remover amassados sem danificar a pintura original. Ideal para pequenos impactos e chuvas de granizo.",
            icon: `<svg class="w-12 h-12 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>`
        },
        {
            title: "Polimento Técnico",
            description: "Correção rigorosa da pintura, removendo riscos superficiais, manchas e oxidação, devolvendo o brilho de carro zero.",
            icon: `<svg class="w-12 h-12 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>`
        },
        {
            title: "Vitrificação",
            description: "Proteção cerâmica de alta durabilidade que cria uma barreira contra raios UV, fezes de pássaros e seiva de árvores.",
            icon: `<svg class="w-12 h-12 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>`
        },
        {
            title: "Micropintura",
            description: "Reparo localizado para riscos profundos e pequenos descascados, evitando a repintura de toda a peça.",
            icon: `<svg class="w-12 h-12 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>`
        }
    ];

    const createServiceCard = (service, index) => {
        return `
            <div class="group p-8 bg-brand-gray rounded-sm border border-transparent hover:border-brand-gold transition-all duration-300 transform hover:-translate-y-2 fade-in-up" style="animation-delay: ${index * 0.1}s">
                <div class="mb-6 group-hover:scale-110 transition-transform duration-300">
                    ${service.icon}
                </div>
                <h3 class="text-3xl font-display font-bold text-white mb-4 group-hover:text-brand-gold transition-colors">${service.title}</h3>
                <p class="text-gray-300 text-lg font-light leading-relaxed group-hover:text-white transition-colors">
                    ${service.description}
                </p>
            </div>
        `;
    };

    servicesContainer.innerHTML = services.map((s, i) => createServiceCard(s, i)).join('');
}
