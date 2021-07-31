import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';

let logoLocal = require('C:/Users/Alysson/GameShearch/src/images/fundo3x.jpg');

function Corrida() {
    return (

        <ScrollView>
            <View style={{ margin: 2 }}>
                <ImageBackground source={logoLocal} style={{ width: '100%', height: '100%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={stylesco.containerimagem5}>
                            <Image
                                style={{ width: 100, height: 130, }}
                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/e/e3/Nfsu2_capa_pt.jpg/250px-Nfsu2_capa_pt.jpg' }}
                            />
                        </View>
                        <View style={stylesco.containertitulojogo5}>
                            <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> NEED FOR SPEED UNDERGROUND 2</Text>
                        </View>
                    </View>
                    <View style={stylesco.containerdescricao5}>
                        <Text>
                            O jogo traz novos recursos em relação ao anterior,o maior sendo uma cidade virtual para percorrer livremente em busca das corridas e lojas, Modo de Exploração (Free Roam). Além disso, há mais veículos (29), opções de tuning, novos modos de corrida e a adição de alterações climáticas.
                        </Text>
                        <Text>Data de lançamento inicial:  9 de novembro de 2004.</Text>
                        <Text>Desenvolvedor: Electronic Arts, EA Black Box, EA Vancouver, Ideaworks Game Studio, Pocketeers.</Text>
                        <Text>Estúdio: Electronic Arts, EA Mobile.</Text>
                        <Text>Plataformas: 	Microsoft Windows,Game Boy Advance, Nintendo GameCube, Playstation 2, Xbox, Playstation Portable, Nintendo DS, Telefone móvel.</Text>
                        <Text>Gêneros: Corrida</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.youtube.com/watch?v=FhS29txfycY');
                                }}>
                                    <View style={stylesco.button5}>
                                        <Text style={stylesco.buttonText5}>TRAILER/GAMEPLAY</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.ea.com/pt-br/games/need-for-speed/need-for-speed-underground-2');
                                }}>
                                    <View style={stylesco.button5}>
                                        <Text style={stylesco.buttonText5}>ONDE COMPRAR</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesco.containerimagem5}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/1/1f/The_Crew_2_Capa.jpg/270px-The_Crew_2_Capa.jpg' }}
                                />
                            </View>
                            <View style={stylesco.containertitulojogo5}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> THE CREW 2</Text>
                            </View>
                        </View>
                        <View style={stylesco.containerdescricao5}>
                            <Text>
                                Semelhante ao seu antecessor, The Crew 2 é um jogo de corrida. No jogo, os jogadores assumem o controle de um piloto de corrida relativamente desconhecido, que está tentando fazer o seu caminho para se tornar bem sucedido em várias disciplinas.Possui um ambiente de mundo aberto persistente para corridas e vagueamento livre em uma escala reduzida do mapa dos Estados Unidos.
                            </Text>

                            <Text>Data de lançamento inicial: 31 de maio de 2018.</Text>
                            <Text>Desenvolvedor: Ivory Tower, Ubisoft San Francisco.</Text>
                            <Text>Estúdio: Ubisoft, Ubisoft San Francisco.</Text>
                            <Text>Plataformas:PlayStation 4, Xbox One, Microsoft Windows, Google Stadia.</Text>
                            <Text>Gêneros: Corrida.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=Xp8SUVXbvws');
                                    }}>
                                        <View style={stylesco.button5}>
                                            <Text style={stylesco.buttonText5}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://store.steampowered.com/app/646910/The_Crew_2/');
                                    }}>
                                        <View style={stylesco.button5}>
                                            <Text style={stylesco.buttonText5}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesco.containerimagem5}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/8/8f/Capa_de_Top_Gear.jpg/260px-Capa_de_Top_Gear.jpg' }}
                                />
                            </View>
                            <View style={stylesco.containertitulojogo5}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> TOP GEAR</Text>
                            </View>
                        </View>
                        <View style={stylesco.containerdescricao5}>
                            <Text>
                                É o primeiro jogo da série Top Gear. O jogador corre em percursos espalhados por oito países, devendo chegar entre os cinco primeiros para alcançar o próximo nível. O desenvolvimento durou de três a cinco meses, com "vários momentos difíceis"e marcado pela documentação escassa do SNES. A trilha sonora foi feita em uma semana, sendo boa parte derivada da série Lotus Challenge.
                            </Text>

                            <Text>Data de lançamento inicial: 27 de março de 1992.</Text>
                            <Text>Desenvolvedor: Kemco, Gremlin Interactive.</Text>
                            <Text>Estúdio:  Kemco.</Text>
                            <Text>Plataformas: Super Nintendo Entertainment System.</Text>
                            <Text>Gêneros: Corrida.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=f5FCyS5qysA');
                                    }}>
                                        <View style={stylesco.button5}>
                                            <Text style={stylesco.buttonText5}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://produto.mercadolivre.com.br/MLB-1676309097-top-gear-super-nintendo-snes-completo-_JM?matt_tool=11251809&matt_word=&matt_source=google&matt_campaign_id=12011659387&matt_ad_group_id=124560247388&matt_match_type=&matt_network=g&matt_device=c&matt_creative=490068189590&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=114101632&matt_product_id=MLB1676309097&matt_product_partition_id=488586102952&matt_target_id=pla-488586102952&gclid=CjwKCAjwxo6IBhBKEiwAXSYBswhv4sU8vkAKhbs26pVRJIgU-HWQWnvXJAjAVP52zwqUD_nHyyYfcRoC47IQAvD_BwE');
                                    }}>
                                        <View style={stylesco.button5}>
                                            <Text style={stylesco.buttonText5}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesco.containerimagem5}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/b/bf/Gran_Turismo_Sport_capa.png/270px-Gran_Turismo_Sport_capa.png' }}
                                />
                            </View>
                            <View style={stylesco.containertitulojogo5}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> GRAN TURISMO SPORT</Text>
                            </View>
                        </View>
                        <View style={stylesco.containerdescricao5}>
                            <Text>
                                O jogo possui dois modos de jogo, esportivo e arcade, 279 carros, incluindo pela primeira vez na série carros da Porsche. Possui 27 configurações de pistas em 18 localidades, dentre os circuitos reais incluem Interlagos, Monza, Autopolis, Brands Hatch, Barcelona-Catalunha, Circuito de la Sarthe, Fuji, Goodwood, Mount Panorama, Nurburgring, Red Bull Ring, Suzuka, Tsukuba e Willow Springs.
                            </Text>

                            <Text>Data de lançamento inicial: 17 de outubro de 2017.</Text>
                            <Text>Desenvolvedor: Kazunori Yamauchi.</Text>
                            <Text>Estúdio: Polyphony Digital.</Text>
                            <Text>Plataformas: PlayStation 4.</Text>
                            <Text>Gêneros: Corrida.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=IEzOZfu32Cw');
                                    }}>
                                        <View style={stylesco.button5}>
                                            <Text style={stylesco.buttonText5}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://store.playstation.com/pt-br/product/UP9000-CUSA03220_00-GTSPORTS00000000/');
                                    }}>
                                        <View style={stylesco.button5}>
                                            <Text style={stylesco.buttonText5}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesco.containerimagem5}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://sm.ign.com/ign_br/game/f/forza-moto/forza-motorsport-7_jvg4.jpg' }}
                                />
                            </View>
                            <View style={stylesco.containertitulojogo5}>
                                <Text style={{ fontSize: 33, fontStyle: 'italic', marginTop: 18 }}>FORZA MOTORSPORT 7</Text>
                            </View>
                        </View>
                        <View style={stylesco.containerdescricao5}>
                            <Text>
                                Forza Motorsport 7 é um jogo de corrida que contém mais de 700 carros - incluindo carros do novo Forza Edition, a maioria dos quais foram trazidos do Forza Horizon 3 - e mais de 200 configurações diferentes para correr através de 32 localidades no lançamento, incluindo todos do Forza Motorsport 6, um circuito de rua ficcional de Dubai é um dos novos circuitos e algumas pistas retornando do Forza Motorsport 4 incluindo Maple Valley Raceway, Circuito de Mugello e Circuito de Suzuka.
                            </Text>

                            <Text>Data de lançamento inicial: 3 de outubro de 2017.</Text>
                            <Text>Desenvolvedor: Turn 10 Studios.</Text>
                            <Text>Estúdio: Xbox Game Studios.</Text>
                            <Text>Plataformas: Xbox One, Microsoft Windows.</Text>
                            <Text>Gêneros: Corrida.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=aN3_gFFr-8w');
                                    }}>
                                        <View style={stylesco.button5}>
                                            <Text style={stylesco.buttonText5}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.xbox.com/pt-BR/games/forza-7');
                                    }}>
                                        <View style={stylesco.button5}>
                                            <Text style={stylesco.buttonText5}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesco.containerimagem5}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/7/71/NFS_Payback.jpg' }}
                                />
                            </View>
                            <View style={stylesco.containertitulojogo5}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> NEED FOR SPEED PAYBACK</Text>
                            </View>
                        </View>
                        <View style={stylesco.containerdescricao5}>
                            <Text>
                                Need For Speed Payback tem três personagens jogáveis, cada um com um conjunto diferente de habilidades e que trabalham juntos. O jogo inclui cinco diferentes classes de carros personalizáveis: Corrida, Off-Road, Drift, Drag e Fuga.
                            </Text>

                            <Text>Data de lançamento inicial: 10 de novembro de 2017.</Text>
                            <Text>Desenvolvedor: EA Gothenburg.</Text>
                            <Text>Estúdio: EA Gothenburg.</Text>
                            <Text>Plataformas: PlayStation 4, Xbox One, Microsoft Windows.</Text>
                            <Text>Gêneros: Corrida.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=K-5EdHZ0hBs');
                                    }}>
                                        <View style={stylesco.button5}>
                                            <Text style={stylesco.buttonText5}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.ea.com/pt-br/games/need-for-speed/need-for-speed-payback');
                                    }}>
                                        <View style={stylesco.button5}>
                                            <Text style={stylesco.buttonText5}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesco.containerimagem5}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Midnight_Club_3_-_DUB_Edition_Coverart.jpg/220px-Midnight_Club_3_-_DUB_Edition_Coverart.jpg' }}
                                />
                            </View>
                            <View style={stylesco.containertitulojogo5}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> MIDNIGHT CLUB 3: DUB EDITION</Text>
                            </View>
                        </View>
                        <View style={stylesco.containerdescricao5}>
                            <Text>
                                Midnight Club 3: Dub Edition é um videogame de corrida de mundo aberto e o primeiro jogo da série a incluir modificações no carro, tanto visuais quanto de desempenho. Ao vencer corridas, o jogador desbloqueia novos carros e opções para personalizá-los.
                            </Text>

                            <Text>Data de lançamento inicial: 11 de abril de 2005.</Text>
                            <Text>Desenvolvedor: Rockstar San Diego, Rockstar Leeds.</Text>
                            <Text>Estúdio: Rockstar San Diego, Rockstar Leeds.</Text>
                            <Text>Plataformas: PlayStation Portable, PlayStation 2, Xbox.</Text>
                            <Text>Gêneros: Corrida.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=p5hEWi_xNYU');
                                    }}>
                                        <View style={stylesco.button5}>
                                            <Text style={stylesco.buttonText5}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.rockstargames.com/br/games/midnightclub3');
                                    }}>
                                        <View style={stylesco.button5}>
                                            <Text style={stylesco.buttonText5}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesco.containerimagem5}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/d/d9/Burnout_3_-_Takedown.jpg/230px-Burnout_3_-_Takedown.jpg' }}
                                />
                            </View>
                            <View style={stylesco.containertitulojogo5}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> BURNOUT 3: TAKEDOWN</Text>
                            </View>
                        </View>
                        <View style={stylesco.containerdescricao5}>
                            <Text>
                                Nesse jogo, você ganha pontos por derrubar ou destruir seus oponentes e na maioria das vezes perde velocidade e turbo por ser destruído por seus oponentes.
                            </Text>

                            <Text>Data de lançamento inicial: 8 de setembro de 2004.</Text>
                            <Text>Desenvolvedor: Criterion Games.</Text>
                            <Text>Estúdio: Criterion Games.</Text>
                            <Text>Plataformas:Xbox 360, PlayStation 2, Xbox.</Text>
                            <Text>Gêneros: Corrida, Batalha de veiculos.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=y6xT4CtWKIU');
                                    }}>
                                        <View style={stylesco.button5}>
                                            <Text style={stylesco.buttonText5}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.ea.com/pt-br/games/burnout/burnout-takedown');
                                    }}>
                                        <View style={stylesco.button5}>
                                            <Text style={stylesco.buttonText5}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesco.containerimagem5}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/90/Nfshp-2010-cover.jpg/250px-Nfshp-2010-cover.jpg' }}
                                />
                            </View>
                            <View style={stylesco.containertitulojogo5}>
                                <Text style={{ fontSize: 22, fontStyle: 'italic', marginTop: 26 }}> NEED FOR SPEED: HOT PURSUIT</Text>
                            </View>
                        </View>
                        <View style={stylesco.containerdescricao5}>
                            <Text>
                                Hot Pursuit é uma volta da série a suas origens e, como o nome sugere, é uma releitura do estilo dos jogos Hot Pursuit originais, com carros exclusivos e perseguições em alta velocidade. Nele, o jogador poderá jogar como policial, dirigindo até, um poderoso Pagani Zonda, e terá um modo de carreira para os dois lados.
                            </Text>

                            <Text>Data de lançamento inicial: 16 de novembro de 2010.</Text>
                            <Text>Desenvolvedor:Criterion Games, IronMonkey Studios, DICE, Exient Entertainment.</Text>
                            <Text>Estúdio: Eletronic Arts.</Text>
                            <Text>Plataformas: Android, PlayStation 3, Microsoft Windows, Xbox 360, Wii, iOS, Java, Windows Phone, LG webOS.</Text>
                            <Text>Gêneros: Corrida.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=D6ouHWP0KrY');
                                    }}>
                                        <View style={stylesco.button5}>
                                            <Text style={stylesco.buttonText5}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.ea.com/games/need-for-speed/need-for-speed-hot-pursuit-remastered?setLocale=en-us?setLocale=en-us');
                                    }}>
                                        <View style={stylesco.button5}>
                                            <Text style={stylesco.buttonText5}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesco.containerimagem5}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://s2.glbimg.com/f0jdX-UAblf1EqVWq4eFEB9I95U=/0x0:1500x1000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2018/M/L/ln4uI0T4eTKCcAfJbsGw/asphalt9-capa.jpg' }}
                                />
                            </View>
                            <View style={stylesco.containertitulojogo5}>
                                <Text style={{ fontSize: 24, fontStyle: 'italic', marginTop: 26 }}> ASPHALT 9: LEGENDS</Text>
                            </View>
                        </View>
                        <View style={stylesco.containerdescricao5}>
                            <Text>
                                A jogabilidade no Asphalt 9 é semelhante ao Asphalt 8: Airborne, com diferenças visíveis nos gráficos e no design. Havia 48 carros em destaque no jogo quando lançados suavemente, mas o lançamento mundial viu a introdução de quatro carros novos, levando a 52 carros. Atualmente, existem Mais de 100 carros em julho de 2020.
                            </Text>

                            <Text>Data de lançamento inicial: 22 de março de 2018.</Text>
                            <Text>Desenvolvedor: Gameloft, Gameloft Iberica S.A.U..</Text>
                            <Text>Estúdio: Gameloft.</Text>
                            <Text>Plataformas: Microsoft Windows, Android, Nintendo Switch, iOS, Xbox One, Xbox Series X, Mac OS.</Text>
                            <Text>Gêneros: Corrida.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=ot63S91Ihwk');
                                    }}>
                                        <View style={stylesco.button5}>
                                            <Text style={stylesco.buttonText5}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftA9HM&hl=pt_BR&gl=US');
                                    }}>
                                        <View style={stylesco.button5}>
                                            <Text style={stylesco.buttonText5}>ONDE COMPRAR</Text>
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
const stylesco = StyleSheet.create({
    containerimagem5: {
        backgroundColor: '#000000',
        width: 110,
        height: 140,
    },
    containertitulojogo5: {
        backgroundColor: '#f2f2fc',
        width: 300,
        height: 140
    },
    containerdescricao5: {
        backgroundColor: '#f2f2fc',
        width: 360,
        height: 300,
    },
    button5: {
        marginBottom: 20,
        width: 170,
        backgroundColor: '#000000',
        borderRadius: 15,
    },
    buttonText5: {
        textAlign: 'center',
        padding: 15,
        color: 'white'
    },
});
export default Corrida;