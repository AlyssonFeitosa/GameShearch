import React from 'react';
import { View, Text, Button, Image, ImageBackground, StyleSheet,TouchableOpacity, ScrollView } from 'react-native';

let logoLocal = require('C:/Users/Alysson/GameShearch/src/images/fundo3x.jpg');
let logoURI = "https://i.pinimg.com/564x/00/21/7f/00217fa56dda538f18086408fafd6ac5.jpg";

function Aventura() {
  return (
    <ScrollView>
            <View style={{ margin: 2 }}>
                <ImageBackground source={logoLocal} style={{ width: '100%', height: '100%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={stylesa.containerimagem3}>
                            <Image
                                style={{ width: 100, height: 130, }}
                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/0/03/Tr2012cover.jpg' }}
                            />
                        </View>
                        <View style={stylesa.containertitulojogo3}>
                            <Text style={{ fontSize: 50, fontStyle: 'italic', marginTop: 26 }}> TOMB RAIDER</Text>
                        </View>
                    </View>
                    <View style={stylesa.containerdescricao3}>
                        <Text>
                            A história decorre em Yamatai, uma ilha onde a protagonista e os seus amigos naufragaram. Lara tem que salvá-los, além de ter que lutar contra os habitantes e os perigos naturais da ilha.  
                        </Text>
                        <Text>Data de lançamento inicial: 5 de março de 2013</Text>
                        <Text>Desenvolvedor:  	Jason Botta </Text>
                        <Text>Estúdio: Crystal Dynamics, Eidos Montréal, Nixxes Software, Feral Interactive</Text>
                        <Text>Plataformas:Microsoft Windows, PlayStation 3, Xbox 360 ,Conversões ,OS X, PlayStation 4, Xbox One, Linux	e Google Stadia</Text>
                        <Text>Gêneros: Aventura e Ação</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.youtube.com/watch?v=hb8vT7Mxp5Q');
                                }}>
                                    <View style={stylesa.button3}>
                                        <Text style={stylesa.buttonText3}>TRAILER/GAMEPLAY</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://store.steampowered.com/agecheck/app/203160/?l=portuguese');
                                }}>
                                    <View style={stylesa.button3}>
                                        <Text style={stylesa.buttonText3}>ONDE COMPRAR</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesa.containerimagem3}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/d/d6/Star_Wars_Jedi_Fallen_Order_capa.png/270px-Star_Wars_Jedi_Fallen_Order_capa.png' }}
                                />
                            </View>
                            <View style={stylesa.containertitulojogo3}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> STAR WARS JEDI FALLEN ORDER</Text>
                            </View>
                        </View>
                        <View style={stylesa.containerdescricao3}>
                            <Text>
                                Cinco anos após a execução da Ordem 66 e o início do Grande Expurgo Jedi, o ex-Padawan Cal Kestis (Cameron Monaghan) se esconde do recém-nascido Império Galáctico no planeta Bracca, onde ele trabalha como um sucateiro que desmonta naves das Guerras Clônicas. 
                            </Text>

                            <Text>Data de lançamento inicial:  15 de novembro de 2019.</Text>
                            <Text>Desenvolvedor:Respawn Entertainment.</Text>
                            <Text>Estúdio: Respawn Entertainment.</Text>
                            <Text>Plataformas: PlayStation 4, PlayStation 5, Xbox One, Xbox Series X, Google Stadia, Microsoft Windows.</Text>
                            <Text>Gêneros: Aventura, ação.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=0GLbwkfhYZk');
                                    }}>
                                        <View style={stylesa.button3}>
                                            <Text style={stylesa.buttonText3}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.origin.com/bra/pt-br/store/star-wars/star-wars-jedi-fallen-order');
                                    }}>
                                        <View style={stylesa.button3}>
                                            <Text style={stylesa.buttonText3}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                     
                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesa.containerimagem3}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/No_man_sky_cover.jpg/260px-No_man_sky_cover.jpg' }}
                                />
                            </View>
                            <View style={stylesa.containertitulojogo3}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> NO MAN'S SKY</Text>
                            </View>
                        </View>
                        <View style={stylesa.containerdescricao3}>
                            <Text>
                                Em No Man's Sky, os jogadores são livres para explorar todo um universo, gerado proceduralmente, que inclui cerca de 18 quintilhões (264) de planetas, todos eles com flora e fauna própria.
                            </Text>

                            <Text>Data de lançamento inicial:  9 de agosto de 2016.</Text>
                            <Text>Desenvolvedor:Gareth Bourn.</Text>
                            <Text>Estúdio: Hello Games.</Text>
                            <Text>Plataformas:  PlayStation 4, Xbox One, PlayStation 5, Xbox Series X, Android, Microsoft Windows.</Text>
                            <Text>Gêneros: Aventura.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=nLtmEjqzg7M');
                                    }}>
                                        <View style={stylesa.button3}>
                                            <Text style={stylesa.buttonText3}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://store.steampowered.com/app/275850/No_Mans_Sky/');
                                    }}>
                                        <View style={stylesa.button3}>
                                            <Text style={stylesa.buttonText3}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesa.containerimagem3}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/d/d0/A_Plague_Tale_capa.jpg/270px-A_Plague_Tale_capa.jpg' }}
                                />
                            </View>
                            <View style={stylesa.containertitulojogo3}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}>  A PLAGUE TALE: INNOCENCE</Text>
                            </View>
                        </View>
                        <View style={stylesa.containerdescricao3}>
                            <Text>
                                No jogo, o jogador assume o controle de Amicia em uma perspectiva de terceira pessoa. Na maior parte do tempo, os jogadores precisam usar a furtividade para evitar encontros hostis.
                            </Text>

                            <Text>Data de lançamento inicial:  14 de maio de 2019.</Text>
                            <Text>Desenvolvedor: Asobo Studio.</Text>
                            <Text>Estúdio: Focus Home Interactive.</Text>
                            <Text>Plataformas:Microsoft Windows, PlayStation 4, Xbox One.</Text>
                            <Text>Gêneros: Aventura, ação e stealth.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=CtP6mNeN6yE');
                                    }}>
                                        <View style={stylesa.button3}>
                                            <Text style={stylesa.buttonText3}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://store.playstation.com/pt-br/product/UP4133-PPSA02388_00-APLAGUETALEGAME0/');
                                    }}>
                                        <View style={stylesa.button3}>
                                            <Text style={stylesa.buttonText3}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                     <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesa.containerimagem3}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/f/f0/Batman_arkham_city_logo.jpg/200px-Batman_arkham_city_logo.jpg' }}
                                />
                            </View>
                            <View style={stylesa.containertitulojogo3}>
                                <Text style={{ fontSize: 28, fontStyle: 'italic', marginTop: 26 }}>BATMAN: ARKHAM CITY</Text>
                            </View>
                        </View>
                        <View style={stylesa.containerdescricao3}>
                            <Text>
                                Na dramatização do jogo, o prefeito Quincy Sharp murou bairros inteiros de Gotham, criando Arkham City, uma cidade que funciona como uma super-prisão. A única regra é que seus habitantes, os variados bandidos de Gotham, não podem sair de lá. Batman, claro, não gosta nada disso. Como Bruce Wayne ele forma o partido Anti-Arkham. 
                            </Text>

                            <Text>Data de lançamento inicial: 18 de outubro de 2011.</Text>
                            <Text>Desenvolvedor:Rocksteady Studios, WB Games Montreal.</Text>
                            <Text>Estúdio: Rocksteady Studios, WB Games Montreal.</Text>
                            <Text>Plataformas:  PlayStation 4, Xbox One, PlayStation 3, Xbox 360, Microsoft Windows, Wii U, macOS.</Text>
                            <Text>Gêneros: Aventura, Ação, Beat 'em up, Stealth.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=-V1ZF5cNYCs');
                                    }}>
                                        <View style={stylesa.button3}>
                                            <Text style={stylesa.buttonText3}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://store.steampowered.com/app/200260/Batman_Arkham_City__Game_of_the_Year_Edition/');
                                    }}>
                                        <View style={stylesa.button3}>
                                            <Text style={stylesa.buttonText3}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesa.containerimagem3}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzmz0Z6-RSsHPgwPpXoD5Jm30ORqFZVt1MLZ0MYIggrWb2I_ZSK417As2Ov9TXCqvrUPk&usqp=CAU' }}
                                />
                            </View>
                            <View style={stylesa.containertitulojogo3}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> JOURNEY</Text>
                            </View>
                        </View>
                        <View style={stylesa.containerdescricao3}>
                            <Text>
                               Em Journey, o jogador controla uma figura encapuzada a vagar por um vasto deserto, viajando rumo a uma grande montanha ao longe. 
                            </Text>

                            <Text>Data de lançamento inicial:  13 de março de 2012.</Text>
                            <Text>Desenvolvedor:Jenova Chen, Robin Hunicke, Chris Bell, Bryan Singh, Nicholas Clark.</Text>
                            <Text>Estúdio: Thatgamecompany, Tricky Pixels, SIE Santa Monica Studio.</Text>
                            <Text>Plataformas: PlayStation 4, PlayStation 3, iOS, Microsoft Windows.</Text>
                            <Text>Gêneros: Aventura.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=YpHyYRt9xTw');
                                    }}>
                                        <View style={stylesa.button3}>
                                            <Text style={stylesa.buttonText3}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://store.playstation.com/pt-br/product/UP9000-CUSA00694_00-JOURNEYPS4061115/');
                                    }}>
                                        <View style={stylesa.button3}>
                                            <Text style={stylesa.buttonText3}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesa.containerimagem3}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9c/Minecraft_capa.png/260px-Minecraft_capa.png' }}
                                />
                            </View>
                            <View style={stylesa.containertitulojogo3}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> MINECRAFT</Text>
                            </View>
                        </View>
                        <View style={stylesa.containerdescricao3}>
                            <Text>
                                Em Minecraft, os jogadores exploram um mundo aberto tridimensional intencionalmente em blocos, pixelizado e gerado proceduralmente, podendo descobrir e extrair matérias-primas, ferramentas artesanais, construir estruturas ou terraplanagens.
                            </Text>

                            <Text>Data de lançamento inicial:18 de novembro de 2011.</Text>
                            <Text>Desenvolvedor: Markus Persson,Jens Bergensten.</Text>
                            <Text>Estúdio: Mojang Studios.</Text>
                            <Text>Plataformas:Microsoft Windows, macOS, Linux, Android, iOS, Xbox 360 ,Raspberry Pi, Windows Phone, PlayStation 3, Fire OS, PlayStation 4, Xbox One, PlayStation Vita, Wii U, tvOS, Nintendo Switch, New Nintendo 3DS.</Text>
                            <Text>Gêneros: Aventura.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=MmB9b5njVbA');
                                    }}>
                                        <View style={stylesa.button3}>
                                            <Text style={stylesa.buttonText3}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://boostgames.store/?gclid=EAIaIQobChMIhdP1_KyG8gIVTwWRCh1bdQSbEAAYASAAEgIhJvD_BwE');
                                    }}>
                                        <View style={stylesa.button3}>
                                            <Text style={stylesa.buttonText3}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesa.containerimagem3}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/f/f2/Just_Cause_3_cover_art.jpg/230px-Just_Cause_3_cover_art.jpg' }}
                                />
                            </View>
                            <View style={stylesa.containertitulojogo3}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> JUST CAUSE 3</Text>
                            </View>
                        </View>
                        <View style={stylesa.containerdescricao3}>
                            <Text>
                                Just Cause 3 é um jogo de acção-aventura em mundo aberto que ocorre no arquipélago fictício de Medici, no Mar Mediterrâneo, com Rico Rodriguez como o protagonista. O tamanho do mapa do jogo é relativamente igual ao de Just Cause 2, com cerca de 400 milhas quadradas dividido em três partes, disponíveis logo desde o inicio.[7] O terreno volumétrico foi aumentado para permitir maior. 
                            </Text>

                            <Text>Data de lançamento inicial: 1 de dezembro de 2015.</Text>
                            <Text>Desenvolvedor:Francesco Antolini.</Text>
                            <Text>Estúdio: Avalanche Studios Group.</Text>
                            <Text>Plataformas:  PlayStation 4, Xbox One, Microsoft Windows.</Text>
                            <Text>Gêneros: Aventura, ação.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=-x1q7wY0koE');
                                    }}>
                                        <View style={stylesa.button3}>
                                            <Text style={stylesa.buttonText3}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://store.steampowered.com/agecheck/app/225540/');
                                    }}>
                                        <View style={stylesa.button3}>
                                            <Text style={stylesa.buttonText3}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesa.containerimagem3}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/f/fb/Assassins_Creed_Origins_capa.png/270px-Assassins_Creed_Origins_capa.png' }}
                                />
                            </View>
                            <View style={stylesa.containertitulojogo3}>
                                <Text style={{ fontSize: 28, fontStyle: 'italic', marginTop: 26 }}>ASSASSINS CREED ORIGINS</Text>
                            </View>
                        </View>
                        <View style={stylesa.containerdescricao3}>
                            <Text>
                                A história decorre no Reino Ptolemaico no Antigo Egito e fala de Bayek, um medjai, que trabalha para proteger o seu povo de ameaças, e sua esposa Aya.
                            </Text>

                            <Text>Data de lançamento inicial:  27 de outubro de 2017.</Text>
                            <Text>Desenvolvedor:Ubisoft Montreal, Ubisoft San Francisco.</Text>
                            <Text>Estúdio: Ubisoft Montreal, Ubisoft San Francisco.</Text>
                            <Text>Plataformas:  PlayStation 4, Xbox One, Microsoft Windows, Google Stadia.</Text>
                            <Text>Gêneros: Aventura, ação.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=a2Q_V181Gd8');
                                    }}>
                                        <View style={stylesa.button3}>
                                            <Text style={stylesa.buttonText3}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.origin.com/bra/pt-br/store/assassins-creed/assassins-creed-origins');}}>
                                        <View style={stylesa.button3}>
                                            <Text style={stylesa.buttonText3}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylesa.containerimagem3}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/c0/Brothers_A_Tale_of_Two_Sons_capa.jpg/200px-Brothers_A_Tale_of_Two_Sons_capa.jpg' }}
                                />
                            </View>
                            <View style={stylesa.containertitulojogo3}>
                                <Text style={{ fontSize: 35, fontStyle: 'italic', marginTop: 18 }}> BROTHERS A TALE OF TWO SONS</Text>
                            </View>
                        </View>
                        <View style={stylesa.containerdescricao3}>
                            <Text>
                                Brothers é apresentado a partir de uma visão de terceira pessoa com vista para os dois irmãos. Os irmãos são movidos individualmente pelas duas alavanca analógica do gamepad.
                            </Text>

                            <Text>Data de lançamento inicial: 7 de agosto de 2013.</Text>
                            <Text>Desenvolvedor:Starbreeze Studios .</Text>
                            <Text>Estúdio: 505 Games.</Text>
                            <Text>Plataformas: Android, iOS, Microsoft Windows, PlayStation 3, PlayStation 4, Windows Phone, Xbox 360, Xbox One.</Text>
                            <Text>Gêneros: Aventura, ação.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=DHohBVfhGDU');
                                    }}>
                                        <View style={stylesa.button3}>
                                            <Text style={stylesa.buttonText3}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://store.playstation.com/pt-br/product/UP4040-CUSA02297_00-BROTHERSLICENSE4/');
                                    }}>
                                        <View style={stylesa.button3}>
                                            <Text style={stylesa.buttonText3}>ONDE COMPRAR</Text>
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
const stylesa = StyleSheet.create({
    containerimagem3: {
        backgroundColor: '#000000',
        width: 110,
        height: 140,
    },
    containertitulojogo3: {
        backgroundColor: '#f2f2fc',
        width: 300,
        height: 140
    },
    containerdescricao3: {
        backgroundColor: '#f2f2fc',
        width: 360,
        height: 300,
    },
    button3: {
        marginBottom: 20,
        width: 170,
        backgroundColor: '#000000',
        borderRadius: 15,
    },
    buttonText3: {
        textAlign: 'center',
        padding: 15,
        color: 'white'
    },
});
export default Aventura;