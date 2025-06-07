import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import StyledCarousel from '../common/StyledCarousel';
import StyledCard from '../common/StyledCard'
import styled from 'styled-components';

const StyledA = styled.a`
    text-decoration: none;

    &:visited {
        color: light-blue;
    }
`

function AchievementBasic({ achievement }) {

    return (
        <Card>
            <Card.Header><h5>{ achievement.label }</h5></Card.Header>
            <Card.Body className="p-4 md-5">
                <Row>
                    <Col md={6}>
                        <Card.Img style={{ maxHeight: '400px', objectFit: 'contain'}} src={achievement.path} alt={ achievement.label } />
                    </Col>
                    <Col md={6}>            
                        <Card.Text>
                            {achievement.text}
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer style={{ textAlign: 'right' }}>
                    <Row>
                        <Col style={{textAlign: 'left'}}><StyledA target='_blank' href={achievement.link}>Перейти к событию</StyledA></Col>
                        <Col style={{textAlign: 'right'}}>{achievement.date}</Col>
                        </Row>
                </Card.Footer>
        </Card>
    )
}

function Achievement({ achievement }) {

    return (
        <StyledCard>
            <Card.Header><h5>{ achievement.label }</h5></Card.Header>
            <Card.Body className="p-4 md-5">
                <Row>
                    <Col md={6}>
                        <Card.Img style={{ maxHeight: '400px', objectFit: 'contain'}} src={achievement.path} alt={ achievement.label } />
                    </Col>
                    <Col md={6}>            
                        <Card.Text>
                            {achievement.text}
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer style={{ textAlign: 'right' }}>
                    <Row>
                        <Col style={{textAlign: 'left'}}><StyledA target='_blank' href={achievement.link}>Перейти к событию</StyledA></Col>
                        <Col style={{textAlign: 'right'}}>{achievement.date}</Col>
                        </Row>
                </Card.Footer>
        </StyledCard>
    )
}

export default function Achievements() {
    
    const achs = [
        {
            label: 'Yet Anothe Conference on Education Yandex',
            text: 'Участие в конференции Яндекса о людях и технологиях в образовании.',
            path: '/yace.jpg',
            link: "https://yace.yandex.ru/2023",
            date: '15 ноября 2023'
        },
        {
            label: 'Тренинг предпринимательских компетенций',
            text: 'Прохождение тренинга предпринимаетльских компетенций от МФТИ. 6 часов полезной инфомации с перерывами на приятный кофебрейк, а так же замечательные подарки по прохождении тренинга.',
            path: '/training.jpg',
            link: "https://study-techtraining.mipt.ru/",
            date: '29 ноября 2023'
        },
        {
            label: 'Бассейн Школы 21',
            text: 'Впервые студенты Новгородского Государственного Университета имени Ярослава Мудрого проходили отборочный интенсив Школы 21 в обязательном порядке (партнерская программа НовГУ и Сбера). Ещё в начале 1 курса я хотел попасть в эту школу программирования, а освобождение от занятий на целый месяц поспособствовало моему успешному прохождению "бассейна". Я не подавал документы на основное обучение, но пока что не отказываюсь от этой возможности.',
            path: '/school_21.jpg',
            link: "https://www.novsu.ru/university/press/news/232380/",
            date: '30 сентября - 25 октября 2024'
        },
        {
            label: 'Квалификационный этап ICPC',
            text: 'Первое участие в соревновании по программированию. ICPC - международное соревнование по спортивному алгоритмическому программированию. Моя команда прошла в следующий, региональный, этап.',
            path: '/icpc_nwq_2025.jpg',
            link: "#",
            date: '27 октября 2024'
        },
        {
            label: 'MTC TrueTechChamp',
            text: 'Алгоритмическое соревнование от МТС. Участие в отборочном этапе.',
            path: '/mtc.jpg',
            link: "https://truetechchamp.ru/",
            date: '8 ноября 2024'
        },
        {
            label: 'Региональный этап ICPC',
            text: 'Участие в региональном этапе ICPC, ИТМО Санкт-Петергубрг. Первое выездное участие в соревновании.',
            path: '/icpc_nwrrc_2025.jpg',
            link: "https://vk.ru/wall-63282215_3405",
            date: '16 ноября 2024'
        },
        {
            label: 'Выставка кафедр',
            text: 'Участие в выставке кафедр Политехнического Института Новгородского Государственного Университета имени Ярослава Мудрого в Инновационном Научно-Технологическом Центре "Валдай". Представлял свою выпускающую кафедру "Информационных технологий и систем".',
            path: '/pish.jpg',
            link: "https://vk.ru/wall265706326_2623",
            date: '15 декабря 2024'
        },
        {
            label: 'Грамотное решение',
            text: 'Всероссийское студенческое соревнование "Хакатон: Грамотное решение", проводимое Политехническим Институтом Новгородского Государственного Университета имени Ярослава Мудрого. Принимал участие в кейсе "Искуственный интеллект", где необходимо было обучить модель ИИ для определения ключевых точек на лице человека, прошел в финальный этап. В финале надо было обучить модель, определяющую лицо на фото, и объединить с предыдущей моделью для создания своебразной системы.',
            path: '/solution.jpg',
            link: "https://novsu.ru/university/press/news/237324/",
            date: '21 - 30 апреля 2025'
        },
        {
            label: 'ПРО.Инновации',
            text: 'При прохождении дисциплины "Проектный практикум" было необходимо создать приложение для бронирования столов в ресторанах. После защиты перед экспертами нашу команду выдвинули на конкурс студенческих проектов "ПРО.Инновации". Наша команда заняла 2 место, получили приятные подарки.',
            link: "https://vk.ru/wall-220673228_735",
            path: '/pro.innovations.jpg',
            date: '16 мая 2025'
        },
        {
            label: 'НЕЙМАРК.Хакатон',
            text: 'Победа в НЕЙМАРК.Хакатоне, 1 место в кейсе от Нижегородского кампуса Высшей Школы Экономики "Система непрерывной оценки качества преподавания и экзаменов". Выиграли 500.000 рублей на реализацию проекта и сувениры от ВШЭ НН.',
            link: "https://nnov.hse.ru/news/1053492216.html",
            path: '/neimark.jpg',
            date: '31 мая - 3 июня 2025'
        },
    ]

    return (
        <Container className="my-4">
            <Row className="justify-content-center">
                <Col lg={10}>
                    <Achievement achievement={achs.reverse()[0]} />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg={10}>
                    <StyledCarousel indicators controls className="mb-4">
                        {achs.reverse().map((achievement, index) => (
                            <Carousel.Item key={index}>
                                <AchievementBasic achievement={achievement} />
                            </Carousel.Item>
                        ))}
                    </StyledCarousel>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg={10}>
                    {achs.reverse().slice(1).map((ach, index) => (
                        <div key={index}>
                            <Achievement achievement={ ach } />
                        </div>
                    ))}
                </Col>
            </Row>
        </Container>
    )
}