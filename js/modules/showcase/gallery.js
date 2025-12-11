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
        },
        {
            url: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwj23-uc9sF8Gi_T8WhM88fPQkjAl1DePD_VUeL6XC462p0ax4zwPJ4TLRAa5dS-rJoYrjV0ypAjA6BWRy7AKjfAfzCVm1G_GMINRnO93QaFQOlyzJfGSZ7Fg6MjPQjYX5vQSLo3aAVRTF8=s1360-w1360-h1020-rw",
            alt: "Interior bege de luxo restaurado"
        },
        {
            url: "https://lh3.googleusercontent.com/p/AF1QipNXwzrEhor8eGcpQgb0_3c0eF0y6OMuawffnB1r=s1360-w1360-h1020-rw",
            alt: "Farol de led cristalino após polimento"
        }
    ];

    const createGalleryItem = (img, index) => {
        // Layout Masonry/Grid alternado
        // 0 (Grande), 1, 2, 3 (Grande), 4, 5
        // Grid 4 colunas
        const spanClass = index === 0 || index === 3 ? "md:col-span-2 md:row-span-2" : "col-span-1";

        // [CORREÇÃO] Usar h-full para ocupar toda a célula definida pelo Grid (auto-rows)
        // Isso evita buracos causados por alturas fixas (h-96/h-48) que não batem com o row-span

        return `
            <div class="relative overflow-hidden group rounded-sm ${spanClass} h-full w-full fade-in-up" style="animation-delay: ${index * 0.1}s">
                <img src="${img.url}" alt="${img.alt}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span class="text-white font-bold tracking-widest border border-brand-gold px-4 py-2 uppercase text-sm">Visualizar</span>
                </div>
            </div>
        `;
    };

    galleryContainer.innerHTML = images.map((img, i) => createGalleryItem(img, i)).join('');
}
