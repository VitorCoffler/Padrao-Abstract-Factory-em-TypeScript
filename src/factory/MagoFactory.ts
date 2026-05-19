import { PersonagemFactory } from "./PersonagemFactory";
import { Arma } from "../interfaces/Arma";
import { Armadura } from "../interfaces/Armadura";
import { Cajado } from "../classes/Cajado";
import { TunicaMagica } from "../classes/TunicaMagica";

export class MagoFactory implements PersonagemFactory {

    criarArma(): Arma {
        return new Cajado();
    }

    criarArmadura(): Armadura {
        return new TunicaMagica();
    }
}