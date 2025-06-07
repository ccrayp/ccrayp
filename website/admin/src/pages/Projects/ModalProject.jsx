import { useEffect, useState, useRef } from "react"
import { Modal, Button, Form, InputGroup, Image } from "react-bootstrap"
import { isTokenAvailable } from "../../common/utilities"
import { getProjectData,  deleteProjectById, updateProjectById, newProjectByData } from "./utilities";
import { useNavigate } from "react-router-dom";
import Loading from "../../common/Loading";

export default function ModalProject({ id = null, imgPrefix, showModal, handleCloseModal, handleOnSuccess }) {
    
    const formRef = useRef(null);
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    async function checkAuthAndLoadData() {
        setIsLoading(true);
        
        if (!await isTokenAvailable()) {
            navigate('/login');
            return;
        }
        
        try {
            const response = await getProjectData(id);
            setData(response || {});
        } catch (error) {
            console.error("Ошибка загрузки проекта:", error);
            setData({});
        } finally {
            setIsLoading(false);
        }
    }

    function deleteProject() {
        async function deleteFunc() {
            const res = confirm(`Вы уверены, что ходите удалить проект id: ${id}?`)
            if (res) {
                setIsLoading(true)
                try {
                    const res = await deleteProjectById(id)
                    
                    if(res.status === 200)
                        await handleOnSuccess()
                    else
                        throw new Error((await res.json()).message)
                }
                catch (error) {
                    alert('Ошибка при удалении проекта:', error)
                }
                finally {
                    setIsLoading(false)
                    handleCloseModal(true)
                }
            }
            else
                alert('Отмена удаления проекта')
        }
        deleteFunc()
    }

    function updateProject() {
        async function updateFunc() {
            const res = confirm(`Вы уверены, что ходите обновить проект id: ${id}?`)
            if (res) {
                setIsLoading(true)
                try {
                    const res = await updateProjectById(id, new FormData(formRef.current))
                    
                    if(res.status === 200)
                        await handleOnSuccess()
                    else
                        throw new Error((await res.json()).message)
                }
                catch (error) {
                    alert('Ошибка при обновлении проекта:', error)
                }
                finally {
                    setIsLoading(false)
                    checkAuthAndLoadData()
                }
            }
            else
                alert('Отмена обновления проекта')
        }
        updateFunc()
    }

    function newProject() {
        async function newFunc() {
            setIsLoading(true)
            try {
                const res = await newProjectByData(new FormData(formRef.current))
                if (res.status === 201) {
                    await handleOnSuccess()
                    closeModal()
                }
                else
                    throw new Error((await res.json()).message)
            }
            catch (error) {
                alert('Ошибка при добавлении проекта:', error)
            }
            finally {
                setIsLoading(false)
            }
        }
        newFunc()
    }

    function closeModal() {
        handleCloseModal()
    }

    function closeModalAndSave() {
        const res = confirm('Вы уверены, что хотите выйти?\n\nДАННЫХ НЕ СОХРАНЯТСЯ!!!')
        if (res)
            handleCloseModal()
    }

    useEffect(() => {
        if (showModal && id)
            checkAuthAndLoadData();
        else
            setData({});
    }, [showModal, id, navigate]);

    if (id) {
        return (
            <Modal show={showModal} onHide={closeModal} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Редактирование проекта</Modal.Title>
                </Modal.Header>
            
                <Modal.Body>
                    {isLoading ? (
                        <Loading />
                    ) : (
                        data.id ? (
                            <Form ref={formRef}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>Название</InputGroup.Text>
                                    <Form.Control name="label" as='textarea' rows={1} defaultValue={data.label} />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>Текст</InputGroup.Text>
                                    <Form.Control name="text" as='textarea' rows={3} defaultValue={data.text} />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>Фотография</InputGroup.Text>
                                    <Form.Control name="img" as='textarea' rows={1} defaultValue={data.img} />
                                </InputGroup>
                                <div className="d-flex justify-content-center">
                                    <a href={imgPrefix + data.img} target="blank">
                                        <Image src={imgPrefix + data.img} alt={data.img} className="mb-3" style={{ maxHeight: '300px', maxWidth: '500px' }} />
                                    </a>
                                </div>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>Используемые технологии</InputGroup.Text>
                                    <Form.Control name="stack" as='textarea' rows={1} defaultValue={data.stack} />
                                </InputGroup>
                            </Form>
                        ) : (
                            "Не удалось загрузить данные проекта"
                        )
                    )}
                </Modal.Body>
            
                <Modal.Footer>
                    <Button variant="danger" onClick={deleteProject}>
                        Удалить
                    </Button>
                    <Button variant="success" onClick={updateProject}>
                        Сохранить
                    </Button>
                    <Button variant="primary" onClick={closeModal}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
    else {
        return (
            <Modal show={showModal} onHide={closeModalAndSave} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Добавление проекта</Modal.Title>
                </Modal.Header>
            
                <Modal.Body>
                    {isLoading ? (
                        <Loading />
                    ) : (
                            <Form ref={formRef}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>Название</InputGroup.Text>
                                    <Form.Control name="label" as='textarea' rows={1} />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>Текст</InputGroup.Text>
                                    <Form.Control name="text" as='textarea' rows={3} />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>Фотография</InputGroup.Text>
                                    <Form.Control name="img" as='textarea' rows={1} />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>Используемые технологии</InputGroup.Text>
                                    <Form.Control name="stack" as='textarea' rows={1} placeholder="Через запятую <,>"/>
                                </InputGroup>
                            </Form>
                        )
                    }
                </Modal.Body>
            
                <Modal.Footer>
                    <Button variant="success" onClick={newProject}>
                        Сохранить
                    </Button>
                    <Button variant="primary" onClick={closeModalAndSave}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}