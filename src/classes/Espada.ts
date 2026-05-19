import { Arma } from "../interfaces/Arma";

export class Espada implements Arma {
    atacar(): string {
        return "⚔️ Guerreiro atacou com espada!";
    }
}