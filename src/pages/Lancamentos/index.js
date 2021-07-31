import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

let logoLocal = require('C:/Users/Alysson/GameShearch/src/images/fundo3x.jpg');

function Lancamentos() {
    return (
        <ScrollView>
            <View style={{ margin: 2 }}>
                <ImageBackground source={logoLocal} style={{ width: '100%', height: '100%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={styles3.containerimagem0}>
                            <Image
                                style={{ width: 100, height: 130, }}
                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/d/df/Far_Cry_6_capa.jpg/240px-Far_Cry_6_capa.jpg' }}
                            />
                        </View>
                        <View style={styles3.containertitulojogo0}>
                            <Text style={{ fontSize: 50, fontStyle: 'italic', marginTop: 26 }}> FAR CRY 6</Text>
                        </View>
                    </View>
                    <View style={styles3.containerdescricao0}>
                        <Text>
                            Far Cry 6 é um futuro jogo eletrônico de tiro em primeira pessoa desenvolvido pela Ubisoft Toronto e publicado pela Ubisoft. É o sexto título principal da série Far Cry, e será lançado em 7 de outubro de 2021 para Xbox Series X/S, Xbox One, Microsoft Windows, PlayStation 4 e PlayStation 5.
                            O jogo se passa em uma ilha fictícia do Caribe chamada "Yara", inspirada em Cuba, governada por uma ditadura do "El Presidente" Anton Castillo (dublado e modelado por Giancarlo Esposito), que está criando seu filho Diego (dublado por Anthony Gonzalez), para seguir seu governo. O jogador assume o papel de um guerrilheiro tentando recuperar a ilha para seu povo.
                        </Text>
                        <Text>Data de lançamento inicial: 7 de outubro de 2021.</Text>
                        <Text>Desenvolvedor: Ubisoft Toronto.</Text>
                        <Text>Estúdio: Ubisoft.</Text>
                        <Text>Plataformas: PlayStation 4, Amazon Luna, PlayStation 5, Xbox One, Xbox Series X, Google Stadia, Microsoft Windows.</Text>
                        <Text>Gêneros:  ação e aventura, Tiro em primeira pessoa.</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.youtube.com/watch?v=Jp5Y-a_oiPM');
                                }}>
                                    <View style={styles3.button0}>
                                        <Text style={styles3.buttonText0}>TRAILER/GAMEPLAY</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.ubisoft.com/pt-br/game/far-cry/far-cry-6?ncid=108-5230---1-pdsc-6-11-22_BR_DM_FC6_CMBCK_REA_Comeback_GSR--20-22-10-0521-6----ID_107173-----&maltcode=digitalmarketing_C2W_pdsc_google___FC6____&addinfo=&gclid=Cj0KCQjw9O6HBhCrARIsADx5qCSKAnguAYMG2M2M5Dq9gKFk6my9fTEyIadw1a-6n-psamSqxBcN8R4aAquBEALw_wcB');
                                }}>
                                    <View style={styles3.button0}>
                                        <Text style={styles3.buttonText0}>ONDE COMPRAR</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={styles3.containerimagem0}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/d/d1/Halo_Infinite_capa.png/270px-Halo_Infinite_capa.png' }}
                                />
                            </View>
                            <View style={styles3.containertitulojogo0}>
                                <Text style={{ fontSize: 35, fontStyle: 'italic', marginTop: 26 }}> HALO INFINITE</Text>
                            </View>
                        </View>
                        <View style={styles3.containerdescricao0}>
                            <Text>
                                Halo Infinite é um futuro jogo eletrônico de tiro em primeira pessoa desenvolvido pela 343 Industries e publicado pela Xbox Game Studios, para as plataformas Microsoft; será lançado para o Xbox One, Windows 10 e Xbox Series X|S. O jogo está programado para ser lançado em 2021 e é o sexto título principal da franquia Halo. Continua a história de Master Chief como o terceiro capítulo da saga Reclaimer, seguindo Halo 5: Guardians.
                            </Text>

                            <Text>Data de lançamento inicial: Segundo Semestre de 2021.</Text>
                            <Text>Desenvolvedor: 343 Industries.</Text>
                            <Text>Estúdio: Xbox Game Studios.</Text>
                            <Text>Plataformas: Xbox One, Xbox Series X, Microsoft Windows.</Text>
                            <Text>Gêneros: Tiro em primeira pessoa, aventura.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=4i86Ckj8xKk');
                                    }}>
                                        <View style={styles3.button0}>
                                            <Text style={styles3.buttonText0}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.microsoft.com/pt-br/p/halo-infinite/9pp5g1f0c2b6');
                                    }}>
                                        <View style={styles3.button0}>
                                            <Text style={styles3.buttonText0}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={styles3.containerimagem0}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://www.riosgames.com.br/image/cache/catalog/Capas-PS5/FPS/deathloop-ps5-cover-793x1000.jpg' }}
                                />
                            </View>
                            <View style={styles3.containertitulojogo0}>
                                <Text style={{ fontSize: 45, fontStyle: 'italic', marginTop: 26 }}> DEATHLOP</Text>
                            </View>
                        </View>
                        <View style={styles3.containerdescricao0}>
                            <Text>
                                Deathloop é um jogo de ação e aventura desenvolvido pela Arkane Studios e publicado pela Bethesda Softworks. O jogo será lançado em 14 de setembro de 2021 para PlayStation 5 e Windows.
                                Deathloop tem o jogador no papel de Colt, um assassino que está preso em um loop do tempo , acordando em uma praia na ilha de Blackreef.
                            </Text>

                            <Text>Data de lançamento inicial: 14 de setembro de 2021.</Text>
                            <Text>Desenvolvedor: Arkane Studios.</Text>
                            <Text>Estúdio: Bethesda Softworks.</Text>
                            <Text>Plataformas: PlayStation 5, Microsoft Windows.</Text>
                            <Text>Gêneros: Tiro em primeira pessoa, ação e aventura.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=mc2hz3LJhTY');
                                    }}>
                                        <View style={styles3.button0}>
                                            <Text style={styles3.buttonText0}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://store.playstation.com/pt-br/product/UP1003-PPSA01302_00-DE1CS1DLOOPPREST/');
                                    }}>
                                        <View style={styles3.button0}>
                                            <Text style={styles3.buttonText0}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={styles3.containerimagem0}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/1/19/Dying_Light_2_capa.jpg' }}
                                />
                            </View>
                            <View style={styles3.containertitulojogo0}>
                                <Text style={{ fontSize: 35, fontStyle: 'italic', marginTop: 26 }}> DYING LIGHT 2</Text>
                            </View>
                        </View>
                        <View style={styles3.containerdescricao0}>
                            <Text>
                                Dying Light 2 é um jogo eletrônico de ação e survival horror com elementos de RPG tematizado com apocalipse zumbi em mundo aberto e jogado numa perspectiva de primeira pessoa. O jogo acontece quinze anos após os eventos de Dying Light, e apresenta um novo protagonista chamado Aiden Caldwell que possui várias habilidades de parkour. Os jogadores podem executar ações como escalar saliências, deslizar, pular de bordas e correr pelas paredes para navegar rapidamente pela cidade.
                            </Text>

                            <Text>Data de lançamento inicial: 7 de dezembro de 2021.</Text>
                            <Text>Desenvolvedor: Techland.</Text>
                            <Text>Estúdio: Techland.</Text>
                            <Text>Plataformas: PlayStation 4, PlayStation 5, Xbox One, Xbox Series X, Microsoft Windows.</Text>
                            <Text>Gêneros: Jogo eletrônico de Tiro, Survival horror, RPG de ação.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=UwJAAy7tPhE');
                                    }}>
                                        <View style={styles3.button0}>
                                            <Text style={styles3.buttonText0}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.microsoft.com/pt-br/p/dying-light-2/9nqzkq65b8b3?activetab=pivot:overviewtab');
                                    }}>
                                        <View style={styles3.button0}>
                                            <Text style={styles3.buttonText0}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={styles3.containerimagem0}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://jogandocasualmente.com.br/wp-content/uploads/2020/12/primeirasimpress%C3%B5es-humankind-pc-capa-1.jpg' }}
                                />
                            </View>
                            <View style={styles3.containertitulojogo0}>
                                <Text style={{ fontSize: 40, fontStyle: 'italic', marginTop: 26 }}> HUMANKIND</Text>
                            </View>
                        </View>
                        <View style={styles3.containerdescricao0}>
                            <Text>
                                Humankind é um jogo 4X comparável à série Civilization . Os jogadores lideram sua civilização em seis grandes eras da civilização humana , começando com a era nômade , direcionando como a civilização deve se expandir, desenvolver cidades, controlar militares e outros tipos de unidades conforme eles interagem com outras civilizações no planeta virtual, gerados aleatoriamente no início de um novo jogo.
                            </Text>

                            <Text>Data de lançamento inicial: 17 de agosto de 2021.</Text>
                            <Text>Desenvolvedor: Amplitude Studios.</Text>
                            <Text>Estúdio: Sega.</Text>
                            <Text>Plataformas: Google Stadia, macOS, Microsoft Windows, Mac OS.</Text>
                            <Text>Gêneros: 4X.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=-QlxCQThAI8');
                                    }}>
                                        <View style={styles3.button0}>
                                            <Text style={styles3.buttonText0}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.epicgames.com/store/pt-BR/p/humankind--digital-deluxe');
                                    }}>
                                        <View style={styles3.button0}>
                                            <Text style={styles3.buttonText0}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={styles3.containerimagem0}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcTzbmRRdI4xemdyvxhU2XqJtDdPUqwyJzhxnhCHS4K91DiWpKgRVm7x5A2T0TKD2n5UE&usqp=CAU' }}
                                />
                            </View>
                            <View style={styles3.containertitulojogo0}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> PSYCHONAUTS 2</Text>
                            </View>
                        </View>
                        <View style={styles3.containerdescricao0}>
                            <Text>
                                Psychonauts 2 é um videogame de plataforma desenvolvido pela Double Fine e publicado pela Xbox Game Studios e será um jogo de plataforma em terceira pessoa semelhante em jogabilidade ao seu antecessor. O jogador controlará Raz, um psiconauta recém-formado com poderosas habilidades psíquicas , enquanto investiga as mentes dos outros.
                            </Text>

                            <Text>Data de lançamento inicial: 25 de agosto de 2021.</Text>
                            <Text>Desenvolvedor: Double Fine.</Text>
                            <Text>Estúdio: Xbox Game Studios.</Text>
                            <Text>Plataformas: PlayStation 4, Xbox Series X, Xbox One, Microsoft Windows, macOS, Linux, Mac OS.</Text>
                            <Text>Gêneros: Plataforma.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=1zIS_rsthWA');
                                    }}>
                                        <View style={styles3.button0}>
                                            <Text style={styles3.buttonText0}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.microsoft.com/pt-br/p/psychonauts-2/9nbr2vxt87sj?activetab=pivot:overviewtab');
                                    }}>
                                        <View style={styles3.button0}>
                                            <Text style={styles3.buttonText0}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={styles3.containerimagem0}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'data:image/jpeg;base64,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' }}
                                />
                            </View>
                            <View style={styles3.containertitulojogo0}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> SKULL & BONES</Text>
                            </View>
                        </View>
                        <View style={styles3.containerdescricao0}>
                            <Text>
                                Skull & Bones é um jogo de ação tática ambientado em um ambiente de mundo aberto e jogado de uma perspectiva de terceira pessoa. Os jogadores assumem o controle de um capitão pirata personalizável, e podem escolher navegar pelo Oceano Índico sozinhos e partir em uma campanha para um jogador ou reunir até cinco outros jogadores para aliar na jogabilidade jogador contra jogador em Águas Disputadas.
                            </Text>

                            <Text>Data de lançamento inicial: Depois de Abril de 2022.</Text>
                            <Text>Desenvolvedor: Ubisoft, Ubisoft Singapore, Ubisoft Chengdu, Blue Byte Software.</Text>
                            <Text>Estúdio: Ubisoft.</Text>
                            <Text>Plataformas: PlayStation 4, Xbox One, Microsoft Windows.</Text>
                            <Text>Gêneros: Jogo eletrônico de tiro, Jogo eletrônico de ação e aventura.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=_9YYYVG0YQI');
                                    }}>
                                        <View style={styles3.button0}>
                                            <Text style={styles3.buttonText0}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://store.steampowered.com/app/370010/Skull__Bones/');
                                    }}>
                                        <View style={styles3.button0}>
                                            <Text style={styles3.buttonText0}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={styles3.containerimagem0}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'data:image/jpeg;base64,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' }} />
                            </View>
                            <View style={styles3.containertitulojogo0}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> KERBAL SPACE PROGRAM 2</Text>
                            </View>
                        </View>
                        <View style={styles3.containerdescricao0}>
                            <Text>
                                Kerbal Space Program 2 será construída sobre os recursos de caixa de areia do Kerbal Space Program , ao mesmo tempo que introduz novos métodos de propulsão (por exemplo, a unidade Orion ), módulos de habitação para construir na superfície, colônias orbitais e planetárias , um modo multiplayer , bem como interestelar viajar
                            </Text>

                            <Text>Data de lançamento inicial: 2022.</Text>
                            <Text>Desenvolvedor: Intercept Games.</Text>
                            <Text>Estúdio:Private Division.</Text>
                            <Text>Plataformas: PlayStation 4, Microsoft Windows, PlayStation 5, Xbox Series X, Xbox One.</Text>
                            <Text>Gêneros: Simulador de Voô.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=P_nj6wW6Gsc');
                                    }}>
                                        <View style={styles3.button0}>
                                            <Text style={styles3.buttonText0}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://store.steampowered.com/app/954850/Kerbal_Space_Program_2/');
                                    }}>
                                        <View style={styles3.button0}>
                                            <Text style={styles3.buttonText0}>ONDE COMPRAR</Text>
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
const styles3 = StyleSheet.create({
    containerimagem0: {
        backgroundColor: '#000000',
        width: 110,
        height: 140,
    },
    containertitulojogo0: {
        backgroundColor: '#f2f2fc',
        width: 300,
        height: 140
    },
    containerdescricao0: {
        backgroundColor: '#f2f2fc',
        width: 360,
        height: 390,
    },
    button0: {
        marginBottom: 20,
        width: 170,
        backgroundColor: '#000000',
        borderRadius: 15,
    },
    buttonText0: {
        textAlign: 'center',
        padding: 15,
        color: 'white'
    },
});
export default Lancamentos;

