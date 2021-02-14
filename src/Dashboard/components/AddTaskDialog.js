import React from 'react';

//Material Ui Library
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
// import { Modal, Button, Form, Input, Radio, Select, Cascader, DatePicker, InputNumber, TreeSelect, Switch, } from 'antd';
import Tooltip from '@material-ui/core/Tooltip';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Divider } from 'antd';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

import '../css/Card.css'

const useStyles = makeStyles((theme) => ({
    form: {
        marginTop: "4%"
    },
    title: {
        display:"flex",
        marginTop: "3%"
    }

}));

// Görevi ekleyen kişi, +
// sorumlu kişi,        +
// Proje adı,           +
// görev başlığı,       +
// görev açıklaması,    +
// başlangıç tarihi,    +
// bitiş tarihi,        +
// durum(new, process, completed)

export default function RequestCard(props) {
    const classes = useStyles();
    const [visible , setVisible ] = React.useState(false);

    const { Option } = Select;

    const showModal = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <div >
            <Tooltip title="Görev Ekle" >
                <Fab onClick={showModal} color="primary" size="small" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Drawer
                title="Create a new account"
                width="35%"
                onClose={onClose}
                visible={visible}
                bodyStyle={{ paddingBottom: 80 }}
                footer={
                    <div
                    style={{
                        textAlign: 'right',
                    }}
                    >
                    <Button onClick={onClose} style={{ marginRight: 8 }}>
                        İptal
                    </Button>
                    <Button onClick={onClose} type="primary">
                        Ekle
                    </Button>
                    </div>
                }
                >
                <div className={classes.title}>
                    <AssignmentTurnedInIcon fontSize="large"/>
                    <h2>Görev Ekle</h2>
                </div>
                <Divider/>
                <Form layout="vertical" hideRequiredMark>
                    <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                        name="sorumlu"
                        label="Sorumlu Kişi:"
                        rules={[{ required: true, message: 'Lütfen soumlu kişiyi seçiniz..' }]}
                        >
                        <Select placeholder="Sorumlu kişiyi seçiniz">
                            <Option value="xiao">Xiaoxiao Fu</Option>
                            <Option value="mao">Maomao Zhou</Option>
                        </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                        name="proje"
                        label="Proje:"
                        rules={[{ required: true, message: 'Lütfen projeyi seçiniz..' }]}
                        >
                        <Select placeholder="Projeyi seçiniz">
                            <Option value="xiao">Xiaoxiao Fu</Option>
                            <Option value="mao">Maomao Zhou</Option>
                        </Select>
                        </Form.Item>
                    </Col>
                    </Row>
                    <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                        name="tasktitle"
                        label="Görev Başlığı:"
                        rules={[{ required: true, message: 'Please select an owner' }]}
                        >
                        <Input placeholder="Görev Başlığı.." />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                        name="state"
                        label="Durum:"
                        rules={[{ required: true, message: 'Lütfen durum seçiniz..' }]}
                        >
                        <Select placeholder="Durum seçiniz..">
                            <Option value="private">Private</Option>
                            <Option value="public">Public</Option>
                        </Select>
                        </Form.Item>
                    </Col>
                    </Row>
                    <Row gutter={16}>
                    {/* <Col span={12}>
                        <Form.Item
                        name="approver"
                        label="Approver"
                        rules={[{ required: true, message: 'Please choose the approver' }]}
                        >
                        <Select placeholder="Please choose the approver">
                            <Option value="jack">Jack Ma</Option>
                            <Option value="tom">Tom Liu</Option>
                        </Select>
                        </Form.Item>
                    </Col> */}
                    <Col span={12}>
                        <Form.Item
                        name="dateTime"
                        label="Tarih Aralığı:"
                        rules={[{ required: true, message: 'Please choose the dateTime' }]}
                        >
                        <DatePicker.RangePicker
                            placeholder={["Başlangıç", "Bitiş"]}
                            style={{ width: '100%' }}
                            getPopupContainer={trigger => trigger.parentElement}
                        />
                        </Form.Item>
                    </Col>
                    </Row>
                    <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                        name="description"
                        label="Görev Açıklaması:"
                        rules={[
                            {
                            required: true,
                            message: 'Lütfen görev açıklamasını giriniz..',
                            },
                        ]}
                        >
                        <Input.TextArea rows={4} placeholder="Görev Açıklaması.." />
                        </Form.Item>
                    </Col>
                    </Row>
                </Form>
            </Drawer>
        </div>
    );
}

