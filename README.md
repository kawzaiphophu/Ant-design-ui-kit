# @allkons/ui

Custom UI component library built on top of Ant Design.

## Installation

```bash
npm install @allkons/ui antd react react-dom
# or
yarn add @allkons/ui antd react react-dom
```

## Usage

### Import Styles (Required)

**Import the CSS in your main app file (_app.js, _app.tsx, or index.js):**

```javascript
import '@allkons/ui/dist/styles.css';
import 'antd/dist/reset.css'; // or 'antd/dist/antd.css'
```

### Import Components

```javascript
import { 
  CustomButton, 
  CustomTextField, 
  CustomCheckbox,
  CustomSelectField,
  CustomRadioGroup,
  CustomDatePicker,
  CustomToggleSwitch,
  CustomTypography
} from '@allkons/ui';
```

## Example

```jsx
import { CustomButton, CustomTextField } from '@allkons/ui';
import '@allkons/ui/dist/styles.css';
import { Form } from 'antd';

function LoginForm() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <CustomTextField 
          type="email" 
          placeholder="Enter your email" 
          size="large"
        />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <CustomTextField 
          type="password" 
          placeholder="Enter your password" 
          size="large"
        />
      </Form.Item>

      <Form.Item>
        <CustomButton 
          type="primary" 
          htmlType="submit" 
          block 
          size="large"
        >
          Login
        </CustomButton>
      </Form.Item>
    </Form>
  );
}
```

## Components

- **CustomButton** - Button with various styles and variants
- **CustomTextField** - Text input with validation and different types
- **CustomCheckbox** - Checkbox with custom styling
- **CustomSelectField** - Select dropdown
- **CustomRadioGroup** - Radio button group
- **CustomDatePicker** - Date picker with Thai locale support
- **CustomToggleSwitch** - Toggle switch
- **CustomTypography** - Typography component with multiple variants

## Peer Dependencies

- `antd` >= 5.25.1
- `react` >= 17
- `react-dom` >= 17
