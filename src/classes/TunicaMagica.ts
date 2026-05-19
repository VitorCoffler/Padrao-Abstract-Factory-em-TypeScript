import { Armadura } from "../interfaces/Armadura";

export class TunicaMagica implements Armadura {
    proteger(): string {
        return "🧥 Mago equipado com túnica mágica!";
    }
}