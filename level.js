import Compositor from './composite.js';
import tileCollider from './tileCollider.js';
import {Matrix} from './math.js';

export default class Level {
	constructor() {
		this.comp = new Compositor();
		this.entities = new Set();
		this.tiles = new Matrix();

		this.tileCollider = new tileCollider(this.tiles);
	}

	update(deltaTime) {
		this.entities.forEach(entity => {
			entity.update(deltaTime);

			this.tileCollider.test(entity);
		})
	}
} 