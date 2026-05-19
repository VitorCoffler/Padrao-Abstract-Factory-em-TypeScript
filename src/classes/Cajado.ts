import { Arma } from "../interfaces/Arma";

export class Cajado implements Arma {
    atacar(): string {
        return "🪄 Mago lançou magia com cajado!";
    }
}