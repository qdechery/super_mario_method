import Entity from './entity.js';
import Jump from './traits/jump.js';
import Velocity from './traits/velocity.js';
import {loadMarioSprites} from './sprites.js';


export function createMario() {
	return loadMarioSprites()
	.then(sprite => {
		const mario = new Entity();	

		mario.addTrait(new Velocity());
		mario.addTrait(new Jump());

		mario.draw = function drawMario(context) {
			sprite.draw('idle', context, this.pos.x, this.pos.y);	
		}
		// mario.update = function updateMario(deltaTime) { 
		// }			
		return mario;
	});
}