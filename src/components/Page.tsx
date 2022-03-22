import React, { useEffect, useState } from 'react';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import CharactersService from '../services/characters.service';
import Characters from './character/Characters';
import { useDispatch } from 'react-redux'


const Page: React.FC = () => {
    const dispatch = useDispatch()

    const [ currentPage, setCurrentPage] = useState(1)

    useEffect(()=>{
      const getAllCharacter = async () =>{
        const res = await CharactersService.getAllCharacters(currentPage);
        const { data } = res;
        dispatch({type: 'ADD_ITEM',payload: data?.results
        })
      }
      getAllCharacter()
    },[currentPage, dispatch])

    const onChange = (page: any) => {
      setCurrentPage(page)
    }

  return (
    <div className="App">
    <Characters/> 
    <Pagination current={currentPage} onChange={(page)=>onChange(page)} total={82}/>
    </div>
  );
}

export default Page;
