export default function initTestimonials() {
    const testimonialsContainer = document.querySelector('#testimonials-container');
    if (!testimonialsContainer) return;

    const testimonials = [
        {
            name: "Ricardo Mendes",
            car: "Porsche 911 Carrera",
            text: "O trabalho ficou simplesmente incrível. Achei que teria que repintar a porta inteira, mas o martelinho salvou a originalidade do carro. Recomendo de olhos fechados!",
            avatar: "RM",
            rating: 5
        },
        {
            name: "Ana Sophia",
            car: "Mercedes-Benz C300",
            text: "Profissionais extremamente educados e o ambiente é muito limpo e organizado. A vitrificação deixou meu carro mais bonito do que quando saiu da concessionária.",
            avatar: "AS",
            rating: 5
        },
        {
            name: "Carlos Eduardo",
            car: "BMW X6",
            text: "Atendimento vip do início ao fim. O serviço de leva e traz facilitou muito minha vida. Resultado impecável.",
            avatar: "CE",
            rating: 5
        }
    ];

    const createStars = (count) => {
        return Array(count).fill(0).map(() =>
            `<svg class="w-4 h-4 text-brand-gold fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`
        ).join('');
    };

    const createTestimonialCard = (t, index) => {
        return `
            <div class="bg-brand-gray p-8 rounded-sm relative border-l-4 border-brand-gold fade-in-up" style="animation-delay: ${index * 0.2}s">
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-brand-dark border border-brand-gold flex items-center justify-center text-brand-gold font-bold text-sm">
                            ${t.avatar}
                        </div>
                        <div>
                            <h4 class="text-white font-bold text-sm">${t.name}</h4>
                            <p class="text-brand-gold text-xs uppercase tracking-wider">${t.car}</p>
                        </div>
                    </div>
                    <div class="flex gap-1">
                        ${createStars(t.rating)}
                    </div>
                </div>
                <p class="text-gray-300 italic text-sm leading-relaxed relative z-10">
                    "${t.text}"
                </p>
                <!-- Quote icon decoration -->
                <svg class="absolute top-4 right-4 text-brand-black w-16 h-16 opacity-20 transform -translate-y-2 translate-x-2 z-0" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.896 14.325 16.053 14.941 15.471 15.558 14.89 16.666 14.599 18.265 14.599L18.847 14.599 18.847 11.239 12.017 11.239 12.017 3 21.999 3 21.999 12C21.999 15.541 21.056 17.915 19.169 19.123 17.283 20.33 15.566 20.941 14.017 21ZM5.0169997 21L5.0169997 18C5.0169997 16.896 5.3249998 16.053 5.9409998 15.471 6.5579998 14.89 7.6659999 14.599 9.2649999 14.599L9.8469997 14.599 9.8469997 11.239 3.0169997 11.239 3.0169997 3 12.999 3 12.999 12C12.999 15.541 12.056 17.915 10.169 19.123 8.2829995 20.33 6.5659995 20.941 5.0169997 21Z"/></svg>
            </div>
        `;
    };

    testimonialsContainer.innerHTML = testimonials.map((t, i) => createTestimonialCard(t, i)).join('');
}
