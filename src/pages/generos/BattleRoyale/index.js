import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';

let logoLocal = require('C:/Users/Alysson/GameShearch/src/images/fundo3x.jpg');
let logoURI = "https://i.pinimg.com/564x/00/21/7f/00217fa56dda538f18086408fafd6ac5.jpg";

function BattleRoyale(){
    return(
        <ScrollView>
            <View style={{ margin: 2 }}>
                <ImageBackground source={logoLocal} style={{ width: '100%', height: '100%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={stylesb.containerimagem4}>
                            <Image
                                style={{ width: 100, height: 130, }}
                                source={{ uri: 'https://image.api.playstation.com/vulcan/img/rnd/202106/0806/7KJILbdp9AEmmrELwJCMJqc2.png' }}
                            />
                        </View>
                        <View style={stylesb.containertitulojogo4}>
                            <Text style={{ fontSize: 50, fontStyle: 'italic', marginTop: 26 }}> FORTNITE</Text>
                        </View>
                    </View>
                    <View style={stylesb.containerdescricao4}>
                        <Text>
                        Fortnite Battle Royale, um jogo free-to-play do gênero battle royale, onde até 100 jogadores lutam em espaços cada vez menores para serem a última pessoa ou time vencedor.
                        </Text>
                        <Text>Data de lançamento inicial: 21 de julho de 2017.</Text>
                        <Text>Desenvolvedor: Darren Sugg.</Text>
                        <Text>Estúdio: Epic Games, People Can Fly.</Text>
                        <Text>Plataformas: PlayStation 4, Nintendo Switch, Android, iOS, Xbox One, PlayStation 5, Xbox Series X, Microsoft Windows.</Text>
                        <Text>Gêneros: BattleRoyale.</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.youtube.com/watch?v=sn6_QY5bU4Y');
                                }}>
                                    <View style={stylesb.button4}>
                                        <Text style={stylesb.buttonText4}>TRAILER/GAMEPLAY</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.epicgames.com/fortnite/pt-BR/home');
                                }}>
                                    <View style={stylesb.button4}>
                                        <Text style={stylesb.buttonText4}>ONDE COMPRAR</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesb.containerimagem4}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/6/60/PlayerUnknown%E2%80%99s_Battlegrounds_cover.jpg/270px-PlayerUnknown%E2%80%99s_Battlegrounds_cover.jpg' }}
                                />
                            </View>
                            <View style={stylesb.containertitulojogo4}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> BATTLEGROUNDS</Text>
                            </View>
                        </View>
                        <View style={stylesb.containerdescricao4}>
                            <Text>
                            O jogo consiste de até cem jogadores que caem de paraquedas em uma ilha em busca de armas e equipamento a fim de matar os outros jogadores, enquanto tentam sobreviver ao mesmo tempo. A área de jogo diminui progressivamente, confinando os sobreviventes a um espaço cada vez menor e forçando encontros. 
                            </Text>

                            <Text>Data de lançamento inicial: 30 de julho de 2016.</Text>
                            <Text>Desenvolvedor: Brendan Greene.</Text>
                            <Text>Estúdio: PUBG Corporation, Krafton.</Text>
                            <Text>Plataformas: Microsoft Windows, Android, iOS, PlayStation 4, Xbox One, Google Stadia.</Text>
                            <Text>Gêneros: BattleRoyale.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=ODWCbu_cuqk');
                                    }}>
                                        <View style={stylesb.button4}>
                                            <Text style={stylesb.buttonText4}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/');
                                    }}>
                                        <View style={stylesb.button4}>
                                            <Text style={stylesb.buttonText4}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesb.containerimagem4}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/ad/Apex_legends_capa.jpg/260px-Apex_legends_capa.jpg' }}
                                />
                            </View>
                            <View style={stylesb.containertitulojogo4}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}>APEX LEGENDS</Text>
                            </View>
                        </View>
                        <View style={stylesb.containerdescricao4}>
                            <Text>
                            Apex Legends diferencia-se de outros jogos battle royale, tomando emprestado conceitos do hero shooter, com a Lenda de cada jogador tendo skills e habilidades únicas, e principalmente exigindo que os jogadores trabalhem em esquadrões de três, com a capacidade de reanimar companheiros de esquadrão abatidos.
                            </Text>

                            <Text>Data de lançamento inicial: 4 de fevereiro de 2019.</Text>
                            <Text>Desenvolvedor:  Respawn Entertainment, Panic Button Games.</Text>
                            <Text>Estúdio:  Respawn Entertainment, Panic Button Games.</Text>
                            <Text>Plataformas: PlayStation 4, Nintendo Switch, Xbox One, iOS, Microsoft Windows, Android.</Text>
                            <Text>Gêneros: BattleRoyale, primeira pessoa.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=MiTusjd1dUY');
                                    }}>
                                        <View style={stylesb.button4}>
                                            <Text style={stylesb.buttonText4}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.origin.com/bra/pt-br/store/apex/apex');
                                    }}>
                                        <View style={stylesb.button4}>
                                            <Text style={stylesb.buttonText4}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesb.containerimagem4}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5f/COD_Warzone.jpg/270px-COD_Warzone.jpg' }}
                                />
                            </View>
                            <View style={stylesb.containertitulojogo4}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> CALL OF DUTY: WARZONE</Text>
                            </View>
                        </View>
                        <View style={stylesb.containerdescricao4}>
                            <Text>
                              O jogo faz parte do título Call of Duty: Modern Warfare (2019), mas não requer compra. Warzone permite um combate em um modo multijogador on-line entre 150 jogadores na cidade fictícia de Verdansk, que é vagamente baseada na cidade de Donetsk, no leste da Ucrânia. Ele apresenta uma progressão de plataforma-cruzada entre os dois jogos.
                            </Text>

                            <Text>Data de lançamento inicial: 10 de março de 2020.</Text>
                            <Text>Desenvolvedor: Raven Software, Infinity Ward.</Text>
                            <Text>Estúdio: Raven Software, Infinity Ward.</Text>
                            <Text>Plataformas: PlayStation 4, Xbox Series X, Microsoft Windows.</Text>
                            <Text>Gêneros: BattleRoyale.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=0E44DClsX5Q');
                                    }}>
                                        <View style={stylesb.button4}>
                                            <Text style={stylesb.buttonText4}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.callofduty.com/br/pt/warzone');
                                    }}>
                                        <View style={stylesb.button4}>
                                            <Text style={stylesb.buttonText4}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesb.containerimagem4}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Spellbreak_cover_2020.jpg/220px-Spellbreak_cover_2020.jpg' }}
                                />
                            </View>
                            <View style={stylesb.containertitulojogo4}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> SPELLBREAK</Text>
                            </View>
                        </View>
                        <View style={stylesb.containerdescricao4}>
                            <Text>
                            Spellbreak Battle royale PvP baseado em projéteis , no entanto, ao contrário de outros, ele usa manoplas que disparam feitiços mágicos no lugar de armas. Além disso, os jogadores podem levitar e carregar uma 'Runa', dando acesso a habilidades como vôo, teletransporte ou invisibilidade. 
                            </Text>

                            <Text>Data de lançamento inicial: 3 de setembro de 2020.</Text>
                            <Text>Desenvolvedor: Proletariat, Inc.</Text>
                            <Text>Estúdio: Proletariat, Inc.</Text>
                            <Text>Plataformas: PlayStation 4, Xbox One, Nintendo Switch, Microsoft Windows.</Text>
                            <Text>Gêneros: BattleRoyale.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=gVgaivQgU48');
                                    }}>
                                        <View style={stylesb.button4}>
                                            <Text style={stylesb.buttonText4}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.epicgames.com/store/pt-BR/p/spellbreak');
                                    }}>
                                        <View style={stylesb.button4}>
                                            <Text style={stylesb.buttonText4}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesb.containerimagem4}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://img.ibxk.com.br/2018/10/01/01100726591103.jpg' }}
                                />
                            </View>
                            <View style={stylesb.containertitulojogo4}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> RING OF ELYSIUM</Text>
                            </View>
                        </View>
                        <View style={stylesb.containerdescricao4}>
                            <Text>
                            Ring Of Elysium é fortemente baseado em seu estilo narrativo e profundo conhecimento conectando tudo e cada um que acontece no jogo a cada temporada. Cada temporada continua a história e adiciona 3 novos personagens ao jogo.
                            </Text>

                            <Text>Data de lançamento inicial: 30 de julho de 2016.</Text>
                            <Text>Desenvolvedor: Aurora Studio, AURORA STUDIOS, PROXIMA BETA.</Text>
                            <Text>Estúdio: Garena, TCH SCARLET Limited, Tencent, PROXIMA BETA.</Text>
                            <Text>Plataformas: Microsoft Windows.</Text>
                            <Text>Gêneros: BattleRoyale.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=XMwBox8FITU');
                                    }}>
                                        <View style={stylesb.button4}>
                                            <Text style={stylesb.buttonText4}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://store.steampowered.com/agecheck/app/755790/?l=portuguese');
                                    }}>
                                        <View style={stylesb.button4}>
                                            <Text style={stylesb.buttonText4}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesb.containerimagem4}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc7rj_YvreFpogDk_w3VHuQGiVNI_WiGMED5llaxBEBmBgIZyDlIPMTfpxHwxDtf4n1fU&usqp=CAU' }}
                                />
                            </View>
                            <View style={stylesb.containertitulojogo4}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> VALORANT</Text>
                            </View>
                        </View>
                        <View style={stylesb.containerdescricao4}>
                            <Text>
                            os jogadores assumem o papel de "agentes" com habilidades únicas, a equipe atacante tem uma bomba, chamada Spike, que eles precisam plantar em um local. Se a equipe atacante proteger com sucesso a bomba e ela detonar, eles ganharão um ponto. Se a equipe defensora desarmar com sucesso a bomba ou o cronômetro de 100 segundos da rodada expirar, a equipe defensora receberá um ponto.
                            </Text>

                            <Text>Data de lançamento inicial: 2 de junho de 2020.</Text>
                            <Text>Desenvolvedor: Riot Games.</Text>
                            <Text>Estúdio: Riot Games.</Text>
                            <Text>Plataformas: Microsoft Windows.</Text>
                            <Text>Gêneros: BattleRoyale.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('youtube.com/watch?v=h1Kp9x_ADZw');
                                    }}>
                                        <View style={stylesb.button4}>
                                            <Text style={stylesb.buttonText4}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://playvalorant.com/pt-br/');
                                    }}>
                                        <View style={stylesb.button4}>
                                            <Text style={stylesb.buttonText4}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesb.containerimagem4}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/a8/Free_fire_battlegrounds.jpg/220px-Free_fire_battlegrounds.jpg' }}
                                />
                            </View>
                            <View style={stylesb.containertitulojogo4}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> FREE FIRE</Text>
                            </View>
                        </View>
                        <View style={stylesb.containerdescricao4}>
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
                                        <View style={stylesb.button4}>
                                            <Text style={stylesb.buttonText4}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://play.google.com/store/apps/details?id=com.dts.freefireth&hl=pt_BR&gl=US');
                                    }}>
                                        <View style={stylesb.button4}>
                                            <Text style={stylesb.buttonText4}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesb.containerimagem4}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Hyperscape.jpg/220px-Hyperscape.jpg' }}
                                />
                            </View>
                            <View style={stylesb.containertitulojogo4}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> HYPER SCAPE</Text>
                            </View>
                        </View>
                        <View style={stylesb.containerdescricao4}>
                            <Text>
                              Uma diferença principal entre o Hyper Scape e outros jogos populares de battle royale é que no Hyper Scape, em vez de um círculo encolher conforme o jogo avança, setores aleatórios do mapa desaparecem. O jogo, entretanto, difere porque assim que o último setor fecha, uma coroa aparece, qualquer jogador que conseguir segurar a coroa por 60 segundos é automaticamente declarado o vencedor. 
                            </Text>

                            <Text>Data de lançamento inicial: 12 de julho de 2020.</Text>
                            <Text>Desenvolvedor:Ubisoft, Ubisoft Montreal.</Text>
                            <Text>Estúdio: Ubisoft.</Text>
                            <Text>Plataformas: PlayStation 4, Microsoft Windows, Xbox Series X, PlayStation 5, Xbox One.</Text>
                            <Text>Gêneros: BattleRoyale.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=RoNpuwpVLLw');
                                    }}>
                                        <View style={stylesb.button4}>
                                            <Text style={stylesb.buttonText4}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.epicgames.com/store/pt-BR/p/hyper-scape');
                                    }}>
                                        <View style={stylesb.button4}>
                                            <Text style={stylesb.buttonText4}>ONDE COMPRAR</Text>
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
const stylesb = StyleSheet.create({
    containerimagem4: {
        backgroundColor: '#000000',
        width: 110,
        height: 140,
    },
    containertitulojogo4: {
        backgroundColor: '#f2f2fc',
        width: 300,
        height: 140
    },
    containerdescricao4: {
        backgroundColor: '#f2f2fc',
        width: 360,
        height: 300,
    },
    button4: {
        marginBottom: 20,
        width: 170,
        backgroundColor: '#000000',
        borderRadius: 15,
    },
    buttonText4: {
        textAlign: 'center',
        padding: 15,
        color: 'white'
    },
});
export default BattleRoyale;