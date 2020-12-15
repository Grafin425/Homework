import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Card} from 'antd';
import {Footer} from "./Item.style";
import {Link,withRouter} from "react-router-dom";

const { Meta } = Card;

class Item extends Component {
    render() {
        let {item,match:{url}} = this.props;
        return (
            <div style={{display:'flex'}}>
                <Card
                    hoverable
                    style={{ width: 240,marginRight:20,marginBottom:20}}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title={item.name} description={item.username} />
                    <Footer>
                        <div>{item.email}</div>
                        <br/>
                        <Link to={`${url}/${item.id}`}>View more!</Link>
                    </Footer>
                </Card>
            </div>
        );
    }
}

export default withRouter(Item);