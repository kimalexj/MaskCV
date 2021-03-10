import React, { useState } from 'react';
import { Chart } from 'react-charts'
import { Nav, NavItem, NavLink, TabContent, TabPane, Container, Row, Col, } from 'reactstrap';
import Gallery from 'react-grid-gallery';

import './Results.css';

// Raw picture images
import img_one from '../img/raw/1.jpg';
import img_two from '../img/raw/2.jpg';
import img_three from '../img/raw/3.jpg';
import img_four from '../img/raw/4.jpg';
import img_five from '../img/raw/5.jpg';
import img_six from '../img/raw/6.png';
import img_seven from '../img/raw/7.jpg';
import img_eight from '../img/raw/8.jpeg';
import img_nine from '../img/raw/9.jpg';

// Classified picture images
import img_classified_one from '../img/classified/1.png';
import img_classified_two from '../img/classified/2.png';
import img_classified_three from '../img/classified/3.png';
import img_classified_four from '../img/classified/4.png';
import img_classified_five from '../img/classified/5.png';
import img_classified_six from '../img/classified/6.png';
import img_classified_seven from '../img/classified/7.png';
import img_classified_eight from '../img/classified/8.png';
import img_classified_nine from '../img/classified/9.png';

const images = [
    {
        src: img_one,
        thumbnail: img_one,
        thumbnailWidth: 400,
        thumbnailHeight: 289
    },
    {
        src: img_two,
        thumbnail: img_two,
        thumbnailWidth: 402,
        thumbnailHeight: 294
    },
    {
        src: img_three,
        thumbnail: img_three,
        thumbnailWidth: 400,
        thumbnailHeight: 226
    },
    {
        src: img_four,
        thumbnail: img_four,
        thumbnailWidth: 600,
        thumbnailHeight: 400
    },
    {
        src: img_five,
        thumbnail: img_five,
        thumbnailWidth: 301,
        thumbnailHeight: 400
    },
    {
        src: img_six,
        thumbnail: img_six,
        thumbnailWidth: 1200,
        thumbnailHeight: 900
    },
    {
        src: img_seven,
        thumbnail: img_seven,
        thumbnailWidth: 1200,
        thumbnailHeight: 900
    },
    {
        src: img_eight,
        thumbnail: img_eight,
        thumbnailWidth: 283,
        thumbnailHeight: 178
    },
    {
        src: img_nine,
        thumbnail: img_nine,
        thumbnailWidth: 390,
        thumbnailHeight: 280
    }
]

const classified_images = [
    {
        src: img_classified_one,
        thumbnail: img_classified_one,
        thumbnailWidth: 400,
        thumbnailHeight: 289
    },
    {
        src: img_classified_two,
        thumbnail: img_classified_two,
        thumbnailWidth: 402,
        thumbnailHeight: 294
    },
    {
        src: img_classified_three,
        thumbnail: img_classified_three,
        thumbnailWidth: 400,
        thumbnailHeight: 226
    },
    {
        src: img_classified_four,
        thumbnail: img_classified_four,
        thumbnailWidth: 600,
        thumbnailHeight: 400
    },
    {
        src: img_classified_five,
        thumbnail: img_classified_five,
        thumbnailWidth: 301,
        thumbnailHeight: 400
    },
    {
        src: img_classified_six,
        thumbnail: img_classified_six,
        thumbnailWidth: 1200,
        thumbnailHeight: 900
    },
    {
        src: img_classified_seven,
        thumbnail: img_classified_seven,
        thumbnailWidth: 1200,
        thumbnailHeight: 900
    },
    {
        src: img_classified_eight,
        thumbnail: img_classified_eight,
        thumbnailWidth: 283,
        thumbnailHeight: 178
    },
    {
        src: img_classified_nine,
        thumbnail: img_classified_nine,
        thumbnailWidth: 390,
        thumbnailHeight: 280
    }
]

function ResultsPage() {
    const [activeTab, setActiveTab] = useState('1');

    // Chart Data
    const loss_16 = React.useMemo(
        () => [
            {
                label: 'Training',
                data: [[1,0.7277733087539673],[2,0.5628632307052612],[3,0.5010277032852173],[4,0.44897598028182983],[5,0.37150144577026367],[6,0.3467458486557007],[7,0.29271814227104187],[8,0.27342888712882996],[9,0.28835058212280273],[10,0.22200506925582886],[11,0.24977678060531616],[12,0.2376963198184967],[13,0.25719836354255676],[14,0.20838099718093872],[15,0.22464896738529205],[16,0.18298615515232086],[17,0.20028111338615417],[18,0.14874383807182312],[19,0.1850702166557312],[20,0.15511178970336914],[21,0.16627290844917297],[22,0.1835692673921585],[23,0.18952937424182892],[24,0.1643294394016266],[25,0.18330824375152588],[26,0.1797451674938202],[27,0.14970353245735168],[28,0.1718231588602066],[29,0.1508084088563919],[30,0.1467558741569519],[31,0.13757415115833282],[32,0.14621108770370483],[33,0.1449335515499115],[34,0.14209216833114624],[35,0.12906338274478912],[36,0.14188148081302643],[37,0.1012868881225586],[38,0.10921084880828857],[39,0.10404166579246521],[40,0.10415134578943253]]
            },
            {
                label: 'Validation',
                data: [[1,0.6069360971450806],[2,0.44498953223228455],[3,0.4678199887275696],[4,0.4080458879470825],[5,0.3285912275314331],[6,0.36436814069747925],[7,0.31778571009635925],[8,0.30233314633369446],[9,0.26812565326690674],[10,0.2640470266342163],[11,0.2831639051437378],[12,0.20586809515953064],[13,0.2679371237754822],[14,0.23119936883449554],[15,0.2230713665485382],[16,0.19795575737953186],[17,0.21876117587089539],[18,0.20139282941818237],[19,0.19550183415412903],[20,0.19647099077701569],[21,0.21617916226387024],[22,0.21672990918159485],[23,0.23683544993400574],[24,0.16284973919391632],[25,0.17515195906162262],[26,0.14868998527526855],[27,0.22473827004432678],[28,0.24270287156105042],[29,0.19730083644390106],[30,0.17956078052520752],[31,0.22036100924015045],[32,0.13836464285850525],[33,0.1429539918899536],[34,0.16661471128463745],[35,0.14151495695114136],[36,0.2231411188840866],[37,0.14775706827640533],[38,0.16615934669971466],[39,0.1730099469423294],[40,0.15801025927066803]]
            }
        ],
        []
    );
    const accuracy_16 = React.useMemo(
        () => [
            {
                label: 'Training',
                data: [[1,0.7076166868209839],[2,0.7890625],[3,0.8230957984924316],[4,0.85546875],[5,0.876953125],[6,0.88671875],[7,0.896484375],[8,0.908203125],[9,0.90625],[10,0.9287469387054443],[11,0.9189189076423645],[12,0.921875],[13,0.9140625],[14,0.936117947101593],[15,0.9296875],[16,0.953125],[17,0.9453125],[18,0.958984375],[19,0.9453125],[20,0.9557739496231079],[21,0.9606879353523254],[22,0.9312039017677307],[23,0.935546875],[24,0.9557739496231079],[25,0.939453125],[26,0.939453125],[27,0.9680589437484741],[28,0.94140625],[29,0.951171875],[30,0.955078125],[31,0.95703125],[32,0.9508599638938904],[33,0.95703125],[34,0.955078125],[35,0.951171875],[36,0.9729729890823364],[37,0.970703125],[38,0.974609375],[39,0.98046875],[40,0.96875]]
            },
            {
                label: 'Validation',
                data: [[1,0.78515625],[2,0.875],[3,0.85546875],[4,0.8359375],[5,0.91015625],[6,0.8828125],[7,0.88671875],[8,0.8984375],[9,0.8984375],[10,0.8984375],[11,0.91015625],[12,0.94140625],[13,0.91015625],[14,0.93359375],[15,0.9296875],[16,0.9296875],[17,0.93359375],[18,0.9609375],[19,0.9453125],[20,0.93359375],[21,0.92578125],[22,0.9375],[23,0.91796875],[24,0.9453125],[25,0.9375],[26,0.96875],[27,0.921875],[28,0.90234375],[29,0.94921875],[30,0.94140625],[31,0.9453125],[32,0.96484375],[33,0.94921875],[34,0.953125],[35,0.9453125],[36,0.93359375],[37,0.96875],[38,0.9375],[39,0.94140625],[40,0.94921875]]
            }
        ],
        []
    );
    const loss_19 = React.useMemo(
        () => [
            {
                label: 'Training',
                data: [[1,0.8175496459007263],[2,0.6615536212921143],[3,0.5115836262702942],[4,0.43541890382766724],[5,0.3961533308029175],[6,0.3735443353652954],[7,0.34595245122909546],[8,0.30807727575302124],[9,0.2770182192325592],[10,0.301561176776886],[11,0.27798154950141907],[12,0.25131312012672424],[13,0.26869523525238037],[14,0.22496896982192993],[15,0.23142090439796448],[16,0.20388028025627136],[17,0.18115535378456116],[18,0.2006542980670929],[19,0.19082173705101013],[20,0.18654434382915497],[21,0.20301593840122223],[22,0.19510820508003235],[23,0.19282570481300354],[24,0.15314249694347382],[25,0.14581279456615448],[26,0.1599821299314499],[27,0.19036170840263367],[28,0.14247557520866394],[29,0.18495920300483704],[30,0.18295332789421082]]
            },
            {
                label: 'Validation',
                data: [[1,0.7800374031066895],[2,0.5273074507713318],[3,0.4735967814922333],[4,0.46082454919815063],[5,0.3665340840816498],[6,0.3893032670021057],[7,0.35191941261291504],[8,0.3513292670249939],[9,0.29347193241119385],[10,0.35069575905799866],[11,0.25516223907470703],[12,0.2504802644252777],[13,0.253334641456604],[14,0.23413872718811035],[15,0.2481611967086792],[16,0.25451502203941345],[17,0.2500454783439636],[18,0.24578998982906342],[19,0.20818623900413513],[20,0.2506090998649597],[21,0.18258380889892578],[22,0.18157105147838593],[23,0.1934206187725067],[24,0.23818880319595337],[25,0.1912069022655487],[26,0.21505334973335266],[27,0.20136992633342743],[28,0.21189305186271667],[29,0.18904246389865875],[30,0.18746532499790192]]
            }
        ],
        []
    );
    const accuracy_19 = React.useMemo(
        () => [
            {
                label: 'Training',
                data: [[1,0.6068795919418335],[2,0.7592137455940247],[3,0.810546875],[4,0.8574938774108887],[5,0.86328125],[6,0.85546875],[7,0.8845208883285522],[8,0.888671875],[9,0.90625],[10,0.888671875],[11,0.900390625],[12,0.923828125],[13,0.900390625],[14,0.931640625],[15,0.9238329529762268],[16,0.93359375],[17,0.947265625],[18,0.93359375],[19,0.939453125],[20,0.9312039017677307],[21,0.9375],[22,0.923828125],[23,0.939453125],[24,0.9606879353523254],[25,0.95703125],[26,0.9434889554977417],[27,0.9296875],[28,0.9606879353523254],[29,0.9434889554977417],[30,0.9287469387054443]]
            },
            {
                label: 'Validation',
                data: [[1,0.67578125],[2,0.8203125],[3,0.8203125],[4,0.85546875],[5,0.875],[6,0.84375],[7,0.8828125],[8,0.8671875],[9,0.890625],[10,0.86328125],[11,0.91015625],[12,0.92578125],[13,0.9140625],[14,0.92578125],[15,0.92578125],[16,0.90234375],[17,0.91015625],[18,0.90625],[19,0.94921875],[20,0.921875],[21,0.93359375],[22,0.9453125],[23,0.9453125],[24,0.91796875],[25,0.93359375],[26,0.9375],[27,0.93359375],[28,0.921875],[29,0.91796875],[30,0.9453125]]
            }
        ],
        []
    );

    // Series option
    const series = React.useMemo(
        () => ({
          showPoints: false
        }),
        []
    )

    // Chart axes
    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    );

    return (
        <Container>
            <Row>
                <div className="tabsWrapper">
                <Nav tabs>
                    <NavItem>
                        <NavLink className={activeTab === '1' ? 'active' : 'defaultTab'} onClick={() => setActiveTab('1')}>
                            VGG 16
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={activeTab === '2' ? 'active' : 'defaultTab'} onClick={() => setActiveTab('2')}>
                            VGG 19
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab} className="tabContentWrapper">
                        <TabPane tabId="1">
                            <Container>
                                <Row>
                                    <Col sm="3">
                                        <div style={{width: '425px', height: '350px'}}>
                                            <p style={{marginBottom: '10px'}}>Loss vs. Epoch</p>
                                            <Chart data={loss_16} axes={axes} series={series} tooltip primaryCursor secondaryCursor />
                                        </div>
                                    </Col>
                                    <Col sm="2"></Col>
                                    <Col sm="3">
                                        <div style={{width: '425px', height: '350px'}}>
                                            <p style={{marginBottom: '10px'}}>Accuracy vs. Epoch</p>
                                            <Chart data={accuracy_16} axes={axes} series={series} tooltip primaryCursor secondaryCursor />
                                        </div>                                    
                                    </Col>
                                    <Col sm="2"></Col>
                                    <Col sm="2">
                                       Training Accuracy: 0.971
                                       <br />
                                       <br />
                                       Testing Accuracy: 0.948
                                    </Col>
                                </Row>
                            </Container>
                        </TabPane>
                        <TabPane tabId="2">
                            <Container>
                                <Row>
                                    <Col sm="3">
                                        <div style={{width: '400px', height: '350px'}}>
                                            <p style={{marginBottom: '10px'}}>Loss vs. Epoch</p>
                                            <Chart data={loss_19} axes={axes} series={series} tooltip primaryCursor secondaryCursor />
                                        </div>
                                    </Col>
                                    <Col sm="2" className="paddedSpace"></Col>
                                    <Col sm="3">
                                        <div style={{width: '400px', height: '350px'}}>
                                            <p style={{marginBottom: '10px'}}>Accuracy vs. Epoch</p>
                                            <Chart data={accuracy_19} axes={axes} series={series} tooltip primaryCursor secondaryCursor />
                                        </div>                                    
                                    </Col>
                                    <Col sm="2"></Col>
                                    <Col sm="2">
                                       Training Accuracy: 0.9367
                                       <br />
                                       <br />
                                       Testing Accuracy: 0.9365
                                    </Col>
                                </Row>
                            </Container>
                        </TabPane>
                </TabContent>
                </div>
            </Row>

            <div className="galleryWrapper">
                <Row>
                    <Col sm="1"></Col>
                    <Col sm="5">
                        <h4 className="galleryTitle orig">Original</h4>
                        <Gallery 
                            backdropClosesModal={true}
                            images={images}
                        />
                    </Col>
                    <Col sm="1"></Col>
                    <Col sm="5">
                        <h4 className="galleryTitle process">Processed</h4>
                        <Gallery 
                            backdropClosesModal={true}
                            images={classified_images}
                        />
                    </Col>
                </Row>
            </div>
            
        </Container>
    );
}

export default ResultsPage;