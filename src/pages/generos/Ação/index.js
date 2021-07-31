import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';

let logoLocal = require('C:/Users/Alysson/GameShearch/src/images/fundo3x.jpg');


function Ação() {
    return (
        <ScrollView>
            <View style={{ margin: 2 }}>
                <ImageBackground source={logoLocal} style={{ width: '100%', height: '100%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={styles3.containerimagem2}>
                            <Image
                                style={{ width: 100, height: 130, }}
                                source={{ uri: 'data:image/jpeg;base64,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' }}
                            />
                        </View>
                        <View style={styles3.containertitulojogo2}>
                            <Text style={{ fontSize: 50, fontStyle: 'italic', marginTop: 26 }}> HITMAN 3</Text>
                        </View>
                    </View>
                    <View style={styles3.containerdescricao2}>
                        <Text>
                            É um jogo eletrônico de furtivo desenvolvido e publicado pela IO Interactive. É o oitavo título principal da série Hitman, o terceiro e último da trilogia World of Assassination, e foi lançado em 20 de janeiro de 2021 para PlayStation 4, PlayStation 5, Stadia, Xbox One, Xbox Series X/S, Microsoft Windows e Nintendo Switch. e conclui a história da trilogia, com o Agente 47 e os seus aliados a perseguir os lideres da Providence, uma organização secreta que controla os negócios mundiais. Foi bem recebido pelos críticos, com muitos a afirmarem que é o melhor da trilogia e um dos melhores jogos da série.
                        </Text>
                        <Text>Data de lançamento inicial: 20 de janeiro de 2021</Text>
                        <Text>Desenvolvedor: IO Interactive</Text>
                        <Text>Estúdio: IO Interactive</Text>
                        <Text>Plataformas: PlayStation 4, PlayStation 5, Xbox One, Xbox Series X, Nintendo Switch, Microsoft Windows, Google Stadia</Text>
                        <Text>Gêneros:  Ação e furtividade</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.youtube.com/watch?v=avAXhnbs69w');
                                }}>
                                    <View style={styles3.button3}>
                                        <Text style={styles3.buttonText3}>TRAILER/GAMEPLAY</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Linking.openURL('https://www.epicgames.com/store/pt-BR/p/hitman-3');
                                }}>
                                    <View style={styles3.button3}>
                                        <Text style={styles3.buttonText3}>ONDE COMPRAR</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={styles3.containerimagem2}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Devil_May_Cry_5.jpg/270px-Devil_May_Cry_5.jpg' }}
                                />
                            </View>
                            <View style={styles3.containertitulojogo2}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}> DEVIL MAY CRY 5</Text>
                            </View>
                        </View>
                        <View style={styles3.containerdescricao2}>
                            <Text>
                                Devil May Cry 5 é um jogo eletrônico de ação-aventura hack and slash desenvolvido e publicado pela Capcom. É o quinto título principal da série Devil May Cry e foi lançado em 8 de março de 2019 para Microsoft Windows, PlayStation 4 e Xbox One.[3] O jogo acontece cinco anos depois de Devil May Cry 4 e segue um trio de personagens com poderes demoníacos: Dante, Nero e um novo protagonista chamado V. Eles tentam impedir que o Rei Demoníaco Urizen, destrua o mundo humano. Ao longo do jogo, o jogador pode usar qualquer um desses três personagens em missões diferentes, com cada personagem tendo sua própria maneira de lutar e de evolução de força. Quando isso acontece, o mistério por trás de V é revelado ao lado de sua conexão com Urizen.
                            </Text>

                            <Text>Data de lançamento inicial: 8 de março de 2019.</Text>
                            <Text>Desenvolvedor: Capcom.</Text>
                            <Text>Estúdio: Capcom Studios.</Text>
                            <Text>Plataformas: Microsoft Windows, PlayStation 4, Xbox One.</Text>
                            <Text>Gêneros: 	Ação-aventura, hack and slash.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=r6guyBVWSOI');
                                    }}>
                                        <View style={styles3.button3}>
                                            <Text style={styles3.buttonText3}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.microsoft.com/pt-br/p/devil-may-cry-5/bnlg5j5kdvj3#activetab=pivot:overviewtab');
                                    }}>
                                        <View style={styles3.button3}>
                                            <Text style={styles3.buttonText3}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={styles3.containerimagem2}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/8/82/God_of_War_2018_capa.png/270px-God_of_War_2018_capa.png' }}
                                />
                            </View>
                            <View style={styles3.containertitulojogo2}>
                                <Text style={{ fontSize: 40, fontStyle: 'italic', marginTop: 26 }}>GOD OF WAR</Text>
                            </View>
                        </View>
                        <View style={styles3.containerdescricao2}>
                            <Text>
                                God of War é o oitavo título da série God of War e também o oitavo em ordem cronológica, sendo sequência dos eventos ocorridos em God of War III. Ao contrário dos jogos anteriores, que eram vagamente baseados na mitologia grega, este título é vagamente baseado na mitologia nórdica, com a maior parte do tempo situado na antiga Noruega no reino de Midgard.
                            </Text>

                            <Text>Data de lançamento inicial:  20 de abril de 2018.</Text>
                            <Text>Desenvolvedor: SIE Santa Monica Studio.</Text>
                            <Text>Estúdio: Sony Interactive Entertainment, Sony Interactive Entertainment Europe.</Text>
                            <Text>Plataformas: PlayStation 4.</Text>
                            <Text>Gêneros: ação e aventura.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=K0u_kAWLJOA');
                                    }}>
                                        <View style={styles3.button3}>
                                            <Text style={styles3.buttonText3}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://store.playstation.com/pt-br/product/UP9000-CUSA07408_00-00000000GODOFWAR/');
                                    }}>
                                        <View style={styles3.button3}>
                                            <Text style={styles3.buttonText3}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={styles3.containerimagem2}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/1/13/Uncharted_4_capa.png/270px-Uncharted_4_capa.png' }}
                                />
                            </View>
                            <View style={styles3.containertitulojogo2}>
                                <Text style={{ fontSize: 35, fontStyle: 'italic', marginTop: 26 }}> UNCHARTED 4</Text>
                            </View>
                        </View>
                        <View style={styles3.containerdescricao2}>
                            <Text>
                                Uncharted 4: A Thief's End É o quarto título principal da série Uncharted. Na história, os jogadores controlam Nathan Drake, um ex-caçador de tesouros que é persuadido a sair da aposentadoria pelo aparecimento de seu irmão mais velho Samuel. Junto com seu antigo parceiro Victor Sullivan, eles procuram por pistas para a localização do tesouro perdido do pirata Henry Avery.
                            </Text>

                            <Text>Data de lançamento inicial: 10 de maio de 2016.</Text>
                            <Text>Desenvolvedor: Naughty Dog.</Text>
                            <Text>Estúdio: Techland.</Text>
                            <Text>Plataformas: PlayStation 4, Microsoft Windows.</Text>
                            <Text>Gêneros: ação e aventura, furtividade, Tiro em terceira pessoa.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=hh5HV4iic1Y');
                                    }}>
                                        <View style={styles3.button3}>
                                            <Text style={styles3.buttonText3}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.amazon.com.br/Uncharted-Thief%60s-End-Hits-PlayStation/dp/B07L5BRFG3');
                                    }}>
                                        <View style={styles3.button3}>
                                            <Text style={styles3.buttonText3}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={styles3.containerimagem2}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/e/e7/Red_Dead_Redemption_2.png/270px-Red_Dead_Redemption_2.png' }}
                                />
                            </View>
                            <View style={styles3.containertitulojogo2}>
                                <Text style={{ fontSize: 36, fontStyle: 'italic', marginTop: 26 }}> RED DEAD REDEMPTION 2</Text>
                            </View>
                        </View>
                        <View style={styles3.containerdescricao2}>
                            <Text>
                                Red Dead Redemption 2 é um jogo eletrônico de ação-aventura desenvolvido e publicado pela Rockstar Games. É o terceiro título da série Red Dead e uma prequela de Red Dead Redemption, tendo sido lançado em outubro de 2018 para PlayStation 4 e Xbox One e em novembro de 2019 para Microsoft Windows e Google Stadia. A história se passa em 1899 em uma representação ficcional do oeste, meio-oeste e sul dos Estados Unidos e acompanha o fora da lei Arthur Morgan, que precisa lidar com o declínio do Velho Oeste e sobreviver à perseguição de forças governamentais, gangues rivais e outros adversários.
                            </Text>

                            <Text>Data de lançamento inicial: 26 de outubro de 2018.</Text>
                            <Text>Desenvolvedor: Rockstar Studios.</Text>
                            <Text>Estúdio: Rockstar Studios.</Text>
                            <Text>Plataformas:  PlayStation 4, Xbox One, Google Stadia, Microsoft Windows.</Text>
                            <Text>Gêneros:Ação, Aventura.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=eaW0tYpxyp0');
                                    }}>
                                        <View style={styles3.button3}>
                                            <Text style={styles3.buttonText3}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.epicgames.com/store/pt-BR/p/red-dead-redemption-2');
                                    }}>
                                        <View style={styles3.button3}>
                                            <Text style={styles3.buttonText3}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={styles3.containerimagem2}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/7/73/Control_capa.png/270px-Control_capa.png' }}
                                />
                            </View>
                            <View style={styles3.containertitulojogo2}>
                                <Text style={{ fontSize: 40, fontStyle: 'italic', marginTop: 26 }}> CONTROL </Text>
                            </View>
                        </View>
                        <View style={styles3.containerdescricao2}>
                            <Text>
                                Control é jogado a partir de uma perspectiva em terceira pessoa em que o jogador controla Jesse Faden. A protagonista enfrenta diversos tipos de inimigos usando a chamada Arma de Serviço, uma arma de fogo sobrenatural que pode assumir várias formas. A pistola pode ser modificada a fim de aprimorar sua eficiência.[2] Além disso, o jogador também tem acesso a poderes sobrenaturais e de telecinese.
                            </Text>

                            <Text>Data de lançamento inicial: 27 de agosto de 2019.</Text>
                            <Text>Desenvolvedor: Remedy Entertainment.</Text>
                            <Text>Estúdio: 505 Games.</Text>
                            <Text>Plataformas: Microsoft Windows, PlayStation 4, Xbox One,PlayStation 5,Xbox Series X.</Text>
                            <Text>Gêneros: ação e aventura, Tiro em terceira pessoa.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=pFGgEoIVi7A');
                                    }}>
                                        <View style={styles3.button3}>
                                            <Text style={styles3.buttonText3}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.epicgames.com/store/pt-BR/p/control');
                                    }}>
                                        <View style={styles3.button3}>
                                            <Text style={styles3.buttonText3}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={styles3.containerimagem2}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/7/78/Spider-Man_jogo_2018_capa.png/270px-Spider-Man_jogo_2018_capa.png' }}
                                />
                            </View>
                            <View style={styles3.containertitulojogo2}>
                                <Text style={{ fontSize: 40, fontStyle: 'italic', marginTop: 26 }}>SPIDER MAN</Text>
                            </View>
                        </View>
                        <View style={styles3.containerdescricao2}>
                            <Text>
                                Spider-Man é um jogo eletrônico de ação-aventura desenvolvido pela Insomniac Games e publicado pela Sony Interactive Entertainment. É baseado nos personagens, mitologia e adaptações em outras mídias do super-herói de histórias em quadrinhos Homem-Aranha da Marvel Comics, tendo sido lançado exclusivamente para PlayStation 4 em 7 de setembro de 2018. Na história, o criminoso super-humano Senhor Negativo organiza um plano para se vingar do prefeito Norman Osborn e assumir o controle do submundo criminal de Nova Iorque. O Homem-Aranha precisa proteger a cidade assim que o Senhor Negativo ameaça lançar um vírus mortal por toda a área, ao mesmo tempo que é forçado a lidar com seus problemas pessoais como Peter Parker.
                            </Text>

                            <Text>Data de lançamento inicial: 7 de setembro de 2018.</Text>
                            <Text>Desenvolvedor:   James Cooper.</Text>
                            <Text>Estúdio: Insomniac Games.</Text>
                            <Text>Plataformas: PlayStation 4, PlayStation 5.</Text>
                            <Text>Gêneros:ação e aventura.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=3R2uvJqWeVg');
                                    }}>
                                        <View style={styles3.button3}>
                                            <Text style={styles3.buttonText3}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://store.playstation.com/pt-br/product/UP9000-CUSA02299_00-MARVELSSMGOTY000/');
                                    }}>
                                        <View style={styles3.button3}>
                                            <Text style={styles3.buttonText3}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={styles3.containerimagem2}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/4c/Metal_Gear_Solid_-_North-american_cover.jpg/280px-Metal_Gear_Solid_-_North-american_cover.jpg' }} />
                            </View>
                            <View style={styles3.containertitulojogo2}>
                                <Text style={{ fontSize: 28, fontStyle: 'italic', marginTop: 26 }}>METAL GEAR SOLID</Text>
                            </View>
                        </View>
                        <View style={styles3.containerdescricao2}>
                            <Text>
                                A história de Metal Gear Solid se passa em 2005, a sudoeste do Alasca no mar de Bering. Ela se foca em Solid Snake, um soldado ex-aposentado que se infiltra numa instalação de eliminação de armas nucleares para neutralizar uma ameaça terrorista da FOXHOUND, uma unidade de forças especiais. Snake deve resgatar dois reféns: o chefe da DARPA e o presidente de uma fabricante de armas, além de enfrentar os terroristas e impedí-los de lançar um ataque nuclear.
                            </Text>

                            <Text>Data de lançamento inicial: 3 de setembro de 1998.</Text>
                            <Text>Desenvolvedor: Hideo Kojima, Yoji Shinkawa.</Text>
                            <Text>Estúdio:Konami, Konami Computer Entertainment Japan.</Text>
                            <Text>Plataformas: PlayStation, PlayStation 3, Microsoft Windows.</Text>
                            <Text>Gêneros:Ação-aventura, Stealth.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=hDqF1DxorTI');
                                    }}>
                                        <View style={styles3.button3}>
                                            <Text style={styles3.buttonText3}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.wrgames.com.br/metal-gear-solid-1-mgs1classic-classico-ps1-psx-psone-ps3-psn-midia-digital?utm_source=Site&utm_medium=GoogleMerchant&utm_campaign=GoogleMerchant&gclid=EAIaIQobChMIxvjA2LCB8gIVDgeRCh1EvgDYEAQYASABEgIct_D_BwE');
                                    }}>
                                        <View style={styles3.button3}>
                                            <Text style={styles3.buttonText3}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>


                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={styles3.containerimagem2}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/e/eb/Death-Stranding-poster.jpg/270px-Death-Stranding-poster.jpg' }} />
                            </View>
                            <View style={styles3.containertitulojogo2}>
                                <Text style={{ fontSize: 28, fontStyle: 'italic', marginTop: 26 }}>DEATH STRANDING</Text>
                            </View>
                        </View>
                        <View style={styles3.containerdescricao2}>
                            <Text>
                                Cercado pela morte, Sam Bridges deverá enfrentar um mundo completamente transformado pelo Death Stranding (um evento apocalíptico). Carregando as últimas esperanças de um futuro, Sam embarca em uma jornada para reconstruir o mundo aniquilado, um passo de cada vez.
                            </Text>

                            <Text>Data de lançamento inicial:8 de novembro de 2019.</Text>
                            <Text>Desenvolvedor: Hideo Kojima.</Text>
                            <Text>Estúdio:Kojima Productions.</Text>
                            <Text>Plataformas:  PlayStation 4, PlayStation 5, Microsoft Windows.</Text>
                            <Text>Gêneros: Ação.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=tCI396HyhbQ');
                                    }}>
                                        <View style={styles3.button3}>
                                            <Text style={styles3.buttonText3}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://store.steampowered.com/app/1190460/DEATH_STRANDING/');
                                    }}>
                                        <View style={styles3.button3}>
                                            <Text style={styles3.buttonText3}>ONDE COMPRAR</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>


                    <View>
                        <Text></Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={styles3.containerimagem2}>
                                <Image
                                    style={{ width: 100, height: 130, }}
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/6/66/ShadowOfTheColossusGH.jpg/260px-ShadowOfTheColossusGH.jpg' }} />
                            </View>
                            <View style={styles3.containertitulojogo2}>
                                <Text style={{ fontSize: 30, fontStyle: 'italic', marginTop: 26 }}>SHADOW OF THE COLOSSUS</Text>
                            </View>
                        </View>
                        <View style={styles3.containerdescricao2}>
                            <Text>
                                O enredo do jogo se concentra em um jovem chamado Wander, que deve viajar por uma terra proibida com o objetivo de derrotar dezesseis criaturas, conhecidas simplesmente como "Colossi",para restaurar a vida de uma garota chamada Mono. O jogo é incomum dentro do gênero de ação-aventura já que não existem cidades e calabouços para serem explorados. Não existe também nenhum personagem com quem interagir e nenhum inimigo além dos Colossos para derrotar. Shadow of the Colossus foi descrito como um jogo de quebra-cabeças, já que a fraqueza de cada Colossus deve ser identificada e explorada para que ele seja derrotado.
                            </Text>

                            <Text>Data de lançamento inicial: 18 de outubro de 2005.</Text>
                            <Text>Desenvolvedor: Fumito Ueda, Kō Ōtani.</Text>
                            <Text>Estúdio:Team Ico, SIE Japan Studio, Sony Interactive Entertainment.</Text>
                            <Text>Plataformas:  PlayStation 4, PlayStation 2, PlayStation 3.</Text>
                            <Text>Gêneros:Ação-aventura, quebra-cabeça.</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 3 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://www.youtube.com/watch?v=8qNxyP6u2Kg');
                                    }}>
                                        <View style={styles3.button3}>
                                            <Text style={styles3.buttonText3}>TRAILER/GAMEPLAY</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        Linking.openURL('https://store.playstation.com/pt-br/product/UP9000-CUSA08034_00-SOTC0000000000US/');
                                    }}>
                                        <View style={styles3.button3}>
                                            <Text style={styles3.buttonText3}>ONDE COMPRAR</Text>
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
export default Ação;