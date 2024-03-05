import NavMenu from '../../components/NavMenu';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useRef } from 'react';

interface FormData {
  institucion: string;
  scan: File; // Update type to File for image upload
  quality: string;
  notes: string;
}

const Institucion = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const hiddenFileInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (data: FormData) => {
    const formData = new FormData(); // Create a new FormData object
    formData.append('institucion', data.institucion);
    formData.append('scan', data.scan, data.scan.name); // Append scan with filename

    // Handle image upload logic here (e.g., using fetch API or a library)

    console.log('Submitted data:', formData);
  };

  const handleClick = () => {
    hiddenFileInputRef.current?.click();
  };

  return (
    <>
      <NavMenu />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            <label htmlFor="institucion">Institución</label>
          </Form.Label>
          <input
            id="institucion"
            defaultValue="institución id"
            {...register('institucion', { required: true })}
          />
          {errors.institucion && <span>Este campo es obligatorio</span>}
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={4}>
            <label htmlFor="scan">Scan QR (Imagen)</label>
          </Form.Label>
          <button onClick={handleClick}>Seleccionar Imagen</button>
          <input
            id="scan"
            type="file" // Change type to file
            accept="image/*" // Accept only image files
            ref={hiddenFileInputRef}
            {...register('scan', { required: true })}
            style={{ display: 'none' }} // Hide the actual file input
          />
          {errors.scan && <span>Este campo es obligatorio</span>}
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            <label htmlFor="quality">Calidad</label>
          </Form.Label>
          <input id="quality" {...register('quality', { required: false })} />
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            <label htmlFor="notes">Notas</label>
          </Form.Label>
          <input id="notes" {...register('notes', { required: false })} />
        </Form.Group>

        <input type="submit" />
      </form>
    </>
  );
};

export default Institucion;
