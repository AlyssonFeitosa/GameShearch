import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';

let logoLocal = require('C:/Users/Alysson/GameShearch/src/images/fundo3x.jpg');
let logoURI = "https://i.pinimg.com/564x/00/21/7f/00217fa56dda538f18086408fafd6ac5.jpg";

function Luta(){
    return(
        <ScrollView>
        <View style={{ margin: 2 }}>
            <ImageBackground source={logoLocal} style={{ width: '100%', height: '100%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={stylesl.containerimagem5}>
                        <Image
                            style={{ width: 100, height: 130, }}
                            source={{ uri: 'https://store-images.s-microsoft.com/image/apps.9822.68268647325608635.f7fc4d7c-bd13-46fd-9588-bd4943302237.1d237816-6761-4ea3-8e88-17fe5f49de5b' }}
                        />
                    </View>
                    <View style={stylesl.containertitulojogo5}>
                        <Text style={{ fontSize: 35, fontStyle: 'italic', marginTop: 26 }}> DRAGON BALL FIGHTER Z</Text>
                    </View>
                </View>
                <View style={stylesl.containerdescricao5}>
                    <Text>
                        A jogabilidade pega conceitos de vários outros jogos de luta, principalmente o esquema de controles do Marvel vs. Capcom com a mecânica da equipe, com três botões de ataque primários e um botão de ação exclusivo mais alguns outros. 
                    </Text>
                    <Text>Data de lançamento inicial: 16 de setembro de 2017.</Text>
                    <Text>Desenvolvedor: Arc System Works.</Text>
                    <Text>Estúdio: Bandai Namco Entertainment, Namco Bandai Games America Inc.</Text>
                    <Text>Plataformas: PlayStation 4, Nintendo Switch, Xbox One, Microsoft Windows.</Text>
                    <Text>Gêneros: Luta</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                        <View>
                            <TouchableOpacity onPress={() => {
                                Linking.openURL('https://www.youtube.com/watch?v=oBI0MU73nlc');
                            }}>
                                <View style={stylesl.button5}>
                                    <Text style={stylesl.buttonText5}>TRAILER/GAMEPLAY</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => {
                                Linking.openURL('https://store.steampowered.com/app/678950/DRAGON_BALL_FighterZ/');
                            }}>
                                <View style={stylesl.button5}>
                                    <Text style={stylesl.buttonText5}>ONDE COMPRAR</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View>
                    <Text></Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={stylesl.containerimagem5}>
                            <Image
                                style={{ width: 100, height: 130, }}
                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/0/03/Sfv-logo.png/275px-Sfv-logo.png' }}
                            />
                        </View>
                        <View style={stylesl.containertitulojogo5}>
                            <Text style={{ fontSize: 28, fontStyle: 'italic', marginTop: 26 }}> STREET FIGHTER V</Text>
                        </View>
                    </View>
                    <View style={stylesl.containerdescricao5}>
                        <Text>
                           Street Fighter V tem o mesmo estilo gráfico que o seu antecessor mas em comparação faz algumas mudanças no sistema de combate, como a "barra V", preenchida à medida que o jogador recebe danos e acrescenta três novas habilidades.
                        </Text>

                        <Text>Data de lançamento inicial: 16 de fevereiro de 2016.</Text>
                        <Text>Desenvolvedor: Capcom, Dimps.</Text>
                        <Text>Estúdio: Capcom Studios.</Text>
                        <Text>Plataformas: PlayStation 4, Arcade game, Microsoft Windows.</Text>
                        <Text>Gêneros: Luta.</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.youtube.com/watch?v=0nFd7Iylj5A');
                                }}>
                                    <View style={stylesl.button5}>
                                        <Text style={stylesl.buttonText5}>TRAILER/GAMEPLAY</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://store.steampowered.com/app/310950/Street_Fighter_V/');
                                }}>
                                    <View style={stylesl.button5}>
                                        <Text style={stylesl.buttonText5}>ONDE COMPRAR</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View>
                    <Text></Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={stylesl.containerimagem5}>
                            <Image
                                style={{ width: 100, height: 130, }}
                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/2/21/Mortal_Kombat_11_capa.jpg/270px-Mortal_Kombat_11_capa.jpg' }}
                            />
                        </View>
                        <View style={stylesl.containertitulojogo5}>
                            <Text style={{ fontSize: 26, fontStyle: 'italic', marginTop: 26 }}>MORTAL KOMBAT 11 </Text>
                        </View>
                    </View>
                    <View style={stylesl.containerdescricao5}>
                        <Text>
                           Assim como nos jogos anteriores da série, Mortal Kombat 11 é um jogo eletrônico de combate em que dois jogadores lutam um contra o outro ou contra uma inteligência artificial numa variedade de ataques, movimentos especiais e finalizações violentas que marcam a série. 
                        </Text>

                        <Text>Data de lançamento inicial: março de 2019.</Text>
                        <Text>Desenvolvedor: John Edwards.</Text>
                        <Text>Estúdio: NetherRealm Studios, Shiver Entertainment, QLOC.</Text>
                        <Text>Plataformas:  PlayStation 4, Nintendo Switch, Xbox One, PlayStation 5, Xbox Series X, Microsoft Windows, Google Stadia.</Text>
                        <Text>Gêneros: 	Ação-aventura, hack and slash.</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.youtube.com/watch?v=Cwofr3L_vIo');
                                }}>
                                    <View style={stylesl.button5}>
                                        <Text style={stylesl.buttonText5}>TRAILER/GAMEPLAY</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://store.playstation.com/pt-br/product/UP1018-PPSA01618_00-00MORTALKOMBAT11/');
                                }}>
                                    <View style={stylesl.button5}>
                                        <Text style={stylesl.buttonText5}>ONDE COMPRAR</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                 
                <View>
                    <Text></Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={stylesl.containerimagem5}>
                            <Image
                                style={{ width: 100, height: 130, }}
                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/1/11/Tekken_7_capa.png/270px-Tekken_7_capa.png' }}
                            />
                        </View>
                        <View style={stylesl.containertitulojogo5}>
                            <Text style={{ fontSize: 40, fontStyle: 'italic', marginTop: 26 }}> TEKKEN 7</Text>
                        </View>
                    </View>
                    <View style={stylesl.containerdescricao5}>
                        <Text>
                            Tekken 7 concentra-se em batalhas 1-em-1. Dois novos mecanismos são introduzidos no jogo. O primeiro, Rage Art, permite ao jogador executar ataques críticos que causam aproximadamente 30% de dano, dependendo do personagem, uma vez que sua barra de saúde é crítica, em troca de inativar o aumento normal de poder de ataque.
                        </Text>

                        <Text>Data de lançamento inicial: 18 de março de 2015.</Text>
                        <Text>Desenvolvedor:Yasuki Nakabayashi.</Text>
                        <Text>Estúdio: BANDAI NAMCO Studios, Bandai Namco Entertainment.</Text>
                        <Text>Plataformas:PlayStation 4, Xbox One, Microsoft Windows, Arcade game, Arcade.</Text>
                        <Text>Gêneros: Luta.</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.youtube.com/watch?v=gvirO4dze8Y');
                                }}>
                                    <View style={stylesl.button5}>
                                        <Text style={stylesl.buttonText5}>TRAILER/GAMEPLAY</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://store.steampowered.com/app/389730/TEKKEN_7/?l=portuguese');
                                }}>
                                    <View style={stylesl.button5}>
                                        <Text style={stylesl.buttonText5}>ONDE COMPRAR</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View>
                    <Text></Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={stylesl.containerimagem5}>
                            <Image
                                style={{ width: 100, height: 130, }}
                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9f/Injustice_Gods_Among_Us_capa.jpg/240px-Injustice_Gods_Among_Us_capa.jpg' }}
                            />
                        </View>
                        <View style={stylesl.containertitulojogo5}>
                            <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> INJUSTICE GODS AMONG US</Text>
                        </View>
                    </View>
                    <View style={stylesl.containerdescricao5}>
                        <Text>
                            Injustice: Gods Among Us é um jogo de luta que coloca os jogadores a controlar personagens do universo da DC Comics em combate uns contra os outros. 
                        </Text>

                        <Text>Data de lançamento inicial: 3 de abril de 2013.</Text>
                        <Text>Desenvolvedor: NetherRealm Studios, High Voltage Software, Armature Games.</Text>
                        <Text>Estúdio: Warner Bros. Interactive Entertainment, AK Tronic.</Text>
                        <Text>Plataformas: Android, PlayStation 4, PlayStation 3, Xbox 360, iOS, Wii U, PlayStation Vita, Microsoft Windows.</Text>
                        <Text>Gêneros:Luta.</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.youtube.com/watch?v=fzbcSKkeqQs');
                                }}>
                                    <View style={stylesl.button5}>
                                        <Text style={stylesl.buttonText5}>TRAILER/GAMEPLAY</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://store.steampowered.com/agecheck/app/242700/');
                                }}>
                                    <View style={stylesl.button5}>
                                        <Text style={stylesl.buttonText5}>ONDE COMPRAR</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View>
                    <Text></Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={stylesl.containerimagem5}>
                            <Image
                                style={{ width: 100, height: 130, }}
                                source={{ uri: 'https://cdn.ome.lt/jhJ_3dZlRD22OMt-ycktYWKIAK8=/670x0/smart/uploads/conteudo/fotos/SoulCalibur_VI_-_Capa_PS4.jpg' }}
                            />
                        </View>
                        <View style={stylesl.containertitulojogo5}>
                            <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> SOUL CALIBUR VI</Text>
                        </View>
                    </View>
                    <View style={stylesl.containerdescricao5}>
                        <Text>
                         a jogabilidade de SoulCalibur VI envolve dois combatentes empunhando armas lutando entre si em um plano 3D. 
                        </Text>

                        <Text>Data de lançamento inicial: 19 de outubro de 2018.</Text>
                        <Text>Desenvolvedor: Bandai Namco Entertainment, Project Soul, BANDAI NAMCO Studios, Dimps, Dimps Corporation.</Text>
                        <Text>Estúdio:  Bandai Namco Entertainment.</Text>
                        <Text>Plataformas:  PlayStation 4, Microsoft Windows, Xbox One.</Text>
                        <Text>Gêneros:Luta.</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.youtube.com/watch?v=m1sdAmSq4vs');
                                }}>
                                    <View style={stylesl.button5}>
                                        <Text style={stylesl.buttonText5}>TRAILER/GAMEPLAY</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://store.steampowered.com/app/544750/SOULCALIBUR_VI/');
                                }}>
                                    <View style={stylesl.button5}>
                                        <Text style={stylesl.buttonText5}>ONDE COMPRAR</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View>
                    <Text></Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={stylesl.containerimagem5}>
                            <Image
                                style={{ width: 100, height: 130, }}
                                source={{ uri: 'data:image/jpeg;base64,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' }}
                            />
                        </View>
                        <View style={stylesl.containertitulojogo5}>
                            <Text style={{ fontSize: 28, fontStyle: 'italic', marginTop: 26 }}> KING FO FIGHTERS 2002</Text>
                        </View>
                    </View>
                    <View style={stylesl.containerdescricao5}>
                        <Text>
                            O jogo abandonou os strikers que foram usados em The King of Fighters 99 e The King of Fighters 2000 e retorna a mesma base usada em [[The King of Fighters 98]].O sistema de jogo mantém a base tradicional de The King of Fighters, com 4 pulos (baixo, alto, rápido-baixo e rápido alto), corrida, backdash, esquiva e break. 
                        </Text>

                        <Text>Data de lançamento inicial: 10 de outubro de 2002.</Text>
                        <Text>Desenvolvedor: SNK, Hamster Corporation, Code Mystics, Eolith, SNK Corporation.</Text>
                        <Text>Estúdio: SNK, Hamster Corporation, UTV Ignition Games, SNK Playmore USA Corp..</Text>
                        <Text>Plataformas: Arcade, Dreamcast, PlayStation 2, Xbox, pc.</Text>
                        <Text>Gêneros: Luta.</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.youtube.com/watch?v=YNfD5ndPSjs');
                                }}>
                                    <View style={stylesl.button5}>
                                        <Text style={stylesl.buttonText5}>TRAILER/GAMEPLAY</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://store.steampowered.com/app/222440/THE_KING_OF_FIGHTERS_2002_UNLIMITED_MATCH/?l=portuguese');
                                }}>
                                    <View style={stylesl.button5}>
                                        <Text style={stylesl.buttonText5}>ONDE COMPRAR</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View>
                    <Text></Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={stylesl.containerimagem5}>
                            <Image
                                style={{ width: 100, height: 130, }}
                                source={{ uri: 'https://a-static.mlcdn.com.br/1500x1500/xbox-one-killer-instinct-definitive-edition-microsoft/itcomputadoresgamesecelulares/77718dfa8c0111eb85484201ac1850e0/20764335a0a39998309d51b9e7770f74.jpg' }}
                            />
                        </View>
                        <View style={stylesl.containertitulojogo5}>
                            <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> KILLER INSTINCT</Text>
                        </View>
                    </View>
                    <View style={stylesl.containerdescricao5}>
                        <Text>
                            Killer Instinct é uma série de videogames de luta originalmente criados pela Rare e publicados pela Midway, Nintendo e Microsoft Studios. O original Killer Instinct foi lançado para fliperamas em 1994; o jogo foi então lançado para o Super NES e Game Boy em 1995.
                        </Text>

                        <Text>Data de lançamento inicial: 8 de março de 2019.</Text>
                        <Text>Desenvolvedor: Rare, Iron Galaxy, Midway Games, Double Helix Games, Xbox Game Studios, Ultimate Play the Game.</Text>
                        <Text>Estúdio: Nintendo, Microsoft, Midway Games, Xbox Game Studios.</Text>
                        <Text>Plataformas: Arcade, SNES, Game Boy, Nintendo 64, Xbox One, Windows.</Text>
                        <Text>Gêneros: Luta.</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.youtube.com/watch?v=Z1FgmHRPtLU');
                                }}>
                                    <View style={stylesl.button5}>
                                        <Text style={stylesl.buttonText5}>TRAILER/GAMEPLAY</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.microsoft.com/pt-br/p/killer-instinct-definitive-edition/bvq3fl3201p8?activetab=pivot:overviewtab');
                                }}>
                                    <View style={stylesl.button5}>
                                        <Text style={stylesl.buttonText5}>ONDE COMPRAR</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View>
                    <Text></Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={stylesl.containerimagem5}>
                            <Image
                                style={{ width: 100, height: 130, }}
                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/7/7f/Super_Smash_Bros._Ultimate_capa.png/270px-Super_Smash_Bros._Ultimate_capa.png' }}
                            />
                        </View>
                        <View style={stylesl.containertitulojogo5}>
                            <Text style={{ fontSize: 25, fontStyle: 'italic', marginTop: 26 }}> SUPER SMASH BROS ULTIMATE</Text>
                        </View>
                    </View>
                    <View style={stylesl.containerdescricao5}>
                        <Text>
                           Super Smash Bros. Ultimate é um jogo de luta não tradicional em que jogadores usam ataques diferentes para enfraquecer seus oponentes e derrubá-los para fora da arena. Contém a participação do elenco de personagens da Nintendo de algumas franquias diferentes da Nintendo como também propriedades de terceiros
                        </Text>

                        <Text>Data de lançamento inicial:  7 de dezembro de 2018.</Text>
                        <Text>Desenvolvedor: Sora Ltd., BANDAI NAMCO Studios, Nintendo Entertainment Planning & Development.</Text>
                        <Text>Estúdio: Sora Ltd., BANDAI NAMCO Studios, Nintendo Entertainment Planning & Development.</Text>
                        <Text>Plataformas: Nintendo Switch.</Text>
                        <Text>Gêneros: Luta.</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.youtube.com/watch?v=cVwT_T8v5yU');
                                }}>
                                    <View style={stylesl.button5}>
                                        <Text style={stylesl.buttonText5}>TRAILER/GAMEPLAY</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.mineirogames.com.br/super-smash-bros-ultimate-nintendo-switch-midia-digital');
                                }}>
                                    <View style={stylesl.button5}>
                                        <Text style={stylesl.buttonText5}>ONDE COMPRAR</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View>
                    <Text></Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={stylesl.containerimagem5}>
                            <Image
                                style={{ width: 100, height: 130, }}
                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/400px-GGXrd_Logo.png/200px-400px-GGXrd_Logo.png' }}
                            />
                        </View>
                        <View style={stylesl.containertitulojogo5}>
                            <Text style={{ fontSize: 28, fontStyle: 'italic', marginTop: 26 }}> GUILTY GEAR X RD</Text>
                        </View>
                    </View>
                    <View style={stylesl.containerdescricao5}>
                        <Text>
                            Ao contrário de seu antecessor (Guilty Gear 2: Overture), o jogo agora é do gênero luta. A empresa Arc System Works produziu o jogo utilizando a Unreal Engine, com os gráficos em Cel Shaded ao invés dos sprites tradicionais.
                        </Text>

                        <Text>Data de lançamento inicial: 20 de fevereiro de 2014.</Text>
                        <Text>Desenvolvedor: Arc System Works.</Text>
                        <Text>Estúdio:  Aksys Games, Sony Interactive Entertainment Europe, Sega.</Text>
                        <Text>Plataformas:  PlayStation 4, Microsoft Windows, Arcade game, PlayStation 3.</Text>
                        <Text>Gêneros: Luta.</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.youtube.com/watch?v=1My6DL4TvYw');
                                }}>
                                    <View style={stylesl.button5}>
                                        <Text style={stylesl.buttonText5}>TRAILER/GAMEPLAY</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.greenmangaming.com/games/guilty-gear-xrd-sign-pc/BR?_$ja=cid:10425501745|agid:106188405049|tid:pla-295052892860|crid:445271520943|nw:g|rnd:12929712140264172621|dvc:c|adp:|mt:|loc:1031641&gclid=EAIaIQobChMIn87_jJSJ8gIVCQWRCh0-7gpYEAQYASABEgIQhfD_BwE');
                                }}>
                                    <View style={stylesl.button5}>
                                        <Text style={stylesl.buttonText5}>ONDE COMPRAR</Text>
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
const stylesl = StyleSheet.create({
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
export default Luta;