import { Form, Input, Button } from "antd";
import "./App.css";

function App() {
  const onFinish = (values: any) => console.log(values);

  return (
    <Form onFinish={onFinish}>
      <Form.Item name="user" label="ユーザ名">
        <Input />
      </Form.Item>
      <Form.Item name="password" label="パスワード">
        <Input.Password />
      </Form.Item>
      <Button htmlType="submit">送信</Button>
    </Form>
  );
}

export default App;
