import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';

let logoLocal = require('C:/Users/Alysson/GameShearch/src/images/fundo3x.jpg');
let logoURI = "https://i.pinimg.com/564x/00/21/7f/00217fa56dda538f18086408fafd6ac5.jpg";

function Terror() {
    return (
        <ScrollView>
            <View style={{ margin: 2 }}>
                <ImageBackground source={logoLocal} style={{ width: '100%', height: '100%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={stylest.containerimagem1}>
                            <Image
                                style={{ width: 100, height: 130, }}
                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/e/e7/The_Medium_-_Capa.png' }}
                            />
                        </View>
                        <View style={stylest.containertitulojogo1}>
                            <Text style={{ fontSize: 50, fontStyle: 'italic', marginTop: 26 }}> THE MEDIUM</Text>
                        </View>
                    </View>
                    <View style={stylest.containerdescricao1}>
                        <Text>
                            A história se passa Enquanto Marianne lamentava a morte de seu pai adotivo, ela recebe um misterioso telefonema de um homem chamado Thomas, que sabe de sua habilidade sobrenatural de se comunicar com os mortos.
                        </Text>
                        <Text>Data de lançamento inicial: 28 de janeiro de 2021.</Text>
                        <Text>Desenvolvedor: Bloober Team.</Text>
                        <Text>Estúdio: Bloober Team, NA PUBLISHING INC.</Text>
                        <Text>Plataformas: Xbox Series X, PlayStation 5, Microsoft Windows.</Text>
                        <Text>Gêneros: Survival horror, Terror psicológico, quebra-cabeça,  Ficção.</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.youtube.com/watch?v=lMgm0GdMeZE');
                                }}>
                                    <View style={stylest.button1}>
                                        <Text style={stylest.buttonText1}>TRAILER/GAMEPLAY</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://store.steampowered.com/agecheck/app/1293160/?l=brazilian');
                                }}>
                                    <View style={stylest.button1}>
                                        <Text style={stylest.buttonText1}>ONDE COMPRAR</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylest.containerimagem1}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/c7/Alien_Isolation_capa.png/200px-Alien_Isolation_capa.png' }}
                                />
                            </View>
                            <View style={stylest.containertitulojogo1}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> ALIEN ISOLATION</Text>
                            </View>
                        </View>
                        <View style={stylest.containerdescricao1}>
                            <Text>
                                Alien: Isolation é um JOGO desenvolvido pela Creative Assembly e publicado pela Sega. Ele foi lançado originalmente para as plataformas Microsoft Windows, PlayStation 3, PlayStation 4, Xbox 360 e Xbox One. O jogo é baseado na série de filmes de terror de ficção científica Alien, e acontece quinze anos após os eventos do filme original Alien de 1979, seguindo a engenheira Amanda Ripley, filha da protagonista Ellen Ripley de Alien, enquanto ela investiga o desaparecimento de sua mãe.
                            </Text>

                            <Text>Data de lançamento inicial: 6 de outubro de 2014.</Text>
                            <Text>Desenvolvedor: Creative Assembly, Feral Interactive.</Text>
                            <Text>Estúdio: BAFTA Video Games Award: Melhor Áudio.</Text>
                            <Text>Plataformas: PlayStation 4, Xbox One, PlayStation 3, Xbox 360, Nintendo Switch, Microsoft Windows, macOS, Linux, Mac OS.</Text>
                            <Text>Gêneros: Survival horror, Jogo eletrônico de furtividade, Jogo eletrônico de quebra-cabeça, Ficção científica.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=7h0cgmvIrZw');
                                    }}>
                                        <View style={stylest.button1}>
                                            <Text style={stylest.buttonText1}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.microsoft.com/pt-br/p/alien-isolation/9nsrj872sgh7?activetab=pivot:overviewtab');
                                    }}>
                                        <View style={stylest.button1}>
                                            <Text style={stylest.buttonText1}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylest.containerimagem1}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/c0/The_Evil_Within_boxart_capa.jpg/270px-The_Evil_Within_boxart_capa.jpg' }}
                                />
                            </View>
                            <View style={stylest.containertitulojogo1}>
                                <Text style={{ fontSize: 45, fontStyle: 'italic', marginTop: 26 }}> THE EVIL WITHIN </Text>
                            </View>
                        </View>
                        <View style={stylest.containerdescricao1}>
                            <Text>
                                A história do jogo se passa na cidade fictícia de Krimson City, nos Estados Unidos. Após um chamado de emergência de polícia no hospício Beacon Mental Hospital, o detetive veterano Sebastian Castellanos, seu parceiro Joseph Oda e sua equipe vão até o local para averiguar. Ao chegarem lá, se deparam com um local pós massacre: lá eles encontram praticamente todos os pacientes, enfermeiros e médicos mortos. Ao checarem as câmeras de segurança para análise e em busca de saber o que realmente aconteceu naquele lugar, eles descobrem que algo fora do comum e da realidade convencional tomou posse do local e causou o massacre
                            </Text>

                            <Text>Data de lançamento inicial: outubro de 2014.</Text>
                            <Text>Desenvolvedor: Tango Gameworks.</Text>
                            <Text>Estúdio: Bethesda Softworks.</Text>
                            <Text>Plataformas: PlayStation 4, PlayStation 3, Xbox One, Xbox 360, Microsoft Windows.</Text>
                            <Text>Gêneros:  PlayStation 4, PlayStation 3, Xbox One, Xbox 360, Microsoft Windows.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=H2qITQHud2I');
                                    }}>
                                        <View style={stylest.button1}>
                                            <Text style={stylest.buttonText1}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://store.steampowered.com/agecheck/app/268050/');
                                    }}>
                                        <View style={stylest.button1}>
                                            <Text style={stylest.buttonText1}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylest.containerimagem1}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/2/2c/Resident_Evil_Village.png' }}
                                />
                            </View>
                            <View style={stylest.containertitulojogo1}>
                                <Text style={{ fontSize: 35, fontStyle: 'italic', marginTop: 26 }}> RESIDENT EVIL 8: VILLAGE</Text>
                            </View>
                        </View>
                        <View style={stylest.containerdescricao1}>
                            <Text>
                                Resident Evil 8: Village, conhecido no Japão como Biohazard 8: Village (バイオハザード ヴィレッジ Baiohazādo Virejji?) é um jogo eletrônico de survival horror desenvolvido e publicado pela Capcom. É a sequência de Resident Evil 7: Biohazard, de 2017, e foi anunciado pela primeira vez no evento de revelação do PlayStation 5 em 11 de junho de 2020.Foi lançado no dia 07 de Maio de 2021 para Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One e Xbox Series X.
                            </Text>

                            <Text>Data de lançamento inicial: 7 de maio de 2021.</Text>
                            <Text>Desenvolvedor: Capcom.</Text>
                            <Text>Estúdio: Capcom, Capcom U.S.A., Inc..</Text>
                            <Text>Plataformas: PlayStation 4, PlayStation 5, Google Stadia, Xbox One, Xbox Series X, Microsoft Windows.</Text>
                            <Text>Gêneros: Survival horror.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=Qge5m24C5qs');
                                    }}>
                                        <View style={stylest.button1}>
                                            <Text style={stylest.buttonText1}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.microsoft.com/pt-br/p/resident-evil-village/9mw7mfv29cmf?activetab=pivot:overviewtab');
                                    }}>
                                        <View style={stylest.button1}>
                                            <Text style={stylest.buttonText1}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylest.containerimagem1}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/3/35/Dead_Space_capa.png/270px-Dead_Space_capa.png' }}
                                />
                            </View>
                            <View style={stylest.containertitulojogo1}>
                                <Text style={{ fontSize: 40, fontStyle: 'italic', marginTop: 26 }}> DEAD SPACE</Text>
                            </View>
                        </View>
                        <View style={stylest.containerdescricao1}>
                            <Text>
                                Dead Space é um jogo eletrônico de terror de sobrevivência desenvolvido pela EA Redwood Shores para Xbox 360, Microsoft Windows e PlayStation 3 e lançado pela EA em outubro de 2008. O jogo foi liberado para Steam em 20 de outubro de 2008. O jogador toma o papel de um engenheiro chamado Isaac Clarke, que luta contra uma infestação alienígena, parecida com vírus, que transforma humanos em monstros alienígenas chamados "Necromorphs" ou "Necromorfos", a bordo de uma nave de mineração espacial chamada USG Ishimura.
                            </Text>

                            <Text>Data de lançamento inicial: 14 de outubro de 2008.</Text>
                            <Text>Desenvolvedor: Visceral Games.</Text>
                            <Text>Estúdio: Electronic Arts, AK Tronic.</Text>
                            <Text>Plataformas: PlayStation 3, Xbox 360, Microsoft Windows.</Text>
                            <Text>Gêneros: Terror.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=Secfn81KB8k');
                                    }}>
                                        <View style={stylest.button1}>
                                            <Text style={stylest.buttonText1}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.origin.com/bra/pt-br/store/dead-space/dead-space');
                                    }}>
                                        <View style={stylest.button1}>
                                            <Text style={stylest.buttonText1}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>


                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylest.containerimagem1}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/91/Resident_Evil_4_-_North-american_cover.jpg/255px-Resident_Evil_4_-_North-american_cover.jpg' }}
                                />
                            </View>
                            <View style={stylest.containertitulojogo1}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> RESIDENT EVIL 4</Text>
                            </View>
                        </View>
                        <View style={stylest.containerdescricao1}>
                            <Text>
                                A história de Resident Evil 4 segue o agente especial do governo dos Estados Unidos Leon S. Kennedy, que é enviado em uma missão para resgatar Ashley Graham, filha do presidente americano, que foi raptada por uma seita macabra. Ele viaja para uma área rural da Espanha, onde luta contra hordas de moradores violentos e monstros mutantes, e se reúne com a misteriosa espiã Ada Wong.
                            </Text>

                            <Text>Data de lançamento inicial: 11 de janeiro de 2005.</Text>
                            <Text>Desenvolvedor: Double Fine.</Text>
                            <Text>Estúdio: Xbox Game Studios.</Text>
                            <Text>Plataformas: GameCube,PlayStation 2, Microsoft Windows, Wii, Zeebo,iOS, PlayStation 3, Xbox 360, Android, PlayStation 4, Xbox One, Nintendo Switch.</Text>
                            <Text>Gênero: Survival horror, quebra-cabeça, Tiro em terceira pessoa, Adventure.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=3waXAcZibpI');
                                    }}>
                                        <View style={stylest.button1}>
                                            <Text style={stylest.buttonText1}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://store.playstation.com/pt-br/product/UP0102-CUSA04885_00-BH4HD00000000001/');
                                    }}>
                                        <View style={stylest.button1}>
                                            <Text style={stylest.buttonText1}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>


                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={stylest.containerimagem1}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/8/8a/Outlast_2_Cover_Art.jpg/250px-Outlast_2_Cover_Art.jpg' }} />
                            </View>
                            <View style={stylest.containertitulojogo1}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> OUTLAST 2</Text>
                            </View>
                        </View>
                        <View style={stylest.containerdescricao1}>
                            <Text>
                                Outlast 2 É a sequência do jogo eletrônico de 2013 Outlast e apresenta um jornalista chamado Blake Langermann, junto com sua esposa Lynn, percorrendo o deserto do Arizona para explorar o assassinato de uma mulher grávida, apenas conhecida como Jane Doe. Blake e Lynn se separam em um acidente de helicóptero, e Blake tem que encontrar sua esposa enquanto viaja através de uma aldeia habitada por uma seita chamada Testamento do Novo Ezequiel (Testament of the New Ezekiel) que acredita que o fim dos dias está chegando.
                            </Text>

                            <Text>Data de lançamento 24 de abril de 2017.</Text>
                            <Text>Desenvolvedor: Red Barrels Studio.</Text>
                            <Text>Estúdio:Red Barrels.</Text>
                            <Text>Plataformas: PlayStation 4, Xbox One, Microsoft Windows, Nintendo Switch.</Text>
                            <Text>Gêneros: Survival horror, Jogo eletrônico independente, Adventure.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=MKrUZ36IVAY');
                                    }}>
                                        <View style={stylest.button1}>
                                            <Text style={stylest.buttonText1}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://store.steampowered.com/app/414700/Outlast_2/?l=portuguese');
                                    }}>
                                        <View style={stylest.button1}>
                                            <Text style={stylest.buttonText1}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
              <Text></Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={stylest.containerimagem1}>
                    <Image
                        style={{ width: 100, height: 130, }}
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/f/fa/Until_Dawn_capa.png/270px-Until_Dawn_capa.png'}}/>
                </View>
                <View style={stylest.containertitulojogo1}>
                    <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}>UNTIL DAWN</Text>
                </View>
            </View>
            <View style={stylest.containerdescricao1}>
                <Text>
                Until Dawn foi desenhado para poder ser jogado várias vezes para que os jogadores possam entender o jogo na sua totalidade. A história dura cerca de nove horas de cada vez que se joga e as mecânicas irão utilizar um novo sistema chamado "Efeito Borboleta" em que cada escolha feita terá grandes consequências nunca antes vistas no desenrolar da história.
                </Text>

                <Text>Data de lançamento: 2015.</Text>
                <Text>Desenvolvedor:  Nik Bowen.</Text>
                <Text>Estúdio:Supermassive Games.</Text>
                <Text>Plataformas: PlayStation 4, Android.</Text>
                <Text>Gêneros: Survival horror, Narrativa interativa.</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                    <View>
                        <TouchableOpacity onPress={()=>{
                            Linking.openURL('https://www.youtube.com/watch?v=3NcF7EOnjow');
                        }}>
                            <View style={stylest.button1}>
                                <Text style={stylest.buttonText1}>TRAILER/GAMEPLAY</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>{
                            Linking.openURL('https://store.playstation.com/pt-br/product/UP9000-CUSA00359_00-UNTILDAWN0000001/');
                        }}>
                            <View style={stylest.button1}>
                                <Text style={stylest.buttonText1}>ONDE COMPRAR</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </View>

            <View>
              <Text></Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={stylest.containerimagem1}>
                    <Image
                        style={{ width: 100, height: 130, }}
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/d/dc/Resident_Evil_3.jpg'}}/>
                </View>
                <View style={stylest.containertitulojogo1}>
                    <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> RESIDENT EVIL 3: REMAKE</Text>
                </View>
            </View>
            <View style={stylest.containerdescricao1}>
                <Text>
                Resident Evil 3 Remake é uma recriação de Resident Evil 3: Nemesis, um jogo eletrônico de survival horror lançado para o PlayStation em 1999. Enquanto o jogo original usa controles de tanque e ângulos de câmera fixa, essa recriação apresenta uma jogabilidade de tiro em terceira pessoa, semelhante ao Resident Evil 2, de 2019. Também inclui um modo multiplayer online, Resident Evil: Resistance, que coloca uma equipe de quatro jogadores contra um "mentor" que pode criar armadilhas, inimigos e outros perigos.
                </Text>

                <Text>Data de lançamento 3 de abril de 2020.</Text>
                <Text>Desenvolvedor: Capcom.</Text>
                <Text>Estúdio: Capcom, Capcom U.S.A., Inc..</Text>
                <Text>Plataformas: PlayStation 4, Xbox One, Microsoft Windows.</Text>
                <Text>Gêneros: Survival horror.</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                    <View>
                        <TouchableOpacity onPress={()=>{
                            Linking.openURL('https://www.youtube.com/watch?v=xA9bGm1m5FA');
                        }}>
                            <View style={stylest.button1}>
                                <Text style={stylest.buttonText1}>TRAILER/GAMEPLAY</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>{
                            Linking.openURL('https://store.steampowered.com/app/952060/Resident_Evil_3/');
                        }}>
                            <View style={stylest.button1}>
                                <Text style={stylest.buttonText1}>ONDE COMPRAR</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </View>

            <View>
              <Text></Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={stylest.containerimagem1}>
                    <Image
                        style={{ width: 100, height: 130, }}
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/d/d3/Silent_Hill_4_The_Room_capa.png/270px-Silent_Hill_4_The_Room_capa.png'}}/>
                </View>
                <View style={stylest.containertitulojogo1}>
                    <Text style={{ fontSize: 28, fontStyle: 'italic', marginTop: 26 }}> SILENT HILL 4: THE ROOM</Text>
                </View>
            </View>
            <View style={stylest.containerdescricao1}>
                <Text>
                Silent Hill 4: The Room (サイレントヒル ザ・ルーム Sairento Hiru Za Rūmu?) é a quarta parte da série de survival horror Silent Hill, publicado pela Konami e desenvolvido pela Team Silent, uma equipe dentro da Konami Computer Entertainment Tokyo. O jogo foi lançado, assim como sua trilha-sonora, no Japão em junho de 2004 e na América do Norte e Europa em setembro do mesmo ano, para os consoles PlayStation 2, Xbox e Microsoft Windows.
                </Text>

                <Text>Data de lançamento inicial: 2004.</Text>
                <Text>Desenvolvedor:Team Silent, Konami, Konami Computer Entertainment Japan.</Text>
                <Text>Estúdio: Konami.</Text>
                <Text>Plataformas: Microsoft Windows, PlayStation 2, Xbox, PlayStation 3.</Text>
                <Text>Gêneros: Survival horror,quebra-cabeça, Tiro em terceira pessoa.</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                    <View>
                        <TouchableOpacity onPress={()=>{
                            Linking.openURL('https://www.youtube.com/watch?v=-oEKkMdtaQM');
                        }}>
                            <View style={stylest.button1}>
                                <Text style={stylest.buttonText1}>TRAILER/GAMEPLAY</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>{
                            Linking.openURL('https://www.amazon.com.br/Silent-Hill-4-Liam-Beatty/dp/1903511615');
                        }}>
                            <View style={stylest.button1}>
                                <Text style={stylest.buttonText1}>ONDE COMPRAR</Text>
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
const stylest = StyleSheet.create({
    containerimagem1: {
        backgroundColor: '#000000',
        width: 110,
        height: 140,
    },
    containertitulojogo1: {
        backgroundColor: '#f2f2fc',
        width: 300,
        height: 140
    },
    containerdescricao1: {
        backgroundColor: '#f2f2fc',
        width: 360,
        height: 390,
    },
    button1: {
        marginBottom: 20,
        width: 170,
        backgroundColor: '#000000',
        borderRadius: 15,
    },
    buttonText1: {
        textAlign: 'center',
        padding: 15,
        color: 'white'
    },
});
export default Terror;