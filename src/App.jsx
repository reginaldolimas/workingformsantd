import './App.css'
import 'antd/dist/reset.css';
import { Form, Button, Checkbox, DatePicker, Input, Select } from 'antd'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Form autoComplete='off' labelCol={{ span: 10 }} wrapperCol={{span: 14}} onFinish={(values)=>{
          console.log(values)
        }}>
          <Form.Item name='fullName' label='Full Name' rules={[{
            required: true,
            message: 'Por favor entre com seu nome'
          },
          {
            whitespace: true,
            message: 'Não deve começar com espaço'
          },
          {
            min: 3,
            message: 'O nome deve ter mais de 3 caracteres'
          }
          ]} hasFeedback>
            <Input placeholder='Type your name' />            
          </Form.Item>

          <Form.Item name='email' label='Email' rules={[{
            required: true,
            message: 'Por favor entre com seu e-mail'
          },
          {
            type: 'email',
            message: 'Email não é valido'
          },
          ]} hasFeedback>
            <Input placeholder='Type your email' />            
          </Form.Item>

          <Form.Item name='password' label='Password' rules={[{
            required: true,
            message: 'Por favor entre com sua senha'
          },
          ]} hasFeedback>
            <Input.Password placeholder='Type your password' />            
          </Form.Item>

          <Form.Item name='confirmPassword' label='Confirm Password' dependencies={['password']} rules={[{
            required: true,
            message: 'Por favor entre com sua senha'
          },{
            min: 6,
            message: 'Mínimo 6 caracteres'
          },
            ({getFieldValue}) => ({
              validator(_,value){
                if(!value || getFieldValue('password') === value){
                  return Promise.resolve()
                }
                return Promise.reject('As senhas diferem!')
              }
            })
          ]} hasFeedback>
            <Input.Password placeholder='Confirm your password' />            
          </Form.Item>

          <Form.Item name='gender' label='Gender' requiredMark='optional'>
            <Select placeholder='Confirm your gender'>
              <Select.Option value='male'>Male</Select.Option>
              <Select.Option value='female'>Female</Select.Option>
            </Select>           
          </Form.Item>

          <Form.Item name='dob' label='Date of Birth' rules={[{
            required: true,
            message: 'Entre com a data de nascimento',
          }]}>
            <DatePicker style={{width: '100%'}} picker='date' placeholder='Chose date of birth' />            
          </Form.Item>

          <Form.Item name='website' label='Website' rules={[{
            required: true,
            message: 'Digite uma URL'
          },{
            type: "url", message: 'Por favor, digite uma URL válida'
          }]} hasFeedback>
            <Input placeholder='Add your website link' />            
          </Form.Item>

          <Form.Item name='agreement' wrapperCol={{span: 24}} valuePropName='checked' 
          rules={[
            {
              validator: (_, value) => value ? Promise.resolve() : Promise.reject('Você deve aceitar os termos'),
           },     
          ]}>
            <Checkbox>
              {" "}
              Agree to our <a href='#'> Terms and Conditions</a>
            </Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{span: 24}}>
            <Button block type='primary' htmlType='submit'>Register</Button>         
          </Form.Item>
          
        </Form>
      </header>
    </div>
  )
}

export default App
