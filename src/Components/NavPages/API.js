import React, { useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

function API (){
    const [type, setType] = useState(-1);
    useEffect(() => {
        document.title = "API";                
    })
    const onFinish = values => {
        let requestOptions = {
            method: 'POST',                
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };
        fetch('https://flaskreviewapi.herokuapp.com/model/predict', requestOptions)
        .then(response => response.json())
        .then(response=>{
            if(response.predict!=null){
                let predict = parseInt(response.data.predict);
                setType(predict);
            }
            else{
                setType(-1);
            }
        });                            
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
        setType(-1);
      };
    return(
        <div className="center-container">
        <div className="center-container-div ">
            <div style={{textAlign: "center", paddingBottom: 10}}>
                <h1>TEST API</h1>
            </div>
                    <Form
            {...layout}
            name="login"            
            onFinish={onFinish}
            hideRequiredMark={true}
            onFinishFailed={onFinishFailed}
            >
            

            <Form.Item
                label="review"
                name="review"
                rules={[{ required: true, message: 'Please your review'}]}
            >
                <Input.TextArea />
            </Form.Item>
            
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    TEST
                </Button>
            </Form.Item>
            </Form> 
            <div style={{textAlign:"center"}}>
                <div style={{width:"100%", padding:"1em",transition:"all 1s"}} className={(type===-1)?"NEUTRAL":(type===1)?"POSITIVE":"NEGATIVE"}>
                    <h3>{(type===-1)?"Output pending":(type===1)?"POSITIVE":"NEGATIVE"}</h3>
                </div>
            </div>
        </div>
    </div>
    )
}

export default API;
//SignUp