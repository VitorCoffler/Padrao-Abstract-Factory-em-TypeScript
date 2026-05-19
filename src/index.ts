import { GuerreiroFactory } from "./factory/GuerreiroFactory";
import { MagoFactory } from "./factory/MagoFactory";

function executar(factory: any) {
    const arma = factory.criarArma();
    const armadura = factory.criarArmadura();

    console.log(arma.atacar());
    console.log(armadura.proteger());
    console.log("--------------------");
}

console.log("=== GUERREIRO ===");
executar(new GuerreiroFactory());

console.log("=== MAGO ===");
executar(new MagoFactory());