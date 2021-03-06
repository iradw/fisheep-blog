import React from 'react'
import { CalendarOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import Link from 'next/link'
// import withRouter from 'next/router'
import '../public/style/component/myCard.scss'
import PropTypes from 'prop-types'
export default function MyCard({title, date, tagList, text, atTop, id}) {
    return (
        <div className="mycard">
            <h4 className="card-title"><Link href={`/Detail?article_id=${id}`}><a>{title}</a></Link></h4>
            <p className="card-date">
                <Tag className={atTop?'':'invisible'} color="red">置顶</Tag>
                <CalendarOutlined /><span className="date">{date}</span>
            </p>
            <div className="card-tags">
                {
                    tagList.map( (item, index) => <Tag color={item.tag_color} key={index}>{item.tag_name}</Tag>)
                }
            </div>
            <div className="card-text" className={`${text?'':'invisible'}`} dangerouslySetInnerHTML={{__html: text}}></div>
            <span className="detail-btn"><Link href={`/Detail?article_id=${id}`}><a>查看全文</a></Link></span>
        </div>
    );
}

MyCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    date: PropTypes.string,
    tagList: PropTypes.arrayOf(PropTypes.shape({
        tagName: PropTypes.string,
        color: PropTypes.string
    })).isRequired, 
    text: PropTypes.string, 
    image: PropTypes.string, 
    atTop: PropTypes.bool
}