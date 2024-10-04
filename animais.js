const chutes = [
    ['abut', 'acar', 'agua', 'agui'],
    ['agul', 'alca'],
    ['anu'],
    ['aran', 'arar'],
    ['asa'],
    ['arat', 'arra', 'azul', 'bale'],
    ['bara', 'belu', 'beso', 'bich'],
    ['bico'], 
    ['boi'],
    ['borb', 'cabr', 'caca', 'cach'], 
    ['cala', 'cama', 'came', 'cana'], 
    ['cang', 'capi', 'cara', 'card'], 
    ['carr', 'cava', 'cego', 'cobr'], 
    ['coel', 'cora', 'cord', 'corv'], 
    ['cuco', 'curi', 'cuti', 'diab'], 
    ['dour', 'drag', 'elef'],
    ['ema'], 
    ['emu'],
    ['esca', 'esco', 'esqu', 'estr'],
    ['foca', 'form', 'galo', 'garr'],
    ['gato', 'gavi', 'gaze', 'gira'],
    ['gnu'],
    ['guan', 'guar', 'impa', 'irar'],
    ['jaca', 'jacu', 'jagu', 'jara'],
    ['laga', 'leao', 'leop', 'lobo'],
    ['lula', 'maca', 'mand', 'mari'],
    ['marr', 'mata', 'mico', 'minh'],
    ['morc', 'mosq', 'nada', 'orni'],
    ['ostr', 'ouri', 'paca', 'pand'],
    ['papa', 'pard', 'pato', 'pava'],
    ['peix', 'piol', 'pira', 'pone'],
    ['porc', 'quei'], 
    ['ra'],
    ['rapo', 'rata', 'rato', 'rino'], 
    ['sapo', 'sara', 'tama', 'tana'], 
    ['tang', 'tatu', 'tigr', 'toup'], 
    ['trom', 'tuba'],
    ['uca'],
    ['urso', 'urub', 'vesp', 'zebr'],
    ['abelha', 'abetarda', 'acor', 'adax'], 
    ['aie-aie', 'albatroz', 'alce', 'alpaca'], 
    ['ameiva', 'andorinha', 'anemona', 'antilope'], 
    ['araponga', 'arenque', 'ariranha', 'arminho'], 
    ['asno', 'atoba', 'atum', 'auroque'], 
    ['ave-do-paraiso', 'avestruz', 'axolote', 'babuino'], 
    ['badejo', 'bagre', 'baiacu', 'barbatana'], 
    ['beija-flor', 'bem-te-vi', 'betta', 'bezerro'], 
    ['bisao', 'bode', 'boto', 'bufalo'], 
    ['bugio-preto', 'cadela', 'caititu', 'calopsita'], 
    ['camundongo', 'carneiro', 'carpa', 'cascavel'], 
    ['castor', 'casuar', 'centopeia', 'cervo'], 
    ['chacal', 'chamariz', 'chifre', 'chimpanze'], 
    ['chinchila', 'chupim', 'cigarra', 'cisne'], 
    ['civeta', 'coala', 'codorna', 'coiote'], 
    ['colibri', 'condor', 'corcova', 'coruja'], 
    ['cotovia', 'craca', 'crina', 'crista'], 
    ['crocodilo', 'cupim', 'dingo', 'dodo'], 
    ['doninha', 'dromedario', 'egua', 'enguia'], 
    ['enxame', 'esponja-do-mar', 'estorninho', 'faisao'], 
    ['falcao', 'feneco', 'ferrao', 'flamingo'], 
    ['fragata', 'fuinha', 'furao', 'gafanhoto'], 
    ['gaivota', 'galinha', 'gamba', 'ganso'], 
    ['garca', 'garoupa', 'gibao', 'gineta'], 
    ['girino', 'glutao', 'golfinho', 'gorila'], 
    ['gralha-azul', 'grilo', 'guaxinim', 'guelras'], 
    ['guepardo', 'hamster', 'hiena', 'hipopotamo'],
    ['iaque', 'ibis', 'iguana', 'jabuti'], 
    ['jamanta', 'javali', 'jerboa', 'jiboia'], 
    ['joaninha', 'joao-de-barro', 'jumento', 'kudu'],
    ['lacraia', 'lagosta', 'lambari', 'larva'], 
    ['lebre', 'leitao', 'lemure', 'leoa'], 
    ['lesma', 'lhama', 'libelula', 'lince'], 
    ['linguado', 'lombriga', 'lontra', 'louva-a-deus'],
    ['mabeco', 'macuco', 'mamba', 'mamute'], 
    ['manada', 'mangusto', 'marlin-azul', 'marmota'], 
    ['mexilhao', 'molusco', 'moreia', 'morsa'], 
    ['mosca', 'mula', 'musaranho', 'naja'], 
    ['narceja', 'narval', 'nautilo', 'ocapi'], 
    ['onca', 'orangotango', 'orca', 'orix'], 
    ['ovelha', 'pacu', 'pangolim', 'pantera'], 
    ['passaro-lira', 'pata', 'pelicano', 'pena'], 
    ['pepino-do-mar', 'percevejo', 'perdiz', 'periquito'], 
    ['pernilongo', 'peru', 'piau', 'pinguim'], 
    ['pintado', 'pipira', 'piton', 'pixarro'], 
    ['polvo', 'pombo', 'poraque', 'potro'], 
    ['pulga', 'puma', 'quati', 'quero-quero'], 
    ['quetzal', 'quivi', 'rabo', 'ratel'], 
    ['rebanho', 'rena', 'robalo', 'sagui'], 
    ['saicanga', 'saiga', 'salamandra', 'salmao'], 
    ['sanguessuga', 'sardinha', 'seriema', 'serpente'], 
    ['serval', 'siri', 'sucuri', 'suricato'], 
    ['surucucu', 'tainha', 'tambaqui', 'tarantula'], 
    ['tartaruga', 'teiu', 'tentaculos', 'texugo'], 
    ['tico-tico', 'tilapia', 'touro', 'traca'], 
    ['traira', 'truta', 'tucano', 'tucunare'], 
    ['tuiuiu', 'urumutum', 'urutu', 'vaca'], 
    ['vaga-lume', 'vicunha', 'viuva-negra', 'vombate'],
    ['wallaby', 'xexeu', 'zangao', 'zebu'], 
    ['zorrilho']
];

const resp = [
    ['abelha', 'abetarda', 'abutre', 'acaro', 'acor', 'adax', 'agua-viva', 'aguia', 'agulhao vela', 'aie-aie', 'albatroz', 'alcateia', 'alce', 'alpaca', 'ameiva', 'andorinha', 'anemona', 'antilope', 'anu', 'aranha', 'aranha-camelo', 'aranha-caranguejeira', 'aranha-do-mar', 'aranha-marrom', 'aranha-pavao', 'araponga', 'arara', 'arara-vermelha', 'ararajuba', 'aratu', 'arenque', 'ariranha', 'arminho', 'arraia', 'asa', 'asno', 'atoba', 'atum', 'auroque', 'ave-do-paraiso', 'avestruz', 'axolote', 'azulao'],
    ['babuino', 'badejo', 'bagre', 'baiacu', 'baleia', 'baleia-azul', 'barata', 'barbatana', 'beija-flor', 'beluga', 'bem-te-vi', 'besouro', 'besouro-do-amor', 'besouro-girafa', 'besouro-rinoceronte', 'betta', 'bezerro', 'bicho-da-seda', 'bicho-folha', 'bicho-pau', 'bicho-preguica', 'bico', 'bisao', 'bode', 'boi', 'borboleta', 'boto', 'bufalo', 'bugio-preto'],
    ['cabra', 'cabrito', 'cacao', 'cacatua', 'cachalote', 'cachorro', 'cachorro-vinagre', 'cadela', 'caititu', 'calango', 'calau', 'calopsita', 'camaleao', 'camarao', 'camelo', 'camundongo', 'canario', 'canguru', 'capivara', 'caracal', 'caracol', 'caramujo', 'caranguejo', 'caranguejo-dos-coqueiros', 'caranguejo-violinista', 'cardeal', 'cardume', 'carneiro', 'carpa', 'carrapato', 'carrica', 'cascavel', 'castor', 'casuar', 'cavalo', 'cavalo-marinho', 'cegonha', 'cegonha-bico-de-sapato', 'centopeia', 'cervo', 'chacal', 'chamariz', 'chifre', 'chimpanze', 'chinchila', 'chupim', 'cigarra', 'cisne', 'civeta', 'coala', 'cobra', 'cobra-cega', 'cobra-cipo', 'cobra-coral', 'codorna', 'coelho', 'coelho angora', 'coiote', 'colibri', 'condor', 'corais', 'corcova', 'cordeiro', 'coruja', 'corvina', 'corvo', 'cotovia', 'craca', 'crina', 'crista', 'crocodilo', 'cuco', 'cupim', 'curimata', 'curio', 'cutia'],
    ['diabo-da-tasmania', 'diabo-espinhoso', 'dingo', 'dodo', 'doninha', 'dourado', 'dragao do mar', 'dragao-de-komodo', 'dromedario'],
    ['egua', 'elefante', 'ema', 'emu', 'enguia', 'enxame', 'escama', 'escaravelho', 'escorpiao', 'escorpiao-vinagre', 'esponja-do-mar', 'esquilo', 'esquilo-voador', 'estorninho', 'estrela-do-mar'],
    ['faisao', 'falcao', 'feneco', 'ferrao', 'flamingo', 'foca', 'foca-elefante', 'formiga', 'formiga-leao', 'formiga-verde', 'fragata', 'fuinha', 'furao'],
    ['gafanhoto', 'gaivota', 'galinha', 'galo', 'gamba', 'ganso', 'garca', 'garoupa', 'garra', 'gato', 'gato-do-mato', 'gavial', 'gaviao', 'gazela', 'gazela-girafa', 'gibao', 'gineta', 'girafa', 'girino', 'glutao', 'gnu', 'golfinho', 'gorila', 'gralha-azul', 'grilo', 'guanaco', 'guara', 'guaxinim', 'guelras', 'guepardo'],
    ['hamster', 'hiena', 'hipopotamo'],
    ['iaque', 'ibis', 'iguana', 'impala', 'irara'],
    ['jabuti', 'jacana', 'jacare', 'jacu', 'jacutinga', 'jaguar', 'jaguatirica', 'jamanta', 'jararaca', 'jararacucu', 'javali', 'jerboa', 'jiboia', 'joaninha', 'joao-de-barro', 'jumento'],
    ['kudu'],
    ['lacraia', 'lagarta', 'lagartixa', 'lagarto', 'lagosta', 'lambari', 'larva', 'leao', 'leao-marinho', 'lebre', 'leitao', 'lemure', 'leoa', 'leopardo', 'leopardo-das-neves', 'lesma', 'lhama', 'libelula', 'lince', 'linguado', 'lobo', 'lobo da tasmania', 'lobo-guara', 'lobo-marinho', 'lombriga', 'lontra', 'louva-a-deus', 'lula'],
    ['mabeco', 'macaco', 'macaco-aranha', 'macaco-narigudo', 'macaco-prego', 'macuco', 'mamba', 'mamute', 'manada', 'mandril', 'mangusto', 'marimbondo', 'mariposa', 'maritaca', 'marlin-azul', 'marmota', 'marreco', 'mata-mata', 'mexilhao', 'mico-leao-dourado', 'mico-leao-preto', 'minhoca', 'molusco', 'morcego', 'moreia', 'morsa', 'mosca', 'mosquito', 'mosquito-prego', 'mula', 'musaranho'],
    ['nadadeira', 'naja', 'narceja', 'narval', 'nautilo'],
    ['ocapi', 'onca', 'orangotango', 'orca', 'orix', 'ornitorrinco', 'ostra', 'ostra japonesa', 'ourico', 'ourico-do-mar', 'ovelha'],
    ['paca', 'pacu', 'panda', 'panda-vermelho', 'pangolim', 'pantera', 'papa-capim', 'papagaio', 'papagaio-do-mar', 'pardal', 'passaro-lira', 'pata', 'pato', 'pavao', 'peixe', 'peixe-agulha', 'peixe-anjo', 'peixe-boi', 'peixe-bolha', 'peixe-borboleta', 'peixe-bruxa', 'peixe-corda', 'peixe-espada', 'peixe-folha', 'peixe-galo', 'peixe-gato', 'peixe-lanterna', 'peixe-leao', 'peixe-lua', 'peixe-mandarim', 'peixe-morcego', 'peixe-palhaco', 'peixe-pedra', 'peixe-rei', 'peixe-serra', 'peixe-sol', 'peixe-trombeta', 'peixe-voador', 'peixe-zebra', 'pelicano', 'pena', 'pepino-do-mar', 'percevejo', 'perdiz', 'periquito', 'pernilongo', 'peru', 'piau', 'pinguim', 'pintado', 'piolho', 'piolho-de-cobra', 'pipira', 'piranha', 'pirarucu', 'piton', 'pixarro', 'polvo', 'pombo', 'ponei', 'poraque', 'porco', 'porco-da-terra', 'porco-do-mar', 'porco-do-mato', 'porco-espinho', 'porquinho-da-india', 'potro', 'pulga', 'puma'],
    ['quati', 'queixada', 'quero-quero', 'quetzal', 'quivi'],
    ['ra', 'rabo', 'raposa', 'ratazana', 'ratel', 'rato', 'rato-toupeira-pelado', 'rebanho', 'rena', 'rinoceronte', 'robalo'],
    ['sagui', 'saicanga', 'saiga', 'salamandra', 'salmao', 'sanguessuga', 'sapo', 'sapo-boi', 'saracura', 'sardinha', 'seriema', 'serpente', 'serval', 'siri', 'sucuri', 'suricato', 'surucucu'],
    ['tainha', 'tamandua', 'tamanduai', 'tambaqui', 'tanajura', 'tangara', 'tarantula', 'tartaruga', 'tatu', 'taturana', 'teiu', 'tentaculos', 'texugo', 'tico-tico', 'tigre', 'tigre branco', 'tigre de bengala', 'tilapia', 'toupeira', 'touro', 'traca', 'traira', 'tromba', 'truta', 'tubarao', 'tubarao-baleia', 'tubarao-branco', 'tubarao-duende', 'tubarao-enfermeiro', 'tubarao-lixa', 'tubarao-martelo', 'tucano', 'tucunare', 'tuiuiu'],
    ['uca', 'urso', 'urso-pardo', 'urso-polar', 'urubu', 'urubu-rei', 'urumutum', 'urutu'],
    ['vaca', 'vaga-lume', 'vespa', 'vespa-do-mar', 'vicunha', 'viuva-negra', 'vombate'],
    ['wallaby'],
    ['xexeu'],
    ['zangao', 'zebra', 'zebu', 'zorrilho']
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