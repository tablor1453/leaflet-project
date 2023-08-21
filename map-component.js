L.Control.CenterMap = L.Control.extend({
	
	options: {
		position: 'topleft',
		icon: 'home',
        title: 'Indonesia',
		coordinates: null,
        centerZoom: null
	},
	
	initialize:function(options){
		
		if (this.options.coordinates === null) {
			this.options.coordinates = map.getCenter();
        }
		
        if (this.options.centerZoom === null) {
			this.options.centerZoom = map.getZoom();
		}
	},
	
    onAdd: function(map) {
		var imgBtn = '<span title="Indonesia"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16"><path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/></svg></span>';
        var btnCenterMap = L.DomUtil.create('div', 'button btn-home px-1 pb-1');
		
		btnCenterMap.innerHTML= imgBtn; 
		btnCenterMap.onclick = this._center.bind(this);
		
		return btnCenterMap;
    },

    // onRemove: function(map) {
        // // Nothing to do here
    // },
	
	_center: function (e) {
		this._map.setView(this.options.coordinates, this.options.centerZoom);
    },
	
	
});

L.control.centerMap = function(opts) {
    return new L.Control.CenterMap(opts);
}

// =================================
// Panel Element
// =================================
L.PanelSide = L.Control.extend({
    options: {
        position: null,
    },
    initialize: function (param) {
        let getPanelId = (param) => {
            if (param.idPanel) {
                return param.idPanel;
            }
            return param;
        };

        let getPanelPosition = (param) => {
            if (param.position) {
                return this.options.position = param.position;
            }
            return 'topright';
        }

        this._lop = L.DomUtil.get(getPanelId(param));
        this.options.position = getPanelPosition(param);
    },
    onAdd: function (map) {
        L.DomEvent.on(this._lop, 'mousewheel', L.DomEvent.stopPropagation); //stop behavior parent on scroll mouse
        L.DomEvent.disableClickPropagation(this._lop, 'doubleclick', L.DomEvent.stopPropagation); //stop behavior parent on double click
        // L.DomEvent.on(L.DomUtil.get(this._lop.children), 'click', L.DomEvent.stopPropagation); //stop behavior parent on click

        return this._lop;
    },
    onRemove: function (map) {

    }

});

L.panelSide = function (param) {
    return new L.PanelSide(param);
}