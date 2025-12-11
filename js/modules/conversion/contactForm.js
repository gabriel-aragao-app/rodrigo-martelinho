export default function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const nameInput = document.getElementById('name');
    const submitBtn = form.querySelector('button[type="submit"]');

    // Máscara de Telefone (BR)
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);

        if (value.length > 2) {
            value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        }
        if (value.length > 9) {
            value = `${value.slice(0, 9)}-${value.slice(9)}`;
        }

        e.target.value = value;
    });

    // Validação Simples
    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const showError = (input, message) => {
        const parent = input.parentElement;
        let error = parent.querySelector('.error-msg');
        if (!error) {
            error = document.createElement('span');
            error.className = 'error-msg text-red-500 text-xs mt-1 absolute -bottom-5 left-0';
            parent.appendChild(error);
        }
        error.textContent = message;
        input.classList.add('border-red-500');
        input.classList.remove('border-brand-gray');
    };

    const clearError = (input) => {
        const parent = input.parentElement;
        const error = parent.querySelector('.error-msg');
        if (error) error.remove();
        input.classList.remove('border-red-500');
        input.classList.add('border-brand-gray');
    };

    // Form Submit Handler
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        if (nameInput.value.trim().length < 3) {
            showError(nameInput, "Nome muito curto");
            isValid = false;
        } else {
            clearError(nameInput);
        }

        if (!validateEmail(emailInput.value)) {
            showError(emailInput, "Email inválido");
            isValid = false;
        } else {
            clearError(emailInput);
        }

        if (phoneInput.value.replace(/\D/g, '').length < 10) {
            showError(phoneInput, "Telefone inválido");
            isValid = false;
        } else {
            clearError(phoneInput);
        }

        if (isValid) {
            // Configuração do Número de Destino (DDI + DDD + Numero)
            // Exemplo: 55 (Brasil) + 11 (SP) + 999999999
            const whatsappNumber = "5571999152958";

            // Formatando a mensagem
            const textMessage = `
*NOVO LEAD DO SITE - PRESTIGE DENT REPAIR* 🔔

*Nome:* ${nameInput.value}
*Veículo:* ${document.getElementById('vehicle').value}
*Telefone:* ${phoneInput.value}
*Email:* ${emailInput.value}

*Mensagem:*
${document.getElementById('message').value || "Gostaria de agendar uma avaliação."}
            `.trim();

            const encodedMessage = encodeURIComponent(textMessage);
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            // Feedback Visual no Botão
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<svg class="animate-spin h-5 w-5 text-brand-black inline mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Redirecionando...`;

            // Simular pequeno delay para UX e abrir WhatsApp
            setTimeout(() => {
                window.open(whatsappUrl, '_blank');

                // Resetar formulário após envio
                form.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }, 1000);
        }
    });

    // Inputs Focus Effects (UX/Gold Border)
    [nameInput, emailInput, phoneInput].forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('text-brand-gold');
        });
        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('text-brand-gold');
        });
    });
}
