document.addEventListener('DOMContentLoaded', () => {
    
    // Base de Dados de Serviços
    const database = {
        residencial: {
            title: "Residencial Premium",
            text: "Construção de residências unifamiliares de alto padrão com controle orçamentário. Da sondagem ao acabamento, aliamos solidez estrutural e economia inteligente.",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
            wp: "Olá Engenheiro Marcos, gostaria de tratar sobre Construção Residencial!"
        },
        reformas: {
            title: "Reformas & Retrofit",
            text: "Intervenções precisas em estruturas de concreto armado ou alvenaria. Reforço de vigas e aberturas de vãos com total segurança técnica assegurada por ART.",
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80",
            wp: "Olá Engenheiro Marcos, gostaria de tratar sobre Reformas!"
        },
        galpoes: {
            title: "Infra Industrial",
            text: "Plantas comerciais e galpões de grande vão livre. Expertise em fundações profundas e execução de pisos industriais de alto tráfego com cura controlada.",
            image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80",
            wp: "Olá Engenheiro Marcos, solicito orçamento para Galpões Industriais!"
        },
        laudos: {
            title: "Eng. Diagnóstica",
            text: "Mapeamento sistemático de manifestações patológicas da construção civil (fissuras e recalques). Emissão de vistorias cautelares e laudos técnicos periciais.",
            image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1920&q=80",
            wp: "Olá Engenheiro Marcos, necessito de um Laudo Técnico Pericial!"
        },
        orcamentos: {
            title: "Eng. de Custos",
            text: "Levantamento detalhado e composição de custos unitários (SINAPI). Elaboração de cronogramas físico-financeiros para mitigar desperdícios e atrasos.",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1920&q=80",
            wp: "Olá Engenheiro Marcos, preciso planejar o Orçamento da minha obra!"
        }
    };

    // Referências DOM
    const slides = [document.getElementById('slide-1'), document.getElementById('slide-2'), document.getElementById('slide-3')];
    const sliderContainer = document.getElementById('slider-container');
    const serviceBg = document.getElementById('service-bg');
    
    const heroContent = document.getElementById('hero-content');
    const serviceContent = document.getElementById('service-content');
    const serviceTitle = document.getElementById('service-title');
    const serviceDesc = document.getElementById('service-desc');
    const serviceCta = document.getElementById('service-cta');
    
    const hubOverlay = document.getElementById('hub-overlay');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileOverlay = document.getElementById('mobile-overlay');

    // 1. CARROSSEL AUTOMÁTICO
    let currentSlide = 0;
    let rotationInterval;

    function startRotation() {
        rotationInterval = setInterval(() => {
            slides[currentSlide].classList.remove('opacity-100', 'scale-100');
            slides[currentSlide].classList.add('opacity-0', 'scale-105');
            
            currentSlide = (currentSlide + 1) % slides.length;
            
            slides[currentSlide].classList.remove('opacity-0', 'scale-105');
            slides[currentSlide].classList.add('opacity-100', 'scale-100');
        }, 5000);
    }
    startRotation();

    // 2. CONTROLE DO MENU HAMBÚRGUER (MOBILE)
    window.toggleMobileMenu = (open) => {
        if (!mobileDrawer) return;
        if (open) {
            mobileDrawer.classList.remove('-translate-x-full');
            mobileOverlay.classList.remove('hidden');
            setTimeout(() => mobileOverlay.classList.remove('opacity-0'), 10);
        } else {
            mobileDrawer.classList.add('-translate-x-full');
            mobileOverlay.classList.add('opacity-0');
            setTimeout(() => mobileOverlay.classList.add('hidden'), 500);
        }
    };

    // 3. SELEÇÃO DE SERVIÇOS (DESKTOP E MOBILE)
    window.selectService = (key) => {
        const data = database[key];
        
        // Fecha o menu hambúrguer automaticamente se estiver no mobile
        window.toggleMobileMenu(false);

        // Atualiza UI dos botões (Desktop e Mobile)
        document.querySelectorAll('.desktop-nav-btn, .mobile-nav-btn').forEach(btn => btn.classList.remove('active-nav'));
        
        // Ativa os botões correspondentes ao serviço
        const desktopBtns = document.querySelectorAll(`.desktop-nav-btn`);
        const mobileBtns = document.querySelectorAll(`.mobile-nav-btn`);
        
        // Procura qual botão foi clicado baseado no texto interno (solução simplificada para vincular)
        event.currentTarget.classList.add('active-nav');

        // Pára o carrossel e troca o fundo
        clearInterval(rotationInterval);
        sliderContainer.classList.add('opacity-0');
        
        serviceBg.style.backgroundImage = `url('${data.image}')`;
        serviceBg.classList.remove('opacity-0', 'scale-105');
        serviceBg.classList.add('opacity-100', 'scale-100');

        // Animação de troca de texto no painel central
        heroContent.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
        heroContent.classList.add('opacity-0', '-translate-y-8', 'pointer-events-none');

        setTimeout(() => {
            serviceTitle.textContent = data.title;
            serviceDesc.textContent = data.text;
            serviceCta.href = `https://wa.me/5562983077512?text=${encodeURIComponent(data.wp)}`;
            
            serviceContent.classList.remove('opacity-0', 'translate-y-8', 'pointer-events-none');
            serviceContent.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
        }, 400);
    };

    // 4. RETORNO AO ESTADO INICIAL
    window.resetToHero = () => {
        document.querySelectorAll('.desktop-nav-btn, .mobile-nav-btn').forEach(btn => btn.classList.remove('active-nav'));

        serviceContent.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
        serviceContent.classList.add('opacity-0', 'translate-y-8', 'pointer-events-none');

        setTimeout(() => {
            heroContent.classList.remove('opacity-0', '-translate-y-8', 'pointer-events-none');
            heroContent.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
            
            serviceBg.classList.remove('opacity-100', 'scale-100');
            serviceBg.classList.add('opacity-0', 'scale-105');
            sliderContainer.classList.remove('opacity-0');
            startRotation();
        }, 400);
    };

    // 5. HUB TÉCNICO OVERLAY
    window.toggleHub = (open) => {
        window.toggleMobileMenu(false); // Fecha o menu mobile se estiver aberto
        
        if (open) {
            hubOverlay.classList.remove('hidden');
            setTimeout(() => hubOverlay.classList.remove('translate-y-full'), 10);
        } else {
            hubOverlay.classList.add('translate-y-full');
            setTimeout(() => hubOverlay.classList.add('hidden'), 700);
        }
    };
});

// ==========================================================================
    // 📸 ENGINE DO MINI-CARROSSEL (HUB TÉCNICO)
    // ==========================================================================
    const sliderStates = {};

    window.moveSlider = (trackId, direction) => {
        const track = document.getElementById(trackId);
        if (!track) return;
        
        // 1. Inicializa a memória do carrossel específico se for o primeiro clique
        if (!sliderStates[trackId]) {
            sliderStates[trackId] = {
                current: 0,
                total: track.children.length
            };
        }
        
        let state = sliderStates[trackId];
        
        // 2. Calcula a matemática da próxima posição (Loop infinito)
        state.current += direction;
        
        if (state.current < 0) {
            state.current = state.total - 1; // Se estava na primeira, vai para a última
        } else if (state.current >= state.total) {
            state.current = 0; // Se passou da última, volta para a primeira
        }
        
        // 3. Empurra fisicamente a trilha HTML para o lado (Deslizamento suave)
        track.style.transform = `translateX(-${state.current * 100}%)`;
    };