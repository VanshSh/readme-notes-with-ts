import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from '@chakra-ui/react'
import { Form } from 'react-router-dom'
import ReactSelectCreatable from 'react-select/creatable'

const NoteForm = () => {
  return (
    <Form>
      <Stack spacing={5}>
        <Flex gap={5}>
          <FormControl id='title'>
            <FormLabel>Title</FormLabel>
            <Input type='email' required />
            <FormErrorMessage>Error Message</FormErrorMessage>
          </FormControl>
          <FormControl id='tags'>
            <FormLabel>Tags</FormLabel>
            <ReactSelectCreatable isMulti />
          </FormControl>
        </Flex>
        <FormControl id='markdown'>
          <FormLabel>Body</FormLabel>
          <Textarea
            rows={15}
            width={'100%'}
            placeholder='Here is a sample placeholder'
            resize={'vertical'}
          />
        </FormControl>
        <Stack direction={'row'}>
          <Button type='submit ' colorScheme='blue'>
            Save
          </Button>
          <Button variant={'outline'} colorScheme='blue'>
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Form>
  )
}

export default NoteForm
