import { Container, Button, Row, Col, Table, Image } from "react-bootstrap"
import { useEffect, useState } from "react"
import { isTokenAvailable } from "../../common/utilities"
import { useNavigate } from "react-router-dom"
import { getTechnologiesData } from "./utilities"

import Loading from "../../common/Loading"
import ModalTechnology from "./ModalTechnology"

export default function Technologies() {

    const imgPrefix = 'https://raw.githubusercontent.com/ccrayp/ccrayp/refs/heads/main/assets/technologies/'
    const navigate = useNavigate()
    const [technologies, setTechnologies] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [idToEdit, setIdToEdit] = useState(null)

    async function handleOnSuccess() {
        await getData()
    }

    const handleCloseModal = () => {
        setIdToEdit(null)
        setShowModal(false)
    }
    const handleShowModal = (id) => {
        setIdToEdit(id)
        setShowModal(true)
    }

    async function getData() {
        if (!await isTokenAvailable()) {
            navigate('/login')
            return
        }
        
        try {
            const data = await getTechnologiesData()
            setTechnologies(Array.isArray(data) ? data : [])
        } catch (error) {
            console.error("Ошибка загрузки достижений:", error)
            setTechnologies([])
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [navigate])

    if (isLoading) {
        return <Loading /> 
    }

    if (!technologies.length) {
        return (
            <Container className="d-flex flex-column justify-content-center align-items-center">
                <Row className="text-center mt-5">
                    <Col>
                        <h1 className="mb-4">Данные не найдены</h1>
                        <Button onClick={() => handleShowModal(null)}>Добавить технологию</Button>
                    </Col>
                </Row>
                <ModalTechnology showModal={showModal} handleCloseModal={handleCloseModal} handleOnSuccess={handleOnSuccess} id={idToEdit} imgPrefix={imgPrefix} />
            </Container>
        )
    }
    else {
        return (
            <>
                <Container className="d-flex flex-column justify-content-center align-items-center">
                    <Row className="mt-4 text-center w-100" style={{ borderRadius: '25px', boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)'}}>
                        <Col className="p-4 pb-2">
                            <Table striped bordered hover className="text-start">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Название</th>
                                        <th>Группа</th>
                                        <th>Фотография</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {technologies.map((item, index) => (
                                        <tr key={index} onClick={() => handleShowModal(item.id)}>
                                            <td>{item.id}</td>
                                            <td>{item.label}</td>
                                            <td>{item.group}</td>
                                            <td>
                                                <div className="d-flex justify-content-center">
                                                    <Image src={imgPrefix + item.img} alt={item.img} className="mb-3" style={{ maxHeight: '200px', maxWidth: '300px' }} />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-4 mb-4">
                        <Col xs="auto" className="pe-2">
                            <Button onClick={() => handleShowModal(null)}>Добавить технологию</Button>
                        </Col>
                        <Col xs="auto" className="ps-2">
                            <Button onClick={getData}>Обновить данные</Button>
                        </Col>
                    </Row>
                </Container>

                <ModalTechnology showModal={showModal} handleCloseModal={handleCloseModal} handleOnSuccess={handleOnSuccess} id={idToEdit} imgPrefix={imgPrefix} />
            </>
        )
    }
}