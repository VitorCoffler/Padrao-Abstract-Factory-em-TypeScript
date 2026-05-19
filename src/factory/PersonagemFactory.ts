import { Arma } from "../interfaces/Arma";
import { Armadura } from "../interfaces/Armadura";

export interface PersonagemFactory {
    criarArma(): Arma;
    criarArmadura(): Armadura;
}