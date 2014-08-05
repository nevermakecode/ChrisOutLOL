var PropManager = {
	managers: {},
	init: function(prop, stage, phys2D, world) {
		var manager = this._getManager(prop.name);
		Object.defineProperty(prop, 'manager', {value: manager});
		manager.init(prop, stage, phys2D, world);
	},
	_getManager: function(name) {
		return this.managers[name] || this.managers.simpleProp;
	},
	update: function(prop) {
		prop.manager.update(prop);
	}
};
