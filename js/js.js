/**
 * ⚡ M.A. ENGENHARIA - CORE RUNTIME ENGINE
 * Lógica Operacional e Ativações Dinâmicas Mapeadas pela UUP Software Solutions
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Vinculação estrutural das referências do DOM
    const hubModal = document.getElementById('technical-hub-modal');
    const displayBox = document.getElementById('display-info-panel');
    const displayImage = document.getElementById('pilar-target-image');
    const displayTitle = document.getElementById('pilar-target-title');
    const displayText = document.getElementById('pilar-target-text');
    const whatsappLink = document.getElementById('pilar-whatsapp-link');

    // Matriz Estritamente Mapeada dos Conteúdos da M.A. Engenharia
    const database = {
        residencial: {
            title: "Execução Habitacional Privada Premium",
            text: "Construção de residências unifamiliares de alto padrão com rígido controle orçamentário. Atuamos desde a sondagem de solo ao acabamento fino de engenharia, aliando solidez estrutural com fidelidade ao projeto arquitetônico.",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
            wpText: "Olá Engenheiro Marcos, gostaria de tratar sobre Construção Residencial!"
        },
        reformas: {
            title: "Modificações Estruturais e Retrofit",
            text: "Intervenções precisas e planejadas em estruturas de concreto armado ou alvenaria. Reforço de vigas, pilares, aberturas de vãos arquitetônicos e reformas gerais com total segurança técnica assegurada por ART.",
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80",
            wpText: "Olá Engenheiro Marcos, gostaria de tratar sobre Modificação Estrutural/Reformas!"
        },
        galpoes: {
            title: "Galpões Logísticos e Industriais",
            text: "Execução de plantas comerciais e galpões industriais de grande vão livre. Expertise em fundações profundas, montagem de superestruturas e cura controlada de pisos industriais de alto tráfego mecânico.",
            image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=400&q=80",
            wpText: "Olá Engenheiro Marcos, solicito orçamento para Galpões Industriais!"
        },
        laudos: {
            title: "Perícias Técnicas e Engenharia Diagnóstica",
            text: "Mapeamento sistemático de manifestações patológicas da construção civil (fissuras, recalques de fundação, infiltrações). Emissão de vistorias cautelares de vizinhança e laudos técnicos judiciais e normativos.",
            image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=400&q=80",
            wpText: "Olá Engenheiro Marcos, necessito de um Laudo Técnico Pericial!"
        },
        orcamentos: {
            title: "Engenharia de Custos e Planejamento Quantitativo",
            text: "Levantamento detalhado de quantitativos de materiais e composição de custos unitários baseados nas tabelas oficiais (SINAPI). Elaboração de cronogramas físicos-financeiros rígidos para mitigar desperdícios.",
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=80",
            wpText: "Olá Engenheiro Marcos, preciso planejar o Orçamento Quantitativo da minha obra!"
        }
    };

    // ==========================================================================
    // 🎛️ ATIVAÇÃO E EXPOSIÇÃO DINÂMICA (SLIDE UP SEM SOBREPOSIÇÃO)
    // ==========================================================================
    window.activatePilar = (pilarKey) => {
        const data = database[pilarKey];

        // Limpa heranças de ativação visual dos botões irmãos
        document.querySelectorAll('.btn-pilar-unificado').forEach(btn => {
            btn.classList.remove('active-pilar');
        });
        
        // Ativa o gatilho cromático do botão clicado
        const currentButton = event.currentTarget;
        currentButton.classList.add('active-pilar');

        if (data && displayBox) {
            // Caso já esteja visível, faz um recuo rápido antes do re-render
            if (!displayBox.classList.contains('hidden')) {
                displayBox.classList.add('opacity-0', 'translate-y-6');
                displayImage.classList.add('scale-95', 'opacity-0');
                setTimeout(() => { 
                    renderDataToPanel(data); 
                }, 200);
            } else {
                displayBox.classList.remove('hidden');
                setTimeout(() => { 
                    renderDataToPanel(data); 
                }, 30);
            }
        }
    };

    function renderDataToPanel(data) {
        // Vincula as propriedades do banco ao DOM
        displayTitle.textContent = data.title;
        displayText.textContent = data.text;
        displayImage.style.backgroundImage = `url('${data.image}')`;
        whatsappLink.href = `https://wa.me/5562983077512?text=${encodeURIComponent(data.wpText)}`;

        // Libera opacidade e projeta a elevação fluida do container
        displayBox.classList.remove('opacity-0', 'translate-y-6');
        displayBox.classList.add('opacity-100', 'translate-y-0');
        
        setTimeout(() => {
            displayImage.classList.remove('scale-95', 'opacity-0');
            displayImage.classList.add('scale-100', 'opacity-100');
        }, 100);
    }

    // ==========================================================================
    // 🗺️ CONTROLE EXPANSÍVEL DO OVERLAY MODAL DO HUB TÉCNICO
    // ==========================================================================
    window.openTechnicalHubPage = (shouldOpen) => {
        if (!hubModal) return;

        if (shouldOpen) {
            hubModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Bloqueia scroll por trás do frame
            setTimeout(() => { 
                hubModal.classList.remove('translate-y-full'); 
            }, 50);
        } else {
            hubModal.classList.add('translate-y-full');
            document.body.style.overflow = ''; // Libera navegação da viewport principal
            setTimeout(() => { 
                hubModal.classList.add('hidden'); 
            }, 400); // Sincronizado com a velocidade cúbica do CSS
        }
    };

    // Acessibilidade: Tecla ESC encerra o portfólio de obras
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') window.openTechnicalHubPage(false);
    });
});