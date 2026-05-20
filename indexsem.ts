type TipoPersonagem = "guerreiro" | "mago";

class Espada {
    atacar(): string {
        return "⚔️ Guerreiro atacou com espada!";
    }
}

class ArmaduraPesada {
    proteger(): string {
        return "🛡️ Guerreiro equipado com armadura pesada!";
    }
}

class Cajado {
    atacar(): string {
        return "🪄 Mago lançou magia com cajado!";
    }
}

class TunicaMagica {
    proteger(): string {
        return "🧥 Mago equipado com túnica mágica!";
    }
}

function criarPersonagem(tipo: TipoPersonagem) {

    let arma: Espada | Cajado | null = null;
    let armadura: ArmaduraPesada | TunicaMagica | null = null;

    if (tipo === "guerreiro") {

        arma = new Espada();
        armadura = new ArmaduraPesada();

    } else if (tipo === "mago") {

        arma = new Cajado();
        armadura = new TunicaMagica();
    }

    console.log(arma?.atacar());
    console.log(armadura?.proteger());

    console.log("--------------------");
}

console.log("=== GUERREIRO ===");
criarPersonagem("guerreiro");

console.log("=== MAGO ===");
criarPersonagem("mago");