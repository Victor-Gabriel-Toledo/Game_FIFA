//Cadastro de usuário no jogo.
class Cadastro{
    constructor(UserName, email, senha){
        this.UserName = UserName
        this.email = email
        this.senha = senha
    }
//Realiza a validação da senha.
    validarSenha(confirmeSenha){
        if(confirmeSenha === this.senha){
            return `Usuário ${this.UserName} com o email ${this.email}, cadastrado com sucesso.`
        }
        else{
            return `Senha invalida. Tente novamente.`
        }
    }
}
//Testando cadastro.
let CadastroDoUsuario = new Cadastro("Victor","teste@exemplo.com","senha123")

console.log(CadastroDoUsuario.validarSenha("senha123"))//Usuário Victor com o email teste@exemplo.com cadastrado com sucesso.
console.log(CadastroDoUsuario.validarSenha("senha431"))//Senha invalida. Tente novamente.

//Autenticar login com base nas informações fornecidas pelo o usuário.
class Login{
    constructor(email, senha){
        this.email = email
        this.senha = senha
        this.tentativasIncorretas = 0
    }
//Autenticação.
    autenticar(inputEmail, inputSenha){
        //Bloqueio após exceder tentativas permitidas.
        if(this.tentativasIncorretas >= 3){
            return`Usuário bloqueado. Tente novamente em 1 minuto.`
        }
        //Verifica as credencias.
        if(this.email === inputEmail && this.senha === inputSenha){
            this.tentativasIncorretas = 0 //Reseta tentativas ao logar com sucesso.
            return `Login efetuado com sucesso.`
        }

        this.tentativasIncorretas++
        
        if(this.email !== inputEmail && this.senha !== inputSenha){
            return`Usuário inválido. Tente novamente.`
        }
        if(this.email !== inputEmail){
            return`Email inválido. Tente novamente.`
        }
        else{
            return`Senha incorreta. Tente novamente.`
        }
    }
}
//Testando a autenticação.
let loginDoUsuario = new Login("teste@exemplo.com", "senha123")

console.log(loginDoUsuario.autenticar("teste@exemplo.com", "senha123"))//Login efetuado com sucesso.
console.log(loginDoUsuario.autenticar("teste@exemplo.com", "senha431"))//Senha incorreta. Tente novamente.
console.log(loginDoUsuario.autenticar("email@errado.com", "senha123"))//Email inválido. Tente novamente.
console.log(loginDoUsuario.autenticar("email@errado.com", "senhaErrada"))//Usuário inválido. Tente novamente.
console.log(loginDoUsuario.autenticar("teste@exemplo.com", "senha789"))//Usuário bloqueado. Tente novamente em 1 minuto.

//Escolhendo tipo de campeonato de clubes de acordo com a região.
class CampeonatoClubes{
    constructor(){
        this.campeonatos = {
            campeonatoNacional:{
                Brasil: "Brasileiro",
                Alemanha: "Bundesliga",
                Italia: "Série A",
                Inglaterra: "Premier Legue",
                Espanha: "La Liga",
                Franca: "Ligue One"
            },
            campeonatoContinental:{
                Europa: "Champions Legue",
                AmericaDoSul: "Libertadores",
                Africa: "Liga dos Campeões da CAF",
                Asia: "AFC Champions Legue Elite"
            },
            campeonatoMudial:{
                Mundial: "Mundial de Clubes"
            }
        }
    }
//Realiza as escolha do campeonato de clubes.
    escolhaCampeonato(nome){
        for(const regiao in this.campeonatos){
            if(this.campeonatos[regiao][nome]){
                return`Você escolheu jogar o campeonato ${this.campeonatos[regiao][nome]}`
            }
            else{
                return`Nenhuma opção válida foi selecionada. Tente novamente.`
            }
        }
    }
}  
//Testando a escolha do campeonato de clubes.
let campeonatoDeClubes = new CampeonatoClubes()

console.log(campeonatoDeClubes.escolhaCampeonato("Brasil"))//Você escolheu jogar o campeonato Brasileiro.
console.log(campeonatoDeClubes.escolhaCampeonato("Europa"))//Você escolheu jogar o campeonato Champions Legue.
console.log(campeonatoDeClubes.escolhaCampeonato("Mundial"))//Você escolheu jogar o campeonato Mundial de Clubes.
console.log(campeonatoDeClubes.escolhaCampeonato("Argentina"))//Nenhuma opção válida foi selecionada. Tente novamente.

//Seleciona o time que o jogador irá jogar de acordo com o campeonato que o time joga.
class Time extends CampeonatoClubes{
    constructor(){
        super()
        this.timeCampeonato = {
            Brasileiro: [
                "Athletico Paranaense", "Atlético Mineiro", "Atlético Goianiense", "Bahia", "Botafogo",
                "Bragantino", "Corinthians", "Criciúma", "Cruziero", "Cuiabá", "Flamengo", "Fluminense", "Fortaleza",
                "Grêmio", "Internacional", "Juventude", "Palmeiras", "São Paulo", "Vasco", "Vitória"
            ],
            Bundeliga: [
                "Augsburg", "Bayer Leverkusen", "Bayern München", "Bochum", "Borussia Dortmund", "Borussia Mönchengladbach",
                "Colônia", "Darmstadt", "Eintracht Frankfurt", "Freiburg", "Heidenheim", "Hoffenheim", "Mainz 05",
                "RB Leipzig", "Stuttgart", "Union Berlin", "Werder Bremen", "Wolfsburg"
            ],
            SerieA: [
                "Atalanta", "Bologna", "Cagliari", "Como", "Empoli", "Fiorentina", "Genoa",
                "Hellas Verona", "Inter de Milão", "Juventus", "Lazio", "Lecce", "Milan",
                "Monza", "Napoli", "Parma", "Roma", "Torino", "Udinese", "Venezia"
            ],
            PremierLegue: [
                "Arsenal", "Aston Villa", "Bournemouth", "Brentford", "Brighton", "Burnley",
                "Chelsea", "Crystal Palace", "Everton", "Fulham", "Liverpool", "Luton Town",
                "Manchester City", "Manchester United", " Newcastle", "Nottingham Forest",
                "Tottenham", "West Ham", "Wolverhampton"
            ],
            LaLiga: [
                "Alavés", "Almería", "Athletic Bilbao", "Atlético de Madrid", "Barcelona",
                "Cádiz", "Celta de Vigo", "Getafe", "Girona", "Granada", "Las Palmas", "Mallorca",
                "Osasuna", "Rayo Vallecano", "Real Betis", "Real Madrid", "Real Sociedad", "Sevilla",
                "Valencia", "Villarreal"
            ],
            LigueOne: [
                "AS Monaco", "Clermont Foot", "FC Lorient", "Le Havre AC", "LOSC Lille", "Metz",
                "Montpellier HSC", "Nantes", "OGC Nice", "Olympique de Marseille", "Olympique Lyonnais",
                "Paris Saint-Germain", "RC Lens", "RC Strasbourg", "Stade Brestois 29", "Stade de Reims",
                "Stade Rennais", "Toulouse FC"
            ],
            ChampionsLegue: [
                "Arsenal", "Atlético de Madrid", "Barcelona", "Bayern Müchen", "Benfica", "Borussia Dortmund",
                "Braga", "Celtic", "Copenhague", "Estrela Vermelha", "Feyenoord", "Galatasaray","Inter de Milão",
                "Lazio", "Lens", "Manchester City", "Manchester United", "Milan", "Newcastle", "Paris Saint-Germain",
                "Porto", "Real Madrid", "Real Sociedad", "Salzburg", "Sevilla", "Shakhtar Donestsk", "Union Berlin",
                "Napoli", "Antwerp", "Youg Boys"
            ],
            Libertadores: [
                "Alianza Lima", "Atlético Mineiro", "Barcelona SC", "Bolívar", "Botafogo", "Bragantino",
                "Cerro Porteño", "Cobresal", "Colo-Colo", "Caracas FC", "Deportivo Táchira", "Estudiantes de La Plata",
                "Flamengo", "Fluminense", "Grêmio", "Huachipato", "Independiente Del Valle", "LDU Quito",
                "Libertad", "Millonarios", "Nacional", "Peñarol", "Palmeiras", "Palestino", "Red Bull Bragantino",
                "River Plate", "Rosario Central", "San Lorenzo", "São Paulo", "The Strongest", "Universidad de Chile", "Universitario"
            ],
            LigaDosCampeoesCAF: [
                "Al Ahly", "Al Hilal", "Al Merreikh", "Al-Merrikh", "Al Nasr", "Al Ahly Benghazi", 
                "AS Douanes", "AS Otohô", "ASE Mimosas", "Coton Sport", "CR Belouizdad", "Djoliba", 
                "Enyimba", "Espérance de Tunis", "FAR Rabat", "Hafia", "Horoya", "Mamelodi Sundowns", 
                "Olympique Khouribga", "Pyramids", "Real Bamako", "Simba", "TP Mazembe", "Wydad Casablanca", 
                "Young Africans"
            ],
            AFCchampionsLegueElite: [
                "Al Ahly", "Al Hilal", "Al Nassr", "Al Sadd", "Al Wahda", "Al Zamalek", "Beijing Guoan",
                "Bengaluru FC", "Buriram United", "Guangzhou Evergrande", "Jeonbuk Hyundai Motors",
                "Kawasaki Frontale", "Melbourne Victory", "Persepolis FC", "Pohang Steelers", "Port FC",
                "Qingdao Huanghai", "Shandong Taishan", "Sharjah FC", "Sydney FC", "Ulsan Hyundai",
                "Yokohama F. Marinos", "Zob Ahan", "Guangzhou FC"
            ],
            Mundial: [
                "Al-Ahly", "Al-Ain", "Al-Hilal", "Auckland City", 
                "Bayern de Müchen", "Benfica", "Boca Juniors", "Borussia Dortmund", 
                "Botafogo","Chelsea", "Club León", "Flamengo", "Fluminense", 
                "Internazionale de Milão", "Juventus", "Manchester City", "Mamelodi Sundowns", 
                "Monterrey", "Paris Saint-Germain", "Palmeiras", "Pachuca", 
                "Porto", "Real Madrid", "River Plate", "Seattle Sounders", 
                "Urawa Red Diamonds", "Wydad"
            ]
        }
    }
//Realiza a escolha de time de acordo com o campeonato que joga.
    escolhaDeTime(nomeCampeonato, nomeTime){
        const campeonato = this.escolhaCampeonato([nomeCampeonato])
        if(!campeonato){
            return`Nenhum campeonato válido foi selecionado. Tente novamente.`
        }

        const time = this.timeCampeonato[nomeCampeonato]
        if(!time){
            return`Nenhum time disponível para o campeonato ${campeonato}`
        }

        else if(time.includes(nomeTime)){
            return`Você escolheu o time ${nomeTime} para jogar o campeonato ${campeonato}. Bom jogo.`
        }
        else{
            return`O time ${nomeTime} não está disponível no campeonato ${campeonato}`
        }
    }
}
//Testando a escolha de times
let time = new Time()

console.log(time.escolhaDeTime("Brasil", "São Paulo"))//Você escolheu o time São Paulo para jogar o campeonato Brasileiro. Bom jogo.
console.log(time.escolhaDeTime("Europa", "Barcelona"))//Você escolheu o time Barcelona para jogar o campeonato Champions Legue. Bom jogo.
console.log(time.escolhaDeTime("Inglaterra", "Milan"))//O time Milan não está disponível no campeonato Premier Legue.
console.log(time.escolhaDeTime("Mundial", "Botafogo"))//Você escolheu o time Botafogo para jogar o campeonato Mundial de Clubes.
console.log(time.escolhaDeTime("Chile", "Colo-colo"))//Nenhum campeonato válido foi selecionado. Tente novamente.

//Escolhendo tipo de campeonato de seleções por continentes em que atuam.
class CampeonatoDeSelecao{
    constructor(){
        this.campeonatos = {
            AmericaDoSul:{
                CopaAmerica: "Copa América"
            },
            Europa:{
                Europa: "Eurocopa",
                NationsLegue: "Liga das Nações"
            },
            Africa:{
                CopaAfricana: "Copa Africana das Nações"
            },
            Asia:{
                CopaDaAsia: "Copa da Ásia"
            },
            Mundial:{
                CopaDoMundo: "Copa do Mundo"
            }
        }
    }
//Realiza as escolha do campeonato de seleções.
    escolhaCampeonato(nome){
        for(const regiao in this.campeonatos){
            if(this.campeonatos[regiao][nome]){
                return`Você escolheu jogar a ${this.campeonatos[regiao][nome]}.`
            }
            else{
                return`Nenhuma opção válida foi selecionada. Tente novamente.`
            }
        }
    } 
}
//Testanto a escolha do campeonato de seleções.
let campeonatoDeSelecoes = new CampeonatoDeSelecao()

console.log(campeonatoDeSelecoes.escolhaCampeonato("CopaAmerica"))//Você escolheu jogar a Copa América.
console.log(campeonatoDeSelecoes.escolhaCampeonato("Eurocopa"))//Você escolheu jogar a Eurocopa.
console.log(campeonatoDeSelecoes.escolhaCampeonato("CopaAsia"))//Você escolheu jogar a Copa da Ásia.
console.log(campeonatoDeSelecoes.escolhaCampeonato("CopaAfricana"))//Você escolheu jogar a Copa Africana das Nações.
console.log(campeonatoDeSelecoes.escolhaCampeonato("CopaDoMundo"))//Você escolheu jogar a Copa do Mundo.

//Seleciona a seleção que o jogador irá jogar de acordo com o campeonato que o time joga.
class Selecao extends CampeonatoDeSelecao{
    constructor(){
        super()
        this.campeonatoSelecao = {
            CopaAmerica: [
                "Argentina", "Bolívia", "Brasil", "Chile", "Colômbia",
                "Equador", "Paraguai", "Peru", "Uruguai", "Venezuela"
            ],
            Eurocopa: [
                "Alemanha", "Albânia", "Áustria", "Bélgica", "Dinamarca", "Escócia", "Eslováquia", "Eslovênia",
                "Espanha", "França", "Hungria", "Inglaterra", "Itália", "Holanda", "Portugal", "Romênia",
                "Sérvia", "Suíça", "Tchéquia", "Turquia"
            ],
            NationsLegue: [
                "Croácia", "Dinamarca", "Eslovênia", "Escócia", "Espanha", "França", "Geórgia",
                "Alemanha", "Grécia", "Itália", "Noruega", "Holanda", "Polônia", "Portugal",
                "Suíça","Turquia"
            ],
            CopaAfricana: [
                "África do Sul", "Argélia", "Burkina Faso", "Cabo Verde", "Camarões", "Comores", "Congo",
                "Costa do Marfim", "Egito", "Guiné", "Guiné-Bissau", "Gana", "Jordânia", "Malawi", "Mali",
                "Marrocos", "Namíbia", "Nigéria", "Senegal", "Sierra Leone", "Togo", "Tunísia", "Zâmbia"
            ],
            CopaDaAsia: [ 
                "Afeganistão",  "Arábia Saudita",  "Austrália",  "Bahrain", "China",  "Coreia do Norte", 
                "Coreia do Sul", "Irã", "Iraque", "Japão", "Jordânia", "Kwait", "Líbano", "Omã", 
                "Palestina", "Qatar", "Síria", "Tailândia", "Turcomenistão", "União dos Emirados Árabes", 
                "Uzbequistão", "Vietnã", "Yemen"
            ],
            CopaDoMundo: [
                "Alemanha", "Argentina", "Austrália", "Bélgica", "Brasil", "Camarões", "Canadá", 
                "Costa Rica", "Croácia", "Dinamarca", "Espanha", "Equador", "França", "Gana", 
                "Inglaterra", "Irã", "Japão", "Marrocos", "México", "Holanda", "Polônia", 
                "Portugal", "Senegal", "Sérvia", "Tunísia", "Uruguai", "Catar"
            ]
        }
    }
//Realiza a escolha da seleção de acordo com o campeonato que joga.
    escolhaDeSelecao(nomeCampeonato, nomeSelacao){
        const campeonato = this.escolhaCampeonato[nomeCampeonato]
        if(!campeonato){
            return`Nenhum campeonato válido selecionado. Tente novamente`
        }

        const selecao = this.campeonatoSelecao[nomeSelacao]
        if(!selecao){
            return`Nenhuma seleção disponível para o campeonato ${campeonato}`
        }
        else if(selecao.includes(nomeSelacao)){
            return`Você escolheu a seleção ${nomeSelacao} para jogar o campeonato ${campeonato}. Bom jogo`
        }
        else{
            return`A seleção ${nomeSelacao} não está disponível no campeonato ${campeonato}`
        }
    }
}
//Testando a escolha de seleções
let selecao = new Selecao()

console.log(selecao.escolhaDeSelecao("CopaAmerica", "Brasil"))//Você escolheu a seleção Brasil para jogar o campeonato Copa América
console.log(selecao.escolhaDeSelecao("Eurocopa", "Portugal"))//Você escolheu a seleção Portugal para jogar o campeonato Eurocopa
console.log(selecao.escolhaDeSelecao("CopaDaAsia", "Argentina"))//A seleção Argentina não está disponível no campeonato Copa da Ásia
console.log(selecao.escolhaDeSelecao("CopaDoMundo", "Brasil"))//Você escolheu a seleção Brasil para jogar o campeonato Copa do Mundo
console.log(selecao.escolhaDeSelecao("SerieA", "Porto"))//Nenhum campeonato válido selecionado. Tente novamente

//Simula uma partida de times/seleções
class Partida{
    constructor(timeEscolhido, timeRival){
        this.timeEscolhido = timeEscolhido
        this.timeRival = timeRival
        this.golsTimeEscolhido = 0
        this.golsTimeRival = 0
    }
//Atualiza o placar da partida
    placar(golsTimeEscolhido, golsTimeRival){
        this.golsTimeEscolhido += golsTimeEscolhido
        this.timeRival += golsTimeRival

        if(this.golsTimeEscolhido === this.golsTimeRival){
            return`Partida terminou com o placar de ${this.golsTimeEscolhido}x${this.golsTimeRival}. Empate.`
        }
        else if(this.golsTimeEscolhido > this.golsTimeRival){
            return `${this.timeEscolhido} venceu com o placar de ${this.golsTimeEscolhido}x${this.golsTimeRival}.`
        }
        else{
            return`${this.timeRival} venceu com o placar de ${this.golsTimeRival}x${this.golsTimeEscolhido}.`
        }
    }
}
//Mostra o resultado da partida
let resultado = new Partida("São Paulo", "Fluminense")

console.log(resultado.placar(3, 0))//São Paulo venceu com o placar de 3x0.
console.log(resultado.placar(1, 2))//Fluminense venceu com o placar de 2x1
console.log(resultado.placar(0, 0))//Partida terminou com o placar de 0x0. Empate.