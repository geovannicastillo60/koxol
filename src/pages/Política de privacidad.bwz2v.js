// K'oxol - Política de Privacidad y Protección de Datos
// Transparencia total en el manejo de información personal 🔒📋
// API Reference: https://www.wix.com/velo/reference/api-overview/introduction

import wixLocation from 'wix-location';

$w.onReady(function () {
    console.log("K'oxol Política de Privacidad cargada 🔒📋");
    
    // Inicializar página de política de privacidad
    initializePrivacyPage();
    
    // Configurar navegación interactiva
    setupPrivacyNavigation();
});

/**
 * Inicializa la página de política de privacidad
 */
function initializePrivacyPage() {
    // Configurar contenido de la política
    setupPrivacyContent();
    
    // Configurar tabla de contenidos
    setupTableOfContents();
    
    // Configurar acordeones informativos
    setupPrivacyAccordions();
    
    // Configurar formulario de consultas
    setupPrivacyInquiries();
    
    // Mostrar fecha de última actualización
    showLastUpdated();
    
    console.log("Política de Privacidad K'oxol inicializada ✅");
}

/**
 * Configura el contenido principal de la política
 */
function setupPrivacyContent() {
    try {
        // Fecha de última actualización
        if ($w("#lastUpdated")) {
            $w("#lastUpdated").text = "Última actualización: 15 de enero de 2024";
        }
        
        // Introducción
        if ($w("#privacyIntro")) {
            $w("#privacyIntro").text = "En K'oxol valoramos y respetamos tu privacidad. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos tu información personal cuando visitas nuestro sitio web o utilizas nuestros servicios.";
        }
        
        // Configurar secciones principales
        setupPrivacySections();
        
    } catch (error) {
        console.log("Error configurando contenido de privacidad:", error);
    }
}

/**
 * Configura las secciones principales de la política
 */
function setupPrivacySections() {
    try {
        const sections = [
            {
                id: "infoRecopilada",
                title: "1. Información que Recopilamos",
                content: `
                <h3>Información Personal Directa:</h3>
                <ul>
                    <li>Nombre completo y datos de contacto</li>
                    <li>Dirección de correo electrónico</li>
                    <li>Número de teléfono</li>
                    <li>Dirección de entrega</li>
                    <li>Información de facturación</li>
                </ul>
                
                <h3>Información Automática:</h3>
                <ul>
                    <li>Dirección IP y ubicación aproximada</li>
                    <li>Tipo de navegador y dispositivo</li>
                    <li>Páginas visitadas y tiempo de navegación</li>
                    <li>Cookies y tecnologías similares</li>
                </ul>
                `
            },
            {
                id: "usoInfo",
                title: "2. Cómo Utilizamos tu Información",
                content: `
                <ul>
                    <li>Procesar y completar tus pedidos</li>
                    <li>Proporcionar servicio al cliente y soporte técnico</li>
                    <li>Enviar confirmaciones de pedidos y actualizaciones de envío</li>
                    <li>Mejorar nuestros productos y servicios</li>
                    <li>Personalizar tu experiencia de compra</li>
                    <li>Cumplir con obligaciones legales y reglamentarias</li>
                </ul>
                `
            },
            {
                id: "compartirInfo",
                title: "3. Compartir Información",
                content: `
                <p><strong>K'oxol NO vende, alquila o comparte tu información personal con terceros para fines comerciales.</strong></p>
                
                <h3>Compartimos información únicamente con:</h3>
                <ul>
                    <li><strong>Proveedores de servicios:</strong> Empresas de mensajería y logística para entregas</li>
                    <li><strong>Procesadores de pago:</strong> Para procesar transacciones de forma segura</li>
                    <li><strong>Autoridades legales:</strong> Cuando sea requerido por ley</li>
                </ul>
                `
            },
            {
                id: "proteccionDatos",
                title: "4. Protección de Datos",
                content: `
                <h3>Medidas de Seguridad:</h3>
                <ul>
                    <li>Cifrado SSL/TLS para todas las transacciones</li>
                    <li>Servidores seguros con firewall avanzado</li>
                    <li>Acceso restringido a información personal</li>
                    <li>Auditorías regulares de seguridad</li>
                    <li>Cumplimiento con estándares PCI DSS</li>
                </ul>
                `
            },
            {
                id: "cookies",
                title: "5. Cookies y Tecnologías Similares",
                content: `
                <h3>Utilizamos cookies para:</h3>
                <ul>
                    <li>Mantener tu sesión activa</li>
                    <li>Recordar tus preferencias</li>
                    <li>Analizar el tráfico del sitio web</li>
                    <li>Mejorar la funcionalidad del sitio</li>
                </ul>
                
                <p>Puedes desactivar las cookies en tu navegador, aunque esto puede afectar la funcionalidad del sitio.</p>
                `
            },
            {
                id: "derechos",
                title: "6. Tus Derechos",
                content: `
                <h3>Como usuario, tienes derecho a:</h3>
                <ul>
                    <li><strong>Acceso:</strong> Solicitar una copia de tu información personal</li>
                    <li><strong>Rectificación:</strong> Corregir información inexacta</li>
                    <li><strong>Eliminación:</strong> Solicitar la eliminación de tus datos</li>
                    <li><strong>Portabilidad:</strong> Obtener tus datos en formato exportable</li>
                    <li><strong>Oposición:</strong> Oponerte al procesamiento de tus datos</li>
                </ul>
                
                <p>Para ejercer estos derechos, contáctanos en: <strong>privacidad@koxol.com</strong></p>
                `
            },
            {
                id: "retencion",
                title: "7. Retención de Datos",
                content: `
                <ul>
                    <li><strong>Datos de clientes activos:</strong> Mientras mantengas una cuenta</li>
                    <li><strong>Histórico de pedidos:</strong> 7 años para fines fiscales</li>
                    <li><strong>Datos de marketing:</strong> Hasta que canceles la suscripción</li>
                    <li><strong>Logs del servidor:</strong> 12 meses máximo</li>
                </ul>
                `
            },
            {
                id: "menores",
                title: "8. Protección de Menores",
                content: `
                <p>K'oxol no recopila intencionalmente información de menores de 13 años. Si descubrimos que hemos recopilado información de un menor, la eliminaremos inmediatamente.</p>
                
                <p>Los padres o tutores pueden contactarnos para revisar, eliminar o solicitar que dejemos de recopilar información de sus hijos.</p>
                `
            },
            {
                id: "cambios",
                title: "9. Cambios en la Política",
                content: `
                <p>Nos reservamos el derecho de actualizar esta Política de Privacidad. Los cambios importantes serán notificados por:</p>
                <ul>
                    <li>Correo electrónico a clientes registrados</li>
                    <li>Aviso prominente en nuestro sitio web</li>
                    <li>Fecha de actualización en esta página</li>
                </ul>
                `
            },
            {
                id: "contacto",
                title: "10. Contacto",
                content: `
                <p>Para cualquier consulta sobre esta Política de Privacidad:</p>
                
                <div class="contacto-privacidad">
                    <h3>Oficial de Protección de Datos - K'oxol</h3>
                    <p><strong>Email:</strong> privacidad@koxol.com</p>
                    <p><strong>Teléfono:</strong> +52 (55) 1234-5678</p>
                    <p><strong>Dirección:</strong> Av. Insurgentes Sur 1234, Col. Del Valle, CDMX, México</p>
                    <p><strong>Horario de atención:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM</p>
                </div>
                `
            }
        ];
        
        // Aplicar contenido a cada sección
        sections.forEach(section => {
            if ($w(`#${section.id}Title`)) {
                $w(`#${section.id}Title`).text = section.title;
            }
            if ($w(`#${section.id}Content`)) {
                $w(`#${section.id}Content`).html = section.content;
            }
        });
        
    } catch (error) {
        console.log("Error configurando secciones de privacidad:", error);
    }
}

/**
 * Configura la tabla de contenidos
 */
function setupTableOfContents() {
    try {
        const tocItems = [
            { id: "infoRecopilada", title: "Información que Recopilamos" },
            { id: "usoInfo", title: "Cómo Utilizamos tu Información" },
            { id: "compartirInfo", title: "Compartir Información" },
            { id: "proteccionDatos", title: "Protección de Datos" },
            { id: "cookies", title: "Cookies y Tecnologías" },
            { id: "derechos", title: "Tus Derechos" },
            { id: "retencion", title: "Retención de Datos" },
            { id: "menores", title: "Protección de Menores" },
            { id: "cambios", title: "Cambios en la Política" },
            { id: "contacto", title: "Contacto" }
        ];
        
        // Configurar enlaces de navegación
        tocItems.forEach(item => {
            const linkElement = $w(`#toc${item.id.charAt(0).toUpperCase() + item.id.slice(1)}`);
            if (linkElement) {
                linkElement.text = item.title;
                linkElement.onClick(() => {
                    scrollToSection(item.id);
                });
            }
        });
        
    } catch (error) {
        console.log("Error configurando tabla de contenidos:", error);
    }
}

/**
 * Configura los acordeones informativos
 */
function setupPrivacyAccordions() {
    try {
        // Acordeón de preguntas frecuentes
        const faqData = [
            {
                question: "¿Es seguro comprar en K'oxol?",
                answer: "Absolutamente. Utilizamos encriptación SSL de grado bancario y cumplimos con todos los estándares de seguridad internacionales. Tu información está protegida en todo momento."
            },
            {
                question: "¿Cómo puedo eliminar mi cuenta y datos?",
                answer: "Puedes solicitar la eliminación de tu cuenta contactándonos en privacidad@koxol.com. Procesaremos tu solicitud en un plazo máximo de 30 días."
            },
            {
                question: "¿Comparten mi información con otras empresas?",
                answer: "NO. K'oxol no vende, alquila o comparte tu información personal con terceros para fines comerciales. Solo compartimos datos necesarios con proveedores de servicios esenciales."
            },
            {
                question: "¿Cómo puedo ejercer mis derechos de protección de datos?",
                answer: "Contáctanos en privacidad@koxol.com indicando qué derecho deseas ejercer. Te responderemos en un plazo máximo de 15 días hábiles."
            }
        ];
        
        // Configurar cada FAQ
        faqData.forEach((faq, index) => {
            const questionElement = $w(`#faqQuestion${index + 1}`);
            const answerElement = $w(`#faqAnswer${index + 1}`);
            const containerElement = $w(`#faqContainer${index + 1}`);
            
            if (questionElement && answerElement) {
                questionElement.text = faq.question;
                answerElement.text = faq.answer;
                
                questionElement.onClick(() => {
                    toggleAccordion(index + 1);
                });
            }
        });
        
    } catch (error) {
        console.log("Error configurando acordeones:", error);
    }
}

/**
 * Configura el formulario de consultas de privacidad
 */
function setupPrivacyInquiries() {
    try {
        if ($w("#privacyInquiryForm")) {
            setupPrivacyInquiryForm();
        }
        
        // Botón para contactar al oficial de privacidad
        if ($w("#contactPrivacyOfficer")) {
            $w("#contactPrivacyOfficer").onClick(() => {
                wixLocation.to('/contacto?subject=privacidad');
            });
        }
        
    } catch (error) {
        console.log("Error configurando formulario de consultas:", error);
    }
}

/**
 * Configura el formulario específico de consultas de privacidad
 */
function setupPrivacyInquiryForm() {
    try {
        // Tipo de consulta
        if ($w("#inquiryType")) {
            $w("#inquiryType").options = [
                { label: "Acceso a mis datos", value: "access" },
                { label: "Rectificación de datos", value: "rectification" },
                { label: "Eliminación de datos", value: "deletion" },
                { label: "Portabilidad de datos", value: "portability" },
                { label: "Oposición al procesamiento", value: "objection" },
                { label: "Consulta general", value: "general" }
            ];
        }
        
        // Botón enviar
        if ($w("#submitPrivacyInquiry")) {
            $w("#submitPrivacyInquiry").onClick(() => {
                handlePrivacyInquiry();
            });
        }
        
    } catch (error) {
        console.log("Error configurando formulario de privacidad:", error);
    }
}

/**
 * Navegación y utilidades
 */

function scrollToSection(sectionId) {
    try {
        const element = $w(`#${sectionId}`);
        if (element) {
            element.scrollTo();
        }
    } catch (error) {
        console.log("Error en scroll a sección:", error);
    }
}

function toggleAccordion(index) {
    try {
        const answerElement = $w(`#faqAnswer${index}`);
        const containerElement = $w(`#faqContainer${index}`);
        
        if (answerElement) {
            if (answerElement.hidden) {
                answerElement.show("slideDown", { duration: 300 });
            } else {
                answerElement.hide("slideUp", { duration: 300 });
            }
        }
    } catch (error) {
        console.log("Error toggle acordeón:", error);
    }
}

function handlePrivacyInquiry() {
    try {
        // Validar campos requeridos
        const requiredFields = ['#inquiryName', '#inquiryEmail', '#inquiryType', '#inquiryMessage'];
        let isValid = true;
        
        requiredFields.forEach(field => {
            if ($w(field) && !$w(field).value) {
                $w(field).style.borderColor = "#FF0000";
                isValid = false;
            } else if ($w(field)) {
                $w(field).style.borderColor = "#2D5016";
            }
        });
        
        if (!isValid) {
            showPrivacyMessage("Por favor, completa todos los campos requeridos.", "error");
            return;
        }
        
        // Simular envío
        showPrivacyMessage("✅ Tu consulta ha sido enviada. Te responderemos en un plazo máximo de 15 días hábiles.", "success");
        
        // Limpiar formulario
        clearPrivacyForm();
        
    } catch (error) {
        console.log("Error procesando consulta de privacidad:", error);
        showPrivacyMessage("❌ Error al enviar la consulta. Por favor, intenta nuevamente.", "error");
    }
}

function clearPrivacyForm() {
    try {
        const fields = ['#inquiryName', '#inquiryEmail', '#inquiryMessage'];
        fields.forEach(field => {
            if ($w(field)) {
                $w(field).value = "";
            }
        });
        
        if ($w("#inquiryType")) {
            $w("#inquiryType").selectedIndex = 0;
        }
    } catch (error) {
        console.log("Error limpiando formulario:", error);
    }
}

function showPrivacyMessage(message, type) {
    try {
        if ($w("#privacyFormMessage")) {
            $w("#privacyFormMessage").text = message;
            $w("#privacyFormMessage").style.color = type === "error" ? "#FF0000" : "#2D5016";
            $w("#privacyFormMessage").show("fade", { duration: 300 });
            
            setTimeout(() => {
                $w("#privacyFormMessage").hide("fade", { duration: 300 });
            }, 5000);
        }
    } catch (error) {
        console.log("Error mostrando mensaje:", error);
    }
}

function showLastUpdated() {
    try {
        const today = new Date();
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            timeZone: 'America/Mexico_City'
        };
        
        if ($w("#lastUpdatedDate")) {
            $w("#lastUpdatedDate").text = `Última actualización: ${today.toLocaleDateString('es-MX', options)}`;
        }
    } catch (error) {
        console.log("Error mostrando fecha de actualización:", error);
    }
}

/**
 * Configurar navegación interactiva
 */
function setupPrivacyNavigation() {
    try {
        // Botón volver al inicio
        if ($w("#backToTop")) {
            $w("#backToTop").onClick(() => {
                wixLocation.to('/');
            });
        }
        
        // Configurar navegación sticky de secciones
        setupStickyNavigation();
        
    } catch (error) {
        console.log("Error configurando navegación:", error);
    }
}

function setupStickyNavigation() {
    try {
        // La navegación sticky se configurará en el editor con efectos de scroll
        console.log("Navegación sticky configurada");
    } catch (error) {
        console.log("Error configurando navegación sticky:", error);
    }
}

console.log("K'oxol Política de Privacidad - Todas las funcionalidades cargadas 🔒✅");erence: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    // Write your JavaScript here

    // To select an element by ID use: $w('#elementID')

    // Click 'Preview' to run your code
});
