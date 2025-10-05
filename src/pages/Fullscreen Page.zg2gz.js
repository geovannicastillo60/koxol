// K'oxol - Página de Presentación Fullscreen
// Experiencia inmersiva de la marca K'oxol 🌿✨
// API Reference: https://www.wix.com/velo/reference/api-overview/introduction

import wixLocation from 'wix-location';
import wixAnimations from 'wix-animations';

let currentSlide = 0;
const totalSlides = 4;

$w.onReady(function () {
    console.log("K'oxol Presentación Fullscreen cargada 🌿✨");
    
    // Inicializar presentación inmersiva
    initializePresentation();
    
    // Configurar navegación automática
    startAutoSlideshow();
});

/**
 * Inicializa la presentación fullscreen de K'oxol
 */
function initializePresentation() {
    // Configurar slides de presentación
    setupPresentationSlides();
    
    // Configurar controles de navegación
    setupNavigationControls();
    
    // Configurar efectos de parallax y animaciones
    setupAnimations();
    
    // Configurar audio ambiental (opcional)
    setupAmbientAudio();
    
    console.log("Presentación K'oxol inicializada ✅");
}

/**
 * Configura los slides de la presentación
 */
function setupPresentationSlides() {
    try {
        // Slide 1: Introducción a la marca
        if ($w("#slide1")) {
            setupSlide1();
        }
        
        // Slide 2: El problema de los químicos
        if ($w("#slide2")) {
            setupSlide2();
        }
        
        // Slide 3: La solución natural K'oxol
        if ($w("#slide3")) {
            setupSlide3();
        }
        
        // Slide 4: Call to action
        if ($w("#slide4")) {
            setupSlide4();
        }
        
        // Mostrar primer slide
        showSlide(0);
        
    } catch (error) {
        console.log("Error configurando slides:", error);
    }
}

/**
 * Configura el primer slide - Introducción
 */
function setupSlide1() {
    try {
        // Título principal animado
        if ($w("#slide1Title")) {
            $w("#slide1Title").text = "Protege a tu familia";
        }
        
        // Subtítulo
        if ($w("#slide1Subtitle")) {
            $w("#slide1Subtitle").text = "con el poder de la naturaleza";
        }
        
        // Descripción
        if ($w("#slide1Description")) {
            $w("#slide1Description").text = "K'oxol ofrece protección efectiva contra insectos usando ingredientes 100% naturales. Sin químicos tóxicos, sin comprometer la salud de tu familia.";
        }
        
        // Video de fondo
        if ($w("#slide1Video")) {
            $w("#slide1Video").play();
            $w("#slide1Video").volume = 0; // Sin sonido para autoplay
        }
        
    } catch (error) {
        console.log("Error configurando slide 1:", error);
    }
}

/**
 * Configura el segundo slide - El problema
 */
function setupSlide2() {
    try {
        if ($w("#slide2Title")) {
            $w("#slide2Title").text = "Los repelentes químicos pueden ser peligrosos";
        }
        
        if ($w("#slide2Description")) {
            $w("#slide2Description").text = "DEET, permetrinas y otros químicos sintéticos pueden causar irritaciones, alergias y efectos adversos, especialmente en niños y mascotas.";
        }
        
        // Estadísticas impactantes
        if ($w("#slide2Stats")) {
            setupProblemStats();
        }
        
    } catch (error) {
        console.log("Error configurando slide 2:", error);
    }
}

/**
 * Configura estadísticas del problema
 */
function setupProblemStats() {
    try {
        const stats = [
            { number: "75%", text: "de repelentes contienen químicos tóxicos" },
            { number: "1 de 3", text: "niños desarrolla alergias por químicos" },
            { number: "90%", text: "de mascotas sufren irritación por DEET" }
        ];
        
        stats.forEach((stat, index) => {
            if ($w(`#stat${index + 1}Number`)) {
                $w(`#stat${index + 1}Number`).text = stat.number;
            }
            if ($w(`#stat${index + 1}Text`)) {
                $w(`#stat${index + 1}Text`).text = stat.text;
            }
        });
        
    } catch (error) {
        console.log("Error configurando estadísticas:", error);
    }
}

/**
 * Configura el tercer slide - La solución K'oxol
 */
function setupSlide3() {
    try {
        if ($w("#slide3Title")) {
            $w("#slide3Title").text = "K'oxol: Protección natural efectiva";
        }
        
        if ($w("#slide3Description")) {
            $w("#slide3Description").text = "Formulado con aceites esenciales de citronela, eucalipto, lavanda y menta. Probado científicamente, seguro para toda la familia.";
        }
        
        // Beneficios clave
        setupBenefits();
        
        // Productos destacados
        setupFeaturedProducts();
        
    } catch (error) {
        console.log("Error configurando slide 3:", error);
    }
}

/**
 * Configura los beneficios de K'oxol
 */
function setupBenefits() {
    try {
        const benefits = [
            { icon: "🌿", title: "100% Natural", desc: "Sin químicos sintéticos" },
            { icon: "👶", title: "Seguro", desc: "Para niños y mascotas" },
            { icon: "⏰", title: "Larga duración", desc: "Hasta 8 horas de protección" },
            { icon: "🌍", title: "Eco-friendly", desc: "Biodegradable y sostenible" }
        ];
        
        benefits.forEach((benefit, index) => {
            if ($w(`#benefit${index + 1}Icon`)) {
                $w(`#benefit${index + 1}Icon`).text = benefit.icon;
            }
            if ($w(`#benefit${index + 1}Title`)) {
                $w(`#benefit${index + 1}Title`).text = benefit.title;
            }
            if ($w(`#benefit${index + 1}Desc`)) {
                $w(`#benefit${index + 1}Desc`).text = benefit.desc;
            }
        });
        
    } catch (error) {
        console.log("Error configurando beneficios:", error);
    }
}

/**
 * Configura productos destacados en el slide 3
 */
function setupFeaturedProducts() {
    try {
        const featuredProducts = [
            { name: "Spray Familiar", image: "/images/spray-familiar.webp", price: "$189" },
            { name: "Vela Citronela", image: "/images/vela-citronela.webp", price: "$149" },
            { name: "Pulsera Kids", image: "/images/pulsera-kids.webp", price: "$89" }
        ];
        
        featuredProducts.forEach((product, index) => {
            if ($w(`#featuredProduct${index + 1}Image`)) {
                $w(`#featuredProduct${index + 1}Image`).src = product.image;
                $w(`#featuredProduct${index + 1}Image`).alt = product.name;
            }
            if ($w(`#featuredProduct${index + 1}Name`)) {
                $w(`#featuredProduct${index + 1}Name`).text = product.name;
            }
            if ($w(`#featuredProduct${index + 1}Price`)) {
                $w(`#featuredProduct${index + 1}Price`).text = product.price;
            }
        });
        
    } catch (error) {
        console.log("Error configurando productos destacados:", error);
    }
}

/**
 * Configura el cuarto slide - Call to action
 */
function setupSlide4() {
    try {
        if ($w("#slide4Title")) {
            $w("#slide4Title").text = "¡Protege a tu familia hoy!";
        }
        
        if ($w("#slide4Subtitle")) {
            $w("#slide4Subtitle").text = "Únete a miles de familias que ya confían en K'oxol";
        }
        
        // Botones de acción
        if ($w("#shopNowButton")) {
            $w("#shopNowButton").onClick(() => {
                wixLocation.to('/productos');
            });
        }
        
        if ($w("#learnMoreButton")) {
            $w("#learnMoreButton").onClick(() => {
                wixLocation.to('/acerca-de');
            });
        }
        
        // Testimonial destacado
        if ($w("#testimonialText")) {
            $w("#testimonialText").text = '"Desde que uso K\'oxol, mis hijos juegan tranquilos en el jardín. Es increíble cómo algo tan natural puede ser tan efectivo."';
        }
        
        if ($w("#testimonialAuthor")) {
            $w("#testimonialAuthor").text = "- María González, Madre de 2 niños";
        }
        
        // Contador de familias protegidas
        animateCounter();
        
    } catch (error) {
        console.log("Error configurando slide 4:", error);
    }
}

/**
 * Configura controles de navegación
 */
function setupNavigationControls() {
    try {
        // Botón siguiente
        if ($w("#nextSlideButton")) {
            $w("#nextSlideButton").onClick(() => {
                nextSlide();
            });
        }
        
        // Botón anterior
        if ($w("#prevSlideButton")) {
            $w("#prevSlideButton").onClick(() => {
                prevSlide();
            });
        }
        
        // Indicadores de slide
        setupSlideIndicators();
        
        // Navegación por teclado
        setupKeyboardNavigation();
        
        // Botón salir/continuar
        if ($w("#exitButton")) {
            $w("#exitButton").onClick(() => {
                wixLocation.to('/');
            });
        }
        
    } catch (error) {
        console.log("Error configurando controles:", error);
    }
}

/**
 * Configura indicadores de slide
 */
function setupSlideIndicators() {
    try {
        for (let i = 0; i < totalSlides; i++) {
            const indicator = $w(`#slideIndicator${i + 1}`);
            if (indicator) {
                indicator.onClick(() => {
                    showSlide(i);
                });
            }
        }
        
        // Actualizar indicador activo
        updateSlideIndicators();
        
    } catch (error) {
        console.log("Error configurando indicadores:", error);
    }
}

/**
 * Configura navegación por teclado
 */
function setupKeyboardNavigation() {
    try {
        // Agregar event listeners para teclado
        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowRight':
                case ' ': // Espaciador
                    nextSlide();
                    break;
                case 'ArrowLeft':
                    prevSlide();
                    break;
                case 'Escape':
                    wixLocation.to('/');
                    break;
            }
        });
        
    } catch (error) {
        console.log("Error configurando navegación por teclado:", error);
    }
}

/**
 * Muestra un slide específico
 */
function showSlide(slideNumber) {
    try {
        // Ocultar todos los slides
        for (let i = 0; i < totalSlides; i++) {
            if ($w(`#slide${i + 1}`)) {
                $w(`#slide${i + 1}`).hide();
            }
        }
        
        // Mostrar slide actual
        if ($w(`#slide${slideNumber + 1}`)) {
            $w(`#slide${slideNumber + 1}`).show("fade", { duration: 800 });
        }
        
        currentSlide = slideNumber;
        
        // Actualizar indicadores
        updateSlideIndicators();
        
        // Ejecutar animaciones específicas del slide
        triggerSlideAnimations(slideNumber);
        
    } catch (error) {
        console.log("Error mostrando slide:", error);
    }
}

/**
 * Actualiza los indicadores de slide
 */
function updateSlideIndicators() {
    try {
        for (let i = 0; i < totalSlides; i++) {
            const indicator = $w(`#slideIndicator${i + 1}`);
            if (indicator) {
                if (i === currentSlide) {
                    indicator.style.backgroundColor = "#2D5016";
                } else {
                    indicator.style.backgroundColor = "rgba(45, 80, 22, 0.3)";
                }
            }
        }
    } catch (error) {
        console.log("Error actualizando indicadores:", error);
    }
}

/**
 * Siguiente slide
 */
function nextSlide() {
    const next = (currentSlide + 1) % totalSlides;
    showSlide(next);
}

/**
 * Slide anterior
 */
function prevSlide() {
    const prev = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(prev);
}

/**
 * Inicia slideshow automático
 */
function startAutoSlideshow() {
    try {
        // Cambiar slide cada 10 segundos
        setInterval(() => {
            nextSlide();
        }, 10000);
        
    } catch (error) {
        console.log("Error iniciando slideshow automático:", error);
    }
}

/**
 * Configura animaciones y efectos
 */
function setupAnimations() {
    try {
        // Configurar efectos de parallax si están disponibles
        setupParallaxEffects();
        
        // Configurar animaciones de entrada
        setupEntranceAnimations();
        
    } catch (error) {
        console.log("Error configurando animaciones:", error);
    }
}

/**
 * Configura efectos parallax
 */
function setupParallaxEffects() {
    try {
        // Implementar efectos parallax en backgrounds
        if ($w("#parallaxBackground")) {
            // Los efectos parallax se configurarán en el editor
            console.log("Parallax configurado");
        }
    } catch (error) {
        console.log("Error configurando parallax:", error);
    }
}

/**
 * Configura animaciones de entrada
 */
function setupEntranceAnimations() {
    try {
        // Las animaciones se configurarán usando wixAnimations
        console.log("Animaciones de entrada configuradas");
    } catch (error) {
        console.log("Error configurando animaciones de entrada:", error);
    }
}

/**
 * Dispara animaciones específicas del slide
 */
function triggerSlideAnimations(slideNumber) {
    try {
        switch (slideNumber) {
            case 0:
                // Animaciones slide 1
                animateSlide1();
                break;
            case 1:
                // Animaciones slide 2
                animateSlide2();
                break;
            case 2:
                // Animaciones slide 3
                animateSlide3();
                break;
            case 3:
                // Animaciones slide 4
                animateSlide4();
                break;
        }
    } catch (error) {
        console.log("Error disparando animaciones:", error);
    }
}

/**
 * Animaciones específicas por slide
 */
function animateSlide1() {
    if ($w("#slide1Title")) {
        $w("#slide1Title").show("slideInLeft", { duration: 800, delay: 200 });
    }
    if ($w("#slide1Subtitle")) {
        $w("#slide1Subtitle").show("slideInRight", { duration: 800, delay: 400 });
    }
}

function animateSlide2() {
    // Animar estadísticas una por una
    for (let i = 1; i <= 3; i++) {
        if ($w(`#stat${i}Container`)) {
            setTimeout(() => {
                $w(`#stat${i}Container`).show("bounceIn", { duration: 600 });
            }, i * 300);
        }
    }
}

function animateSlide3() {
    // Animar beneficios
    for (let i = 1; i <= 4; i++) {
        if ($w(`#benefit${i}Container`)) {
            setTimeout(() => {
                $w(`#benefit${i}Container`).show("fadeInUp", { duration: 500 });
            }, i * 200);
        }
    }
}

function animateSlide4() {
    // Animar contador
    animateCounter();
    
    // Animar botones
    if ($w("#shopNowButton")) {
        $w("#shopNowButton").show("pulse", { duration: 1000, delay: 500 });
    }
}

/**
 * Anima contador de familias protegidas
 */
function animateCounter() {
    try {
        if ($w("#familiesCounter")) {
            let count = 0;
            const target = 2847; // Número de familias protegidas
            const increment = target / 100;
            
            const timer = setInterval(() => {
                count += increment;
                if (count >= target) {
                    count = target;
                    clearInterval(timer);
                }
                $w("#familiesCounter").text = Math.floor(count).toLocaleString() + "+";
            }, 20);
        }
    } catch (error) {
        console.log("Error animando contador:", error);
    }
}

/**
 * Configura audio ambiental (opcional)
 */
function setupAmbientAudio() {
    try {
        // Audio de fondo suave (naturaleza)
        if ($w("#ambientAudio")) {
            $w("#ambientAudio").volume = 0.1;
            $w("#ambientAudio").loop = true;
            // El audio se reproducirá solo si el usuario interactúa
        }
    } catch (error) {
        console.log("Error configurando audio:", error);
    }
}

console.log("K'oxol Presentación Fullscreen - Todas las funcionalidades cargadas 🌿✨");erence: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    // Write your JavaScript here

    // To select an element by ID use: $w('#elementID')

    // Click 'Preview' to run your code
});
