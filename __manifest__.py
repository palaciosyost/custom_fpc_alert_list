# -*- coding: utf-8 -*-
{
    "name": "Website Pricelist Alert",
    "version": "17.0.1.0.0",
    "category": "Website",
    "summary": "Muestra una alerta cuando se cambia la lista de precios en la web",
    "author": "Tu Nombre o Empresa",
    "website": "https://www.tusitio.com",
    "depends": ["website_sale"],
    "assets": {
        "web.assets_frontend": [
            "custom_fpc_alert_list/static/src/js/pricelist_alert.js",
        ],
    },
    "installable": True,
    "application": False,
    "license": "LGPL-3",
}
