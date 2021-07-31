import React from 'react';
import { View, Text, Button, Image, ImageBackground, StyleSheet,TouchableOpacity, ScrollView } from 'react-native';

let logoLocal = require('C:/Users/Alysson/GameShearch/src/images/fundo3.png');
let logoURI = "https://i.pinimg.com/564x/00/21/7f/00217fa56dda538f18086408fafd6ac5.jpg";

function Plataforma() {
  return (
    <ScrollView>
    <View style={{ margin: 2 }}>
        <ImageBackground source={logoLocal} style={{ width: '100%', height: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={stylesp.containerimagem2}>
                    <Image
                        style={{ width: 100, height: 130, }}
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/b/ba/Rayman_Legends.jpg/250px-Rayman_Legends.jpg' }}
                    />
                </View>
                <View style={stylesp.containertitulojogo2}>
                    <Text style={{ fontSize: 50, fontStyle: 'italic', marginTop: 26 }}> RAYMAN LEGENDS</Text>
                </View>
            </View>
            <View style={stylesp.containerdescricao2}>
                <Text>
                O jogo tem o estilo um pouco parecido com Rayman Origins, o seu antecessor, na qual múltiplos jogadores correm, saltam e esmurraçam abrindo caminho pelos níveis. Os Lums podem ser colecionados ao ser tocados, derrotando inimigos, ou libertando Teensies. Juntamente com Rayman, Globox, e os Teensies, os jogadores também podem controlar Barbara, uma mulher viquingue.[16] Além de Barbara, ao longo do jogo, é possível se aventurar e desbloquear o restante das mulheres viquingues, todas elas com aparência diferente, porém, o jogo peca por não dar uma personalidade diferente a cada uma delas. 
                </Text>
                <Text>Data de lançamento inicial: 29 de agosto de 2013.</Text>
                <Text>Desenvolvedor: Michel Ancel.</Text>
                <Text>Estúdio:  Ubisoft, Ubisoft Montpellier, Pastagames.</Text>
                <Text>Plataformas:Microsoft Windows, Nintendo Switch, Wii U, PlayStation 3, PlayStation 4, PlayStation Vita, Xbox 360, Xbox One.</Text>
                <Text>Gêneros: Plataforma.</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                    <View>
                        <TouchableOpacity onPress={()=>{
                            Linking.openURL('https://www.youtube.com/watch?v=OK4iSx2m2Tw');
                        }}>
                            <View style={stylesp.button2}>
                                <Text style={stylesp.buttonText2}>TRAILER/GAMEPLAY</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>{
                            Linking.openURL('https://www.kabum.com.br/cgi-local/site/produtos/descricao_ofertas.cgi?codigo=96258&gclid=EAIaIQobChMI6JK5prCD8gIVwweRCh3tYAJrEAQYASABEgKjP_D_BwE');
                        }}>
                            <View style={stylesp.button2}>
                                <Text style={stylesp.buttonText2}>ONDE COMPRAR</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
            <View>
              <Text></Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={stylesp.containerimagem2}>
                    <Image
                        style={{ width: 100, height: 130, }}
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/e/e9/Celeste_capa.jpg/270px-Celeste_capa.jpg' }}
                    />
                </View>
                <View style={stylesp.containertitulojogo2}>
                    <Text style={{ fontSize: 35, fontStyle: 'italic', marginTop: 26 }}> CELESTE</Text>
                </View>
            </View>
            <View style={stylesp.containerdescricao2}>
                <Text>
                Celeste é um jogo de plataforma no qual os jogadores controlam uma garota chamada Madeline enquanto ela sobe em uma montanha, evitando vários obstáculos mortais. Além de pular e escalar paredes por um período limitado de tempo, Madeline tem a capacidade de realizar um traço no meio do ar nas oito direções cardeais.
                </Text>
                
                <Text>Data de lançamento inicial: 25 de janeiro de 2018.</Text>
                <Text>Desenvolvedor: Maddy Thorson, Noel Berry.</Text>
                <Text>Estúdio: Matt Makes Games.</Text>
                <Text>Plataformas: Nintendo Switch, PlayStation 4, Xbox One, macOS, Linux, Microsoft Windows, Google Stadia, Mac OS Classic.</Text>
                <Text>Gêneros: Plataforma.</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                    <View>
                        <TouchableOpacity onPress={()=>{
                            Linking.openURL('https://www.youtube.com/watch?v=70d9irlxiB4');
                        }}>
                            <View style={stylesp.button2}>
                                <Text style={stylesp.buttonText2}>TRAILER/GAMEPLAY</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>{
                            Linking.openURL('https://store.steampowered.com/app/504230/Celeste/?l=portuguese');
                        }}>
                            <View style={stylesp.button2}>
                                <Text style={stylesp.buttonText2}>ONDE COMPRAR</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </View>

            <View>
              <Text></Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={stylesp.containerimagem2}>
                    <Image
                        style={{ width: 100, height: 130, }}
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/0/06/Super-Mario-World.jpg/280px-Super-Mario-World.jpg' }}
                    />
                </View>
                <View style={stylesp.containertitulojogo2}>
                    <Text style={{ fontSize: 36, fontStyle: 'italic', marginTop: 26 }}> SUPER MARIO WORD</Text>
                </View>
            </View>
            <View style={stylesp.containerdescricao2}>
                <Text>
                Super Mario World é um jogo de plataforma bidimensional no qual o jogador controla o protagonista na tela (Mario ou Luigi) a partir de uma perspectiva de Side-scrolling. As ações mecânicas do jogo são semelhantes a títulos anteriores da série —Super Mario Bros., Super Mario Bros. 2, e Super Mario Bros. 3—mas apresenta vários novos elementos. Além de poder correr e pular, movimentos encontrados nos jogos anteriores, o jogador pode flutuar com o auxílio de itens especiais e executar novos tipos de saltos, como o salto giratório.
                </Text>

                <Text>Data de lançamento inicial: 21 de novembro de 1990.</Text>
                <Text>Desenvolvedor: Nintendo, Nintendo Entertainment Analysis & Development.</Text>
                <Text>Estúdio: Nintendo, Mattel.</Text>
                <Text>Plataformas:Super Nintendo Entertainment System, Game Boy Advance, Wii, Wii U, Arcade.</Text>
                <Text>Gêneros: Plataforma.</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                    <View>
                        <TouchableOpacity onPress={()=>{
                            Linking.openURL('https://www.youtube.com/watch?v=-WpgCFSLtLo');
                        }}>
                            <View style={stylesp.button2}>
                                <Text style={stylesp.buttonText2}>TRAILER/GAMEPLAY</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>{
                            Linking.openURL('https://produto.mercadolivre.com.br/MLB-1503477500-super-mario-world-portugus-original-snes-nintendo-salvando-_JM?matt_tool=11251809&matt_word=&matt_source=google&matt_campaign_id=12011659387&matt_ad_group_id=124560247388&matt_match_type=&matt_network=g&matt_device=c&matt_creative=490068189590&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=143847711&matt_product_id=MLB1503477500&matt_product_partition_id=488586102952&matt_target_id=pla-488586102952&gclid=EAIaIQobChMIsK_6-7KD8gIVFQSRCh0-cQDSEAQYASABEgK39vD_BwE');
                        }}>
                            <View style={stylesp.button2}>
                                <Text style={stylesp.buttonText2}>ONDE COMPRAR</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </View>

            <View>
              <Text></Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={stylesp.containerimagem2}>
                    <Image
                        style={{ width: 100, height: 130, }}
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/1/16/SuperMeatBoy_capa.png' }}
                    />
                </View>
                <View style={stylesp.containertitulojogo2}>
                    <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> SUPER MEAT BOY</Text>
                </View>
            </View>
            <View style={stylesp.containerdescricao2}>
                <Text>
                 o jogador controla um personagem vermelho e com formato de cubo chamado Meat Boy; ele deve salvar sua namorada, Bandage Girl, do antagonista Dr. Fetus. 
                </Text>

                <Text>Data de lançamento inicial: 20 de outubro de 2010.</Text>
                <Text>Desenvolvedor: Team Meat, BlitWorks.</Text>
                <Text>Estúdio: Team Meat, BlitWorks, Xbox Game Studios, Merge Games, NVIDIA Lightspeed Studios.</Text>
                <Text>Plataformas: Android, Linux, Nintendo Switch, Microsoft Windows, PlayStation 4, PlayStation Vita, OS X, Wii U, Xbox360.</Text>
                <Text>Gêneros:Plataforma.</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                    <View>
                        <TouchableOpacity onPress={()=>{
                            Linking.openURL('https://www.youtube.com/watch?v=snaionoxjos');
                        }}>
                            <View style={stylesp.button2}>
                                <Text style={stylesp.buttonText2}>TRAILER/GAMEPLAY</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>{
                            Linking.openURL('https://www.microsoft.com/pt-br/p/super-meat-boy/c1365lm1q2dk?activetab=pivot:overviewtab');
                        }}>
                            <View style={stylesp.button2}>
                                <Text style={stylesp.buttonText2}>ONDE COMPRAR</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </View>

            <View>
              <Text></Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={stylesp.containerimagem2}>
                    <Image
                        style={{ width: 100, height: 130, }}
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/3/39/Sonic_Mania_capa.png/270px-Sonic_Mania_capa.png' }}
                    />
                </View>
                <View style={stylesp.containertitulojogo2}>
                    <Text style={{ fontSize: 35, fontStyle: 'italic', marginTop: 26 }}> SONIC MANIA</Text>
                </View>
            </View>
            <View style={stylesp.containerdescricao2}>
                <Text>
                Sonic Mania foi lançado em agosto de 2017. Muitos críticos viram o jogo como um retorno da série as origens devido ao grande número criticas negativas dadas aos jogos antecessores. Sua apresentação, design de nível, música e fidelidade aos primeiros jogos do Sonic foram elogiados, mas sua falta de originalidade foi criticada. Vários críticos descreveram como um dos melhores jogos do Sonic e um dos melhores jogos de 2017. Em um ano, vendeu mais de um milhão de cópias no mundo todo em todas as plataformas lançadas. Sonic Mania Plus, uma versão aprimorada com conteúdo adicional, foi lançada em julho de 2018. 
                </Text>

                <Text>Data de lançamento inicial:15 de agosto de 2017.</Text>
                <Text>Desenvolvedor: Jared Kasl.</Text>
                <Text>Estúdio: Christian Whitehead, Headcannon, PagodaWest Games, SEGA of America.</Text>
                <Text>Plataformas: PlayStation 4, Nintendo Switch, Xbox One, Microsoft Windows, Amazon Luna.</Text>
                <Text>Gêneros: Plataforma.</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                    <View>
                        <TouchableOpacity onPress={()=>{
                            Linking.openURL('https://www.youtube.com/watch?v=LQ1SbHLXlH8');
                        }}>
                            <View style={stylesp.button2}>
                                <Text style={stylesp.buttonText2}>TRAILER/GAMEPLAY</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>{
                            Linking.openURL('https://www.microsoft.com/pt-br/p/sonic-mania/bxh46nqt9w4q#activetab=pivot:overviewtab');
                        }}>
                            <View style={stylesp.button2}>
                                <Text style={stylesp.buttonText2}>ONDE COMPRAR</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </View>

            <View>
              <Text></Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={stylesp.containerimagem2}>
                    <Image
                        style={{ width: 100, height: 130, }}
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/c1/Cuphead_capa.png/265px-Cuphead_capa.png' }}
                    />
                </View>
                <View style={stylesp.containertitulojogo2}>
                    <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> CUPHEAD</Text>
                </View>
            </View>
            <View style={stylesp.containerdescricao2}>
                <Text>
               Cuphead apresenta dois jogadores que controlam o personagem-título e seu irmão Mugman, em uma aventura através da fictícia Inkwell Isle para derrotar uma série de chefes para pagar uma dívida adquirida com o diabo.O jogo foi elogiado por seu estilo de arte, jogabilidade, trilha sonora e dificuldade. Foi um sucesso de crítica e comercial, ganhando vários prêmios e vendendo mais de seis milhões de cópias em três anos. Uma série animada baseada no jogo está em produção pela Netflix.
                </Text>

                <Text>Data de lançamento inicial: 29 de setembro de 2017.</Text>
                <Text>Desenvolvedor: Jared Moldenhauer.</Text>
                <Text>Estúdio: Studio MDHR.</Text>
                <Text>Plataformas:  PlayStation 4, Nintendo Switch, Xbox One, Microsoft Windows, macOS, Mac OS.</Text>
                <Text>Gêneros: run and gun Plataforma.</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                    <View>
                        <TouchableOpacity onPress={()=>{
                            Linking.openURL('https://www.youtube.com/watch?v=4TjUPXAn2Rg');
                        }}>
                            <View style={stylesp.button2}>
                                <Text style={stylesp.buttonText2}>TRAILER/GAMEPLAY</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>{
                            Linking.openURL('https://store.steampowered.com/app/268910/Cuphead/');
                        }}>
                            <View style={stylesp.button2}>
                                <Text style={stylesp.buttonText2}>ONDE COMPRAR</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </View>

            <View>
              <Text></Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={stylesp.containerimagem2}>
                    <Image
                        style={{ width: 100, height: 130, }}
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/94/Ori_and_the_Will_of_the_Wisps.jpg/270px-Ori_and_the_Will_of_the_Wisps.jpg' }}
                    />
                </View>
                <View style={stylesp.containertitulojogo2}>
                    <Text style={{ fontSize: 20, fontStyle: 'italic', marginTop: 26 }}> ORI AND THE WILL OF THE WISPS</Text>
                </View>
            </View>
            <View style={stylesp.containerdescricao2}>
                <Text>
                Os jogadores assumem o controle de Ori, um espírito guardião branco. Para progredir no jogo, os jogadores têm a tarefa de se mover entre plataformas e resolver quebra-cabeças. Diferente de Ori and the Blind Forest, Will of the Wisps parece confiar em salvamentos automáticos em vez de em links alma colocados manualmente, e o sistema de atualização sequencial do primeiro título foi abandonado por um sistema de fragmentos mais parecido com os encantos de Hollow Knight.
                </Text>

                <Text>Data de lançamento inicial: 2020.</Text>
                <Text>Desenvolvedor: Moon Studios.</Text>
                <Text>Estúdio: Xbox Game Studios.</Text>
                <Text>Plataformas:  Xbox One, Nintendo Switch, Xbox Series X, Microsoft Windows.</Text>
                <Text>Gêneros: Plataforma, Metroidvania.</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                    <View>
                        <TouchableOpacity onPress={()=>{
                            Linking.openURL('https://www.youtube.com/watch?v=2reK8k8nwBc');
                        }}>
                            <View style={stylesp.button2}>
                                <Text style={stylesp.buttonText2}>TRAILER/GAMEPLAY</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>{
                            Linking.openURL('https://www.microsoft.com/pt-br/p/ori-and-the-will-of-the-wisps/9n8cd0xzklp4');
                        }}>
                            <View style={stylesp.button2}>
                                <Text style={stylesp.buttonText2}>ONDE COMPRAR</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </View>

            <View>
              <Text></Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={stylesp.containerimagem2}>
                    <Image
                        style={{ width: 100, height: 130, }}
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/d/de/Crash_Bandicoot_N._Sane_Trilogy_cover_art.jpg/250px-Crash_Bandicoot_N._Sane_Trilogy_cover_art.jpg'}}/>
                </View>
                <View style={stylesp.containertitulojogo2}>
                    <Text style={{ fontSize: 26, fontStyle: 'italic', marginTop: 26 }}> CRASH BANDICOOT N. SANE TRILOGY REMASTERED 2</Text>
                </View>
            </View>
            <View style={stylesp.containerdescricao2}>
                <Text>
                Crash Bandicoot N.Sane Trilogy é um remake dos três primeiros jogos da série Crash Bandicoot: Crash Bandicoot, Cortex Strikes Back, e Warped. Como nos jogos originais, Crash utiliza técnicas de giro e salto para derrotar inimigos, quebrar caixas e coletar itens, como Frutas Wumpa, vidas extras e máscaras Aku Aku. 
                </Text>

                <Text>Data de lançamento inicial: 30 de junho de 2017.</Text>
                <Text>Desenvolvedor: Vicarious Visions, Toys for Bob, Iron Galaxy.</Text>
                <Text>Estúdio: Activision, Sony Interactive Entertainment.</Text>
                <Text>Plataformas: PlayStation 4, Nintendo Switch, Xbox One, Microsoft Windows.</Text>
                <Text>Gêneros: Plataforma e aventura .</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                    <View>
                        <TouchableOpacity onPress={()=>{
                            Linking.openURL('https://www.youtube.com/watch?v=NU3S8NlTlRc');
                        }}>
                            <View style={stylesp.button2}>
                                <Text style={stylesp.buttonText2}>TRAILER/GAMEPLAY</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>{
                            Linking.openURL('https://store.playstation.com/pt-br/concept/227649/');
                        }}>
                            <View style={stylesp.button2}>
                                <Text style={stylesp.buttonText2}>ONDE COMPRAR</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </View>

            <View>
              <Text></Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={stylesp.containerimagem2}>
                    <Image
                        style={{ width: 100, height: 130, }}
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/8/83/Donkey_Kong_Country_capa.png/270px-Donkey_Kong_Country_capa.png'}}/>
                </View>
                <View style={stylesp.containertitulojogo2}>
                    <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> DONKEY KONG COUNTRY</Text>
                </View>
            </View>
            <View style={stylesp.containerdescricao2}>
                <Text>
                O objetivo de Donkey Kong Country é passar por 40 fases diferentes (41 na versão para Game Boy Color) e recuperar as bananas dos Kongs, que foram roubadas pelos Kremlings. Cada fase possui um tema único e consiste em variadas tarefas como nadar, correr em vagonetas, se lançar em canhões, ou se agitar entre cipós.O jogador perde uma vida se é atingido por um inimigo ou cai em um abismo. Para derrotar um inimigo, o jogador pode rolar e saltar sobre ele, ou mesmo bater no chão (um movimento reservado apenas a Donkey Kong).
                </Text>

                <Text>Data de lançamento inicial:  1994.</Text>
                <Text>Desenvolvedor:  Gregg Mayles.</Text>
                <Text>Estúdio: Rare.</Text>
                <Text>Plataformas: Super Nintendo Entertainment System e conversões prar game boy color e game boy advanced.</Text>
                <Text>Gêneros: Plataforma.</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                    <View>
                        <TouchableOpacity onPress={()=>{
                            Linking.openURL('https://www.youtube.com/watch?v=88yn_-tqxcQ');
                        }}>
                            <View style={stylesp.button2}>
                                <Text style={stylesp.buttonText2}>TRAILER/GAMEPLAY</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>{
                            Linking.openURL('https://www.americanas.com.br/produto/3246803858?opn=YSMESP&sellerid=15735802000117&epar=bp_pl_00_go_liv_todas_geral_gmv&WT.srch=1&acc=e789ea56094489dffd798f86ff51c7a9&i=5d391f8949f937f625369e0a&o=609020ceb650d410d8c97d5b&gclid=EAIaIQobChMIj6bmlYeE8gIVygutBh087w9pEAYYASABEgLNu_D_BwE');
                        }}>
                            <View style={stylesp.button2}>
                                <Text style={stylesp.buttonText2}>ONDE COMPRAR</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </View>
            
        </ImageBackground>
    </View>
</ScrollView>

);
}
const stylesp = StyleSheet.create({
containerimagem2: {
backgroundColor: '#000000',
width: 110,
height: 140,
},
containertitulojogo2: {
backgroundColor: '#f2f2fc',
width: 300,
height: 140
},
containerdescricao2: {
backgroundColor: '#f2f2fc',
width: 360,
height: 390,
},
button2: {
marginBottom: 20,
width: 170,
backgroundColor: '#000000',
borderRadius: 15,
},
buttonText2: {
textAlign: 'center',
padding: 15,
color: 'white'
},
});
export default Plataforma;