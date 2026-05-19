import { PersonagemFactory } from "./PersonagemFactory";
import { Arma } from "../interfaces/Arma";
import { Armadura } from "../interfaces/Armadura";
import { Espada } from "../classes/Espada";
import { ArmaduraPesada } from "../classes/ArmaduraPesada";

export class GuerreiroFactory implements PersonagemFactory {

    criarArma(): Arma {
        return new Espada();
    }

    criarArmadura(): Armadura {
        return new ArmaduraPesada();
    }
}