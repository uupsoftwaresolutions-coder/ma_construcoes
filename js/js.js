document.addEventListener('DOMContentLoaded', () => {
    
    // Base de Dados de Serviços
    const database = {
        residencial: {
            title: "Residencial Premium",
            text: "Especialistas na execução de residências unifamiliares de alto padrão, integramos a sofisticação do projeto arquitetônico a um rigoroso controle orçamentário. Da sondagem geológica preliminar aos detalhes de acabamento fino, nossa gestão físico-financeira garante a racionalização de insumos e a mitigação de desperdícios. Aliamos execução impecável, máxima solidez estrutural e economia inteligente para materializar o seu sonho sem surpresas no orçamento..",
            image: "https://images.unsplash.com/photo-1728721934633-b4195a825581?auto=format&fit=crop&w=1920&q=80",
            wp: "Olá Engenheiro Marcos, gostaria de tratar sobre Construção Residencial!"
        },
        reformas: {
            title: "Reformas & Retrofit",
            text: "Transformar espaços exige mais do que execução; exige precisão matemática. Somos especialistas em retrofit imobiliário e intervenções cirúrgicas em estruturas de concreto armado e alvenaria. Viabilizamos projetos arquitetônicos modernos — como a integração de ambientes (open concept) e a abertura de grandes vãos livres — sem comprometer a estabilidade da edificação. Executamos o mapeamento prévio de cargas, escoramentos técnicos e o reforço estratégico de vigas e pilares. Substituímos o improviso por cálculo exato: cada milímetro alterado é respaldado por Anotação de Responsabilidade Técnica (ART), garantindo segurança jurídica absoluta, blindagem contra patologias futuras e a valorização real do seu patrimônio.",
            image: "https://images.unsplash.com/photo-1765894518274-f53145743a46?auto=format&fit=crop&w=1920&q=80",
            wp: "Olá Engenheiro Marcos, gostaria de tratar sobre Reformas!"
        },
        galpoes: {
            title: "Infraestrutura Industrial",
            text: "A infraestrutura logística e industrial do seu negócio exige robustez inegociável e alta performance estrutural. Executamos plantas comerciais e galpões de grandes vãos livres, projetados para otimizar ao máximo o seu espaço de armazenagem e a flexibilidade do layout operacional. Nossa expertise abrange o gerenciamento completo de engenharia pesada: desde a execução exata de fundações profundas — preparadas para cargas extremas — até o lançamento de pisos industriais de alta resistência. Utilizamos nivelamento a laser e técnicas avançadas de cura controlada do concreto, mitigando fissurações estruturais e garantindo um pavimento hiper-resistente para o tráfego contínuo de maquinário pesado e empilhadeiras. Entregamos um ativo sólido, durável e desenhado para blindar a sua operação contra manutenções corretivas.",
            image: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&w=1920&q=80",
            wp: "Olá Engenheiro Marcos, solicito orçamento para Galpões Industriais!"
        },
        laudos: {
            title: "Eng. Diagnóstica",
            text: "A saúde estrutural de um patrimônio não admite negligência. Atuamos como investigadores técnicos do seu imóvel através da Engenharia Diagnóstica de alta precisão. Realizamos o mapeamento científico e sistemático de manifestações patológicas complexas — como fissuras dinâmicas, infiltrações crônicas, oxidação de armaduras e recalques diferenciais de fundação. Muito além de identificar o sintoma, determinamos a causa raiz exata e prescrevemos a terapia estrutural definitiva. Emitimos vistorias cautelares de vizinhança para blindagem preventiva antes do início de novas obras e elaboramos laudos técnicos periciais incontestáveis, rigorosamente embasados nas normas da ABNT. Entregamos a prova técnica irrefutável necessária para embasar litígios judiciais, acionar garantias construtivas e proteger o seu investimento.",
            image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1920&q=80",
            wp: "Olá Engenheiro Marcos, necessito de um Laudo Técnico Pericial!"
        },
        orcamentos: {
            title: "Eng. de Custos",
            text: "Em qualquer obra, de uma simples reforma à construção da sua casa ou ponto comercial, o descontrole orçamentário é o maior risco para o seu investimento. Nossa atuação em Planejamento atua como uma barreira de proteção para o seu capital, substituindo o improviso por cálculos exatos. Quantificamos cada insumo e hora-homem através de composições rigorosas de custos unitários. Ao integrar o escopo técnico a um cronograma físico-financeiro estratégico, garantimos que a velocidade da obra caminhe em perfeita sincronia com o seu cronograma de desembolso. Entregamos transparência total, governança de ponta a ponta e a garantia de que o seu projeto será executado estritamente dentro da verba e do prazo aprovados..",
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