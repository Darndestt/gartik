const chutes = [
    ['cach', 'brin', 'casa', 'fami'],
    ['hora', 'esco', 'rosa', 'pequ'],
    ['turm', 'fran', 'rock', 'ang'],
    ['leao', 'peix', 'agumon'],
    ['aizen', 'papa', 'akamaru', 'aladin'],
    ['amy'], 
    ['pime', 'androide', 'andy'],
    ['angel', 'anima', 'anpanman', 'show'],
    ['aqua', 'ariel', 'arle', 'verd'],
    ['aven', 'supe', 'viva', 'flap'],
    ['trig', 'astro', 'avatar', 'babao'],
    ['baby', 'chum', 'backyardigans', 'bakugan'],
    ['bambam', 'bananaman', 'barba', 'bardock'],
    ['barney', 'bart', 'batatinha', 'fino'],
    ['batgirl', 'batman', 'butt'],
    ['ben'],
    ['bender', 'bernardo', 'bett', 'beyblade'],
    ['bibo', 'bicudo', 'biso', 'billy'],
    ['bleach', 'bloo', 'esponja', 'construtor'],
    ['bojack', 'boli', 'bonkers', 'bosko'],
    ['bouli', 'brandy', 'brasinhas', 'bratz'],
    ['breadwinners', 'brutus', 'bucky', 'caca'],
    ['bumblebee', 'buzz', 'caillou', 'canario'],
    ['capi', 'cara', 'sand', 'carnage'],
    ['cascao', 'noir', 'catatau', 'catdog'],
    ['cava', 'cave', 'cent', 'char'],
    ['chaves', 'cheetara'],
    ['chi chi'],
    ['chico', 'chilly', 'chowder', 'ciclope', 'cinderela'],
    ['clar', 'clifford', 'coel', 'cora'],
    ['coringa', 'corr', 'cosmo', 'costelinha'],
    ['cowb', 'coyo', 'cruella', 'cyberchase'],
    ['cyborg', 'danny', 'daphne', 'duck'],
    ['death'],
    ['dee dee'],
    ['deidara', 'dick', 'digimon', 'dino'],
    ['pine', 'distroller', 'docinho', 'dodoria'],
    ['doki', 'pixote', 'dora', 'doug'],
    ['drac', 'drag', 'droopy', 'dudu'],
    ['duelo', 'dumbo', 'edward'],
    ['eek the cat'], 
    ['cartman', 'erza', 'esqu', 'maximo'],
    ['eufrazino', 'eustacio', 'high', 'fairy'],
    ['faisca', 'fate', 'felicia', 'finn'],
    ['flas', 'floq', 'flor'],
    ['fly'],
    ['fraj', 'freakazoid', 'flin', 'freeza'],
    ['frozen', 'fullmetal', 'futurama', 'fuzzy'],
    ['gaara', 'gaguinho', 'galaxy', 'gali'],
    ['gamb', 'garfield', 'gargulas', 'garnet'],
    ['garu', 'gary', 'gasparzinho', 'gato'],
    ['ghoulia', 'glub-glub', 'godzilla', 'gogeta'],
    ['gohan', 'goku', 'gormiti', 'gorpo'],
    ['goten', 'gravity', 'gumb', 'hamtaro'],
    ['happy', 'he-man', 'hellsing', 'arnold'],
    ['puffy', 'home', 'hong', 'hortelino'],
    ['hulk', 'hunter', 'ikki', 'ilha'],
    ['inspetor', 'inuyasha', 'invasor'],
    ['irma', 'itachi', 'chan', 'jambo'],
    ['jasp', 'jatinho', 'jean', 'jessica'],
    ['mund', 'jimb', 'jimmy', 'jiraiya'],
    ['grand', 'john', 'estr', 'juanito'],
    ['juggernaut', 'juniper', 'kagome', 'kakashi'],
    ['katara'],
    ['ken'],
    ['kevin', 'kiara', 'kiba'],
    ['kid vs. kat'],
    ['killer', 'poss', 'kissyfur', 'konan'],
    ['korra', 'kovu', 'krypto', 'kuririn'],
    ['lagoona', 'lapis', 'leitao', 'leoncio']
    ['leoncio', 'thor', 'liga', 'ligeirinho'],
    ['lilica', 'stit', 'lindinha', 'lion-o'],
    ['lisa', 'lola', 'star', 'luffy'],
    ['lula', 'luluzinha', 'maca', 'made'],
    ['maggie', 'magneto', 'maguila', 'majin'],
    ['mand', 'amig', 'marc', 'marge'],
    ['marsupilami', 'martin', 'urs'],
    ['max'],
    ['steel', 'ranh', 'mega', 'mous'],
    ['mike', 'miss', 'mist', 'vamp'], 
    ['moni', 'mons', 'moranguinho', 'mordecai'], 
    ['mosq', 'Mago', 'sata', 'mucha'], 
    ['mulh', 'muppet', 'muriel', 'musculo'], 
    ['mutano', 'little', 'nami', 'nats'],
    ['naruto', 'flanders', 'nermal', 'nossa'],
    ['turn', 'lazlo', 'clube', 'coisa'], 
    ['demolidor', 'laboratorio', 'mascara', 'pati'],
    ['pode', 'fant', 'odie', 'olaf'],
    ['olivia', 'piece', 'punch-man', 'orochimaru'],
    ['bionicos', 'anji', 'cani', 'castores'],
    ['defensores', 'herc', 'impossiveis', 'jetsons'],
    ['jove', 'meni', 'mussarelas', 'oblongs'],
    ['padrinhos', 'ping', 'sabados', 'simpsons'],
    ['smurfs', 'snorks', 'substitutos', 'ving'],
    ['pairulito', 'pateta', 'pato', 'patr'],
    ['paty', 'pano', 'pedrita', 'pene'],
    ['pepe', 'peppa', 'peridot', 'pern'],
    ['siri', 'orni', 'pete', 'phineas'],
    ['pica-pau', 'piccolo', 'piggley', 'pink'],
    ['piu-piu', 'pixcodelics', 'plan', 'plic'],
    ['plucky', 'pluto', 'pocoyo', 'pokemon'],
    ['polly', 'popeye', 'pres', 'prin'],
    ['prof', 'projeto', 'pucca', 'puro'], 
    ['mort', 'quatro', 'ranma', 'rato'], 
    ['ravena', 'zero', 'redakai', 'rigby'], 
    ['rico', 'robin', 'robo', 'rupert'],
    ['ryu', 'saga', 'sagwa', 'sailor'],
    ['saitama', 'sakura', 'samu', 'sanj'],
    ['saori', 'sasuke', 'scooby-doo', 'seiya'],
    ['shaman', 'shazam', 'she-ra', 'shenlong'],
    ['shikamaru', 'shin', 'shur', 'silverhawks'],
    ['simba', 'sini', 'snoopy', 'sokka'],
    ['sonic', 'south', 'ghost', 'spawn'],
    ['speed', 'Burns', 'stan', 'steven'], 
    ['stewie', 'surfista', 'swat', 'tart'],
    ['tarzan'], 
    ['taz'], 
    ['temari', 'tempestade', 'tenchi', 'terk'], 
    ['tick', 'thundercats', 'teco', 'tigrao'],
    ['tigrao', 'timao', 'tiny', 'titio'],
    ['tobi', 'tocha', 'jerry', 'totoro'],
    ['tres', 'trunks', 'tsuna', 'tutubarao'], 
    ['twf', 'valentino', 'vash', 'vegeta'], 
    ['velma', 'venom', 'vinicius', 'vovo'], 
    ['w.i.t.c.h.', 'wanda', 'wilma', 'wood'],
    ['x-men', 'xavier', 'yang', 'hakusho'],
    ['yu-gi-oh!', 'yumi', 'yzma', 'zatch'],
    ['carioca', 'colmeia', 'jacare', 'zeca'],
    ['zuko', 'zurg']
];


const resp = [
    ['2 cachorros bobos', 'a bruxinha sabrina', 'a casa do mickey mouse', 'a casa monstro', 'a familia addams', 'a familia camundongo', 'a hora do recreio', 'a nova escola do imperador', 'a pantera cor-de-rosa', 'a pequena sereia', 'a turma do bairro', 'a vaca e o frango', 'a vida moderna de rocko', 'aang', 'adao leao', 'adolepeixes', 'agumon', 'aizen sousuke', 'ajudante de papai noel', 'akamaru', 'aladin', 'amy', 'ana pimentinha', 'androide', 'andy panda', 'angel beats', 'animaniacs', 'anpanman', 'apenas um show', 'aqua teen', 'aquaman', 'ariel', 'arlequina', 'arqueiro verde', 'as aventuras de babar', 'as aventuras de jackie chan', 'as aventuras de tintim', 'as meninas superpoderosas', 'as mumias vivas', 'as super gatinhas', 'as trapalhadas de flapjack', 'as trigemeas', 'astro boy', 'avatar', 'aventuras com os kratts'], 
    ['babao', 'baby looney tunes', 'bacamarte e chumbinho', 'backyardigans', 'bakugan', 'bambam', 'bananaman', 'barbapapa', 'barbie', 'bardock', 'barney', 'bart', 'batatinha', 'batfino e karate', 'batgirl', 'batman', 'beavis and butt-head', 'ben', 'bender', 'bernardo e bianca', 'betty atomica', 'betty boop', 'beyblade', 'bibo pai e bobi filho', 'bicudo, o lobisomem', 'billy', 'bisonho', 'bleach', 'bloo', 'bob esponja', 'bob o construtor', 'bojack horseman', 'bolinha', 'bonkers', 'bosko', 'bouli', 'brandy e sr bigodes', 'brasinhas do espaco', 'bratz', 'breadwinners', 'brutus', 'bucky', 'buffy a caca-vampiros', 'bumblebee', 'buzz lightyear'], 
    ['caca-fantasmas', 'caillou', 'canario negro', 'capitao america', 'capitao caverna', 'capitao falange', 'capitao planeta', 'carangos e motocas', 'carmen sandiego', 'carnage', 'cascao', 'cat noir', 'catatau', 'catdog', 'cavalo de fogo', 'caverna do dragao', 'caverninha', 'cebolinha', 'centurions', 'charley e mimmo', 'charlie brown', 'charlie e lola', 'chaves', 'cheetara', 'chi chi', 'chico bento', 'chilly willy', 'chowder', 'ciclope', 'cinderela', 'clarabela', 'clarencio, o otimista', 'clifford', 'coelho osvaldo', 'coelho ricochete', 'coracao gelado', 'coragem, o cao covarde', 'coringa', 'corrida alucinante', 'corrida maluca', 'cosmo', 'costelinha', 'cowboy bebop', 'cowboys de moo mesa', 'coyote', 'cruella', 'cyberchase', 'cyborg'], 
    ['danny phantom', 'daphne blake', 'darkwing duck', 'darwin', 'dave, o barbaro', 'death note', 'dee dee', 'deidara', 'dennis, o pimentinha', 'dick vigarista', 'digimon', 'dino', 'dinosaucers', 'dipper pines', 'distroller', 'docinho', 'dodoria', 'doki', 'dom pixote', 'dora, a aventureira', 'doraemon', 'doug', 'doutora brinquedos', 'draculaura', 'dragon ball', 'dragon quest fly', 'droopy', 'du, dudu e edu', 'duck dodgers', 'ducktales', 'duelo xiaolin', 'duende verde', 'dumbo'], 
    ['edward elric', 'eek the cat', 'eric cartman', 'erza', 'escola pra cachorro', 'esquadrilha abutre', 'esquilo sem grilo', 'eu sou o maximo', 'eufrazino', 'eustacio bagge', 'ever after high'], 
    ['fairy tail', 'faisca e fumaca', 'familia dracula', 'familia urso', 'family guy', 'fanboy e chum chum', 'fate stay night', 'felicia', 'finn', 'flapjack', 'flash', 'flash gordon', 'floquinho', 'florzinha', 'fly', 'formiga atomica', 'frajola', 'frajuto', 'frangolino', 'franjinha', 'freakazoid', 'fred flintstone', 'freeza', 'frozen', 'fullmetal alchemist', 'futurama', 'fuzzy confusao'], 
    ['gaara', 'gaguinho', 'galaxy trio', 'galinha pintadinha', 'gambit', 'garfield', 'gargulas', 'garnet', 'garu', 'gary', 'gasparzinho', 'gato corajoso', 'gato felix', 'george, o rei da floresta', 'ghoulia yelps', 'glub-glub', 'godzilla', 'gogeta', 'gohan', 'goku', 'gormiti', 'gorpo', 'goten', 'gravity falls', 'gumball'], 
    ['hamtaro', 'happy tree friends', 'harry e o balde de dinossauros', 'he-man', 'hellsing', 'hey arnold', 'hi hi puffy amiyumi', 'historinhas de dragoes', 'homem de ferro', 'homem passaro', 'homem-aranha', 'homer', 'hong kong fu', 'hora de aventura', 'hortelino', 'hulk', 'hunter x hunter'], 
    ['ikki', 'ilha dos desafios', 'inspetor bugiganga', 'inuyasha', 'invasor zim', 'irmao do jorel', 'irmaos metralha', 'itachi'], 
    ['jade chan', 'jake', 'jake long', 'jaken', 'jambo e ruivao', 'jaspion', 'jay jay, o jatinho', 'jean grey', 'jessica rabbit', 'jim no mundo da lua', 'jimbo', 'jimmy neutron', 'jiraiya', 'joao grandao', 'johnny bravo', 'johnny test', 'jonny quest', 'jorgen von estranho', 'josie e as gatinhas', 'juanito jones', 'juggernaut', 'juniper lee'], 
    ['kagome', 'kakashi', 'katara', 'ken', 'kevin levin', 'kiara', 'kiba', 'kick buttowski', 'kid flash', 'kid vs. kat', 'killer bee', 'kim possible', 'kissyfur', 'konan', 'korra', 'kovu', 'krypto', 'kuririn'], 
    ['lagoona blue', 'lanterna verde', 'lapis lazuli', 'leao da montanha', 'leitao', 'leoncio', 'lex luthor', 'liga da justica', 'ligeirinho', 'lilica', 'lilo e stitch', 'lindinha', 'lion-o', 'lisa', 'lola bunny', 'lola e virginia', 'lucky star', 'luffy', 'lula lele', 'lula molusco', 'luluzinha'],
    ['mabel pines', 'macaco loco', 'madeline', 'magali', 'maggie', 'magneto', 'maguila, o gorila', 'majin boo', 'manda chuva', 'mandark', 'mandy', 'mansao foster para amigos imaginarios', 'marcelino pao e vinho', 'marge', 'marsupilami', 'martin mystery', 'marvin, o marciano', 'masha e o urso', 'max', 'max steel', 'meany ranheta', 'mecanimais', 'medabots', 'megaman', 'megas xlr', 'mestre dos magos', 'mestre kame', 'mestre karin', 'mestre splinter', 'meu amigo da escola e um macaco', 'mickey mouse', 'mike, lu e og', 'miles do amanha', 'milhouse', 'minato', 'minions', 'minnie mouse', 'mirai nikki', 'miss spider', 'mistureba', 'moby dick', 'mona a vampiro', 'monica', 'monkey d luffy', 'monster high', 'monster rancher', 'moranguinho', 'mordecai', 'mosquito, mosquete e moscardo', 'mr. Magoo', 'mr. satan', 'mucha lucha', 'mulher gato', 'mulher gaviao', 'mulher invisivel', 'muppet babies', 'muriel', 'musculo total', 'mutano', 'mutante rex', 'muttley', 'my little pony'], 
    ['nami', 'nanatsu no taizai', 'naruto', 'natsu', 'ned flanders', 'nermal', 'nossa turma', 'noturno'], 
    ['o acampamento de lazlo', 'o cachorro vira-lata', 'o clube das winx', 'o coisa', 'o demolidor', 'o estranho mundo de jack', 'o fantastico mundo de bobby', 'o grande polegar', 'o incrivel mundo de gumball', 'o justiceiro', 'o laboratorio de dexter', 'o mascara', 'o patinho duque', 'o pequeno urso', 'o pequeno vampiro', 'o poderoso hercules', 'o quarteto fantastico', 'o urso do cabelo duro', 'o vale dos dinossauros', 'odie', 'olaf', 'olho vivo e faro fino', 'olivia palito', 'one piece', 'one punch-man', 'orochimaru', 'os bionicos', 'os anjinhos', 'os caezinhos do canil', 'os camundongos aventureiros', 'os castores pirados', 'os cavaleiros do zodiaco', 'os defensores da terra', 'os flintstones', 'os herculoides', 'os impossiveis', 'os incriveis', 'os jetsons', 'os jovens titas', 'os jovens titas em acao', 'os meninos desordeiros', 'os mussarelas', 'os oblongs', 'os padrinhos magicos', 'os pinguins de madagascar', 'os sabados secretos', 'os sete monstrinhos', 'os simpsons', 'os smurfs', 'os snorks', 'os substitutos', 'os super patos', 'os thornberrys', 'os vingadores'],
    ['pairulito', 'papa-leguas', 'papai sabe nada', 'pateta', 'pato donald', 'patolino', 'patrick', 'patrulha canina', 'paty maionese', 'pe de pano', 'pedrita', 'peixonauta', 'penelope charmosa', 'penelope pussycat', 'pepe le gamba', 'pepe legal', 'peppa pig', 'peridot', 'pernalonga', 'perninha', 'perola sirigueijo', 'perry o ornitorrinco', 'pete puma', 'peter griffin', 'peter pan', 'peter perfeito', 'peter potamus', 'phineas e ferb', 'pica-pau', 'piccolo', 'piggley winks', 'pingu', 'pinky dinky doo', 'pinky e o cerebro', 'piu-piu', 'pixcodelics', 'planet survival', 'planeta sheen', 'plankton', 'plic, ploc e chuvisco', 'plucky', 'pluto', 'pocoyo', 'pokemon', 'pole position', 'polly pocket', 'popeye', 'presto', 'presuntinho', 'princesa caroco', 'princesa jujuba', 'princesas-do-mar', 'princesinha sofia', 'professor dingle dong', 'professor utonio', 'projeto zeta', 'pucca', 'puro osso'], 
    ['quadrilha de morte', 'quatro bracos'],
    ['ranma', 'rato minuto', 'ravena', 'recruta zero', 'redakai', 'rick e morty', 'rigby', 'riquinho rico', 'robin', 'robot boy', 'rock lee', 'rocket power', 'roy corroi', 'rupert', 'ryu'], 
    ['saga de gemeos', 'sagwa', 'sailor moon', 'saitama', 'sakura card captors', 'sakura kinomoto', 'samurai champloo', 'samurai jack', 'samurai x', 'sandy bochechas', 'sanjay e craig', 'sanji', 'saori', 'sasuke', 'scooby-doo', 'se liga ian', 'seiya', 'shaman king', 'shazam', 'she-ra', 'sheep na cidade grande', 'shenlong', 'shikamaru', 'shin chan', 'shino', 'shinzo', 'show da luna', 'shura de capricornio', 'shurato', 'silverhawks', 'simba', 'sininho', 'snoopy','sokka', 'sonic', 'south park', 'space ghost', 'spawn', 'speed racer', 'spiff e hercules', 'sr sirigueijo', 'sr. Burns', 'sr. sinistro', 'stan smith', 'star vs as forcas do mal', 'steven universe', 'stewie', 'super campeoes', 'super choque', 'super dinamo', 'super esquadrao dos macacos robos', 'super homem', 'super onze', 'super pig', 'super sumo', 'super vaca', 'superamigos', 'supernoobs', 'surfista prateado', 'swat kats'], 
    ['tartaruga touche', 'tartarugas ninja', 'tarzan', 'taz', 'temari', 'tempestade', 'tenchi muyo', 'terk', 'the tick', 'thomas e seus amigos', 'thor', 'thundercats', 'tico e teco', 'tigrao', 'timao e pumba', 'timmy turner', 'tiny toon', 'tio chan', 'tio patinhas', 'titio avo', 'tobi', 'tocha humana', 'tom e jerry', 'totoro', 'transformers', 'tres espias demais', 'trigun', 'trunks', 'tsuna', 'tsunade senju', 'turma da monica', 'tutubarao', 'twf'],
    ['ulquiorra', 'uma robo adolescente', 'ursinho pooh', 'ursinhos carinhosos', 'ursinhos gummy'], 
    ['valentino troca-tapa', 'vampira', 'vash','vegeta', 'velma', 'venom', 'vingador', 'vinicius e tom', 'vovo uranai'], 
    ['w.i.t.c.h.', 'wally gator', 'wanda', 'wilma', 'woodstock', 'woody'],
    ['x-men', 'xavier'], 
    ['yin yang yo!', 'yu yu hakusho', 'yu-gi-oh!', 'yumi', 'yzma'], 
    ['zatch bell', 'ze carioca', 'ze colmeia', 'ze jacare', 'zeca urubu', 'zero no tsukaima', 'zuko', 'zurg']
];

let tryhardando = false;
let sair = false;
let respostasEnviadas = new Set();
let indiceAtual = 0;
let tempos = [];

function Delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function LimparPerto() {
    const respostas = document.getElementById('respostas');
    const pertos = respostas.querySelectorAll('.perto');
    pertos.forEach(perto => perto.remove());
}

function LimparDica() {
    const respostas = document.getElementById('respostas');
    const dicas = respostas.querySelectorAll('.dica');
    dicas.forEach(dica => dica.remove());
}

function LimparAcerto() {
    const respostas = document.getElementById('respostas');
    const acertos = respostas.querySelectorAll('.acertou');
    acertos.forEach(acerto => acerto.remove());
}

function ContemAcerto() {
    const respostas = document.getElementById('respostas');
    const acertos = respostas.querySelectorAll('.acertou');
    for (let acerto of acertos) {
        const conteudo = acerto.innerHTML;
        if (conteudo.match(/Você acertou/gi)) {
            return true;
        }
    }
    return false;
}

function LimparTempo() {
    tempos = [];
}

async function Chutar() {
    const form = document.querySelector('#formResposta');
    const input = form.querySelector('input');

    if (!input) return;

    for (let subChute of chutes) {
        const respostas = document.getElementById('respostas');
        const pertos = respostas.querySelectorAll('.perto');
        const dicas = respostas.querySelectorAll('.dica');

        const chute = subChute.join(' ');

        if (respostasEnviadas.has(chute)) continue;

        if (pertos.length > 0) {
            ChutarPerto();
            return;
        }

        if (dicas.length > 0) {
            ChutarDica();
            return;
        }

        if (ContemAcerto()) {
            LimparPerto();
            LimparDica();
            LimparAcerto();
            return;
        }

        if (sair) return;

        input.value = chute;
        respostasEnviadas.add(chute);

        const inicio = performance.now();

        await new Promise(resolve => {
            form.addEventListener('submit', () => {
                resolve();
            }, { once: true });
            form.requestSubmit();
        });

        await Delay(100);

        const fim = performance.now();
        const tempo = fim - inicio;
        tempos.push(tempo);

        tempoDiv.innerText = `${tempo.toFixed(2)}ms`;
    }
}

async function ChutarPerto() {
    let listaPerto = [];

    const respostas = document.getElementById('respostas');
    const pertos = respostas.querySelectorAll('.perto');

    if (!pertos) return;

    if (pertos.length > 0) {
        const ultimoPerto = pertos[pertos.length - 1];
        const strong = ultimoPerto.querySelector('strong');
        listaPerto = strong.textContent.split(' ');

        const form = document.querySelector('#formResposta');
        const input = form.querySelector('input');

        if (!input) return;

        if (listaPerto.length > 3) {
            const filtraResp = resp.flat().filter(res => listaPerto.flat().some(per => res.includes(per)));

            for (let resp of filtraResp) {
                if (respostasEnviadas.has(resp)) continue;

                if (ContemAcerto()) {
                    LimparPerto();
                    LimparDica();
                    LimparAcerto();
                    return;
                }

                if (sair) return;

                input.value = resp;
                respostasEnviadas.add(resp);

                const inicio = performance.now();

                await new Promise(resolve => {
                    form.addEventListener('submit', () => {
                        resolve();
                    }, { once: true });
                    form.requestSubmit();
                });

                await Delay(260);

                const fim = performance.now();
                const tempo = fim - inicio;
                tempos.push(tempo);

                tempoDiv.innerText = `${tempo.toFixed(2)}ms`;
            }
        }

        const filtraResp = resp.flat().filter(res => listaPerto.flat().some(per => res.includes(per)));

        for (let resp of filtraResp) {
            const respostas = document.getElementById('respostas');
            const pertos = respostas.querySelectorAll('.perto');

            if (respostasEnviadas.has(resp)) continue;

            if (ContemAcerto()) {
                LimparPerto();
                LimparDica();
                LimparAcerto();
                return;
            }

            if (ultimoPerto != pertos[pertos.length - 1]) {
                ChutarPerto();
                return;
            }

            if (sair) return;

            input.value = resp;
            respostasEnviadas.add(resp);

            const inicio = performance.now();

            await new Promise(resolve => {
                form.addEventListener('submit', () => {
                    resolve();
                }, { once: true });
                form.requestSubmit();
            });

            await Delay(260);

            const fim = performance.now();
            const tempo = fim - inicio;
            tempos.push(tempo);

            tempoDiv.innerText = `${tempo.toFixed(2)}ms`;
        }
    }
}

async function ChutarDicaPendente(respValidas, indiceInicial) {
    const form = document.querySelector('#formResposta');
    const input = form.querySelector('input');

    if (!input) {
        return;
    }

    for (let i = indiceInicial; i < respValidas.length; i++) {
        const resp = respValidas[i];

        if (respostasEnviadas.has(resp)) {
            continue;
        }

        if (ContemAcerto()) {
            LimparPerto();
            LimparDica();
            LimparAcerto();
            indiceAtual = 0;
            return;
        }

        if (sair) {
            return;
        }

        input.value = resp;
        respostasEnviadas.add(resp);

        const inicio = performance.now();   

        await new Promise(resolve => {
            form.addEventListener('submit', () => {
                resolve();
            }, { once: true });
            form.requestSubmit();
        });

        await Delay(260);

        const fim = performance.now();
        const tempo = fim - inicio;
        tempos.push(tempo);

        tempoDiv.innerText = `${tempo.toFixed(2)}ms`;
    }

    indiceAtual = 0;
}

async function ChutarDica() {
    let respValidas = [];
    let ultimaDica;

    const respostas = document.getElementById('respostas');
    const dicas = respostas.querySelectorAll('.dica');

    if (!dicas) return;

    if (dicas.length > 0) {
        ultimaDica = dicas[dicas.length - 1];
        const conteudo = ultimaDica.innerHTML;

        if (conteudo.match(/Dica/gi)) {
            const filtraConteudo = conteudo
                .replace(/.*Dica \(\d+\): /i, '')
                .replace(/&nbsp;/g, '')
                .replace(/__&nbsp;/g, ' ')
                .replace(/__/g, ' ')
                .replace(/_/g, '')
                .toLowerCase();

            const conteudoFiltrado = filtraConteudo.split('');

            for (let i = 0; i < resp.length; i++) {
                const respLine = resp[i];
                for (let j = 0; j < respLine.length; j++) {
                    const respCol = respLine[j];

                    if (respCol.length === conteudoFiltrado.length) {
                        let validaResp = true;

                        for (let k = 0; k < respCol.length; k++) {
                            if (conteudoFiltrado[k] !== ' ' && conteudoFiltrado[k] !== respCol[k]) {
                                validaResp = false;
                                break;
                            }
                        }

                        if (validaResp) {
                            respValidas.push(respCol);
                        }
                    }
                }
            }
        }
    }

    const form = document.querySelector('#formResposta');
    const input = form.querySelector('input');

    const tamanho = 40;
    const indiceFinal = Math.min(indiceAtual + tamanho, respValidas.length);

    for (let i = indiceAtual; i < indiceFinal; i++) {
        const resp = respValidas[i];

        const respostas = document.getElementById('respostas');
        const novasDicas = respostas.querySelectorAll('.dica');

        if (respostasEnviadas.has(resp)) continue;

        if (ContemAcerto()) {
            LimparPerto();
            LimparDica();
            LimparAcerto();
            indiceAtual = 0;
            return;
        }

        if (ultimaDica !== novasDicas[novasDicas.length - 1]) {
            indiceAtual = 0;
            await ChutarDica(respValidas);
            return;
        }

        if (sair) return;

        input.value = resp;
        respostasEnviadas.add(resp);

        const inicio = performance.now();   

        await new Promise(resolve => {
            form.addEventListener('submit', () => {
                resolve();
            }, { once: true });
            form.requestSubmit();
        });

        await Delay(260);

        const fim = performance.now();
        const tempo = fim - inicio;
        tempos.push(tempo);

        tempoDiv.innerText = `${tempo.toFixed(2)}ms`;
    }

    if (indiceFinal < respValidas.length) {
        indiceAtual = indiceFinal;
        await ChutarDicaPendente(respValidas, indiceFinal);
    } else {
        indiceAtual = 0;
    }
}

async function Tryhardar() {
    tryhardando = true;
    sair = false;
    indiceAtual = 0;
    respostasEnviadas.clear();

    LimparAcerto();
    LimparTempo();

    await Chutar();
    await ChutarPerto()
    await ChutarDica();

    LimparPerto();
    LimparDica();
}

var playDiv = document.createElement('button');
playDiv.innerText = 'Play';

playDiv.style.position = 'fixed';
playDiv.style.width = '48px';
playDiv.style.height = '48px';
playDiv.style.borderRadius = '50%';
playDiv.style.backgroundColor = '#000000';
playDiv.style.color = '#FFD700';
playDiv.style.border = 'none';
playDiv.style.displayDiv = 'flex';
playDiv.style.alignItems = 'center';
playDiv.style.justifyContent = 'center';
playDiv.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.3)';
playDiv.style.zIndex = '9999';
playDiv.style.left = '20px';
playDiv.style.top = 'calc(50% - 56px)';

document.body.appendChild(playDiv);

playDiv.addEventListener('click', Tryhardar);

var pararDiv = document.createElement('button');
pararDiv.innerText = 'Parar';

pararDiv.style.position = 'fixed';
pararDiv.style.width = '48px';
pararDiv.style.height = '48px';
pararDiv.style.borderRadius = '50%';
pararDiv.style.backgroundColor = '#f44336';
pararDiv.style.color = '#ffffff';
pararDiv.style.border = 'none';
pararDiv.style.display = 'flex';
pararDiv.style.alignItems = 'center';
pararDiv.style.justifyContent = 'center';
pararDiv.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.3)';
pararDiv.style.zIndex = '9999';
pararDiv.style.left = '20px';
pararDiv.style.top = 'calc(50% - 0px)';

document.body.appendChild(pararDiv);

pararDiv.addEventListener('click', function () {
    sair = true;
});

var tempoDiv = document.createElement('div');
tempoDiv.innerText = '0ms';
tempoDiv.style.position = 'fixed';
tempoDiv.style.top = 'calc(50% + 60px)';
tempoDiv.style.left = '20px';
tempoDiv.style.fontSize = '14px';
tempoDiv.style.color = 'black';
tempoDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
tempoDiv.style.padding = '5px 10px';
tempoDiv.style.borderRadius = '5px';
tempoDiv.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.3)';
tempoDiv.style.zIndex = '9999';

document.body.appendChild(tempoDiv);

var authorDiv = document.createElement('div');
authorDiv.innerText = 'By Darndest';

authorDiv.style.position = 'fixed';
authorDiv.style.top = '10px';
authorDiv.style.left = '10px';
authorDiv.style.fontSize = '14px';
authorDiv.style.color = 'black';
authorDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
authorDiv.style.padding = '5px 10px';
authorDiv.style.borderRadius = '5px';
authorDiv.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.3)';
authorDiv.style.zIndex = '9999';

document.body.appendChild(authorDiv);