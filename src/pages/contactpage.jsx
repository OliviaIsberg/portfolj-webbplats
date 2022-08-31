import { useParams } from 'react-router-dom';
import Form from '../components/contactpagecomponents/form';

function FormPage() {
  const params = useParams();

  return <Form name={params.name} />;
}

export default FormPage;
