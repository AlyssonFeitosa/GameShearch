import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';

let logoLocal = require('C:/Users/Alysson/GameShearch/src/images/fundo3x.jpg');
let logoURI = "https://i.pinimg.com/564x/00/21/7f/00217fa56dda538f18086408fafd6ac5.jpg";



function Rpg() {
    return (
        <ScrollView>
        <View style={{ margin: 2 }}>
            <ImageBackground source={logoLocal} style={{ width: '100%', height: '100%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={stylesc.containerimagem5}>
                        <Image
                            style={{ width: 100, height: 130, }}
                            source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/a7/Chrono_Trigger.jpg/285px-Chrono_Trigger.jpg' }}
                        />
                    </View>
                    <View style={stylesc.containertitulojogo5}>
                        <Text style={{ fontSize: 50, fontStyle: 'italic', marginTop: 26 }}> CHRONO TRIGGER</Text>
                    </View>
                </View>
                <View style={stylesc.containerdescricao5}>
                    <Text>
                    Chrono Trigger possui uma jogabilidade de RPG padrão com diversas inovações. O jogador controla o protagonista e seus companheiros (no máximo três personagens) pelo mundo fictício do jogo, composto por diversas florestas, cidades e cavernas. A navegação ocorre através de um mapa aéreo de visão do mundo.
                    </Text>
                    <Text>Data de lançamento inicial: 11 de março de 1995.</Text>
                    <Text>Desenvolvedor: Square Enix, Square Co., Tose.</Text>
                    <Text>Estúdio: Square Enix, Square Co., Tose.</Text>
                    <Text>Plataformas: Super Nintendo e Conversões para	PlayStation, Nintendo DS, i-mode, iOS, Android, Microsoft Windows.</Text>
                    <Text>Gêneros:  Rpg.</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                        <View>
                            <TouchableOpacity onPress={() => {
                                Linking.openURL('https://www.youtube.com/watch?v=boeb9cFbfR8');
                            }}>
                                <View style={stylesc.button5}>
                                    <Text style={stylesc.buttonText5}>TRAILER/GAMEPLAY</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => {
                                Linking.openURL('https://store.steampowered.com/app/613830/CHRONO_TRIGGER/');
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
                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/7/7c/Dark_Souls_1_capa.png/270px-Dark_Souls_1_capa.png' }}
                            />
                        </View>
                        <View style={stylesc.containertitulojogo5}>
                            <Text style={{ fontSize: 40, fontStyle: 'italic', marginTop: 26 }}> DARK SOULS</Text>
                        </View>
                    </View>
                    <View style={stylesc.containerdescricao5}>
                        <Text>
                        O sistema de jogabilidade apresenta-se em terceira pessoa e com foco em combates estratégicos e dinâmicos, inseridos em uma íngreme curva de dificuldade, característica mais marcante da série. O sistema de progressão baseia-se na tradicional progressão de atributos, que variam desde força à inteligência, estamina e fé, dentre outros. 
                        </Text>

                        <Text>Data de lançamento inicial: 22 de setembro de 2011.</Text>
                        <Text>Desenvolvedor: Hidetaka Miyazaki.</Text>
                        <Text>Estúdio: FromSoftware.</Text>
                        <Text>Plataformas: PlayStation 4, Xbox One, PlayStation 3, Xbox 360, Nintendo Switch, Microsoft Windows.</Text>
                        <Text>Gêneros: RPG  de ação, ação e aventura.</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.youtube.com/watch?v=KfjG9ZLGBHE');
                                }}>
                                    <View style={stylesc.button5}>
                                        <Text style={stylesc.buttonText5}>TRAILER/GAMEPLAY</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://store.steampowered.com/app/570940/DARK_SOULS_REMASTERED/');
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
                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/0/09/Final_Fantasy_VII_Remake_capa.png' }}
                            />
                        </View>
                        <View style={stylesc.containertitulojogo5}>
                            <Text style={{ fontSize: 28, fontStyle: 'italic', marginTop: 26 }}> FINAL FANTAZY VII</Text>
                        </View>
                    </View>
                    <View style={stylesc.containerdescricao5}>
                        <Text>
                        Um dos mais épicos rpgs que já foi lançado, com sistema padrão de rpg com turnos, em  um mundo incrivel, com batalhas emocionantes e enredo  maravilhoso.
                        </Text>

                        <Text>Data de lançamento inicial: 31 de janeiro de 1997.</Text>
                        <Text>Desenvolvedor: Square Enix, Square Co..</Text>
                        <Text>Estúdio: Square Enix, Square Co..</Text>
                        <Text>Plataformas: PlayStation, PlayStation 4, Android, PlayStation Portable, Xbox One, Nintendo Switch, iOS, Microsoft Windows.</Text>
                        <Text>Gêneros: RPG .</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.youtube.com/watch?v=_6pIzMMGE1k');
                                }}>
                                    <View style={stylesc.button5}>
                                        <Text style={stylesc.buttonText5}>TRAILER/GAMEPLAY</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://store.steampowered.com/app/39140/FINAL_FANTASY_VII/');
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
                            <Text style={{ fontSize: 32, fontStyle: 'italic', marginTop: 18 }}> THE LEGEND OF ZELDA: A LINK TO THE PAST</Text>
                        </View>
                    </View>
                    <View style={stylesc.containerdescricao5}>
                        <Text>
                        A trama de A Link to the Past concentra-se no herói Link em uma jornada para salvar a terra de Hyrule, impedir a volta de Ganon e libertar as sete donzelas descendentes dos antigos sábios. A história é uma prequência de jogos anteriores da série, envolvendo os ancestrais de Link e da princesa Zelda. 
                        </Text>

                        <Text>Data de lançamento inicial: 21 de novembro de 1991.</Text>
                        <Text>Desenvolvedor: Nintendo.</Text>
                        <Text>Estúdio: Nintendo.</Text>
                        <Text>Plataformas: Super Nintendo Entertainment System, Game Boy Advance, Nintendo Switch, Wii, New Nintendo 3DS, Wii U.</Text>
                        <Text>Gêneros: RPG  de ação,aventura, Quebra-cabeça.</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.youtube.com/watch?v=Z6hjG6MCcZ8');
                                }}>
                                    <View style={stylesc.button5}>
                                        <Text style={stylesc.buttonText5}>TRAILER/GAMEPLAY</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://games.mercadolivre.com.br/games/the-legend-of-zelda-link-to-the-past');
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
                                source={{ uri: 'https://photos.enjoei.com.br/breath-of-fire-3-ps1-legendado-pt_br/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8xNDEwMDM0Ny9hMWVkMjMwMmZhNWY3NjQ3ODE0NGQ5ZTY4NzRjZjlkNC5qcGc' }}
                            />
                        </View>
                        <View style={stylesc.containertitulojogo5}>
                            <Text style={{ fontSize: 28, fontStyle: 'italic', marginTop: 26 }}> BREATH OF FIRE III</Text>
                        </View>
                    </View>
                    <View style={stylesc.containerdescricao5}>
                        <Text>
                        O jogo se passa em um mundo imaginário, na companhia de Ryu, um rapaz com a incrível habilidade de transformar-se em um dragão, que precisa descobrir suas verdadeiras origens e encontrar seus amigos desaparecidos, Rei e Teepo. O cenário é apresentado em duas partes: uma com Ryu criança e outra com ele adolescente. 
                        </Text>

                        <Text>Data de lançamento inicial: 11 de setembro de 1997.</Text>
                        <Text>Desenvolvedor: Tatsuya Yoshikawa.</Text>
                        <Text>Estúdio: Capcom.</Text>
                        <Text>Plataformas: PlayStation Portable, PlayStation, PSP E1000.</Text>
                        <Text>Gêneros: RPG.</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.youtube.com/watch?v=d0UusO4C1IA');
                                }}>
                                    <View style={stylesc.button5}>
                                        <Text style={stylesc.buttonText5}>TRAILER/GAMEPLAY</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://produto.mercadolivre.com.br/MLB-706521696-breath-of-fire-3-playstation-1-psx-frete-gratis-_JM?matt_tool=11251809&matt_word=&matt_source=google&matt_campaign_id=12011659387&matt_ad_group_id=124560247388&matt_match_type=&matt_network=g&matt_device=c&matt_creative=490068189590&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=367635718&matt_product_id=MLB706521696&matt_product_partition_id=488586102952&matt_target_id=pla-488586102952&gclid=CjwKCAjwo4mIBhBsEiwAKgzXOEN_QNmAYi-3JdvWlkD7z0LDJjJxUS3GKm-_48dNrQyc3v0xsj2hmxoCN4QQAvD_BwE');
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
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9X2_XSMPL8GYwXZpkn7Q8tC973HV97rqZnw&usqp=CAU' }}
                            />
                        </View>
                        <View style={stylesc.containertitulojogo5}>
                            <Text style={{ fontSize: 28, fontStyle: 'italic', marginTop: 26 }}> LAGEND OF MANA</Text>
                        </View>
                    </View>
                    <View style={stylesc.containerdescricao5}>
                        <Text>
                         O jogo possibilita a escolha de um personagem masculino ou feminino e possui vários personagens espalhados pelo mundo do jogo que entrarão para seu grupo para que ajude nas missões dele e vice versa, ademais, um segundo jogador pode se juntar ao jogo ao conectar um segundo controle e controlar estes companheiros.
                        </Text>

                        <Text>Data de lançamento inicial: 15 de julho de 1999.</Text>
                        <Text>Desenvolvedor:Yoko Shimomura, Akitoshi Kawazu, Koichi Ishii, Akihiko Matsui.</Text>
                        <Text>Estúdio: Square Enix, Square Co., M2.</Text>
                        <Text>Plataformas: PlayStation 4, PlayStation, Nintendo Switch.</Text>
                        <Text>Gêneros: RPG.</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.youtube.com/watch?v=e0fXVsFhEug');
                                }}>
                                    <View style={stylesc.button5}>
                                        <Text style={stylesc.buttonText5}>TRAILER/GAMEPLAY</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://store.playstation.com/pt-br/product/UP0082-CUSA24495_00-LOMPS4NA00000001/');
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
                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/58/FFVIII.jpg/300px-FFVIII.jpg' }}
                            />
                        </View>
                        <View style={stylesc.containertitulojogo5}>
                            <Text style={{ fontSize: 27, fontStyle: 'italic', marginTop: 26 }}> FINAL FANTAZY VIII</Text>
                        </View>
                    </View>
                    <View style={stylesc.containerdescricao5}>
                        <Text>
                        À semelhança dos seus antecessores, em Final Fantasy VIII toma-se o controle de um grupo de um personagem, o qual se poderá deslocar livremente pelos cenários, como cidades e o próprio mundo. Em determinadas áreas, o jogador se depara-rá aleatoriamente com uma situação de batalha, onde terá de defrontar um ou mais inimigos. - O que ao decorrer do jogo pode ser impedido através do uso da Habilidade "EncNone" do GF DIablos.
                        </Text>

                        <Text>Data de lançamento inicial: 11 de fevereiro de 1999.</Text>
                        <Text>Desenvolvedor:SquareSoft.</Text>
                        <Text>Estúdio: 	SquareSoft.</Text>
                        <Text>Plataformas: PlayStation, PlayStation 4, Android, iOS, Xbox One, PlayStation 3, Nintendo Switch, Microsoft Windows.</Text>
                        <Text>Gêneros: RPG.</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.youtube.com/watch?v=MtMGzG_91fY');
                                }}>
                                    <View style={stylesc.button5}>
                                        <Text style={stylesc.buttonText5}>TRAILER/GAMEPLAY</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.microsoft.com/pt-br/p/final-fantasy-viii-remastered-windows-edition/9p35dpln1jcn?activetab=pivot:overviewtab');
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
                                source={{ uri: 'https://http2.mlstatic.com/D_NQ_NP_688101-MLB20269077326_032015-O.jpg' }}
                            />
                        </View>
                        <View style={stylesc.containertitulojogo5}>
                            <Text style={{ fontSize: 28, fontStyle: 'italic', marginTop: 26 }}> VALKIRIE PROFILE</Text>
                        </View>
                    </View>
                    <View style={stylesc.containerdescricao5}>
                        <Text>
                        A série Valkyrie Profile foi distinguida por sua jogabilidade inventiva. Esteticamente, a série é conhecida por suas cores suaves e ambiente melancólico. Os jogadores geralmente assumem o papel de uma valquíria , uma de uma série de figuras femininas que escolhem guerreiras que podem morrer em batalha e conduzi-los para a vida após a morte, embora às vezes eles representem mortais chamados pelos seres divinos.
                        </Text>

                        <Text>Data de lançamento inicial: 22 de setembro de 2011.</Text>
                        <Text>Desenvolvedor: tri-Ace, Square Enix, tri-Crescendo, Tose.</Text>
                        <Text>Estúdio: Square Enix, WonderPlanet.</Text>
                        <Text>Plataformas: 	PlayStation, PlayStation Portable, PlayStation 2, Nintendo DS, PlayStation 3, Android, iOS.</Text>
                        <Text>Gêneros: RPG.</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.youtube.com/watch?v=Dnve2Mh6P6U');
                                }}>
                                    <View style={stylesc.button5}>
                                        <Text style={stylesc.buttonText5}>TRAILER/GAMEPLAY</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.google.com/search?q=Valkyrie+Profile+COMPRAR&ei=G0EDYcH1IPXW1sQPzdOX4A8&oq=Valkyrie+Profile+COMPRAR&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAEAgQDRAeOgcIABBHELADOgcILhBDEJMCOgQILhBDOgUIABCABDoECAAQQzoICC4QgAQQkwI6BggAEBYQHkoECEEYAFCTfVi5hwFgk4gBaAFwAngAgAGfAYgBgAmSAQMwLjiYAQCgAQHIAQjAAQE&sclient=gws-wiz&ved=0ahUKEwiB79nBvonyAhV1q5UCHc3pBfwQ4dUDCA8&uact=5');
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
                                source={{ uri: 'https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/6e/ca/84/6eca84fc-aead-9123-5908-ee6b65cce2eb/source/200x200bb.jpg' }}
                            />
                        </View>
                        <View style={stylesc.containertitulojogo5}>
                            <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> FINAL FANTAZY TATICS</Text>
                        </View>
                    </View>
                    <View style={stylesc.containerdescricao5}>
                        <Text>
                        O jogo combina elementos temáticos da série Final Fantasy com um motor de jogo e sistema de batalha diferente do que havia sido feito anteriormente na franquia. Tactics usa um campo de jogo tridimensional, isométrico e rotacionável.
                        </Text>

                        <Text>Data de lançamento inicial: 20 de junho de 1997.</Text>
                        <Text>Desenvolvedor: Square Co..</Text>
                        <Text>Estúdio: Square Co..</Text>
                        <Text>Plataformas: PlayStation, Android.</Text>
                        <Text>Gêneros: RPG, Estratégia.</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.youtube.com/watch?v=DCLzBn79ALo');
                                }}>
                                    <View style={stylesc.button5}>
                                        <Text style={stylesc.buttonText5}>TRAILER/GAMEPLAY</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://produto.mercadolivre.com.br/MLB-712579407-final-fantasy-tactics-playstation-1-psx--_JM?matt_tool=11251809&matt_word=&matt_source=google&matt_campaign_id=12011659387&matt_ad_group_id=124560247388&matt_match_type=&matt_network=g&matt_device=c&matt_creative=490068189590&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=367635718&matt_product_id=MLB712579407&matt_product_partition_id=488586102952&matt_target_id=pla-488586102952&gclid=CjwKCAjwo4mIBhBsEiwAKgzXOJPFIR_q-oz_NiVn1no0bzq4MuS_QQ_TVt6Z98BLq5DUBzCMX5p4PRoCPDQQAvD_BwE');
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
                                source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/e/ed/Chronocross_cover.jpg/225px-Chronocross_cover.jpg' }}
                            />
                        </View>
                        <View style={stylesc.containertitulojogo5}>
                            <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> CHRONO CROSS</Text>
                        </View>
                    </View>
                    <View style={stylesc.containerdescricao5}>
                        <Text>
                        Foi lançado em 1999 para o Playstation. Assim como seu antecessor Chrono Trigger, A história de Chrono Cross é focada no adolescente chamado Serge e na temática de mundos paralelos. De cara com uma realidade alternativa na qual morreu ainda criança, Serge parte em busca da verdade em torno da divergência entre os dois mundos. 
                        </Text>

                        <Text>Data de lançamento inicial: 18 de novembro de 1999.</Text>
                        <Text>Desenvolvedor: Square Co..</Text>
                        <Text>Estúdio: Square Co., Square Electronic Arts.</Text>
                        <Text>Plataformas: PlayStation.</Text>
                        <Text>Gêneros: RPG.</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.youtube.com/watch?v=BCmQWwuyUv4');
                                }}>
                                    <View style={stylesc.button5}>
                                        <Text style={stylesc.buttonText5}>TRAILER/GAMEPLAY</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.submarino.com.br/produto/1251668806?opn=XMLGOOGLE&sellerid=35237760000100&epar=bp_pl_00_go_g35169&WT.srch=1&acc=d47a04c6f99456bc289220d5d0ff208d&i=5dc258b649f937f6250b1298&o=5db9161e6c28a3cb502b9a27&epar=bp_pl_00_go_g35169&utm_medium=buscappc&utm_source=google&utm_campaign=marca:suba%3bmidia:buscappc%3bformato:pla%3bsubformato:00%3bidcampanha:g35169&gclid=CjwKCAjwo4mIBhBsEiwAKgzXOFH3UPHT9AOcFwfPM77uZuHFc_iq_3kj5OYe0j-9m7ruiJiQFtzsmRoCgdgQAvD_BwE');
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
export default Rpg;