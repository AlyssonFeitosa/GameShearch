import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';

let logoLocal = require('C:/Users/Alysson/GameShearch/src/images/fundo3x.jpg');


function Tiro() {
    return (
        <ScrollView>
            <View style={{ margin: 2 }}>
                <ImageBackground source={logoLocal} style={{ width: '100%', height: '100%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={stylesl.containerimagem5}>
                            <Image
                                style={{ width: 100, height: 130, }}
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmFfD-MhHRYVLRo7bCAueE3MlVRy7_Vv1ixkIHC8kikyPbfO00QBJ7sfrUw6bHn81XX_Q&usqp=CAU' }}
                            />
                        </View>
                        <View style={stylesl.containertitulojogo5}>
                            <Text style={{ fontSize: 40, fontStyle: 'italic', marginTop: 2 }}> MODERN COMBAT 5: BLACKOUT</Text>
                        </View>
                    </View>
                    <View style={stylesl.containerdescricao5}>
                        <Text>
                            O básico de guerra em Modern Combat 5: Blackout é semelhante aos quatro jogos anteriores da série. O jogador pode atirar, agachar-se, Correr, lançar granadas, objetivo, recarregar suas armas, saltar obstáculos,atacar inimigos com uma faca , pegar armas e modificar armas disponíveis.
                        </Text>
                        <Text>Data de lançamento inicial: julho de 2014.</Text>
                        <Text>Desenvolvedor:Gameloft, Gameloft Bucharest.</Text>
                        <Text>Estúdio:Gameloft.</Text>
                        <Text>Plataformas: Android, Nintendo Switch, iOS, Microsoft Windows, BlackBerry, Tizen, Windows Phone, tvOS.</Text>
                        <Text>Gêneros:  Tiro em primeira pessoa.</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.youtube.com/watch?v=XeEgSF_k-xE');
                                }}>
                                    <View style={stylesl.button5}>
                                        <Text style={stylesl.buttonText5}>TRAILER/GAMEPLAY</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://store.steampowered.com/app/921060/Modern_Combat_5/');
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
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/9/98/Destiny_2_capa.jpg' }}
                                />
                            </View>
                            <View style={stylesl.containertitulojogo5}>
                                <Text style={{ fontSize: 40, fontStyle: 'italic', marginTop: 26 }}> DESTINY 2</Text>
                            </View>
                        </View>
                        <View style={stylesl.containerdescricao5}>
                            <Text>
                                Os jogadores assumem o papel de um Guardião, protetores da última cidade segura da Terra, enquanto exercem um poder chamado Luz para proteger a Última Cidade de diferentes raças alienígenas. Uma dessas raças, a Cabal, liderada pelo senhor da guerra Dominus Ghaul, se infiltra na Última Cidade e retira todos os Guardiões da Luz.
                            </Text>

                            <Text>Data de lançamento inicial:  28 de agosto de 2017.</Text>
                            <Text>Desenvolvedor: Bungie.</Text>
                            <Text>Estúdio: Activision.</Text>
                            <Text>Plataformas: PlayStation 4, Xbox One, Google Stadia, PlayStation 5, Xbox Series X, Microsoft Windows, Xbox Cloud Gaming.</Text>
                            <Text>Gêneros:Tiro em primeira pessoa.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=J08_3Gtkjk4');
                                    }}>
                                        <View style={stylesl.button5}>
                                            <Text style={stylesl.buttonText5}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://store.steampowered.com/app/1085660/Destiny_2/');
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
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/1/10/Battlefield_5_capa.png/270px-Battlefield_5_capa.png' }}
                                />
                            </View>
                            <View style={stylesl.containertitulojogo5}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> BATTLEFIELD 5</Text>
                            </View>
                        </View>
                        <View style={stylesl.containerdescricao5}>
                            <Text>
                                Battlefield V se enfocará de forma abrangente nas características e mecanismos das partidas, na escassez de recursos e no realismo. Há um grande enfoque ampliado na personalização de jogadores através do novo sistema de campanha, onde os jogadores podem criar múltiplos personagens com diversas opções de acessórios e armas. Os acessórios e a máquina de compra usados ​​para adquirir itens são os melhores e mais objetivos da série.
                            </Text>

                            <Text>Data de lançamento inicial: 8 de março de 2019.</Text>
                            <Text>Desenvolvedor: Capcom.</Text>
                            <Text>Estúdio: Capcom Studios.</Text>
                            <Text>Plataformas: Microsoft Windows, PlayStation 4, Xbox One.</Text>
                            <Text>Gêneros: Ação-aventura, hack and slash.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=rdLANQHoqBk');
                                    }}>
                                        <View style={stylesl.button5}>
                                            <Text style={stylesl.buttonText5}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.ea.com/pt-br/games/battlefield/battlefield-5');
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
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/a1/Crysis_2_cover.png/250px-Crysis_2_cover.png' }}
                                />
                            </View>
                            <View style={stylesl.containertitulojogo5}>
                                <Text style={{ fontSize: 40, fontStyle: 'italic', marginTop: 26 }}> CRYSIS 2</Text>
                            </View>
                        </View>
                        <View style={stylesl.containerdescricao5}>
                            <Text>
                                Há 3 anos, militares vestidos com uma Nanosuit de última geração impediram o que parecia ser o início de uma invasão alienígena. Mas, recentemente, nos Estados Unidos, desastres naturais começaram a acontecer como pragas. E há poucos dias, um vírus de força destrutiva está corroendo as pessoas da ilha de Manhattan, em New York.
                            </Text>

                            <Text>Data de lançamento inicial: 22 de março de 2011.</Text>
                            <Text>Desenvolvedor: Crytek, Free Radical Design, Saber Interactive, Crytek GmbH.</Text>
                            <Text>Estúdio: Electronic Arts.</Text>
                            <Text>Plataformas: PlayStation 4, Nintendo Switch, Microsoft Windows, Xbox 360, PlayStation 3, Xbox One.</Text>
                            <Text>Gêneros: 	titro em primeira pessoa.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=Xa1NvpiwqQk');
                                    }}>
                                        <View style={stylesl.button5}>
                                            <Text style={stylesl.buttonText5}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.ea.com/games/crysis/crysis-2');
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
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/ad/Black_cover_art.jpg/250px-Black_cover_art.jpg' }}
                                />
                            </View>
                            <View style={stylesl.containertitulojogo5}>
                                <Text style={{ fontSize: 40, fontStyle: 'italic', marginTop: 26 }}> BLACK</Text>
                            </View>
                        </View>
                        <View style={stylesl.containerdescricao5}>
                            <Text>
                                A jogabilidade de Black é essencialmente de um jogo de tiro em primeira pessoa direto. Os jogadores só podem carregar duas armas por vez; portanto, é necessária estratégia na escolha de armas, com armas com características diferentes. O jogador também pode carregar granadas, que podem ser lançadas sem troca de armas. Minas terrestres e granadas podem ser detonadas prematuramente, atirando nelas.
                            </Text>

                            <Text>Data de lançamento inicial: 23 de fevereiro de 2006.</Text>
                            <Text>Desenvolvedor: Criterion Games.</Text>
                            <Text>Estúdio:Electronic Arts.</Text>
                            <Text>Plataformas: PlayStation 2, Xbox 360, Xbox.</Text>
                            <Text>Gêneros: Tiro em primeira pessoa.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=G_FeNewtM_I');
                                    }}>
                                        <View style={stylesl.button5}>
                                            <Text style={stylesl.buttonText5}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.microsoft.com/pt-br/p/black/btcs0lp052hl?activetab=pivot:overviewtab');
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
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/8/81/Doom_Eternal_capa.png/270px-Doom_Eternal_capa.png' }}
                                />
                            </View>
                            <View style={stylesl.containertitulojogo5}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> DOOM ETERNAL</Text>
                            </View>
                        </View>
                        <View style={stylesl.containerdescricao5}>
                            <Text>
                                Os jogadores mais uma vez assumem o papel de Doom Slayer, um antigo guerreiro que luta contra as forças demoníacas do inferno a partir de uma perspectiva em primeira pessoa. O jogo continua a ênfase do seu predecessor no combate "push-forward", encorajando o jogador a atacar inimigos agressivamente para adquirir saúde e munição.
                            </Text>

                            <Text>Data de lançamento inicial: 20 de março de 2020.</Text>
                            <Text>Desenvolvedor:id Software, Panic Button Games.</Text>
                            <Text>Estúdio: Bethesda Softworks.</Text>
                            <Text>Plataformas: PlayStation 4, PlayStation 5, Xbox One, Microsoft Windows, Xbox Series X, Nintendo Switch, Google Stadia.</Text>
                            <Text>Gêneros: Tiro em primeira pessoa.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=_J2YcaVqjCQ');
                                    }}>
                                        <View style={stylesl.button5}>
                                            <Text style={stylesl.buttonText5}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://store.steampowered.com/agecheck/app/782330/');
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
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/f/fc/Quake_1_cover.png/250px-Quake_1_cover.png' }}
                                />
                            </View>
                            <View style={stylesl.containertitulojogo5}>
                                <Text style={{ fontSize: 40, fontStyle: 'italic', marginTop: 26 }}> QUAKE</Text>
                            </View>
                        </View>
                        <View style={stylesl.containerdescricao5}>
                            <Text>
                                No modo single player, jogadores exploram níveis em busca da saída, enfrentando monstros e buscando áreas secretas. Às vezes precisa-se apertar botões e encontrar chaves para abrir portas. Se o jogador morrer volta ao começo da fase, mas pode-se salvar em qualquer ponto.
                            </Text>

                            <Text>Data de lançamento inicial: 1996.</Text>
                            <Text>Desenvolvedor: id Software, Midway Games, Lobotomy Software, 1AM Productions, ClickBoom.</Text>
                            <Text>Estúdio: Midway Games.</Text>
                            <Text>Plataformas: Amiga, Falcon, IRIX, Macintosh, PC (DOS, Linux, Windows), N64, Risc PC, Saturn, Solaris, Windows Mobile, Zeebo.</Text>
                            <Text>Gêneros: Tiro em primeira pessoa.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=ZHT2TgMX7Rg');
                                    }}>
                                        <View style={stylesl.button5}>
                                            <Text style={stylesl.buttonText5}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://store.steampowered.com/app/2310/QUAKE/');
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
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/e/ee/Titanfall_2_cover.jpg/250px-Titanfall_2_cover.jpg' }}
                                />
                            </View>
                            <View style={stylesl.containertitulojogo5}>
                                <Text style={{ fontSize: 40, fontStyle: 'italic', marginTop: 26 }}> TITANFALL 2</Text>
                            </View>
                        </View>
                        <View style={stylesl.containerdescricao5}>
                            <Text>
                                É a Sequência de Titanfall (2014), o jogo foca-se na história de Jack Cooper, um soldado que aspira ser um piloto de um Titan, enormes robots Mecha usados na guerra.
                            </Text>

                            <Text>Data de lançamento inicial: 28 de outubro de 2016.</Text>
                            <Text>Desenvolvedor: Respawn Entertainment.</Text>
                            <Text>Estúdio:Respawn Entertainment.</Text>
                            <Text>Plataformas: PlayStation 4, Xbox One, Microsoft Windows.</Text>
                            <Text>Gêneros:Tiro em primeira pessoa.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=ktw2k3m7Qko');
                                    }}>
                                        <View style={stylesl.button5}>
                                            <Text style={stylesl.buttonText5}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://store.steampowered.com/app/1237970/Titanfall_2/');
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
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/f/fa/Half-Life_Cover_Art.jpg/220px-Half-Life_Cover_Art.jpg' }}
                                />
                            </View>
                            <View style={stylesl.containertitulojogo5}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> HALF-LIFE</Text>
                            </View>
                        </View>
                        <View style={stylesl.containerdescricao5}>
                            <Text>
                                os jogadores assumem o papel de Dr. Gordon Freeman, um físico teórico que deve lutar para fugir de um centro de pesquisa secreto e subterrâneo cujos experimentos e pesquisas com tecnologia de teletransporte tiveram resultados desastrosos.
                            </Text>

                            <Text>Data de lançamento inicial: 19 de novembro de 1998.</Text>
                            <Text>Desenvolvedor: Valve Corporation, Captivation Digital Laboratories.</Text>
                            <Text>Estúdio: Valve Corporation, Sierra Entertainment, Electronic Arts.</Text>
                            <Text>Plataformas:  Microsoft Windows, PlayStation 2, Dreamcast, macOS, Linux, DOS, Mac OS Classic, GP32.</Text>
                            <Text>Gêneros: Tiro em primeira pessoa, Survival Horror, Ficção Científica.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=5Wavn29LMrs');
                                    }}>
                                        <View style={stylesl.button5}>
                                            <Text style={stylesl.buttonText5}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://store.steampowered.com/app/70/HalfLife/');
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
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/f/f6/937406_125868_front.jpg/250px-937406_125868_front.jpg' }}
                                />
                            </View>
                            <View style={stylesl.containertitulojogo5}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> LEFT 4 DEAD</Text>
                            </View>
                        </View>
                        <View style={stylesl.containerdescricao5}>
                            <Text>
                                O grande diferencial de Left 4 Dead é que o jogo obriga a cooperação em equipe, em que, para se manterem vivos, os sobreviventes tem de ajudar uns aos outros em pequenos atos de socorrismo cooperando e tornando assim a passagem dos capítulos mais fácil. Para o lado infectado, estes terão de cooperar para impedir os humanos de prosseguirem.
                            </Text>

                            <Text>Data de lançamento inicial: 17 de novembro de 2008.</Text>
                            <Text>Desenvolvedor:Valve Corporation, Turtle Rock Studios, Certain Affinity.</Text>
                            <Text>Estúdio: Valve Corporation, My.com.</Text>
                            <Text>Plataformas: Android, Xbox 360, Microsoft Windows, iOS, macOS, Mac OS Classic.</Text>
                            <Text>Gêneros: Tiro em primeira pessoa, survival horror, ação.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=Z5g3mrK82VA');
                                    }}>
                                        <View style={stylesl.button5}>
                                            <Text style={stylesl.buttonText5}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://store.steampowered.com/app/500/Left_4_Dead/');
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
export default Tiro;