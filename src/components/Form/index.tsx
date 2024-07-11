import { useState } from 'react';
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
} from '@chakra-ui/react';

export default function ContactForm() {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      console.log(formData);
      toast({
        title: 'Message sent!',
        description: 'Your email has been sent successfully.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      // Clear the form after submission
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: 'Error sending message.',
        description: 'Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Flex direction="column" alignItems="center" justifyContent="center" mt={8}>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <FormControl id="name" isRequired mb={4}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </FormControl>

        <FormControl id="email" isRequired mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
          />
        </FormControl>

        <FormControl id="message" isRequired mb={4}>
          <FormLabel>Message</FormLabel>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here"
            rows={4}
          />
        </FormControl>

        <Button colorScheme="blue" type="submit" mt={4}>
          Send
        </Button>
      </form>
    </Flex>
  );
}
