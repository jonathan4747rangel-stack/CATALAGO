// ---------- DATA: Full color groups (liso & escarchado) ----------
const lisoGrupos = [
    { nombre: "Básicos y Neutros", colores: ["Blanco", "Beige Crema", "Piel Canela", "Gris Perla", "Gris", "Negro"] },
    { nombre: "Amarillos y Naranjas", colores: ["Amarillo", "Amarillo Bandera", "Amarillo Oro", "Naranja Medio", "Naranja Intenso"] },
    { nombre: "Rojos y Vinotinto", colores: ["Rojo", "Rojo Bandera", "Rojo Intenso", "Vinotinto"] },
    { nombre: "Rosados y Fucsias", colores: ["Rosado Bebe", "Rosado", "Rosado Colonial", "Rosado V.", "Fucsia", "Fucsia New", "Fucsia Magenta", "Guayaba Salmón"] },
    { nombre: "Morados y Lilas", colores: ["Lila", "Lila Medio", "Lila Oscuro", "Morado", "Morado Claro", "Azul Violeta", "Violeta Mora", "Violeta Obispo"] },
    { nombre: "Azules", colores: ["Azul Bebe", "Azul Cielo", "Azul Claro", "Azul Celeste", "Azul Turquesa", "Azul Eléctrico", "Azul Rey", "Azul Marino", "Azul Ultra Marino", "Azul Bandera"] },
    { nombre: "Verdes", colores: ["Verde Manzana", "Verde Neon", "Verde Claro", "Verde Grama", "Verde Mar", "Verde Aguamarino", "Verde Aquamarine", "Verde Esmeralda"] },
    { nombre: "Tierra (Marrón)", colores: ["Marrón Claro", "Marrón Oscuro", "Marrón Chocolate", "Marrón Tabaco"] }
];

const escarchadoGrupos = [
    { nombre: "Metales y Neutros", colores: ["Blanco", "Blanco Tornasol", "Plata", "Gris Oscuro", "Negro", "Beige", "Champagne", "Café", "Marrón Oscuro", "Marrón Tornasol"] },
    { nombre: "Dorados y Bronces", colores: ["Amarillo", "Amarillo Oscuro", "Dorado Claro", "Dorado Oscuro", "Oro Rico", "Oro Ducato", "Oro", "Bronce", "Cobre", "Rosa Oro / Oro Rosa"] },
    { nombre: "Rojos y Naranjas", colores: ["Naranja", "Rojo", "Rojo Navidad", "Rojo Ladrillo", "Vinotinto"] },
    { nombre: "Rosados y Fucsias", colores: ["Rosa Pastel", "Rosa Claro", "Rosado", "Rosa C", "Rosa Vieja", "Frambuesa", "Fucsia", "Magenta"] },
    { nombre: "Morados y Lilas", colores: ["Lila", "Lila Tornasol", "Morado", "Violeta"] },
    { nombre: "Azules", colores: ["Azul Pastel", "Azul Cielo", "Azul Celeste", "Azul Turquesa", "Azul Zafiro", "Azul Rey", "Azul Marino"] },
    { nombre: "Verdes", colores: ["Verde Mar", "Verde Aguamarina", "Verde Jade", "Verde Esmeralda", "Verde Grama"] }
];

function getHexFromName(nombre) {
    const mapa = {
        "Blanco":"#FFFFFF","Beige Crema":"#F5E6D3","Piel Canela":"#D2B48C","Gris Perla":"#B0B0B0","Gris":"#808080","Negro":"#1A1A1A",
        "Amarillo":"#FFE135","Amarillo Bandera":"#FFD700","Amarillo Oro":"#FFC200","Naranja Medio":"#FF8C00","Naranja Intenso":"#FF6600",
        "Rojo":"#E60000","Rojo Bandera":"#CE1126","Rojo Intenso":"#CC0000","Vinotinto":"#5C1018",
        "Rosado Bebe":"#FFB6C1","Rosado":"#FF91A4","Rosado Colonial":"#F4A460","Rosado V.":"#E88DA0","Fucsia":"#E91E8C","Fucsia New":"#FF00AA","Fucsia Magenta":"#FF1493","Guayaba Salmón":"#FA8072",
        "Lila":"#C8A2C8","Lila Medio":"#BA55D3","Lila Oscuro":"#8B008B","Morado":"#7B2D8E","Morado Claro":"#AF7AC5","Azul Violeta":"#8A2BE2","Violeta Mora":"#4B0082","Violeta Obispo":"#9400D3",
        "Azul Bebe":"#89CFF0","Azul Cielo":"#87CEEB","Azul Claro":"#6CB4EE","Azul Celeste":"#ADD8E6","Azul Turquesa":"#40E0D0","Azul Eléctrico":"#2E5EAA","Azul Rey":"#1A3C8F","Azul Marino":"#1B2A6B","Azul Ultra Marino":"#0D1B7A","Azul Bandera":"#00308F",
        "Verde Manzana":"#8DB600","Verde Neon":"#39FF14","Verde Claro":"#90EE90","Verde Grama":"#4CAF50","Verde Mar":"#2E8B57","Verde Aguamarino":"#3EB489","Verde Aquamarine":"#7FFFD4","Verde Esmeralda":"#50C878",
        "Marrón Claro":"#A0522D","Marrón Oscuro":"#3E2723","Marrón Chocolate":"#5D3A1A","Marrón Tabaco":"#6F4E37",
        "Blanco Tornasol":"#F0F0F0","Plata":"#C0C0C0","Champagne":"#F7E7CE","Café":"#6F4E37","Marrón Tornasol":"#5D4037","Amarillo Oscuro":"#D4A017","Dorado Claro":"#F0D58C","Dorado Oscuro":"#B8860B","Oro Rico":"#FFD700","Oro Ducato":"#DAA520","Oro":"#DAA520","Bronce":"#CD7F32","Cobre":"#B87333","Rosa Oro / Oro Rosa":"#E8B4B8",
        "Naranja":"#FFA500","Rojo Navidad":"#B22222","Rojo Ladrillo":"#B5462A","Rosa Pastel":"#F4C2C2","Rosa Claro":"#FFC0CB","Rosa C":"#FF69B4","Rosa Vieja":"#D4788C","Frambuesa":"#E30B5C","Magenta":"#FF00FF","Lila Tornasol":"#C8A2C8","Violeta":"#8B00FF","Azul Pastel":"#A4C8E1","Azul Zafiro":"#0F52BA","Verde Aguamarina":"#66CDAA","Verde Jade":"#00A86B"
    };
    return mapa[nombre] || "#CCCCCC";
}

const totalLiso = lisoGrupos.reduce((a,g)=>a+g.colores.length,0);
const totalEscarchado = escarchadoGrupos.reduce((a,g)=>a+g.colores.length,0);

const categories = [
    { id: "carta-liso", nombre: "Foami Tamaño Carta Liso", tamaño: "Tamaño Carta", tipo: "liso", icono: "layers", esPaquete: true, paqueteUnidades: 10, totalColores: totalLiso },
    { id: "carta-esc", nombre: "Foami Tamaño Carta Escarchado", tamaño: "Tamaño Carta", tipo: "escarchado", icono: "sparkles", esPaquete: true, paqueteUnidades: 10, totalColores: totalEscarchado },
    { id: "doble-liso", nombre: "Foami Doble Carta Liso", tamaño: "Doble Carta", tipo: "liso", icono: "square", esPaquete: true, paqueteUnidades: 10, totalColores: totalLiso },
    { id: "doble-esc", nombre: "Foami Doble Carta Escarchado", tamaño: "Doble Carta", tipo: "escarchado", icono: "gem", esPaquete: true, paqueteUnidades: 10, totalColores: totalEscarchado },
    { id: "lamina-liso", nombre: "Lámina 60×80 Liso", tamaño: "Lámina 60×80", tipo: "liso", icono: "maximize-2", esPaquete: false, totalColores: totalLiso },
    { id: "lamina-esc", nombre: "Lámina 60×80 Escarchado", tamaño: "Lámina 60×80", tipo: "escarchado", icono: "crown", esPaquete: false, totalColores: totalEscarchado }
];

let cart = [];
let currentCategory = null;

// Helpers
function saveCart() { localStorage.setItem("foami_cart_lux", JSON.stringify(cart)); }
function loadCart() { const s = localStorage.getItem("foami_cart_lux"); if(s) try { cart = JSON.parse(s); if(!Array.isArray(cart)) cart=[]; } catch(e){cart=[];} updateCartUI(); }
function isVeryLight(hex) { if(!hex) return false; const r=parseInt(hex.slice(1,3),16), g=parseInt(hex.slice(3,5),16), b=parseInt(hex.slice(5,7),16); return (r*0.299+g*0.587+b*0.114)>210; }
function escapeHtml(str) { return str.replace(/[&<>]/g, m => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;" }[m])); }
function showToast(msg, hex) {
    const ctn = document.getElementById("toastContainer"); if(!ctn) return;
    const t = document.createElement("div"); t.className = "toast-enter pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl glass backdrop-blur-md border border-white/15 max-w-xs shadow-xl";
    t.innerHTML = `<div class="w-3 h-3 rounded-full shadow-md" style="background-color:${hex}"></div><span class="text-sm text-white font-medium">${escapeHtml(msg)}</span>`;
    ctn.appendChild(t);
    setTimeout(() => { t.remove(); }, 2200);
}

function addToCart(category, nombre, hex) {
    const existing = cart.find(i => i.categoryId === category.id && i.nombre === nombre);
    const addUnits = category.esPaquete ? category.paqueteUnidades : 1;
    if(existing) {
        existing.cantidadUnidades += addUnits;
    } else {
        cart.push({
            id: Date.now()+Math.random(),
            categoryId: category.id,
            categoryNombre: category.nombre,
            nombre: nombre,
            hex: hex,
            esPaquete: category.esPaquete,
            unidadesPorPaquete: category.esPaquete ? category.paqueteUnidades : 1,
            cantidadUnidades: addUnits
        });
    }
    saveCart(); updateCartUI();
    const msg = category.esPaquete ? `+1 paquete (${category.paqueteUnidades} und) · ${nombre}` : `+1 unidad · ${nombre}`;
    showToast(msg, hex);
}

function changeQty(idx, deltaUnidades) {
    const item = cart[idx];
    if(!item) return;
    let nueva = item.cantidadUnidades + deltaUnidades;
    if(nueva <= 0) cart.splice(idx,1);
    else {
        if(item.esPaquete) {
            let resto = nueva % item.unidadesPorPaquete;
            if(resto !== 0) nueva = nueva - resto;
            if(nueva <= 0) cart.splice(idx,1);
            else item.cantidadUnidades = nueva;
        } else { item.cantidadUnidades = nueva; }
    }
    saveCart(); updateCartUI();
}

function clearCart() { cart = []; saveCart(); updateCartUI(); showToast("Carrito vaciado", "#888"); }

function updateCartUI() {
    const total = cart.reduce((s,i)=>s+i.cantidadUnidades,0);
    const badge = document.getElementById("cartBadge"), fbadge = document.getElementById("floatingBadge");
    const emptyDiv = document.getElementById("cartEmpty"), itemsDiv = document.getElementById("cartItems"), footer = document.getElementById("cartFooter");
    const countSpan = document.getElementById("cartCount"), totalSpan = document.getElementById("cartTotal");
    if(total>0) {
        badge?.classList.remove("hidden"); badge?.classList.add("flex","badge-bounce"); badge.textContent = total>99?"99+":total;
        if(fbadge) { fbadge.textContent = total>99?"99+":total; fbadge.classList.remove("hidden"); fbadge.classList.add("flex"); }
        emptyDiv?.classList.add("hidden"); itemsDiv?.classList.remove("hidden"); footer?.classList.remove("hidden"); footer?.classList.add("flex","flex-col");
        setTimeout(()=>badge?.classList.remove("badge-bounce"),300);
    } else {
        badge?.classList.add("hidden"); badge?.classList.remove("flex"); if(fbadge) fbadge.classList.add("hidden");
        emptyDiv?.classList.remove("hidden"); itemsDiv?.classList.add("hidden"); footer?.classList.add("hidden"); footer?.classList.remove("flex","flex-col");
    }
    countSpan.textContent = `(${total} und)`;
    totalSpan.textContent = total;
    if(itemsDiv) {
        itemsDiv.innerHTML = cart.map((item,idx) => {
            const paquetes = item.esPaquete ? (item.cantidadUnidades / item.unidadesPorPaquete) : null;
            const qtyText = item.esPaquete ? `${paquetes} paq (${item.cantidadUnidades} und)` : `${item.cantidadUnidades} und`;
            return `<div class="flex items-center gap-3 p-3 rounded-xl glass-card bg-black/40">
                <div class="w-11 h-11 rounded-xl border border-white/10" style="background:${item.hex}; box-shadow:0 2px 6px rgba(0,0,0,0.3);"></div>
                <div class="flex-1"><p class="font-semibold text-white text-sm">${escapeHtml(item.nombre)}</p><p class="text-[10px] text-zinc-400">${escapeHtml(item.categoryNombre)} · ${qtyText}</p></div>
                <div class="flex gap-1.5"><button onclick="changeQty(${idx}, -${item.unidadesPorPaquete})" class="w-7 h-7 rounded-md bg-white/5 hover:bg-white/10"><i data-lucide="minus" class="w-3.5 h-3.5"></i></button><span class="w-6 text-center text-sm text-white">${item.esPaquete ? paquetes : item.cantidadUnidades}</span><button onclick="changeQty(${idx}, ${item.unidadesPorPaquete})" class="w-7 h-7 rounded-md bg-white/5 hover:bg-white/10"><i data-lucide="plus" class="w-3.5 h-3.5"></i></button><button onclick="changeQty(${idx}, -${item.cantidadUnidades})" class="w-7 h-7 rounded-md bg-white/5 hover:bg-red-500/20"><i data-lucide="trash-2" class="w-3.5 h-3.5 text-red-300"></i></button></div>
            </div>`;
        }).join('');
        lucide.createIcons();
    }
}

function renderCategories() {
    const grid = document.getElementById("categoryGrid");
    if(!grid) return;
    grid.innerHTML = categories.map(cat => `
        <div class="glass-card rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:border-orange-500/40 group" onclick="openCategory('${cat.id}')">
            <div class="flex justify-between items-start mb-4"><div class="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center border border-white/10"><i data-lucide="${cat.icono}" class="w-5 h-5 text-orange-400"></i></div><span class="text-[11px] px-2.5 py-1 rounded-full bg-white/10 text-zinc-300 font-mono">${cat.tamaño}</span></div>
            <h3 class="text-xl font-bold text-white mb-1.5">${cat.nombre}</h3>
            <p class="text-sm text-zinc-400 mb-3">✨ ${cat.totalColores} colores disponibles</p>
            <p class="text-xs text-zinc-500">${cat.esPaquete ? 'Paquete x10 unidades' : 'Venta por unidad'}</p>
            <div class="mt-4 text-orange-400 text-sm flex items-center gap-1 font-medium group-hover:gap-2 transition-all">Explorar paleta <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i></div>
        </div>
    `).join('');
    lucide.createIcons();
}

function openCategory(catId) {
    currentCategory = categories.find(c=>c.id===catId);
    if(!currentCategory) return;
    document.getElementById("categoriesView").classList.add("hidden");
    document.getElementById("colorsView").classList.remove("hidden");
    if(!document.getElementById("backBtnContainer")) addBackButton();
    document.getElementById("backBtnContainer").classList.remove("hidden");
    renderColorsView();
    window.scrollTo({top:0,behavior:"smooth"});
}

function addBackButton() {
    if(document.getElementById("backBtnContainer")) return;
    const colorsView = document.getElementById("colorsView");
    const container = document.createElement("div");
    container.id = "backBtnContainer";
    container.className = "mb-5 flex items-center gap-3";
    container.innerHTML = `<button onclick="goBack()" class="flex items-center gap-1.5 text-zinc-300 hover:text-white glass px-4 py-2 rounded-full text-sm transition-all"><i data-lucide="arrow-left" class="w-4 h-4"></i> Volver a categorías</button><span id="categoryTitle" class="text-lg font-light text-white/80"></span>`;
    colorsView.insertBefore(container, colorsView.firstChild);
    lucide.createIcons();
}

function renderColorsView() {
    const cont = document.getElementById("colorsContent");
    if(!cont || !currentCategory) return;
    const grupos = currentCategory.tipo === "liso" ? lisoGrupos : escarchadoGrupos;
    const titleSpan = document.getElementById("categoryTitle");
    if(titleSpan) titleSpan.innerText = `— ${currentCategory.nombre}`;
    let html = `<div class="mb-8 flex flex-wrap items-center gap-3 border-b border-white/10 pb-4"><div class="p-2 rounded-xl glass"><i data-lucide="${currentCategory.icono}" class="w-7 h-7 text-orange-400"></i></div><div><h2 class="text-3xl font-bold text-white">${currentCategory.nombre}</h2><p class="text-zinc-400 text-sm">${currentCategory.esPaquete ? 'Venta por paquetes de 10 unidades' : 'Venta por unidad (lámina individual)'}</p></div></div>`;
    grupos.forEach(grupo => {
        html += `<div class="mb-12"><div class="flex items-baseline gap-2 border-l-4 border-orange-500 pl-3 mb-4"><h3 class="text-xl font-semibold text-white">${grupo.nombre}</h3><span class="text-xs text-zinc-400">${grupo.colores.length} tonos</span></div>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">`;
        grupo.colores.forEach(color => {
            const hex = getHexFromName(color);
            const borderLight = isVeryLight(hex) ? 'border border-white/50' : '';
            html += `<div class="swatch-item group relative rounded-2xl glass-card p-3 text-center cursor-pointer transition-all duration-200 hover:bg-white/5" onclick="addToCart(currentCategory, '${escapeHtml(color)}', '${hex}')">
                <div class="w-full aspect-square rounded-xl ${borderLight} shadow-inner transition-all duration-200 group-hover:shadow-lg" style="background-color: ${hex};"></div>
                <p class="text-xs mt-2 font-medium text-zinc-200 truncate">${color}</p>
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm rounded-2xl"><div class="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-md"><i data-lucide="plus" class="w-4 h-4 text-black"></i></div></div>
            </div>`;
        });
        html += `</div></div>`;
    });
    cont.innerHTML = html;
    lucide.createIcons();
}

function goBack() {
    document.getElementById("categoriesView").classList.remove("hidden");
    document.getElementById("colorsView").classList.add("hidden");
    document.getElementById("backBtnContainer").classList.add("hidden");
    window.scrollTo({top:0,behavior:"smooth"});
}

function openCart() { 
    document.getElementById("cartPanel").classList.remove("closed"); 
    document.getElementById("cartPanel").classList.add("open"); 
    document.getElementById("cartOverlay").classList.remove("opacity-0","pointer-events-none"); 
    document.getElementById("cartOverlay").classList.add("opacity-100","pointer-events-auto"); 
    document.body.style.overflow="hidden"; 
}
function closeCart() { 
    document.getElementById("cartPanel").classList.remove("open"); 
    document.getElementById("cartPanel").classList.add("closed"); 
    document.getElementById("cartOverlay").classList.remove("opacity-100","pointer-events-auto"); 
    document.getElementById("cartOverlay").classList.add("opacity-0","pointer-events-none"); 
    document.body.style.overflow=""; 
}

function sendWhatsApp() {
    if(cart.length===0) return;
    let msg = "🛍️ *PEDIDO FOAMI PREMIA*%0A%0A";
    cart.forEach(item => {
        const cantidadTexto = item.esPaquete ? `${item.cantidadUnidades/item.unidadesPorPaquete} paquetes (${item.cantidadUnidades} und)` : `${item.cantidadUnidades} unidad(es)`;
        msg += `• ${item.nombre} — ${item.categoryNombre} → ${cantidadTexto}%0A`;
    });
    msg += `%0A📦 *Total unidades:* ${cart.reduce((s,i)=>s+i.cantidadUnidades,0)}%0A✨ ¡Listo para cotizar!`;
    window.open(`https://wa.me/584122891366?text=${encodeURIComponent(msg)}`, '_blank');
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
    loadCart();
    renderCategories();
    lucide.createIcons();
});