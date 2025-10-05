// K'oxol - Página "Acerca de" / Nosotros
// Conoce nuestra historia 🌿📖
// API Reference: https://www.wix.com/velo/reference/api-overview/introduction

import wixLocation from 'wix-location';

$w.onReady(function () {
    console.log("K'oxol Nosotros - Página cargada 🏢🌿");
    
    // Inicializar página acerca de
    initializeAboutPage();
});

/**
 * Inicializa todas las funcionalidades de la página acerca de
 */
function initializeAboutPage() {
    // Configurar sección hero
    setupAboutHero();
    
    // Configurar timeline de historia
    setupHistoryTimeline();
    
    // Configurar sección misión, visión, valores
    setupMissionSection();
    
    // Configurar equipo (si existe)
    setupTeamSection();
    
    // Configurar proceso de fabricación
    setupProcessSection();
    
    // Configurar CTAs de la página
    setupAboutCTAs();
    
    // Configurar animaciones
    setupAboutAnimations();
    
    console.log("Página Acerca de K'oxol inicializada ✅");
}

/**
 * Configura la sección hero de acerca de
 */
function setupAboutHero() {
    try {
        // Configurar video/imagen hero (si existe)
        if ($w("#aboutHeroVideo")) {
            // El video se reproduce automáticamente en mute
            console.log("Video hero configurado");
        }
        
        // CTA principal de la sección hero
        if ($w("#aboutHeroCTA")) {
            $w("#aboutHeroCTA").onClick(() => {
                // Scroll a la sección de historia
                scrollToSection("#historySection");
            });
        }
        
        console.log("Hero de Nosotros configurado ✅");
    } catch (error) {
        console.log("Error configurando hero:", error);
    }
}

/**
 * Configura el timeline de la historia de K'oxol
 */
function setupHistoryTimeline() {
    try {
        // Historia de K'oxol (datos de ejemplo)
        const historyMilestones = [
            {
                year: "2020",
                title: "Nace K'oxol",
                description: "Con la misión de proteger a las familias mexicanas de manera natural y segura.",
                icon: "🌱"
            },
            {
                year: "2021", 
                title: "Primeros Productos",
                description: "Lanzamos nuestros primeros sprays repelentes 100% naturales con citronela.",
                icon: "🧴"
            },
            {
                year: "2022",
                title: "Expansión Nacional",
                description: "Llegamos a más estados de México con nuestra línea completa de productos.",
                icon: "🇲🇽"
            },
            {
                year: "2023",
                title: "Reconocimiento",
                description: "Certificación como empresa 100% mexicana comprometida con el medio ambiente.",
                icon: "🏆"
            },
            {
                year: "2024",
                title: "Innovación Continua",
                description: "Nuevos productos y alianzas estratégicas para seguir creciendo.",
                icon: "🚀"
            }
        ];
        
        // Mostrar timeline si existe el container
        if ($w("#historyTimeline")) {
            displayHistoryTimeline(historyMilestones);
        }
        
        console.log("Timeline de historia configurado ✅");
    } catch (error) {
        console.log("Error configurando timeline:", error);
    }
}

/**
 * Muestra el timeline de historia
 */
function displayHistoryTimeline(milestones) {
    try {
        milestones.forEach((milestone, index) => {
            const timelineItem = $w(`#timelineItem${index + 1}`);
            if (timelineItem) {
                // Configurar año
                const yearElement = $w(`#timelineYear${index + 1}`);
                if (yearElement) {
                    yearElement.text = milestone.year;
                }
                
                // Configurar título
                const titleElement = $w(`#timelineTitle${index + 1}`);
                if (titleElement) {
                    titleElement.text = milestone.title;
                }
                
                // Configurar descripción
                const descElement = $w(`#timelineDesc${index + 1}`);
                if (descElement) {
                    descElement.text = milestone.description;
                }
                
                // Configurar icono
                const iconElement = $w(`#timelineIcon${index + 1}`);
                if (iconElement) {
                    iconElement.text = milestone.icon;
                }
                
                // Animación de entrada escalonada
                setTimeout(() => {
                    timelineItem.show("fadeIn", { duration: 600 });
                }, index * 200);
            }
        });
    } catch (error) {
        console.log("Error mostrando timeline:", error);
    }
}

/**
 * Configura la sección de misión, visión y valores
 */
function setupMissionSection() {
    try {
        // Datos de la empresa
        const companyInfo = {
            mission: "Proteger a las familias mexicanas con productos repelentes 100% naturales, efectivos y seguros, contribuyendo al bienestar de nuestras comunidades y el cuidado del medio ambiente.",
            vision: "Ser la marca líder de repelentes naturales en México, reconocida por nuestra calidad, innovación y compromiso con la salud familiar y el planeta.",
            values: [
                {
                    icon: "🌿",
                    title: "Natural y Ecológico", 
                    description: "Productos 100% naturales que respetan el medio ambiente"
                },
                {
                    icon: "🇲🇽",
                    title: "Hecho en México",
                    description: "Orgullosamente mexicanos, apoyando la economía local"
                },
                {
                    icon: "✅", 
                    title: "Calidad Garantizada",
                    description: "Estrictos controles de calidad en cada producto"
                },
                {
                    icon: "♻️",
                    title: "Compromiso Ambiental", 
                    description: "Cuidamos el planeta para las futuras generaciones"
                },
                {
                    icon: "👨‍👩‍👧‍👦",
                    title: "Salud Familiar",
                    description: "Protección segura para toda la familia"
                }
            ]
        };
        
        // Configurar misión
        if ($w("#missionText")) {
            $w("#missionText").text = companyInfo.mission;
        }
        
        // Configurar visión  
        if ($w("#visionText")) {
            $w("#visionText").text = companyInfo.vision;
        }
        
        // Configurar valores
        displayCompanyValues(companyInfo.values);
        
        console.log("Sección misión/visión/valores configurada ✅");
    } catch (error) {
        console.log("Error configurando misión/visión:", error);
    }
}

/**
 * Muestra los valores de la empresa
 */
function displayCompanyValues(values) {
    try {
        values.forEach((value, index) => {
            const valueContainer = $w(`#value${index + 1}`);
            if (valueContainer) {
                // Icono del valor
                const iconElement = $w(`#valueIcon${index + 1}`);
                if (iconElement) {
                    iconElement.text = value.icon;
                }
                
                // Título del valor
                const titleElement = $w(`#valueTitle${index + 1}`);
                if (titleElement) {
                    titleElement.text = value.title;
                }
                
                // Descripción del valor
                const descElement = $w(`#valueDesc${index + 1}`);
                if (descElement) {
                    descElement.text = value.description;
                }
            }
        });
    } catch (error) {
        console.log("Error mostrando valores:", error);
    }
}

/**
 * Configura la sección del equipo
 */
function setupTeamSection() {
    try {
        // Información del equipo (datos de ejemplo)
        const teamMembers = [
            {
                name: "María González",
                position: "CEO & Fundadora", 
                description: "15 años de experiencia en productos naturales",
                image: "/images/team/maria.jpg" // Ruta de ejemplo
            },
            {
                name: "Carlos Hernández",
                position: "Director de Producción",
                description: "Especialista en formulación de productos naturales", 
                image: "/images/team/carlos.jpg"
            },
            {
                name: "Ana López",
                position: "Directora de Marketing",
                description: "Experta en marcas sustentables y comunicación",
                image: "/images/team/ana.jpg"  
            }
        ];
        
        // Mostrar equipo si existe la sección
        if ($w("#teamSection")) {
            displayTeamMembers(teamMembers);
        }
        
        console.log("Sección de equipo configurada ✅");
    } catch (error) {
        console.log("Sección de equipo no disponible");
    }
}

/**
 * Muestra los miembros del equipo
 */
function displayTeamMembers(members) {
    try {
        members.forEach((member, index) => {
            const memberContainer = $w(`#teamMember${index + 1}`);
            if (memberContainer) {
                // Foto del miembro
                const photoElement = $w(`#teamPhoto${index + 1}`);
                if (photoElement) {
                    photoElement.src = member.image;
                    photoElement.alt = member.name;
                }
                
                // Nombre
                const nameElement = $w(`#teamName${index + 1}`);
                if (nameElement) {
                    nameElement.text = member.name;
                }
                
                // Posición
                const positionElement = $w(`#teamPosition${index + 1}`);
                if (positionElement) {
                    positionElement.text = member.position;
                }
                
                // Descripción
                const descElement = $w(`#teamDesc${index + 1}`);
                if (descElement) {
                    descElement.text = member.description;
                }
            }
        });
    } catch (error) {
        console.log("Error mostrando equipo:", error);
    }
}

/**
 * Configura la sección del proceso de fabricación  
 */
function setupProcessSection() {
    try {
        // Pasos del proceso de fabricación
        const processSteps = [
            {
                step: "1",
                title: "Selección de Ingredientes",
                description: "Cuidadosa selección de ingredientes naturales mexicanos de la más alta calidad.",
                icon: "🌿"
            },
            {
                step: "2", 
                title: "Formulación Natural",
                description: "Nuestros expertos formulan productos efectivos 100% naturales y seguros.",
                icon: "⚗️"
            },
            {
                step: "3",
                title: "Producción Controlada", 
                description: "Proceso de fabricación con estrictos controles de calidad y pureza.",
                icon: "🏭"
            },
            {
                step: "4",
                title: "Pruebas de Calidad",
                description: "Exhaustivas pruebas para garantizar efectividad y seguridad del producto.",
                icon: "✅"
            },
            {
                step: "5",
                title: "Empaque Sostenible",
                description: "Empaque eco-amigable que preserva las propiedades del producto.",
                icon: "📦"
            }
        ];
        
        // Configurar video del proceso (si existe)
        if ($w("#processVideo")) {
            setupProcessVideo();
        }
        
        // Mostrar pasos del proceso
        if ($w("#processSteps")) {
            displayProcessSteps(processSteps);
        }
        
        console.log("Sección de proceso configurada ✅");
    } catch (error) {
        console.log("Error configurando proceso:", error);
    }
}

/**
 * Configura el video del proceso
 */
function setupProcessVideo() {
    try {
        // Controles del video del proceso
        if ($w("#playProcessVideo")) {
            $w("#playProcessVideo").onClick(() => {
                $w("#processVideo").play();
                $w("#playProcessVideo").hide();
            });
        }
        
        // Cuando termina el video, mostrar botón de nuevo
        if ($w("#processVideo")) {
            $w("#processVideo").onEnded(() => {
                $w("#playProcessVideo").show();
            });
        }
    } catch (error) {
        console.log("Error configurando video del proceso:", error);
    }
}

/**
 * Muestra los pasos del proceso
 */
function displayProcessSteps(steps) {
    try {
        steps.forEach((step, index) => {
            const stepContainer = $w(`#processStep${index + 1}`);
            if (stepContainer) {
                // Número del paso
                const stepNumber = $w(`#stepNumber${index + 1}`);
                if (stepNumber) {
                    stepNumber.text = step.step;
                }
                
                // Icono del paso
                const stepIcon = $w(`#stepIcon${index + 1}`);
                if (stepIcon) {
                    stepIcon.text = step.icon;
                }
                
                // Título del paso
                const stepTitle = $w(`#stepTitle${index + 1}`);
                if (stepTitle) {
                    stepTitle.text = step.title;
                }
                
                // Descripción del paso
                const stepDesc = $w(`#stepDesc${index + 1}`);
                if (stepDesc) {
                    stepDesc.text = step.description;
                }
            }
        });
    } catch (error) {
        console.log("Error mostrando pasos del proceso:", error);
    }
}

/**
 * Configura los CTAs de la página acerca de
 */
function setupAboutCTAs() {
    try {
        // CTA "Conoce nuestros productos"
        if ($w("#verProductosCTA")) {
            $w("#verProductosCTA").onClick(() => {
                wixLocation.to("/productos");
            });
        }
        
        // CTA "Contáctanos"
        if ($w("#contactanosAboutCTA")) {
            $w("#contactanosAboutCTA").onClick(() => {
                wixLocation.to("/contacto");
            });
        }
        
        // CTA "Únete al equipo" (si existe)
        if ($w("#uneteEquipoCTA")) {
            $w("#uneteEquipoCTA").onClick(() => {
                wixLocation.to("/contacto?tipo=trabajo");
            });
        }
        
        // CTA "Ser distribuidor"
        if ($w("#serDistribuidorCTA")) {
            $w("#serDistribuidorCTA").onClick(() => {
                wixLocation.to("/contacto?tipo=distribuidor");
            });
        }
        
        console.log("CTAs de Nosotros configurados ✅");
    } catch (error) {
        console.log("Error configurando CTAs:", error);
    }
}

/**
 * Configura las animaciones de la página
 */
function setupAboutAnimations() {
    try {
        // Elementos que aparecen al hacer scroll
        const animatedSections = [
            "#historySection",
            "#missionSection", 
            "#visionSection",
            "#valuesSection",
            "#teamSection",
            "#processSection"
        ];
        
        animatedSections.forEach(selector => {
            if ($w(selector)) {
                $w(selector).onViewportEnter(() => {
                    $w(selector).show("fadeIn", { duration: 800 });
                });
            }
        });
        
        // Animación especial para valores (aparecen uno por uno)
        for (let i = 1; i <= 5; i++) {
            const valueElement = $w(`#value${i}`);
            if (valueElement) {
                valueElement.onViewportEnter(() => {
                    setTimeout(() => {
                        valueElement.show("fadeInUp", { duration: 600 });
                    }, (i - 1) * 100);
                });
            }
        }
        
        console.log("Animaciones de Nosotros configuradas ✅");
    } catch (error) {
        console.log("Error configurando animaciones:", error);
    }
}

/**
 * Utilidades
 */

/**
 * Hace scroll suave a una sección
 */
function scrollToSection(selector) {
    try {
        if ($w(selector)) {
            $w(selector).scrollTo();
        }
    } catch (error) {
        console.log("Error en scroll:", error);
    }
}

console.log("K'oxol Nosotros - Todas las funcionalidades cargadas 🏢✅");erence: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    // Write your JavaScript here

    // To select an element by ID use: $w('#elementID')

    // Click 'Preview' to run your code
});
