import { Armadura } from "../interfaces/Armadura";

export class ArmaduraPesada implements Armadura {
    proteger(): string {
        return "🛡️ Guerreiro equipado com armadura pesada!";
    }
}