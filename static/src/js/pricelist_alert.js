/** @odoo-module **/

$(document).ready(function () {
    let redirectUrl = null;

    const modal = document.createElement("div");
    modal.id = "modal_price_list_notice";
    Object.assign(modal.style, {
        display: "none",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: "9999",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Segoe UI', 'Helvetica Neue', sans-serif",
    });

    const modalContent = document.createElement("div");
    Object.assign(modalContent.style, {
        background: "#fff",
        padding: "30px 35px",
        borderRadius: "12px",
        maxWidth: "600px",
        width: "90%",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        position: "relative",
        textAlign: "left",
        color: "#333",
    });

    const closeButton = document.createElement("button");
    closeButton.innerHTML = "&times;";
    closeButton.setAttribute("aria-label", "Cerrar");
    Object.assign(closeButton.style, {
        position: "absolute",
        top: "12px",
        right: "16px",
        fontSize: "26px",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        color: "#666",
    });

    const heading = document.createElement("h2");
    heading.textContent = "🛒 Revisión de Pedido";
    Object.assign(heading.style, {
        marginTop: "0",
        marginBottom: "15px",
        fontSize: "20px",
        color: "#222",
    });

    const message = document.createElement("div");
    message.innerHTML = `
        <p style="margin-bottom: 12px; line-height: 1.6;">
            <strong>1.</strong> Si alcanzas el mínimo de la lista, obtendrás estatus de <strong style="color:#1a73e8;">Distribuidor Solar VIP</strong> por 60 días.<br>
            Si en los próximos 30 días compras igual o más, tu nivel VIP se mantiene o mejora.
        </p>
        <p style="margin-bottom: 12px; line-height: 1.6;">
            <strong>2.</strong> Si no cumples el monto, recalcularemos tu pedido según la lista que corresponda.
        </p>
        <p style="font-weight: bold; color: #0a7b36; margin-top: 20px;">
            💡 Aprovecha y mantén tus beneficios VIP con compras periódicas.
        </p>
    `;

    const confirmButton = document.createElement("button");
    confirmButton.textContent = "Entendido";
    Object.assign(confirmButton.style, {
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: "#1a73e8",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        fontSize: "15px",
        cursor: "pointer",
        display: "inline-block",
    });

    confirmButton.addEventListener("click", () => {
        modal.style.display = "none";
        if (redirectUrl) {
            window.location.href = redirectUrl;
        }
    });

    modalContent.appendChild(closeButton);
    modalContent.appendChild(heading);
    modalContent.appendChild(message);
    modalContent.appendChild(confirmButton);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    const showModal = () => {
        modal.style.display = "flex";
    };

    const hideModal = () => {
        modal.style.display = "none";
    };

    closeButton.addEventListener("click", hideModal);
    window.addEventListener("click", (e) => {
        if (e.target === modal) hideModal();
    });

    const pricelistItems = document.querySelectorAll(".o_pricelist_dropdown .dropdown-menu a");
    pricelistItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            redirectUrl = this.href;
            showModal();
        });
    });
});
