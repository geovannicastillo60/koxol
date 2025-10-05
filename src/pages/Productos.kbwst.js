// K'oxol - Página de Productos/Tienda
// Catálogo completo de repelentes naturales 🛒🌿
// API Reference: https://www.wix.com/velo/reference/api-overview/introduction

import wixStores from 'wix-stores-frontend';
import wixLocation from 'wix-location';
import { PRODUCTOS_KOXOL, CATEGORIAS_KOXOL } from '../data/productos-koxol.js';

$w.onReady(function () {
    console.log("K'oxol Productos - Tienda cargada 🛒🌿");
    
    // Inicializar página de productos
    initializeProductsPage();
    
    // Verificar filtros desde URL
    checkUrlFilters();
});

/**
 * Inicializa todas las funcionalidades de la página de productos
 */
function initializeProductsPage() {
    // Configurar filtros de productos
    setupProductFilters();
    
    // Configurar grid de productos
    setupProductGrid();
    
    // Configurar búsqueda de productos
    setupProductSearch();
    
    // Configurar ordenamiento
    setupProductSorting();
    
    // Configurar paginación
    setupPagination();
    
    // Cargar productos iniciales
    loadProducts();
    
    console.log("Página de Productos K'oxol inicializada ✅");
}

/**
 * Verifica filtros desde parámetros de URL
 */
function checkUrlFilters() {
    try {
        const urlParams = wixLocation.query;
        
        // Filtro por categoría
        if (urlParams.category) {
            applyFilter('category', urlParams.category);
        }
        
        // Filtro por búsqueda
        if (urlParams.search) {
            if ($w("#searchInput")) {
                $w("#searchInput").value = decodeURIComponent(urlParams.search);
                performProductSearch(urlParams.search);
            }
        }
        
        // Filtro por descuento (desde banner de bienvenida)
        if (urlParams.descuento === 'bienvenida') {
            showWelcomeDiscount();
        }
        
    } catch (error) {
        console.log("Error verificando filtros URL:", error);
    }
}

/**
 * Configura los filtros de productos
 */
function setupProductFilters() {
    try {
        // Filtro por categoría
        if ($w("#categoryFilter")) {
            setupCategoryFilter();
        }
        
        // Filtro por precio
        if ($w("#priceFilter")) {
            setupPriceFilter();
        }
        
        // Filtros de características
        setupFeatureFilters();
        
        console.log("Filtros de productos configurados ✅");
    } catch (error) {
        console.log("Error configurando filtros:", error);
    }
}

/**
 * Configura el filtro de categorías
 */
function setupCategoryFilter() {
    try {
        // Poblar dropdown de categorías
        const categories = ["Todos", ...CATEGORIAS_KOXOL.map(cat => cat.name)];
        
        if ($w("#categoryFilter")) {
            $w("#categoryFilter").options = categories.map(cat => ({
                label: cat,
                value: cat.toLowerCase().replace(/\s+/g, '-')
            }));
            
            $w("#categoryFilter").onChange(() => {
                const selectedCategory = $w("#categoryFilter").value;
                applyFilter('category', selectedCategory);
            });
        }
        
        // Botones de categoría individuales
        CATEGORIAS_KOXOL.forEach(category => {
            const buttonId = `#category${category.id.charAt(0).toUpperCase() + category.id.slice(1)}`;
            if ($w(buttonId)) {
                $w(buttonId).onClick(() => {
                    applyFilter('category', category.id);
                });
            }
        });
        
    } catch (error) {
        console.log("Error configurando filtro de categorías:", error);
    }
}

/**
 * Configura el filtro de precios
 */
function setupPriceFilter() {
    try {
        const priceRanges = [
            { label: "Todos los precios", min: 0, max: Infinity },
            { label: "Menos de $150", min: 0, max: 150 },
            { label: "$150 - $300", min: 150, max: 300 },
            { label: "$300 - $500", min: 300, max: 500 },
            { label: "Más de $500", min: 500, max: Infinity }
        ];
        
        if ($w("#priceFilter")) {
            $w("#priceFilter").options = priceRanges.map(range => ({
                label: range.label,
                value: `${range.min}-${range.max}`
            }));
            
            $w("#priceFilter").onChange(() => {
                const selectedRange = $w("#priceFilter").value;
                applyFilter('price', selectedRange);
            });
        }
        
    } catch (error) {
        console.log("Error configurando filtro de precios:", error);
    }
}

/**
 * Configura filtros de características
 */
function setupFeatureFilters() {
    try {
        // Filtro "Solo productos destacados"
        if ($w("#featuredOnly")) {
            $w("#featuredOnly").onChange(() => {
                const isChecked = $w("#featuredOnly").checked;
                applyFilter('featured', isChecked);
            });
        }
        
        // Filtro "Solo más vendidos"
        if ($w("#bestsellerOnly")) {
            $w("#bestsellerOnly").onChange(() => {
                const isChecked = $w("#bestsellerOnly").checked;
                applyFilter('bestseller', isChecked);
            });
        }
        
        // Filtro "100% Natural"
        if ($w("#organicOnly")) {
            $w("#organicOnly").onChange(() => {
                const isChecked = $w("#organicOnly").checked;
                applyFilter('organic', isChecked);
            });
        }
        
    } catch (error) {
        console.log("Error configurando filtros de características:", error);
    }
}

/**
 * Configura la búsqueda de productos
 */
function setupProductSearch() {
    try {
        if ($w("#productSearchInput")) {
            $w("#productSearchInput").onKeyPress((event) => {
                if (event.key === 'Enter') {
                    const searchTerm = $w("#productSearchInput").value;
                    performProductSearch(searchTerm);
                }
            });
        }
        
        if ($w("#productSearchButton")) {
            $w("#productSearchButton").onClick(() => {
                const searchTerm = $w("#productSearchInput").value;
                performProductSearch(searchTerm);
            });
        }
        
    } catch (error) {
        console.log("Error configurando búsqueda:", error);
    }
}

/**
 * Realiza búsqueda de productos
 */
function performProductSearch(searchTerm) {
    try {
        console.log("Buscando productos:", searchTerm);
        
        // Filtrar productos por término de búsqueda
        let filteredProducts = [];
        
        // Buscar en todas las categorías
        Object.keys(PRODUCTOS_KOXOL).forEach(category => {
            if (category !== 'combos') { // Excluir combos de búsqueda simple
                const products = PRODUCTOS_KOXOL[category].filter(product => {
                    return product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
                });
                filteredProducts = [...filteredProducts, ...products];
            }
        });
        
        // Mostrar resultados
        displayProducts(filteredProducts);
        
        // Mostrar mensaje de resultados
        if ($w("#searchResults")) {
            $w("#searchResults").text = `${filteredProducts.length} productos encontrados para "${searchTerm}"`;
            $w("#searchResults").show();
        }
        
    } catch (error) {
        console.log("Error en búsqueda de productos:", error);
    }
}

/**
 * Configura el ordenamiento de productos
 */
function setupProductSorting() {
    try {
        const sortOptions = [
            { label: "Relevancia", value: "relevance" },
            { label: "Precio: Menor a Mayor", value: "price-asc" },
            { label: "Precio: Mayor a Menor", value: "price-desc" },
            { label: "Nombre A-Z", value: "name-asc" },
            { label: "Más Nuevos", value: "newest" },
            { label: "Más Populares", value: "popular" }
        ];
        
        if ($w("#sortProducts")) {
            $w("#sortProducts").options = sortOptions;
            
            $w("#sortProducts").onChange(() => {
                const sortBy = $w("#sortProducts").value;
                sortProducts(sortBy);
            });
        }
        
    } catch (error) {
        console.log("Error configurando ordenamiento:", error);
    }
}

/**
 * Ordena productos según criterio seleccionado
 */
function sortProducts(sortBy) {
    try {
        // Obtener productos actuales
        let currentProducts = getCurrentProducts();
        
        switch (sortBy) {
            case 'price-asc':
                currentProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                currentProducts.sort((a, b) => b.price - a.price);
                break;
            case 'name-asc':
                currentProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'newest':
                // Los más recientes primero (asumiendo que el orden en el array es cronológico)
                currentProducts.reverse();
                break;
            case 'popular':
                // Productos bestseller primero
                currentProducts.sort((a, b) => {
                    if (a.bestseller && !b.bestseller) return -1;
                    if (!a.bestseller && b.bestseller) return 1;
                    return 0;
                });
                break;
            default:
                // Relevancia - productos destacados primero
                currentProducts.sort((a, b) => {
                    if (a.featured && !b.featured) return -1;
                    if (!a.featured && b.featured) return 1;
                    return 0;
                });
        }
        
        displayProducts(currentProducts);
        
    } catch (error) {
        console.log("Error ordenando productos:", error);
    }
}

/**
 * Aplica un filtro específico
 */
function applyFilter(filterType, filterValue) {
    try {
        console.log(`Aplicando filtro ${filterType}:`, filterValue);
        
        let filteredProducts = [];
        
        // Obtener todos los productos
        Object.keys(PRODUCTOS_KOXOL).forEach(category => {
            filteredProducts = [...filteredProducts, ...PRODUCTOS_KOXOL[category]];
        });
        
        // Aplicar filtro según tipo
        switch (filterType) {
            case 'category':
                if (filterValue !== 'todos' && filterValue !== 'all') {
                    const categoryData = CATEGORIAS_KOXOL.find(cat => cat.id === filterValue);
                    if (categoryData) {
                        filteredProducts = PRODUCTOS_KOXOL[filterValue] || [];
                    }
                }
                break;
                
            case 'price':
                if (filterValue !== '0-Infinity') {
                    const [min, max] = filterValue.split('-').map(Number);
                    filteredProducts = filteredProducts.filter(product => 
                        product.price >= min && (max === Infinity || product.price <= max)
                    );
                }
                break;
                
            case 'featured':
                if (filterValue) {
                    filteredProducts = filteredProducts.filter(product => product.featured);
                }
                break;
                
            case 'bestseller':
                if (filterValue) {
                    filteredProducts = filteredProducts.filter(product => product.bestseller);
                }
                break;
                
            case 'organic':
                if (filterValue) {
                    filteredProducts = filteredProducts.filter(product => product.organic);
                }
                break;
        }
        
        displayProducts(filteredProducts);
        
        // Actualizar contador de productos
        if ($w("#productCount")) {
            $w("#productCount").text = `${filteredProducts.length} productos`;
        }
        
    } catch (error) {
        console.log("Error aplicando filtro:", error);
    }
}

/**
 * Carga productos iniciales
 */
function loadProducts() {
    try {
        // Cargar todos los productos por defecto
        let allProducts = [];
        
        Object.keys(PRODUCTOS_KOXOL).forEach(category => {
            allProducts = [...allProducts, ...PRODUCTOS_KOXOL[category]];
        });
        
        // Ordenar por productos destacados primero
        allProducts.sort((a, b) => {
            if (a.featured && !b.featured) return -1;
            if (!a.featured && b.featured) return 1;
            return 0;
        });
        
        displayProducts(allProducts);
        
        console.log(`${allProducts.length} productos cargados ✅`);
    } catch (error) {
        console.log("Error cargando productos:", error);
    }
}

/**
 * Muestra productos en el grid
 */
function displayProducts(products) {
    try {
        // Limpiar grid existente
        if ($w("#productsGrid")) {
            // El grid se poblará dinámicamente desde Wix Stores
            console.log(`Mostrando ${products.length} productos`);
        }
        
        // Si tienes elementos de producto específicos (product1, product2, etc.)
        products.slice(0, 12).forEach((product, index) => {
            const productContainer = $w(`#product${index + 1}`);
            if (productContainer) {
                displaySingleProduct(product, index + 1);
            }
        });
        
        // Actualizar contador
        if ($w("#productCount")) {
            $w("#productCount").text = `${products.length} productos`;
        }
        
    } catch (error) {
        console.log("Error mostrando productos:", error);
    }
}

/**
 * Muestra un producto individual
 */
function displaySingleProduct(product, position) {
    try {
        const prefix = `#product${position}`;
        
        // Imagen del producto
        if ($w(`${prefix}Image`)) {
            $w(`${prefix}Image`).src = product.images[0];
            $w(`${prefix}Image`).alt = product.name;
        }
        
        // Nombre del producto
        if ($w(`${prefix}Name`)) {
            $w(`${prefix}Name`).text = product.name;
        }
        
        // Precio del producto
        if ($w(`${prefix}Price`)) {
            $w(`${prefix}Price`).text = `$${product.price.toFixed(2)} MXN`;
        }
        
        // Precio anterior (si existe)
        if ($w(`${prefix}ComparePrice`) && product.comparePrice) {
            $w(`${prefix}ComparePrice`).text = `$${product.comparePrice.toFixed(2)}`;
            $w(`${prefix}ComparePrice`).show();
        }
        
        // Badges especiales
        if (product.bestseller && $w(`${prefix}BestsellerBadge`)) {
            $w(`${prefix}BestsellerBadge`).show();
        }
        
        if (product.featured && $w(`${prefix}FeaturedBadge`)) {
            $w(`${prefix}FeaturedBadge`).show();
        }
        
        // Botón agregar al carrito
        if ($w(`${prefix}AddToCart`)) {
            $w(`${prefix}AddToCart`).onClick(() => {
                addToCart(product);
            });
        }
        
        // Botón ver más detalles
        if ($w(`${prefix}ViewDetails`)) {
            $w(`${prefix}ViewDetails`).onClick(() => {
                wixLocation.to(`/producto/${product.slug}`);
            });
        }
        
    } catch (error) {
        console.log("Error mostrando producto individual:", error);
    }
}

/**
 * Configura la paginación
 */
function setupPagination() {
    try {
        // Configurar botones de paginación
        if ($w("#prevPage")) {
            $w("#prevPage").onClick(() => {
                // Implementar paginación anterior
                console.log("Página anterior");
            });
        }
        
        if ($w("#nextPage")) {
            $w("#nextPage").onClick(() => {
                // Implementar paginación siguiente  
                console.log("Página siguiente");
            });
        }
        
    } catch (error) {
        console.log("Error configurando paginación:", error);
    }
}

/**
 * Agrega producto al carrito
 */
function addToCart(product) {
    try {
        wixStores.addToCart(product.id, 1)
            .then(() => {
                showCartNotification(`✅ ${product.name} agregado al carrito`);
                
                // Animar botón o mostrar feedback visual
                animateAddToCart();
            })
            .catch((error) => {
                console.log("Error agregando al carrito:", error);
                showCartNotification("❌ Error al agregar producto");
            });
    } catch (error) {
        console.log("Error en addToCart:", error);
    }
}

/**
 * Utilidades
 */

function getCurrentProducts() {
    // Implementar lógica para obtener productos actuales mostrados
    return [];
}

function showWelcomeDiscount() {
    try {
        if ($w("#welcomeDiscountBanner")) {
            $w("#welcomeDiscountBanner").show("slideInDown", { duration: 500 });
        }
    } catch (error) {
        console.log("Error mostrando descuento de bienvenida:", error);
    }
}

function showCartNotification(message) {
    try {
        if ($w("#cartNotification")) {
            $w("#cartNotification").text = message;
            $w("#cartNotification").show("fade", { duration: 300 });
            
            setTimeout(() => {
                $w("#cartNotification").hide("fade", { duration: 300 });
            }, 3000);
        }
    } catch (error) {
        console.log("Error mostrando notificación:", error);
    }
}

function animateAddToCart() {
    try {
        // Animar ícono del carrito
        if ($w("#cartIcon")) {
            $w("#cartIcon").show("bounce", { duration: 600 });
        }
    } catch (error) {
        console.log("Error en animación:", error);
    }
}

console.log("K'oxol Productos - Todas las funcionalidades cargadas 🛒✅");erence: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    // Write your JavaScript here

    // To select an element by ID use: $w('#elementID')

    // Click 'Preview' to run your code
});
