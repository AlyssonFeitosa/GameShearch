import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';

let logoLocal = require('C:/Users/Alysson/GameShearch/src/images/fundo3x.jpg');

function Celular(){
    return(
        <ScrollView>
            <View style={{ margin: 2 }}>
                <ImageBackground source={logoLocal} style={{ width: '100%', height: '100%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={stylesc.containerimagem5}>
                            <Image
                                style={{ width: 100, height: 130, }}
                                source={{ uri: 'https://1.bp.blogspot.com/-WXc20WyMVsU/XZWCzc6yCXI/AAAAAAAAet0/pXRzxWuYnD0jW6vBPAsnj2_KWO_0v-iDgCNcBGAsYHQ/s1600/call-of-duty-mobile-guia-dicas-0-armadura-nerd.webp' }}
                            />
                        </View>
                        <View style={stylesc.containertitulojogo5}>
                            <Text style={{ fontSize: 35, fontStyle: 'italic', marginTop: 26 }}> CALL OF DUTY MOBILE</Text>
                        </View>
                    </View>
                    <View style={stylesc.containerdescricao5}>
                        <Text>
                            Call of Duty: Mobile é um jogo eletrônico free-to-play de tiro em primeira pessoa desenvolvido pela Tencent Games e publicado pela Activision para Android e iOS. Foi lançado em 1 de outubro de 2019. Possui duas moedas no jogo, além de um passe de batalha. O jogo recebeu mais de 20 milhões de downloads dentro de um dia de seu lançamento, ganhando mais de US $ 2 milhões em receita. 
                        </Text>
                        <Text>Data de lançamento inicial:  1 de outubro de 2019.</Text>
                        <Text>Desenvolvedor:Timi Studio Group, PROXIMA BETA.</Text>
                        <Text>Estúdio: Activision.</Text>
                        <Text>Plataformas: Android, IOS.</Text>
                        <Text>Gêneros:Tiro em primeira pessoa, battle royale.</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.youtube.com/watch?v=n4b8FRUDNZo');
                                }}>
                                    <View style={stylesc.button5}>
                                        <Text style={stylesc.buttonText5}>TRAILER/GAMEPLAY</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.callofduty.com/br/pt/mobile');
                                }}>
                                    <View style={stylesc.button5}>
                                        <Text style={stylesc.buttonText5}>ONDE COMPRAR</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesc.containerimagem5}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://tcrf.net/images/e/ea/ClashRoyaleWeChat.png' }}
                                />
                            </View>
                            <View style={stylesc.containertitulojogo5}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> CLASH ROYALE</Text>
                            </View>
                        </View>
                        <View style={stylesc.containerdescricao5}>
                            <Text>
                               Clash Royale consiste em um jogo de estratégia na qual, você lutará contra um adversário aleatório. Seu objetivo é destruir as torres inimigas usando uma variedade de cartas de tropas que podem serem desbloqueadas ao longo do tempo, algumas das tropas são uma reutilização de outro jogo da Supercell: Clash Of Clans! Cada tropa durante uma partida possui um preço de Elixir, uma moeda utilizada durante partidas.
                            </Text>

                            <Text>Data de lançamento inicial: 2 de março de 2016.</Text>
                            <Text>Desenvolvedor: Supercell.</Text>
                            <Text>Estúdio:Supercell.</Text>
                            <Text>Plataformas: Android, IOS.</Text>
                            <Text>Gêneros:MOBA, tower defense e jogo de cartas colecionáveis.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=1RC1yxqTTd8');
                                    }}>
                                        <View style={stylesc.button5}>
                                            <Text style={stylesc.buttonText5}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://play.google.com/store/apps/details?id=com.supercell.clashroyale&hl=pt_BR&gl=US');
                                    }}>
                                        <View style={stylesc.button5}>
                                            <Text style={stylesc.buttonText5}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                     <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesc.containerimagem5}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6HW7NeHFKPlyccA3VjbynO1qqbrCjB_wYjVZoO3rHTcqZnGbxln3A4kjTrgsv4Fx6eMw&usqp=CAU' }}
                                />
                            </View>
                            <View style={stylesc.containertitulojogo5}>
                                <Text style={{ fontSize: 25, fontStyle: 'italic', marginTop: 26 }}> ASPHALT8:AIRBONE</Text>
                            </View>
                        </View>
                        <View style={stylesc.containerdescricao5}>
                            <Text>
                            O sucessor do jogo Asphalt 9: Legends foi anunciado em 26 de fevereiro de 2018. O jogo tem cerca de 350 milhões de jogadores, de acordo com a descrição do jogo na App Store e na Microsoft Store.O jogo conta atualmente com mais de 230 carros,entre eles de marcas como: BMW,Ferrari,Lamborghini,entre outras máquinas possantes.
                            </Text>

                            <Text>Data de lançamento inicial:22 de agosto de 2013.</Text>
                            <Text>Desenvolvedor: Gameloft.</Text>
                            <Text>Estúdio:Gameloft.</Text>
                            <Text>Plataformas:Android, Microsoft Windows, iOS, Windows 10 Mobile, macOS, Windows Phone, tvOS, BlackBerry 10, iPadOS, Tizen.</Text>
                            <Text>Gêneros:Corrida Arcade.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=jpSGZsgga_I');
                                    }}>
                                        <View style={stylesc.button5}>
                                            <Text style={stylesc.buttonText5}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://apps.apple.com/br/app/asphalt-8-airborne/id610391947');
                                    }}>
                                        <View style={stylesc.button5}>
                                            <Text style={stylesc.buttonText5}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                     <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesc.containerimagem5}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/1/1e/Subway_Surfers_logo.png/200px-Subway_Surfers_logo.png' }}
                                />
                            </View>
                            <View style={stylesc.containertitulojogo5}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}>SUBWAY SURFERS</Text>
                            </View>
                        </View>
                        <View style={stylesc.containerdescricao5}>
                            <Text>
                              O objetivo do jogo é correr o mais longe possível em um mundo sem fim, evitando os obstáculos gerados aleatoriamente que exigem que o jogador salte (ponta do dedo para a frente), role (ponta do dedo para trás) e desvie dos trens que se aproximam de uma forma aleatória.
                            </Text>

                            <Text>Data de lançamento inicial: 23 de maio de 2012.</Text>
                            <Text>Desenvolvedor: SYBO Games, Kiloo.</Text>
                            <Text>Estúdio:SYBO Games, Kiloo.</Text>
                            <Text>Plataformas: Android, iOS, Microsoft Windows, macOS.</Text>
                            <Text>Gêneros:Corrida infinita.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=tYysQOHTimo');
                                    }}>
                                        <View style={stylesc.button5}>
                                            <Text style={stylesc.buttonText5}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf&hl=pt_BR&gl=US');
                                    }}>
                                        <View style={stylesc.button5}>
                                            <Text style={stylesc.buttonText5}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                     <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesc.containerimagem5}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://giantbomb1.cbsistatic.com/uploads/original/45/459166/3245697-genshin.jpg' }}
                                />
                            </View>
                            <View style={stylesc.containertitulojogo5}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> GENSHIN IMPACT</Text>
                            </View>
                        </View>
                        <View style={stylesc.containerdescricao5}>
                            <Text>
                            Genshin Impact (em chinês: 原神) é um RPG de ação gratuito e apresenta um ambiente de mundo aberto de fantasia e sistema de batalha baseado em ação usando magia elemental e troca de personagem, e usa a monetização de jogo gacha para os jogadores obterem novos personagens, armas e outros recursos.
                            </Text>

                            <Text>Data de lançamento inicial: 28 de setembro de 2020.</Text>
                            <Text>Desenvolvedor:miHoYo, Shanghai Miha Touring Film Technology Co., Ltd..</Text>
                            <Text>Estúdio: miHoYo.</Text>
                            <Text>Plataformas: Android, IOS, Windows, PlayStation 4</Text>
                            <Text>Gêneros:RPG de ação.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=HLUY1nICQRY');
                                    }}>
                                        <View style={stylesc.button5}>
                                            <Text style={stylesc.buttonText5}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact&hl=pt_BR&gl=US');
                                    }}>
                                        <View style={stylesc.button5}>
                                            <Text style={stylesc.buttonText5}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                     <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesc.containerimagem5}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://www.acidigital.com/imagespp/size680/Pokemon_12072016.jpg' }}
                                />
                            </View>
                            <View style={stylesc.containertitulojogo5}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> POKEMON  GO</Text>
                            </View>
                        </View>
                        <View style={stylesc.containerdescricao5}>
                            <Text>
                            O jogo foi inicialmente lançado em julho de 2016 para alguns países, eventualmente expandindo para o resto do mundo. Com o uso do sistema de posicionamento global (GPS) e a câmera de dispositivos compatíveis, o jogo permite aos jogadores capturar, batalhar, e treinar criaturas virtuais chamadas Pokémon, que aparecem na tela do jogador usando realidade aumentada. Também há um acessório opcional, o Pokémon Go Plus, alerta os usuários quando Pokémon estiverem nas proximidades.
                            </Text>

                            <Text>Data de lançamento inicial: 6 de julho de 2016.</Text>
                            <Text>Desenvolvedor: Niantic, Inc.</Text>
                            <Text>Estúdio: Niantic, Inc.</Text>
                            <Text>Plataformas: Android, IOS.</Text>
                            <Text>Gêneros:Realidade aumentada.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=yQCREgz4tQY');
                                    }}>
                                        <View style={stylesc.button5}>
                                            <Text style={stylesc.buttonText5}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://play.google.com/store/apps/details?id=com.nianticlabs.pokemongo&hl=pt_BR&gl=US');
                                    }}>
                                        <View style={stylesc.button5}>
                                            <Text style={stylesc.buttonText5}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesc.containerimagem5}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/a8/Free_fire_battlegrounds.jpg/220px-Free_fire_battlegrounds.jpg' }}
                                />
                            </View>
                            <View style={stylesc.containertitulojogo5}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> FREE FIRE</Text>
                            </View>
                        </View>
                        <View style={stylesc.containerdescricao5}>
                            <Text>
                            O jogo consiste de até no total de cinquenta jogadores que caem de paraquedas em uma ilha em busca de armas e equipamentos a fim de matar os outros jogadores. Os jogadores escolhem à vontade a posição inicial, pegam armas e suprimentos para aumentar o tempo de vida na batalha.
                            </Text>

                            <Text>Data de lançamento inicial: 30 de setembro de 2017.</Text>
                            <Text>Desenvolvedor:  111dots Studio.</Text>
                            <Text>Estúdio: Garena.</Text>
                            <Text>Plataformas: Android, iOS.</Text>
                            <Text>Gêneros: BattleRoyale.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=pKUu6PKNyzk');
                                    }}>
                                        <View style={stylesc.button5}>
                                            <Text style={stylesc.buttonText5}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://play.google.com/store/apps/details?id=com.dts.freefireth&hl=pt_BR&gl=US');
                                    }}>
                                        <View style={stylesc.button5}>
                                            <Text style={stylesc.buttonText5}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                     <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesc.containerimagem5}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://i.pinimg.com/originals/5a/5a/17/5a5a177986e027d7dda9957cc92fe59b.jpg' }}
                                />
                            </View>
                            <View style={stylesc.containertitulojogo5}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> NEVER GONE</Text>
                            </View>
                        </View>
                        <View style={stylesc.containerdescricao5}>
                            <Text>
                            Never Gone é um beat'em 2D, ambientado em um mundo sombrio e mágico, onde humanos, vampiros e demônios estão em guerra entre si. Você joga como um Cavaleiro Sangrento ou uma Irmã das Trevas, tentando inclinar a balança em favor de um desses três grupos com forte influencia em castlevania.</Text>

                            <Text>Data de lançamento inicial: 25 de novembro de 2019.</Text>
                            <Text>Desenvolvedor: Hippie Game.</Text>
                            <Text>Estúdio:Hippie Game.</Text>
                            <Text>Plataformas: Android, IOS.</Text>
                            <Text>Gêneros:Ação, aventura, beat em up.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=CNQg4q_uSWs');
                                    }}>
                                        <View style={stylesc.button5}>
                                            <Text style={stylesc.buttonText5}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://never-gone.br.uptodown.com/android');
                                    }}>
                                        <View style={stylesc.button5}>
                                            <Text style={stylesc.buttonText5}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesc.containerimagem5}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'data:image/jpeg;base64,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' }}
                                />
                            </View>
                            <View style={stylesc.containertitulojogo5}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> DEAD EFFECT 2</Text>
                            </View>
                        </View>
                        <View style={stylesc.containerdescricao5}>
                            <Text>
                            A mecânica de jogo é semelhante à do jogo original. Na configuração padrão, o movimento é controlado por um joystick virtual à esquerda da tela,com a visão e a mira controladas pelo jogador movendo o dedo na tela de toque.</Text>

                            <Text>Data de lançamento inicial: 28 de outubro de 2015.</Text>
                            <Text>Desenvolvedor: BadFly Interactive, a.s.</Text>
                            <Text>Estúdio:BadFly Interactive, a.s., App Holdings.</Text>
                            <Text>Plataformas: Android, PlayStation 4, iOS, Microsoft Windows, macOS.</Text>
                            <Text>Gêneros:	Survival horror , jogo de tiro em primeira pessoa, RPG.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=V21drj2-DNY');
                                    }}>
                                        <View style={stylesc.button5}>
                                            <Text style={stylesc.buttonText5}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://play.google.com/store/apps/details?id=com.badflyinteractive.deadeffect2&hl=pt_BR&gl=US');
                                    }}>
                                        <View style={stylesc.button5}>
                                            <Text style={stylesc.buttonText5}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                     <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesc.containerimagem5}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://mkt-web.gameloft.com/static/cfe4f87e4c30f1cd4417399539ef0334.png' }}
                                />
                            </View>
                            <View style={stylesc.containertitulojogo5}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> SONIC RUNNERS ADVENTURE</Text>
                            </View>
                        </View>
                        <View style={stylesc.containerdescricao5}>
                            <Text>
                            Sonic Runners Adventure é um jogo de plataforma com infinitos elementos de corredor . Os jogadores escolhem entre vários personagens diferentes, cada um com habilidades únicas. Os jogadores devem guiar o personagem escolhido por uma série de níveis com base em locais em Sonic Generations e Sonic Lost World.
                            </Text>

                            <Text>Data de lançamento inicial: 10 de junho de 2017.</Text>
                            <Text>Desenvolvedor: Gameloft.</Text>
                            <Text>Estúdio:Gameloft.</Text>
                            <Text>Plataformas: Android, iOS, Java Platform, Micro Edition.</Text>
                            <Text>Gêneros:Corrida Infinita.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=jl8cs3hpj88');
                                    }}>
                                        <View style={stylesc.button5}>
                                            <Text style={stylesc.buttonText5}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftICHM&hl=pt_BR&gl=SG');
                                    }}>
                                        <View style={stylesc.button5}>
                                            <Text style={stylesc.buttonText5}>ONDE COMPRAR</Text>
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
const stylesc = StyleSheet.create({
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
export default Celular;