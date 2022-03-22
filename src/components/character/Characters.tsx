import { Card, Col, Modal, Row } from 'antd';
import React, { useState } from 'react'
import './characters.scss';
import 'antd/dist/antd.css';
import {connect} from 'react-redux'


export interface DataCharacters {
birth_year: string;
created: Date;
edited: Date;
eye_color: string;
films: {
  url: string
}
gender: string;
hair_color: string;
height: number;
homeworld: string;
mass: number;
name: string;
skin_color: string
species: []
starships:{
  url:string;
}
url: string;
vehicles: string;
}

interface Props {
items: any
}




const Characters:  React.FC<Props> = ({ items }) => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ allDataCharacter, setAllDataCharacter ] = useState<DataCharacters>()
  const { Meta } = Card;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="list-character">
  <Row gutter={16}>
      {items[0]?.map((item: DataCharacters, idx:number) =>(

<div className="list-item" key={idx} >


<Col span={6}>
<Card

    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://picsum.photos/200" />}
    onClick={()=>{
      setAllDataCharacter(item)
      showModal();
    }}
  >
    <Meta title={item.name} />
  </Card>
  </Col>
  </div>

      ))}
      <Modal title={allDataCharacter?.name} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <li>Name: {allDataCharacter?.name}</li>
      <li>Eye Color: {allDataCharacter?.eye_color}</li>
      <li>Gender: {allDataCharacter?.gender}</li>
      <li>Birth Year: {allDataCharacter?.birth_year}</li>
      <li>Height: {allDataCharacter?.height}</li>
      <li>Mass: {allDataCharacter?.mass}</li>
      <li>Skin Color: {allDataCharacter?.skin_color}</li>
      </Modal>
      
      </Row>
    </div>

  )
}
const mapStateToProps = (state:any) =>{
  return {
    items: state}
}

export default connect(mapStateToProps) (Characters)