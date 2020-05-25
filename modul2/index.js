import {Ramen} from './Ramen.js';
import { Place } from './Place.js';
import {Sushi} from './Sushi.js'

const ramen = new Ramen();
const place = new Place();
const sushi = new Sushi();

ramen.teachMeTaste();
place.showMe();
sushi.wantEatSushi();
place.teachMeTaste();
ramen.wantShopping();
place.wantShopping();
//place.teachMeTaste();