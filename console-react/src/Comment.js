import {useState} from "react";
import React from "react";
import _ from 'lodash'
import classNames from "classnames";
function Comment() {

    const user = {
        id : 1,
        name : 'hxc',
        comment : 'no or yes',
        date : "2012-12-12",
        agreeNum : 300
    }

    const commonList = [
        {id : 1, name : 'hxc', comment : 'no or yes', date : "2012-12-13", agreeNum : 300},
        {id : 3, name : 'czy', comment : '1 or 2', date : "2012-12-12", agreeNum : 1000},
        {id : 2, name : 'cz', comment : '3 or 4', date : "2012-12-11", agreeNum : 444}
    ]

    const typeList = [
        {typeName: '最新', typeValue : 1},
        {typeName: '最热', typeValue : 2}
    ]

    const handleDeleteComment = (id) => {
        setCommonList(list.filter(item => {
            return item.id !== id
        }))
    }

    let tmpComment = '';

    const[list, setCommonList] = useState(commonList);

    const postCommon = ()=>{
        setCommonList([
            ...list,
            {
                id : 10, name : 'hxc', comment : content, date : "2024-1-1", agreeNum : 0
            },
        ]);

    }

    const[type, setType] = useState(1);

    const handleChangeType = (type) => {
        setType(type);
        if (type === 2) {
            setCommonList(_.orderBy(list, 'agreeNum', 'desc'))
        } else {
            setCommonList(_.orderBy(list, 'date', 'desc'))
        }
    }

    const[content, setCommentObject]  = useState("")

    return (
        <div className={'middleBar'}>
            <div className={'commentPostArea'}>
                <div className={'userImgIcon'}/>
                <input className={'commentPostInput'} value={content} onChange={(e) => setCommentObject(e.target.value)} type={"text"} />
                <input className={'commentPostBtn'} onClick={postCommon} type={"button"} value={'发布'}/>
                <div className={'operationList'}>
                    {
                        typeList.map(item => (
                            <span
                                key={item.typeValue}
                                onClick={() => handleChangeType(item.typeValue)}
                                id={item.typeValue}
                                className={classNames('', {active : type === item.typeValue})}>
                                {item.typeName}
                            </span>
                        ))
                    }
                </div>
            </div>
            <div className={'commentShowArea'}>
                {
                    list.map(item =>(
                        <div key={item.id} className={'commentList'}>
                            <div className={'otherImageIcon'}></div>
                            <span className={'otherCommentUser'}>{item.name}</span>
                            <span className={'otherCommentContent'}>{item.comment}</span>
                            <span className={'otherCommentDate'}>{item.date}</span>
                            <span className={'otherCommentAgreeNum'}>{item.agreeNum}</span>
                            {item.id == user.id && <a onClick={() => handleDeleteComment(item.id)} className={'deleteComment'}>删除</a>}
                        </div>
                    ))
                }
            </div>
        </div>
    )

}

export default Comment