export default function initGallery() {
    const galleryContainer = document.querySelector('#gallery-container');
    if (!galleryContainer) return;

    // Imagens reais do Rodrigo Martelinho de Ouro
    const images = [
        {
            url: "assets/images/servico1.jpg",
            alt: "Processo de martelinho de ouro na lateral do veículo"
        },
        {
            url: "assets/images/servico2.jpg",
            alt: "Reparo detalhado utilizando iluminação especial"
        },
        {
            url: "assets/images/oficina.jpg",
            alt: "Oficina equipada e organizada"
        },
        {
            url: "assets/images/fachada.jpg",
            alt: "Fachada da Rodrigo Martelinho de Ouro"
        }
    ];

    const createGalleryItem = (img, index) => {
        // Layout Masonry/Grid alternado
        const spanClass = index === 0 || index === 3 ? "md:col-span-2 md:row-span-2" : "col-span-1";
        const heightClass = index === 0 || index === 3 ? "h-96" : "h-48";

        return `
            <div class="relative overflow-hidden group rounded-sm ${spanClass} ${heightClass} fade-in-up" style="animation-delay: ${index * 0.1}s">
                <img src="${img.url}" alt="${img.alt}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span class="text-white font-bold tracking-widest border border-brand-gold px-4 py-2 uppercase text-sm">Visualizar</span>
                </div>
            </div>
        `;
    };

    galleryContainer.innerHTML = images.map((img, i) => createGalleryItem(img, i)).join('');
}
